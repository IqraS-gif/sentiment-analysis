import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { FileText, MessageCircle, AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react';
import { mockClauseMappings, ClauseMapping as ClauseMappingType } from '@/data/mockData';
import ClauseDetailModal from './ClauseDetailModal';

const ClauseMapping = () => {
  const [selectedClause, setSelectedClause] = useState<ClauseMappingType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClauseClick = (clause: ClauseMappingType) => {
    setSelectedClause(clause);
    setIsModalOpen(true);
  };
  const getIntensityColor = (commentCount: number) => {
    if (commentCount >= 20) return 'bg-sentiment-critical text-white';
    if (commentCount >= 15) return 'bg-orange-500 text-white';
    if (commentCount >= 10) return 'bg-sentiment-neutral text-white';
    return 'bg-sentiment-supportive/20 text-sentiment-supportive';
  };

  const getOverallSentiment = (ratio: { supportive: number; critical: number; suggestive: number }) => {
    const max = Math.max(ratio.supportive, ratio.critical, ratio.suggestive);
    if (max === ratio.supportive) return { type: 'supportive', color: 'text-sentiment-supportive', icon: CheckCircle };
    if (max === ratio.critical) return { type: 'critical', color: 'text-sentiment-critical', icon: AlertTriangle };
    return { type: 'suggestive', color: 'text-sentiment-suggestive', icon: Lightbulb };
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="w-5 h-5" />
            Clause/Provision Mapping
          </CardTitle>
          <CardDescription>
            Interactive analysis showing which draft clauses received the most feedback
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Heatmap-style Grid */}
      <Card className="shadow-card border-border">
        <CardHeader>
          <CardTitle>Comment Intensity Heatmap</CardTitle>
          <CardDescription>
            Visual representation of comment volume per clause
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {mockClauseMappings.map((clause) => {
              const intensity = getIntensityColor(clause.commentCount);
              return (
                <div
                  key={clause.id}
                  className={`p-3 rounded-lg transition-all duration-200 hover:scale-105 cursor-pointer ${intensity}`}
                  onClick={() => handleClauseClick(clause)}
                >
                  <div className="text-center">
                    <div className="font-bold text-lg">{clause.clauseNumber}</div>
                    <div className="text-xs opacity-90">{clause.commentCount} comments</div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {/* Legend */}
          <div className="flex items-center justify-center gap-4 mt-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-sentiment-supportive/20 rounded"></div>
              <span className="text-muted-foreground">Low (1-9)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-sentiment-neutral rounded"></div>
              <span className="text-muted-foreground">Medium (10-14)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-orange-500 rounded"></div>
              <span className="text-muted-foreground">High (15-19)</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-sentiment-critical rounded"></div>
              <span className="text-muted-foreground">Very High (20+)</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Detailed Clause Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockClauseMappings.map((clause) => {
          const overallSentiment = getOverallSentiment(clause.sentimentRatio);
          const total = clause.sentimentRatio.supportive + clause.sentimentRatio.critical + clause.sentimentRatio.suggestive;
          
          return (
            <Card key={clause.id} className="shadow-card border-border hover:shadow-strong transition-all duration-200 cursor-pointer" onClick={() => handleClauseClick(clause)}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg flex items-center gap-2">
                      Clause {clause.clauseNumber}
                      <overallSentiment.icon className={`w-4 h-4 ${overallSentiment.color}`} />
                    </CardTitle>
                    <CardDescription>{clause.title}</CardDescription>
                  </div>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <MessageCircle className="w-3 h-3" />
                    {clause.commentCount}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Sentiment Breakdown */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-foreground">Sentiment Breakdown</h4>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3 h-3 text-sentiment-supportive" />
                        <span>Supportive</span>
                      </div>
                      <span className="text-muted-foreground">
                        {clause.sentimentRatio.supportive}% ({Math.round((clause.sentimentRatio.supportive / 100) * clause.commentCount)})
                      </span>
                    </div>
                    <Progress value={clause.sentimentRatio.supportive} className="h-2">
                      <div 
                        className="h-full bg-sentiment-supportive transition-all"
                        style={{ width: `${clause.sentimentRatio.supportive}%` }}
                      />
                    </Progress>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-3 h-3 text-sentiment-critical" />
                        <span>Critical</span>
                      </div>
                      <span className="text-muted-foreground">
                        {clause.sentimentRatio.critical}% ({Math.round((clause.sentimentRatio.critical / 100) * clause.commentCount)})
                      </span>
                    </div>
                    <Progress value={clause.sentimentRatio.critical} className="h-2">
                      <div 
                        className="h-full bg-sentiment-critical transition-all"
                        style={{ width: `${clause.sentimentRatio.critical}%` }}
                      />
                    </Progress>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Lightbulb className="w-3 h-3 text-sentiment-suggestive" />
                        <span>Suggestive</span>
                      </div>
                      <span className="text-muted-foreground">
                        {clause.sentimentRatio.suggestive}% ({Math.round((clause.sentimentRatio.suggestive / 100) * clause.commentCount)})
                      </span>
                    </div>
                    <Progress value={clause.sentimentRatio.suggestive} className="h-2">
                      <div 
                        className="h-full bg-sentiment-suggestive transition-all"
                        style={{ width: `${clause.sentimentRatio.suggestive}%` }}
                      />
                    </Progress>
                  </div>
                </div>

                {/* Overall Assessment */}
                <div className="flex items-center gap-2 pt-2 border-t border-border">
                  <span className="text-sm text-muted-foreground">Overall trend:</span>
                  <Badge className={`text-xs ${overallSentiment.color} bg-transparent border`}>
                    {overallSentiment.type}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <ClauseDetailModal 
        clause={selectedClause}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ClauseMapping;