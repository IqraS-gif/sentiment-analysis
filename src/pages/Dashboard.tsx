import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  FileText, 
  Users, 
  TrendingUp, 
  MessageCircle, 
  Download,
  BarChart3,
  PieChart,
  Filter,
  Search,
  Calendar
} from 'lucide-react';

import SentimentChart from '@/components/dashboard/SentimentChart';
import WordCloud from '@/components/dashboard/WordCloud';
import CommentsList from '@/components/dashboard/CommentsList';
import ThematicClusters from '@/components/dashboard/ThematicClusters';
import StakeholderSegmentation from '@/components/dashboard/StakeholderSegmentation';
import ClauseMapping from '@/components/dashboard/ClauseMapping';
import TrendsAnalytics from '@/components/dashboard/TrendsAnalytics';
import StatsOverview from '@/components/dashboard/StatsOverview';
import { mockStats } from '@/data/mockData';

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const handleExport = (format: 'pdf' | 'excel') => {
    // Export functionality would be implemented here
    console.log(`Exporting as ${format}`);
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-soft">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">
                  Consultation Analysis Dashboard
                </h1>
                <p className="text-sm text-muted-foreground">
                  Digital Governance Framework - Draft Policy
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" onClick={() => handleExport('pdf')}>
                <Download className="w-4 h-4 mr-2" />
                Export PDF
              </Button>
              <Button variant="outline" size="sm" onClick={() => handleExport('excel')}>
                <Download className="w-4 h-4 mr-2" />
                Export Excel
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-6">
        {/* Quick Stats */}
        <StatsOverview />

        {/* Main Content Tabs */}
        <Tabs defaultValue="overview" className="mt-6">
          <TabsList className="grid w-full grid-cols-6 bg-card">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="comments" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Comments
            </TabsTrigger>
            <TabsTrigger value="themes" className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Themes
            </TabsTrigger>
            <TabsTrigger value="stakeholders" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Stakeholders
            </TabsTrigger>
            <TabsTrigger value="clauses" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Clauses
            </TabsTrigger>
            <TabsTrigger value="trends" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Trends
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <SentimentChart />
              <WordCloud />
            </div>
          </TabsContent>

          <TabsContent value="comments" className="mt-6">
            <CommentsList />
          </TabsContent>

          <TabsContent value="themes" className="mt-6">
            <ThematicClusters />
          </TabsContent>

          <TabsContent value="stakeholders" className="mt-6">
            <StakeholderSegmentation />
          </TabsContent>

          <TabsContent value="clauses" className="mt-6">
            <ClauseMapping />
          </TabsContent>

          <TabsContent value="trends" className="mt-6">
            <TrendsAnalytics />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;