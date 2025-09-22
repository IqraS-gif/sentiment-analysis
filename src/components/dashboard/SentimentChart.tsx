import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge'; // <-- Import Badge
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { mockStats } from '@/data/mockData';
import { ThumbsUp, ThumbsDown, CheckCircle2, AlertTriangle, Scale } from 'lucide-react';


const SentimentChart = () => {
  const sentimentData = [
    { 
      name: 'Positive', 
      value: mockStats.sentimentDistribution.supportive, 
      color: 'hsl(var(--sentiment-supportive))',
      percentage: Math.round((mockStats.sentimentDistribution.supportive / mockStats.totalComments) * 100)
    },
    { 
      name: 'Negative', 
      value: mockStats.sentimentDistribution.critical, 
      color: 'hsl(var(--sentiment-critical))',
      percentage: Math.round((mockStats.sentimentDistribution.critical / mockStats.totalComments) * 100)
    },
    { 
      name: 'Neutral', 
      value: mockStats.sentimentDistribution.neutral, 
      color: 'hsl(var(--sentiment-neutral))',
      percentage: Math.round((mockStats.sentimentDistribution.neutral / mockStats.totalComments) * 100)
    }
  ];

  // --- NEW: Mock data for extreme opinions ---
  // In a real app, you would filter your full comment list to find these.
  const extremeOpinions = [
    {
      sentiment: 'Very Supportive',
      comment: 'This is the best policy proposal I have ever seen. Absolutely essential for our future!',
      user: 'John S.',
      variant: 'supportive' as const,
      icon: ThumbsUp,
    },
    {
      sentiment: 'Highly Critical',
      comment: 'The timeline is completely unrealistic and will bankrupt small businesses. A terrible idea.',
      user: 'Maria G.',
      variant: 'critical' as const,
      icon: ThumbsDown,
    }
  ];

  // --- 2. ADD THE HELPER FUNCTION to determine the verdict ---
  const getVerdict = () => {
    const { supportive, critical, neutral } = mockStats.sentimentDistribution;
    const maxSentiment = Math.max(supportive, critical, neutral);

    if (maxSentiment === supportive) {
      return {
        title: 'Positive Leaning',
        description: 'The feedback is predominantly positive, suggesting general stakeholder approval of the draft\'s core direction.',
        icon: CheckCircle2,
        colorClass: 'text-sentiment-supportive'
      };
    } else if (maxSentiment === critical) {
      return {
        title: 'Revision Recommended',
        description: 'A significant volume of critical feedback highlights key areas that require careful review and revision.',
        icon: AlertTriangle,
        colorClass: 'text-sentiment-critical'
      };
    } else {
      return {
        title: 'Mixed / Balanced',
        description: 'Feedback is varied with no single sentiment dominating. A nuanced approach to revision is recommended.',
        icon: Scale,
        colorClass: 'text-sentiment-neutral'
      };
    }
  };

  const verdict = getVerdict();
  const VerdictIcon = verdict.icon; // Component names must be capitalized for JSX

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-card">
          <p className="font-medium text-foreground">{data.name}</p>
          <p className="text-sm text-muted-foreground">
            {data.value} comments ({data.percentage}%)
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="shadow-card border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Sentiment Analysis
        </CardTitle>
        <CardDescription>
          Overall sentiment of {mockStats.totalComments} comments and highlighted opinions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* --- Aggregate Charts (Existing Code) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pie Chart */}
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={sentimentData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label={({ name, percentage }) => `${percentage}%`} labelLine={false}>
                  {sentimentData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* Bar Chart */}
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sentimentData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {sentimentData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Legend (Existing Code) */}
        <div className="flex justify-center items-center gap-6 mt-4">
          {sentimentData.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-sm text-muted-foreground">{item.name} ({item.value})</span>
            </div>
          ))}
        </div>

        {/* --- NEW: Highlighted Opinions Section --- */}
        <div className="mt-6 border-t border-border pt-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Highlighted Opinions</h3>
          <div className="space-y-4">
            {extremeOpinions.map((opinion, index) => (
              <div key={index} className="p-4 bg-muted/50 rounded-lg border border-border">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <opinion.icon className={`h-5 w-5 ${opinion.variant === 'supportive' ? 'text-sentiment-supportive' : 'text-sentiment-critical'}`} />
                    <span className="text-sm font-semibold text-foreground">{opinion.sentiment}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">{opinion.user}</span>
                </div>
                <p className="text-sm text-foreground italic">"{opinion.comment}"</p>
              </div>
            ))}
          </div>
        </div>
 <div className="mt-6 border-t border-border pt-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">Final Verdict</h3>
          <div className="bg-muted/50 p-4 rounded-lg flex items-start gap-4">
            <VerdictIcon className={`h-8 w-8 mt-1 flex-shrink-0 ${verdict.colorClass}`} />
            <div>
              <p className={`font-bold text-lg ${verdict.colorClass}`}>{verdict.title}</p>
              <p className="text-sm text-muted-foreground mt-1">{verdict.description}</p>
            </div>
          </div>
        </div>

      </CardContent>
    </Card>
  );
};

export default SentimentChart;