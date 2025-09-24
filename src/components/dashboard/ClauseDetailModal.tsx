import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, AlertTriangle, Lightbulb } from 'lucide-react';
import { ClauseMapping } from '@/data/mockData';

interface ClauseDetailModalProps {
  clause: ClauseMapping | null;
  isOpen: boolean;
  onClose: () => void;
}

const ClauseDetailModal = ({ clause, isOpen, onClose }: ClauseDetailModalProps) => {
  if (!clause) return null;

  // Updated to return "Positive", "Negative", "Neutral"
  const getOverallSentiment = (ratio: { supportive: number; critical: number; suggestive: number }) => {
    const max = Math.max(ratio.supportive, ratio.critical, ratio.suggestive);
    if (max === ratio.supportive) return { type: 'Positive', color: 'text-sentiment-supportive', icon: CheckCircle };
    if (max === ratio.critical) return { type: 'Negative', color: 'text-sentiment-critical', icon: AlertTriangle };
    return { type: 'Neutral', color: 'text-sentiment-suggestive', icon: Lightbulb };
  };

  const overallSentiment = getOverallSentiment(clause.sentimentRatio);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            Section {clause.clauseNumber} - Detailed Analysis
            <overallSentiment.icon className={`w-5 h-5 ${overallSentiment.color}`} />
          </DialogTitle>
          {/* Changed text color to black */}
          <DialogDescription className="text-black text-base">
            {clause.title}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Summary Stats */}
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-slate-100 rounded-lg">
              <div className="text-2xl font-bold text-black">{clause.commentCount}</div>
              {/* Changed text color to black */}
              <div className="text-sm text-black">Total Comments</div>
            </div>
            <div className="text-center p-4 bg-slate-100 rounded-lg">
              <div className={`text-2xl font-bold ${overallSentiment.color}`}>
                {overallSentiment.type}
              </div>
              {/* Changed text color to black */}
              <div className="text-sm text-black">Overall Sentiment</div>
            </div>
          </div>

          {/* Detailed Sentiment Breakdown */}
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-black">Sentiment Breakdown</h4>
            
            <div className="space-y-3">
              {/* Positive Section */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-sentiment-supportive" />
                    <span className="font-medium text-black">Positive</span>
                  </div>
                  {/* Changed text color to black */}
                  <span className="text-black">
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

              {/* Negative Section */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-sentiment-critical" />
                    <span className="font-medium text-black">Negative</span>
                  </div>
                   {/* Changed text color to black */}
                  <span className="text-black">
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

              {/* Neutral Section */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-sentiment-suggestive" />
                    <span className="font-medium text-black">Neutral</span>
                  </div>
                   {/* Changed text color to black */}
                  <span className="text-black">
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
          <div className="p-4 bg-slate-100 rounded-lg">
            <h4 className="text-sm font-medium text-black mb-2">Key Insights</h4>
            {/* Changed text color to black and updated logic to match new labels */}
            <ul className="text-sm text-black space-y-1">
              <li>• This section received {clause.commentCount > 15 ? 'high' : clause.commentCount > 10 ? 'moderate' : 'low'} stakeholder attention.</li>
              <li>• {overallSentiment.type === 'Positive' ? 'Generally supported by stakeholders.' : overallSentiment.type === 'Negative' ? 'Faces significant opposition.' : 'Mixed reactions with suggestions for improvement.'}</li>
              <li>• Recommended action: {overallSentiment.type === 'Negative' ? 'Review and consider revisions.' : overallSentiment.type === 'Positive' ? 'Proceed with confidence.' : 'Consider incorporating suggestions.'}</li>
            </ul>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ClauseDetailModal;