import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Users, Building, User, Heart, Briefcase } from 'lucide-react';
import { useState } from 'react';
import { mockStats } from '@/data/mockData';
import StakeholderDetailModal from './StakeholderDetailModal';

const StakeholderSegmentation = () => {
  const [selectedStakeholder, setSelectedStakeholder] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleStakeholderClick = (stakeholderType: string) => {
    setSelectedStakeholder(stakeholderType);
    setIsModalOpen(true);
  };
  const [selectedMetric, setSelectedMetric] = useState<'distribution' | 'sentiment'>('distribution');

  const stakeholderData = [
    {
      type: 'Corporate',
      count: mockStats.stakeholderBreakdown.corporate,
      icon: Building,
      sentiment: { supportive: 15, critical: 20, neutral: 10 },
      color: 'hsl(var(--primary))'
    },
    {
      type: 'NGO',
      count: mockStats.stakeholderBreakdown.ngo,
      icon: Heart,
      sentiment: { supportive: 25, critical: 4, neutral: 3 },
      color: 'hsl(var(--sentiment-supportive))'
    },
    {
      type: 'Professional',
      count: mockStats.stakeholderBreakdown.professional,
      icon: Briefcase,
      sentiment: { supportive: 8, critical: 15, neutral: 5 },
      color: 'hsl(var(--sentiment-suggestive))'
    },
    {
      type: 'Individual',
      count: mockStats.stakeholderBreakdown.individual,
      icon: User,
      sentiment: { supportive: 12, critical: 18, neutral: 8 },
      color: 'hsl(var(--sentiment-neutral))'
    }
  ];

  const distributionData = stakeholderData.map(item => ({
    name: item.type,
    value: item.count,
    color: item.color
  }));

  const sentimentComparisonData = stakeholderData.map(item => ({
    stakeholder: item.type,
    supportive: item.sentiment.supportive,
    critical: item.sentiment.critical,
    neutral: item.sentiment.neutral
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-card">
          <p className="font-medium text-foreground">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.dataKey}: {entry.value}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <Card className="shadow-card border-border">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                Stakeholder Segmentation
              </CardTitle>
              <CardDescription>
                Analysis of stakeholder participation and sentiment by category
              </CardDescription>
            </div>
            <Select value={selectedMetric} onValueChange={(value: 'distribution' | 'sentiment') => setSelectedMetric(value)}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="distribution">Distribution Analysis</SelectItem>
                <SelectItem value="sentiment">Sentiment Comparison</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardHeader>
      </Card>

      {/* Stakeholder Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stakeholderData.map((stakeholder, index) => (
          <Card key={index} className="shadow-card border-border hover:shadow-strong transition-all duration-200 cursor-pointer" onClick={() => handleStakeholderClick(stakeholder.type)}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${stakeholder.color}20` }}
                  >
                    <stakeholder.icon 
                      className="w-5 h-5" 
                      style={{ color: stakeholder.color }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{stakeholder.type}</p>
                    <p className="text-2xl font-bold text-foreground">{stakeholder.count}</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-sentiment-supportive">Supportive</span>
                  <span>{stakeholder.sentiment.supportive}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-sentiment-critical">Critical</span>
                  <span>{stakeholder.sentiment.critical}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-sentiment-neutral">Neutral</span>
                  <span>{stakeholder.sentiment.neutral}</span>
                </div>
              </div>
              
              <Button variant="outline" size="sm" className="w-full mt-3">
                View Detailed Analysis
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      {selectedMetric === 'distribution' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Pie Chart */}
          <Card className="shadow-card border-border">
            <CardHeader>
              <CardTitle>Stakeholder Distribution</CardTitle>
              <CardDescription>Participation by stakeholder type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={distributionData}
                      cx="50%"
                      cy="50%"
                      outerRadius={80}
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}`}
                    >
                      {distributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Bar Chart */}
          <Card className="shadow-card border-border">
            <CardHeader>
              <CardTitle>Participation Volume</CardTitle>
              <CardDescription>Number of comments by stakeholder type</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={distributionData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                    <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                    <YAxis stroke="hsl(var(--muted-foreground))" />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {distributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      ) : (
        <Card className="shadow-card border-border">
          <CardHeader>
            <CardTitle>Sentiment Comparison Across Stakeholders</CardTitle>
            <CardDescription>How different stakeholder groups respond to the consultation</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sentimentComparisonData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="stakeholder" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar 
                    dataKey="supportive" 
                    fill="hsl(var(--sentiment-supportive))" 
                    radius={[4, 4, 0, 0]}
                    name="Supportive"
                  />
                  <Bar 
                    dataKey="critical" 
                    fill="hsl(var(--sentiment-critical))" 
                    radius={[4, 4, 0, 0]}
                    name="Critical"
                  />
                  <Bar 
                    dataKey="neutral" 
                    fill="hsl(var(--sentiment-neutral))" 
                    radius={[4, 4, 0, 0]}
                    name="Neutral"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      )}

      <StakeholderDetailModal 
        stakeholderType={selectedStakeholder}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default StakeholderSegmentation;