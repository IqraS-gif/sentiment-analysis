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
  // We will add the two new cards to this array
  const stats = [
    {
      title: 'Total Comments',
      value: mockStats.totalComments,
      icon: MessageCircle,
      change: '+12%',
      description: 'From last consultation period'
    },

        {
      title: 'Average Sentiment',
      value: '7.2',
      icon: TrendingUp, // A good icon for averages/trends
      description: 'Positive overall',
      variant: 'supportive' as const,
      // Note: No 'change' property
    },
    // --- NEW CARD 2: KEY ISSUES ---
    {
      title: 'Key Issues',
      value: '8',
      icon: FileText, // Represents documented issues
      description: 'Requiring attention',
      variant: 'critical' as const,
      // Note: No 'change' property
    },

        // --- NEW CARD 1: AVERAGE SENTIMENT ---

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
        return 'text-green-500'; // Made color more explicit for sentiment
      case 'critical':
        return 'text-red-500';   // Made color more explicit for sentiment
      default:
        return 'text-primary';
    }
  };

  return (
    // Changed grid layout to better accommodate 6 items
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
            <div className="flex items-center justify-between mt-2 min-h-[20px]"> {/* Added min-height for alignment */}
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
              
              {/* --- IMPROVEMENT: Only show badge if 'change' exists --- */}
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