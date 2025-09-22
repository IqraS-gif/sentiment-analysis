import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { mockStats } from '@/data/mockData';

const WordCloud = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [selectedStakeholder, setSelectedStakeholder] = useState<string>('all');
  const getWordSize = (count: number, maxCount: number) => {
    const minSize = 12;
    const maxSize = 32;
    const ratio = count / maxCount;
    return Math.round(minSize + (maxSize - minSize) * ratio);
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return 'hsl(var(--sentiment-supportive))';
      case 'negative':
        return 'hsl(var(--sentiment-critical))';
      default:
        return 'hsl(var(--sentiment-neutral))';
    }
  };

  const maxCount = Math.max(...mockStats.topKeywords.map(k => k.count));

  return (
    <Card className="shadow-card border-border">
      <CardHeader>
        <CardTitle>Sentiment-Aware Word Cloud</CardTitle>
        <CardDescription>
          Most frequently mentioned terms colored by sentiment context
        </CardDescription>
        
        {/* Filters */}
        <div className="flex gap-4 mt-4">
          <Select value={selectedFilter} onValueChange={setSelectedFilter}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by section" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sections</SelectItem>
              <SelectItem value="compliance">Compliance</SelectItem>
              <SelectItem value="transparency">Transparency</SelectItem>
              <SelectItem value="implementation">Implementation</SelectItem>
              <SelectItem value="enforcement">Enforcement</SelectItem>
            </SelectContent>
          </Select>
          
          <Select value={selectedStakeholder} onValueChange={setSelectedStakeholder}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by stakeholder" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Stakeholders</SelectItem>
              <SelectItem value="corporate">Corporate</SelectItem>
              <SelectItem value="ngo">NGO</SelectItem>
              <SelectItem value="professional">Professional</SelectItem>
              <SelectItem value="individual">Individual</SelectItem>
            </SelectContent>
          </Select>
        </div>
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
        
        {/* Sentiment Legend */}
        <div className="border-t border-border pt-4 mt-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium text-foreground">Sentiment Legend</h4>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(var(--sentiment-supportive))' }}></div>
                <span>Positive Context</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(var(--sentiment-critical))' }}></div>
                <span>Negative Context</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(var(--sentiment-neutral))' }}></div>
                <span>Neutral Context</span>
              </div>
            </div>
          </div>
          
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
                  {keyword.count} mentions
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