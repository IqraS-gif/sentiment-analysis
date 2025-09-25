import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tag, MessageSquare, TrendingUp, Hash } from 'lucide-react';
import { mockThemes } from '@/data/mockData';

const ThematicClusters = () => {
  const getProgressColor = (sentiment: 'positive' | 'negative' | 'neutral') => {
    switch (sentiment) {
      case 'positive':
        return 'bg-sentiment-supportive';
      case 'negative':
        return 'bg-sentiment-critical';
      default:
        return 'bg-sentiment-neutral';
    }
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Tag className="w-5 h-5" />
            Thematic Clustering
          </CardTitle>
          <CardDescription>
            Comments grouped by key themes with sentiment breakdown
          </CardDescription>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockThemes.map((theme) => {
          const totalComments = theme.sentimentBreakdown.positive + 
                               theme.sentimentBreakdown.negative + 
                               theme.sentimentBreakdown.neutral;
          
          const positivePercentage = (theme.sentimentBreakdown.positive / totalComments) * 100;
          const negativePercentage = (theme.sentimentBreakdown.negative / totalComments) * 100;
          const neutralPercentage = (theme.sentimentBreakdown.neutral / totalComments) * 100;

          return (
            <Card key={theme.id} className="shadow-card border-border hover:shadow-strong transition-all duration-200">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{theme.name}</CardTitle>
                    <CardDescription className="mt-1">
                      {theme.description}
                    </CardDescription>
                  </div>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <MessageSquare className="w-3 h-3" />
                    {theme.commentCount}
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Sentiment Breakdown */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium text-foreground">Sentiment Distribution</h4>
                  
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-sentiment-supportive">Positive</span>
                      <span className="text-muted-foreground">
                        {theme.sentimentBreakdown.positive} ({Math.round(positivePercentage)}%)
                      </span>
                    </div>
                    <Progress value={positivePercentage} className="h-2">
                      <div 
                        className="h-full bg-sentiment-supportive transition-all"
                        style={{ width: `${positivePercentage}%` }}
                      />
                    </Progress>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-sentiment-critical">Negative</span>
                      <span className="text-muted-foreground">
                        {theme.sentimentBreakdown.negative} ({Math.round(negativePercentage)}%)
                      </span>
                    </div>
                    <Progress value={negativePercentage} className="h-2">
                      <div 
                        className="h-full bg-sentiment-critical transition-all"
                        style={{ width: `${negativePercentage}%` }}
                      />
                    </Progress>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-sentiment-neutral">Neutral</span>
                      <span className="text-muted-foreground">
                        {theme.sentimentBreakdown.neutral} ({Math.round(neutralPercentage)}%)
                      </span>
                    </div>
                    <Progress value={neutralPercentage} className="h-2">
                      <div 
                        className="h-full bg-sentiment-neutral transition-all"
                        style={{ width: `${neutralPercentage}%` }}
                      />
                    </Progress>
                  </div>
                </div>

                {/* Keywords */}
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Hash className="w-4 h-4" />
                    Key Terms
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {theme.keywords.map((keyword, index) => (
                      <Badge 
                        key={index} 
                        variant="secondary" 
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-pointer"
                      >
                        {keyword}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Overall Sentiment Indicator */}
                <div className="flex items-center gap-2 pt-2 border-t border-border">
                  <TrendingUp className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Overall trend: 
                    {positivePercentage > negativePercentage ? (
                      <span className="text-sentiment-supportive ml-1 font-medium">Positive</span>
                    ) : negativePercentage > positivePercentage ? (
                      <span className="text-sentiment-critical ml-1 font-medium">Negative</span>
                    ) : (
                      <span className="text-sentiment-neutral ml-1 font-medium">Neutral</span>
                    )}
                  </span>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default ThematicClusters;
