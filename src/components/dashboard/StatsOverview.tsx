import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MessageCircle, 
  Users, 
  TrendingUp, 
  FileText,
  ThumbsUp,
  ThumbsDown,
} from 'lucide-react';
import { mockStats } from '@/data/mockData';

const StatsOverview = () => {
  const stats = [
    {
      title: 'Total Comments',
      value: 6079,
      icon: MessageCircle,
      change: '+12%',
      description: 'From last consultation period'
    },
    {
      title: 'Positive',
      value: 2009,
      icon: ThumbsUp,
      change: '+8%',
      description: 'Positive sentiment comments',
      variant: 'positive' as const
    },
    {
      title: 'Negative',
      value:3308,
      icon: ThumbsDown,
      change: '-3%',
      description: 'Negative feedback received',
      variant: 'critical' as const
    },
    {
      title: 'Stakeholders Groups',
      value: 2,
      icon: Users,
      description: '2 main and 3 subgroups analyzed'
    }
  ];

  const getVariantClass = (variant?: string) => {
    switch (variant) {
      case 'positive':
        return 'text-green-500';
      case 'negative':
        return 'text-red-500';
      default:
        return 'text-primary';
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="shadow-card border-border animate-fade-in">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            {/* Heading color changed to dark blue */}
            <CardTitle className="text-2-xl font-bold text-blue-900">
              {stat.title}
            </CardTitle>
            <stat.icon className={`h-8 w-8 ${getVariantClass(stat.variant)}`} />
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-foreground">{stat.value}</div>
            <div className="flex items-center justify-between mt-2 min-h-[20px]">
              {/* Description color changed to black */}
              <p className="text-m text-black">
                {stat.description}
              </p>
              
              {stat.change && (
                <Badge 
                  variant={stat.change.startsWith('+') ? 'default' : 'secondary'}
                  className="text-xs"
                >
                  {stat.change}
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default StatsOverview;
