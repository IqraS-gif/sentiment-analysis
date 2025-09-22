import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { mockStats } from '@/data/mockData';

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
          Sentiment Distribution
        </CardTitle>
        <CardDescription>
          Overall sentiment analysis of {mockStats.totalComments} comments
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pie Chart */}
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={sentimentData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, percentage }) => `${name}: ${percentage}%`}
                  labelLine={false}
                >
                  {sentimentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
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
                <XAxis 
                  dataKey="name" 
                  stroke="hsl(var(--muted-foreground))"
                  fontSize={12}
                />
                <YAxis stroke="hsl(var(--muted-foreground))" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {sentimentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Legend */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
          {sentimentData.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div 
                className="w-3 h-3 rounded-full" 
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm text-muted-foreground">
                {item.name} ({item.value})
              </span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SentimentChart;