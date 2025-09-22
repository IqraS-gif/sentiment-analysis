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
        <Tabs defaultValue="interactive" className="mt-6">
          <TabsList className="grid w-full grid-cols-6 bg-card">
            <TabsTrigger value="interactive" className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4" />
              Interactive Dashboard
            </TabsTrigger>
            <TabsTrigger value="sentiment" className="flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              Sentiment Analysis
            </TabsTrigger>
            <TabsTrigger value="wordcloud" className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4" />
              Word Cloud
            </TabsTrigger>
            <TabsTrigger value="summary" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Summary Generation
            </TabsTrigger>
            <TabsTrigger value="comparative" className="flex items-center gap-2">
              <PieChart className="w-4 h-4" />
              Comparative Analysis
            </TabsTrigger>
            <TabsTrigger value="stakeholders" className="flex items-center gap-2">
              <Users className="w-4 h-4" />
              Stakeholder Segmentation
            </TabsTrigger>
          </TabsList>

         <TabsContent value="interactive" className="mt-6">
  {/* 
    This wrapper creates a centered column for your content.
    - `max-w-5xl`: Prevents the content from getting too wide on large screens.
    - `mx-auto`: This is the key part that centers the block horizontally.
  */}
  <div className="max-w-5xl mx-auto">

    {/* Move the button outside of the old grid structure and place it on top */}
    <div className="flex justify-end mb-4">
      <Button onClick={() => handleExport('pdf')} className="flex items-center gap-2">
        <Download className="w-4 h-4" />
        Export PDF
      </Button>
    </div>

    {/* The SentimentChart is now the only item here */}
    {/* <div className="mb-6">
      <SentimentChart />
    </div> */}

    {/* The ClauseMapping component will also be centered within this container */}
    <ClauseMapping />

  </div>
</TabsContent>

          <TabsContent value="sentiment" className="mt-6">
            <SentimentChart />
          </TabsContent>

          <TabsContent value="wordcloud" className="mt-6">
            <WordCloud />
          </TabsContent>

          <TabsContent value="summary" className="mt-6">
            <div className="text-center py-8 text-muted-foreground">
              Summary Generation feature coming soon...
            </div>
          </TabsContent>

          <TabsContent value="comparative" className="mt-6">
            <TrendsAnalytics />
          </TabsContent>

          <TabsContent value="stakeholders" className="mt-6">
            <StakeholderSegmentation />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;