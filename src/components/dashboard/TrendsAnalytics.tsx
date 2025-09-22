import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { TrendingUp, TrendingDown, Calendar, AlertCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { mockTrendData } from '@/data/mockData';

const TrendsAnalytics = () => {
  // Calculate trend changes
  const calculateTrend = (data: any[], key: string) => {
    if (data.length < 2) return 0;
    const latest = data[data.length - 1][key];
    const previous = data[data.length - 2][key];
    return ((latest - previous) / previous) * 100;
  };

  const supportiveTrend = calculateTrend(mockTrendData, 'supportive');
  const criticalTrend = calculateTrend(mockTrendData, 'critical');
  const neutralTrend = calculateTrend(mockTrendData, 'neutral');

  // Detect significant spikes
  const detectSpikes = (data: any[]) => {
    const spikes = [];
    for (let i = 1; i < data.length; i++) {
      const current = data[i].supportive + data[i].critical + data[i].neutral;
      const previous = data[i - 1].supportive + data[i - 1].critical + data[i - 1].neutral;
      const change = ((current - previous) / previous) * 100;
      
      if (change > 30) {
        spikes.push({
          date: data[i].date,
          change: Math.round(change),
          type: 'increase'
        });
      } else if (change < -20) {
        spikes.push({
          date: data[i].date,
          change: Math.round(Math.abs(change)),
          type: 'decrease'
        });
      }
    }
    return spikes;
  };

  const spikes = detectSpikes(mockTrendData);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const total = payload.reduce((sum: number, entry: any) => sum + entry.value, 0);
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-card">
          <p className="font-medium text-foreground mb-2">{new Date(label).toLocaleDateString()}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.dataKey}: {entry.value} comments
            </p>
          ))}
          <div className="border-t border-border mt-2 pt-2">
            <p className="text-sm font-medium text-foreground">Total: {total} comments</p>
          </div>
        </div>
      );
    }
    return null;
  };

  const getTrendIcon = (trend: number) => {
    return trend > 0 ? TrendingUp : TrendingDown;
  };

  const getTrendColor = (trend: number) => {
    if (trend > 10) return 'text-sentiment-supportive';
    if (trend < -10) return 'text-sentiment-critical';
    return 'text-muted-foreground';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="shadow-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5" />
            Trends & Analytics
          </CardTitle>
          <CardDescription>
            Time-based sentiment trends and activity spikes during the consultation period
          </CardDescription>
        </CardHeader>
      </Card>

      {/* Trend Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: 'Supportive Comments', trend: supportiveTrend, color: 'sentiment-supportive' },
          { label: 'Critical Comments', trend: criticalTrend, color: 'sentiment-critical' },
          { label: 'Neutral Comments', trend: neutralTrend, color: 'sentiment-neutral' }
        ].map((item, index) => {
          const TrendIcon = getTrendIcon(item.trend);
          return (
            <Card key={index} className="shadow-card border-border">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <TrendIcon className={`w-4 h-4 ${getTrendColor(item.trend)}`} />
                      <span className={`text-lg font-bold ${getTrendColor(item.trend)}`}>
                        {item.trend > 0 ? '+' : ''}{item.trend.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                  <div 
                    className="w-3 h-12 rounded-full"
                    style={{ backgroundColor: `hsl(var(--${item.color}))` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Compared to previous period
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Time Series Chart */}
      <Card className="shadow-card border-border">
        <CardHeader>
          <CardTitle>Sentiment Trends Over Time</CardTitle>
          <CardDescription>
            Daily comment volume by sentiment category
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="date" 
                  stroke="hsl(var(--muted-foreground))"
                  tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip content={<CustomTooltip />} />
                <Area
                  type="monotone"
                  dataKey="supportive"
                  stackId="1"
                  stroke="hsl(var(--sentiment-supportive))"
                  fill="hsl(var(--sentiment-supportive))"
                  fillOpacity={0.8}
                  name="Supportive"
                />
                <Area
                  type="monotone"
                  dataKey="critical"
                  stackId="1"
                  stroke="hsl(var(--sentiment-critical))"
                  fill="hsl(var(--sentiment-critical))"
                  fillOpacity={0.8}
                  name="Critical"
                />
                <Area
                  type="monotone"
                  dataKey="neutral"
                  stackId="1"
                  stroke="hsl(var(--sentiment-neutral))"
                  fill="hsl(var(--sentiment-neutral))"
                  fillOpacity={0.8}
                  name="Neutral"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Line Chart for Detailed View */}
      <Card className="shadow-card border-border">
        <CardHeader>
          <CardTitle>Individual Sentiment Lines</CardTitle>
          <CardDescription>
            Detailed trend lines for each sentiment category
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockTrendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="date" 
                  stroke="hsl(var(--muted-foreground))"
                  tickFormatter={(value) => new Date(value).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip content={<CustomTooltip />} />
                <Line
                  type="monotone"
                  dataKey="supportive"
                  stroke="hsl(var(--sentiment-supportive))"
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--sentiment-supportive))', strokeWidth: 2, r: 4 }}
                  name="Supportive"
                />
                <Line
                  type="monotone"
                  dataKey="critical"
                  stroke="hsl(var(--sentiment-critical))"
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--sentiment-critical))', strokeWidth: 2, r: 4 }}
                  name="Critical"
                />
                <Line
                  type="monotone"
                  dataKey="neutral"
                  stroke="hsl(var(--sentiment-neutral))"
                  strokeWidth={3}
                  dot={{ fill: 'hsl(var(--sentiment-neutral))', strokeWidth: 2, r: 4 }}
                  name="Neutral"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      {/* Activity Spikes Alert */}
      {spikes.length > 0 && (
        <Card className="shadow-card border-border border-l-4 border-l-orange-500">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-orange-500" />
              Activity Spikes Detected
            </CardTitle>
            <CardDescription>
              Significant changes in comment volume that may require attention
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {spikes.map((spike, index) => (
                <div key={index} className="flex items-center gap-4 p-3 bg-orange-50 dark:bg-orange-950/20 rounded-lg">
                  <Calendar className="w-4 h-4 text-orange-500" />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">
                      {new Date(spike.date).toLocaleDateString('en-US', { 
                        weekday: 'long',
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {spike.change}% {spike.type} in comment volume
                    </p>
                  </div>
                  <Badge variant={spike.type === 'increase' ? 'default' : 'secondary'}>
                    {spike.type === 'increase' ? 'Spike' : 'Drop'}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TrendsAnalytics;