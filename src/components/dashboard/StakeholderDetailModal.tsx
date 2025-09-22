import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, MessageCircle, TrendingUp, FileText } from 'lucide-react';
import { mockComments, mockClauseMappings } from '@/data/mockData';

interface StakeholderDetailModalProps {
  stakeholderType: string | null;
  isOpen: boolean;
  onClose: () => void;
}

const StakeholderDetailModal = ({ stakeholderType, isOpen, onClose }: StakeholderDetailModalProps) => {
  if (!stakeholderType) return null;

  const stakeholderComments = mockComments.filter(
    comment => comment.stakeholderType.toLowerCase() === stakeholderType.toLowerCase()
  );

  const sentimentBreakdown = stakeholderComments.reduce((acc, comment) => {
    const sentiment = comment.sentiment === 'supportive' ? 'positive' : 
                     comment.sentiment === 'critical' ? 'negative' : 'neutral';
    acc[sentiment] = (acc[sentiment] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const clauseEngagement = mockClauseMappings.map(clause => {
    const relevantComments = stakeholderComments.filter(
      comment => comment.clauseMapping.includes(clause.clauseNumber)
    );
    return {
      ...clause,
      stakeholderComments: relevantComments.length
    };
  }).sort((a, b) => b.stakeholderComments - a.stakeholderComments);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Users className="w-5 h-5" />
            {stakeholderType} Stakeholder Analysis
          </DialogTitle>
          <DialogDescription>
            Detailed breakdown of {stakeholderType.toLowerCase()} stakeholder engagement and sentiment
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Overview Stats */}
          <div className="grid grid-cols-3 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Comments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stakeholderComments.length}</div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Most Active Theme</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold">
                  {stakeholderComments.reduce((acc, comment) => {
                    acc[comment.theme] = (acc[comment.theme] || 0) + 1;
                    return acc;
                  }, {} as Record<string, number>).toString() !== '[object Object]' && 
                   Object.entries(stakeholderComments.reduce((acc, comment) => {
                     acc[comment.theme] = (acc[comment.theme] || 0) + 1;
                     return acc;
                   }, {} as Record<string, number>))
                   .sort(([,a], [,b]) => b - a)[0]?.[0] || 'N/A'}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Dominant Sentiment</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-lg font-semibold capitalize">
                  {Object.entries(sentimentBreakdown)
                    .sort(([,a], [,b]) => b - a)[0]?.[0] || 'N/A'}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sentiment Analysis */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                Sentiment Distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {Object.entries(sentimentBreakdown).map(([sentiment, count]) => {
                const percentage = Math.round((count / stakeholderComments.length) * 100);
                const color = sentiment === 'positive' ? 'bg-sentiment-supportive' :
                             sentiment === 'negative' ? 'bg-sentiment-critical' : 'bg-sentiment-neutral';
                
                return (
                  <div key={sentiment} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="capitalize">{sentiment}</span>
                      <span className="text-muted-foreground">{count} comments ({percentage}%)</span>
                    </div>
                    <Progress value={percentage} className="h-2">
                      <div 
                        className={`h-full ${color} transition-all rounded-full`}
                        style={{ width: `${percentage}%` }}
                      />
                    </Progress>
                  </div>
                );
              })}
            </CardContent>
          </Card>

          {/* Clause Engagement */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                Clause Engagement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {clauseEngagement.slice(0, 5).map(clause => (
                  <div key={clause.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-medium">Clause {clause.clauseNumber}</div>
                      <div className="text-sm text-muted-foreground">{clause.title}</div>
                    </div>
                    <Badge variant="outline" className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" />
                      {clause.stakeholderComments}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Comments */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4" />
                Recent Comments
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {stakeholderComments.slice(0, 3).map(comment => (
                  <div key={comment.id} className="p-4 border border-border rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <Badge variant={
                          comment.sentiment === 'supportive' ? 'default' :
                          comment.sentiment === 'critical' ? 'destructive' : 'secondary'
                        }>
                          {comment.sentiment}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{comment.theme}</span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {new Date(comment.timestamp).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm font-medium mb-1">{comment.summary}</p>
                    <p className="text-xs text-muted-foreground line-clamp-2">{comment.content}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StakeholderDetailModal;