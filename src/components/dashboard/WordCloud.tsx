import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { mockStats } from '@/data/mockData';

const WordCloud = () => {
  const getWordSize = (count: number, maxCount: number) => {
    const minSize = 12;
    const maxSize = 32;
    const ratio = count / maxCount;
    return Math.round(minSize + (maxSize - minSize) * ratio);
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return 'hsl(var(--sentiment-positive))';
      case 'negative':
        return 'hsl(var(--sentiment-negative))';
      default:
        return 'hsl(var(--muted-foreground))';
    }
  };

  const maxCount = Math.max(...mockStats.topKeywords.map(k => k.count));

  return (
    <Card className="shadow-card border-border">
      <CardHeader>
        <CardTitle>Top Keywords</CardTitle>
        <CardDescription>
          Most frequently mentioned terms in stakeholder comments
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-4 items-center justify-center p-6 min-h-64">
          {mockStats.topKeywords.map((keyword, index) => (
            <span
              key={index}
              className="font-medium transition-all duration-200 hover:scale-110 cursor-pointer"
              style={{
                fontSize: `${getWordSize(keyword.count, maxCount)}px`,
                color: getSentimentColor(keyword.sentiment),
                opacity: 0.7 + (keyword.count / maxCount) * 0.3
              }}
              title={`${keyword.word}: ${keyword.count} mentions`}
            >
              {keyword.word}
            </span>
          ))}
        </div>
        
        {/* Keyword Legend */}
        <div className="border-t border-border pt-4 mt-4">
          <h4 className="text-sm font-medium text-foreground mb-3">Keyword Breakdown</h4>
          <div className="grid grid-cols-2 gap-2">
            {mockStats.topKeywords.slice(0, 6).map((keyword, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <span 
                  className="font-medium"
                  style={{ color: getSentimentColor(keyword.sentiment) }}
                >
                  {keyword.word}
                </span>
                <span className="text-muted-foreground">
                  {keyword.count}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WordCloud;