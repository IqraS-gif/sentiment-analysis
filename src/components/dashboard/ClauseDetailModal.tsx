import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, AlertTriangle, Lightbulb, MessageCircle } from 'lucide-react';
import { ClauseMapping } from '@/data/mockData';

interface ClauseDetailModalProps {
  clause: ClauseMapping | null;
  isOpen: boolean;
  onClose: () => void;
}

const ClauseDetailModal = ({ clause, isOpen, onClose }: ClauseDetailModalProps) => {
  if (!clause) return null;

  const getOverallSentiment = (ratio: { supportive: number; critical: number; suggestive: number }) => {
    const max = Math.max(ratio.supportive, ratio.critical, ratio.suggestive);
    if (max === ratio.supportive) return { type: 'supportive', color: 'text-sentiment-supportive', icon: CheckCircle };
    if (max === ratio.critical) return { type: 'critical', color: 'text-sentiment-critical', icon: AlertTriangle };
    return { type: 'suggestive', color: 'text-sentiment-suggestive', icon: Lightbulb };
  };

  const overallSentiment = getOverallSentiment(clause.sentimentRatio);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            Clause {clause.clauseNumber} - Detailed Analysis
            <overallSentiment.icon className={`w-5 h-5 ${overallSentiment.color}`} />
          </DialogTitle>
          <DialogDescription>
            {clause.title}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Summary Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className="text-2xl font-bold text-foreground">{clause.commentCount}</div>
              <div className="text-sm text-muted-foreground">Total Comments</div>
            </div>
            <div className="text-center p-4 bg-muted/30 rounded-lg">
              <div className={`text-2xl font-bold ${overallSentiment.color}`}>
                {overallSentiment.type.charAt(0).toUpperCase() + overallSentiment.type.slice(1)}
              </div>
              <div className="text-sm text-muted-foreground">Overall Sentiment</div>
            </div>
          </div>

          {/* Detailed Sentiment Breakdown */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-foreground">Sentiment Breakdown</h4>
            
            <div className="space-y-3">
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-sentiment-supportive" />
                    <span>Supportive</span>
                  </div>
                  <span className="text-muted-foreground">
                    {clause.sentimentRatio.supportive}% ({Math.round((clause.sentimentRatio.supportive / 100) * clause.commentCount)} comments)
                  </span>
                </div>
                <Progress value={clause.sentimentRatio.supportive} className="h-3">
                  <div 
                    className="h-full bg-sentiment-supportive transition-all rounded-full"
                    style={{ width: `${clause.sentimentRatio.supportive}%` }}
                  />
                </Progress>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-sentiment-critical" />
                    <span>Critical</span>
                  </div>
                  <span className="text-muted-foreground">
                    {clause.sentimentRatio.critical}% ({Math.round((clause.sentimentRatio.critical / 100) * clause.commentCount)} comments)
                  </span>
                </div>
                <Progress value={clause.sentimentRatio.critical} className="h-3">
                  <div 
                    className="h-full bg-sentiment-critical transition-all rounded-full"
                    style={{ width: `${clause.sentimentRatio.critical}%` }}
                  />
                </Progress>
              </div>

              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-sentiment-suggestive" />
                    <span>Suggestive</span>
                  </div>
                  <span className="text-muted-foreground">
                    {clause.sentimentRatio.suggestive}% ({Math.round((clause.sentimentRatio.suggestive / 100) * clause.commentCount)} comments)
                  </span>
                </div>
                <Progress value={clause.sentimentRatio.suggestive} className="h-3">
                  <div 
                    className="h-full bg-sentiment-suggestive transition-all rounded-full"
                    style={{ width: `${clause.sentimentRatio.suggestive}%` }}
                  />
                </Progress>
              </div>
            </div>
          </div>

          {/* Key Insights */}
          <div className="p-4 bg-muted/20 rounded-lg">
            <h4 className="text-sm font-medium text-foreground mb-2">Key Insights</h4>
            <ul className="text-sm text-muted-foreground space-y-1">
              <li>• This clause received {clause.commentCount > 15 ? 'high' : clause.commentCount > 10 ? 'moderate' : 'low'} stakeholder attention</li>
              <li>• {overallSentiment.type === 'supportive' ? 'Generally supported by stakeholders' : overallSentiment.type === 'critical' ? 'Faces significant opposition' : 'Mixed reactions with suggestions for improvement'}</li>
              <li>• Recommended action: {overallSentiment.type === 'critical' ? 'Review and consider revisions' : overallSentiment.type === 'supportive' ? 'Proceed with confidence' : 'Consider incorporating suggestions'}</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ClauseDetailModal;