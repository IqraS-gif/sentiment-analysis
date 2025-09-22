import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MessageCircle, 
  Users, 
  TrendingUp, 
  FileText,
  ThumbsUp,
  ThumbsDown,
  Minus
} from 'lucide-react';
import { mockStats } from '@/data/mockData';

const StatsOverview = () => {
  const stats = [
    {
      title: 'Total Comments',
      value: mockStats.totalComments,
      icon: MessageCircle,
      change: '+12%',
      description: 'From last consultation period'
    },
    {
      title: 'Supportive',
      value: mockStats.sentimentDistribution.supportive,
      icon: ThumbsUp,
      change: '+8%',
      description: 'Positive sentiment comments',
      variant: 'supportive' as const
    },
    {
      title: 'Critical',
      value: mockStats.sentimentDistribution.critical,
      icon: ThumbsDown,
      change: '-3%',
      description: 'Critical feedback received',
      variant: 'critical' as const
    },
    {
      title: 'Stakeholders',
      value: Object.values(mockStats.stakeholderBreakdown).reduce((a, b) => a + b, 0),
      icon: Users,
      change: '+15%',
      description: 'Active participants'
    }
  ];

  const getVariantClass = (variant?: string) => {
    switch (variant) {
      case 'supportive':
        return 'text-sentiment-supportive';
      case 'critical':
        return 'text-sentiment-critical';
      default:
        return 'text-primary';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="shadow-card border-border animate-fade-in">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-4 w-4 ${getVariantClass(stat.variant)}`} />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-foreground">{stat.value}</div>
            <div className="flex items-center justify-between mt-2">
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
              <Badge 
                variant={stat.change.startsWith('+') ? 'default' : 'secondary'}
                className="text-xs"
              >
                {stat.change}
              </Badge>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsOverview;