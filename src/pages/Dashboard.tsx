// import { useState } from 'react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Button } from '@/components/ui/button';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import { Badge } from '@/components/ui/badge';
// import { 
//   FileText, 
//   Users, 
//   TrendingUp, 
//   MessageCircle, 
//   Download,
//   BarChart3,
//   PieChart,
//   Filter,
//   Search,
//   Calendar
// } from 'lucide-react';

// import SentimentChart from '@/components/dashboard/SentimentChart';
// import WordCloud from '@/components/dashboard/WordCloud';
// import CommentsList from '@/components/dashboard/CommentsList';
// import ThematicClusters from '@/components/dashboard/ThematicClusters';
// import StakeholderSegmentation from '@/components/dashboard/StakeholderSegmentation';
// import ClauseMapping from '@/components/dashboard/ClauseMapping';
// import TrendsAnalytics from '@/components/dashboard/TrendsAnalytics';
// import StatsOverview from '@/components/dashboard/StatsOverview';
// import { mockStats } from '@/data/mockData';
// import SummaryGeneration from '@/components/dashboard/SummaryGeneration';

// const Dashboard = () => {
//   const [activeFilter, setActiveFilter] = useState<string>('all');

//   const handleExport = (format: 'pdf' | 'excel') => {
//     // Export functionality would be implemented here
//     console.log(`Exporting as ${format}`);
//   };

//   return (
//     <div className="min-h-screen bg-muted/30">
//       {/* Header */}
//       <header className="bg-card border-b border-border shadow-soft">
//         <div className="container mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-3">
//               <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
//                 <FileText className="w-6 h-6 text-primary-foreground" />
//               </div>
//               <div>
//                 <h1 className="text-xl font-bold text-foreground">
//                   MCA Insight
//                 </h1>
//                 <p className="text-base text-black">
//                   AI-Powered Sentiment Analysis for eConsultation
//                 </p>
//               </div>
//             </div>
            
//             <div className="flex items-center gap-3">
//               <Button variant="outline" size="sm" onClick={() => handleExport('pdf')}>
//                 <Download className="w-4 h-4 mr-2" />
//                 Export PDF
//               </Button>
//               <Button variant="outline" size="sm" onClick={() => handleExport('excel')}>
//                 <Download className="w-4 h-4 mr-2" />
//                 Export Excel
//               </Button>
//             </div>
//           </div>
//         </div>
//       </header>

//       <div className="container mx-auto px-6 py-6">
//         {/* Quick Stats */}
//         <StatsOverview />

//         {/* Main Content Tabs */}
//         <Tabs defaultValue="interactive" className="mt-6">
//           <TabsList className="grid w-full grid-cols-6 bg-card">
//             <TabsTrigger value="interactive" className="flex items-center gap-2">
//               <BarChart3 className="w-4 h-4" />
//               Interactive Dashboard
//             </TabsTrigger>
//             <TabsTrigger value="sentiment" className="flex items-center gap-2">
//               <TrendingUp className="w-4 h-4" />
//               Sentiment Analysis
//             </TabsTrigger>
//             <TabsTrigger value="wordcloud" className="flex items-center gap-2">
//               <MessageCircle className="w-4 h-4" />
//               Word Cloud
//             </TabsTrigger>
//             <TabsTrigger value="summary" className="flex items-center gap-2">
//               <FileText className="w-4 h-4" />
//               Summary Generation
//             </TabsTrigger>
//             <TabsTrigger value="comparative" className="flex items-center gap-2">
//               <PieChart className="w-4 h-4" />
//               Comparative Analysis
//             </TabsTrigger>
//             <TabsTrigger value="stakeholders" className="flex items-center gap-2">
//               <Users className="w-4 h-4" />
//               Stakeholder Segmentation
//             </TabsTrigger>
//           </TabsList>

//          <TabsContent value="interactive" className="mt-6">
//   {/* 
//     This wrapper creates a centered column for your content.
//     - `max-w-5xl`: Prevents the content from getting too wide on large screens.
//     - `mx-auto`: This is the key part that centers the block horizontally.
//   */}
//   <div className="max-w-5xl mx-auto">

//     {/* Move the button outside of the old grid structure and place it on top */}
//     <div className="flex justify-end mb-4">
//       <Button onClick={() => handleExport('pdf')} className="flex items-center gap-2">
//         <Download className="w-4 h-4" />
//         Export PDF
//       </Button>
//     </div>

//     {/* The SentimentChart is now the only item here */}
//     {/* <div className="mb-6">
//       <SentimentChart />
//     </div> */}

//     {/* The ClauseMapping component will also be centered within this container */}
//     <ClauseMapping />

//   </div>
// </TabsContent>

//           <TabsContent value="sentiment" className="mt-6">
//             <SentimentChart />
//           </TabsContent>

//           <TabsContent value="wordcloud" className="mt-6">
//             <WordCloud />
//           </TabsContent>

//           <TabsContent value="summary" className="mt-6">
//             <div className="w-full max-w-4xl mx-auto">
//               <SummaryGeneration />
//             </div>
//           </TabsContent>

//           <TabsContent value="comparative" className="mt-6">
//             <TrendsAnalytics />
//           </TabsContent>

//           <TabsContent value="stakeholders" className="mt-6">
//             <StakeholderSegmentation />
//           </TabsContent>
//         </Tabs>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;


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
  Calendar,
  ArrowBigLeftDash
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import SentimentChart from '@/components/dashboard/SentimentChart';
import WordCloud from '@/components/dashboard/WordCloud';
import CommentsList from '@/components/dashboard/CommentsList';
import ThematicClusters from '@/components/dashboard/ThematicClusters';
import StakeholderSegmentation from '@/components/dashboard/StakeholderSegmentation';
import ClauseMapping from '@/components/dashboard/ClauseMapping';
import TrendsAnalytics from '@/components/dashboard/TrendsAnalytics';
import StatsOverview from '@/components/dashboard/StatsOverview';
import { mockStats } from '@/data/mockData';
import SummaryGeneration from '@/components/dashboard/SummaryGeneration';

const Dashboard = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const navigate = useNavigate();

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
                  MCA Insight
                </h1>
                <p className="text-base text-black">
                  AI-Powered Sentiment Analysis for eConsultation
                </p>
              </div>
            </div>
            
            <div className="flex items-center gap-3 flex-wrap justify-end">
<Button
  variant="outline"
  size="lg"
  className="bg-blue-600 text-white hover:bg-blue-500  hover:text-slate-950 text-lg font-semibold"
  onClick={async () => {
    try {
      const selectedDraftId = localStorage.getItem('selectedDraftId');
      const selectedDraftTitle = localStorage.getItem('selectedDraftTitle') || 'Draft Report';

      // Try to download a static PDF matching the draft title if available
      // Helper: try to download a static PDF by name from public/
      const tryDownload = async (name: string) => {
        const path = `/${encodeURI(name)}`;
        const res = await fetch(path, { method: 'HEAD' });
        const ct = res.headers.get('content-type') || '';
        if (res.ok && ct.includes('application/pdf')) {
          const a = document.createElement('a');
          a.href = path;
          a.download = name;
          a.click();
          return true;
        }
        return false;
      };

      // Use EXACT same static download approach for both drafts
      if (selectedDraftId === '2') {
        const exactName = 'Indian Multi-Disciplinary Partnership (MDP) Firms Consultation 2025.pdf';
        if (await tryDownload(exactName)) return;
        if (await tryDownload(`${selectedDraftTitle} report.pdf`)) return;
        alert('Static PDF for Draft 2 not found. Please add it to public/ and try again.');
        return;
      }

      // Draft 1 (Environmental) static
      if (await tryDownload(`${selectedDraftTitle} report.pdf`)) return;
      if (await tryDownload('Environmental Policy Draft 2024 report.pdf')) return;
      alert('Static PDF not found. Please add it to public/ and try again.');
      return;
    } catch (e) {
      console.error(e);
    }
  }}
>
  <Download className="w-8 h-8 mr-2" />
  Export PDF
</Button>

            <Button
  variant="outline"
  size="lg"
  className="bg-blue-600 text-white hover:bg-blue-500  hover:text-slate-950 text-lg font-semibold"
  onClick={() => navigate('/draft-viewer')}
>
  <span className="flex items-center">
    <ArrowBigLeftDash className="w-8 h-8 mr-2" />
    Back to draft viewer
  </span>
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
          <TabsList className="flex w-full flex-wrap md:grid md:grid-cols-6 bg-card overflow-x-auto gap-2">
            <TabsTrigger value="interactive" className="flex items-start text-base gap-2">
              <BarChart3 className="w-6 h-6 flex-shrink-0" />
              Interactive Dashboard
            </TabsTrigger>
            <TabsTrigger value="sentiment" className="flex items-start text-base gap-2">
              <TrendingUp className="w-6 h-6 flex-shrink-0" />
              Sentiment Analysis
            </TabsTrigger>
            <TabsTrigger value="wordcloud" className="flex items-start text-base gap-2">
              <MessageCircle className="w-6 h-6 flex-shrink-0" />
              Word Cloud
            </TabsTrigger>
            <TabsTrigger value="summary" className="flex items-start text-base gap-1">
              <FileText className="w-6 h-6 flex-shrink-0" />
              Summary Generation
            </TabsTrigger>
            <TabsTrigger value="comparative" className="flex items-start text-base gap-1">
              <PieChart className="w-6 h-6 flex-shrink-0" />
              Comparative Analysis
            </TabsTrigger>
            <TabsTrigger value="stakeholders" className="flex items-start text-base gap-1">
              <Users className="w-6 h-6 flex-shrink-0" />
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
              <SummaryGeneration />
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
