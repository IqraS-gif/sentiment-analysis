// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// // import { Badge } from '@/components/ui/badge';
// // import { Button } from '@/components/ui/button';
// // import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';
// // import { Users, Building, User, Briefcase, GraduationCap, Factory, Store } from 'lucide-react';
// // import { useState } from 'react';
// // import { mockStats } from '@/data/MockDataStakeholder';
// // import StakeholderDetailModal from './StakeholderDetailModal';

// // const StakeholderSegmentation = () => {
// //   const [selectedStakeholder, setSelectedStakeholder] = useState<string | null>(null);
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [selectedMetric, setSelectedMetric] = useState<'distribution' | 'sentiment'>('distribution');

// //   const handleStakeholderClick = (stakeholderType: string) => {
// //     setSelectedStakeholder(stakeholderType);
// //     setIsModalOpen(true);
// //   };

// //   const stakeholderData = [
// //     // Individual Subtypes
// //     {
// //       type: 'Student',
// //       category: 'Individual',
// //       count: mockStats.stakeholderBreakdown.student,
// //       icon: GraduationCap,
// //       sentiment: { supportive: 35, critical: 60, neutral: 5 },
// //       color: 'hsl(var(--individual-student))',
// //       bgGradient: 'from-individual-student/20 to-individual-student/10'
// //     },
// //     {
// //       type: 'Businessperson',
// //       category: 'Individual',
// //       count: mockStats.stakeholderBreakdown.businessperson,
// //       icon: Briefcase,
// //       sentiment: { supportive: 60, critical: 30, neutral: 30 },
// //       color: 'hsl(var(--individual-business))',
// //       bgGradient: 'from-individual-business/20 to-individual-business/10'
// //     },
// //     {
// //       type: 'Professional',
// //       category: 'Individual',
// //       count: mockStats.stakeholderBreakdown.professionalIndividual,
// //       icon: User,
// //       sentiment: { supportive: 80, critical: 50, neutral: 70 },
// //       color: 'hsl(var(--individual-professional))',
// //       bgGradient: 'from-individual-professional/20 to-individual-professional/10'
// //     },
// //     // Organization Subtypes
// //     {
// //       type: 'Extractive Industries',
// //       category: 'Organization',
// //       count: mockStats.stakeholderBreakdown.extractiveIndustries,
// //       icon: Factory,
// //       sentiment: { supportive: 30, critical: 40, neutral: 40 },
// //       color: 'hsl(var(--org-extractive))',
// //       bgGradient: 'from-org-extractive/20 to-org-extractive/10'
// //     },
// //     {
// //       type: 'Manufacturing',
// //       category: 'Organization',
// //       count: mockStats.stakeholderBreakdown.manufacturing,
// //       icon: Building,
// //       sentiment: { supportive: 40, critical: 70, neutral: 30 },
// //       color: 'hsl(var(--org-manufacturing))',
// //       bgGradient: 'from-org-manufacturing/20 to-org-manufacturing/10'
// //     },
// //     {
// //       type: 'Service Economy',
// //       category: 'Organization',
// //       count: mockStats.stakeholderBreakdown.serviceEconomy,
// //       icon: Store,
// //       sentiment: { supportive: 60, critical: 40, neutral: 29 },
// //       color: 'hsl(var(--org-service))',
// //       bgGradient: 'from-org-service/20 to-org-service/10'
// //     }
// //   ];

// //   const distributionData = stakeholderData.map(item => ({
// //     name: item.type,
// //     value: item.count,
// //     fill: item.color,
// //   }));

// //   const sentimentComparisonData = stakeholderData.map(item => ({
// //     name: item.type,
// //     Supportive: item.sentiment.supportive,
// //     Critical: item.sentiment.critical,
// //     Neutral: item.sentiment.neutral,
// //   }));

// //   const CustomTooltip = ({ active, payload, label }: any) => {
// //     if (active && payload && payload.length) {
// //       return (
// //         <div className="bg-card border border-border rounded-lg p-3 shadow-card">
// //           <p className="font-medium text-foreground">{label}</p>
// //           {payload.map((entry: any, index: number) => (
// //             <p key={`item-${index}`} className="text-sm" style={{ color: entry.color }}>
// //               {entry.name}: {entry.value}
// //             </p>
// //           ))}
// //         </div>
// //       );
// //     }
// //     return null;
// //   };

// //   return (
// //     <div className="space-y-6">
// //       {/* Header Card */}
// //       <Card className="shadow-card border-border">
// //         <CardHeader>
// //           <div className="flex items-center justify-between">
// //             <div>
// //               <CardTitle className="flex items-center gap-2">
// //                 <Users className="w-5 h-5" />
// //                 Stakeholder Segmentation
// //               </CardTitle>
// //               <CardDescription>
// //                 Analysis of stakeholder participation and sentiment by category
// //               </CardDescription>
// //             </div>
// //             <Select value={selectedMetric} onValueChange={(value: 'distribution' | 'sentiment') => setSelectedMetric(value)}>
// //               <SelectTrigger className="w-48">
// //                 <SelectValue />
// //               </SelectTrigger>
// //               <SelectContent>
// //                 <SelectItem value="distribution">Distribution Analysis</SelectItem>
// //                 <SelectItem value="sentiment">Sentiment Comparison</SelectItem>
// //               </SelectContent>
// //             </Select>
// //           </div>
// //         </CardHeader>
// //       </Card>

// //       {/* Stakeholder Overview Cards */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
// //         {stakeholderData.map((stakeholder) => (
// //           <Card key={stakeholder.type} className={`shadow-card border-border hover:shadow-strong transition-all duration-300 cursor-pointer bg-gradient-to-br ${stakeholder.bgGradient} border-l-4`}
// //                 style={{ borderLeftColor: stakeholder.color }}
// //                 onClick={() => handleStakeholderClick(stakeholder.type)}>
// //             <CardContent className="pt-6">
// //               <div className="flex items-center justify-between mb-4">
// //                 <div className="flex items-center gap-3">
// //                   <div
// //                     className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
// //                     style={{ backgroundColor: stakeholder.color }}
// //                   >
// //                     <stakeholder.icon
// //                       className="w-6 h-6 text-white"
// //                     />
// //                   </div>
// //                   <div>
// //                     <Badge variant="outline" className="mb-1 text-xs">
// //                       {stakeholder.category}
// //                     </Badge>
// //                     <p className="text-sm font-semibold text-foreground">{stakeholder.type}</p>
// //                     <p className="text-3xl font-bold text-foreground">{stakeholder.count}</p>
// //                   </div>
// //                 </div>
// //               </div>
              
// //               <div className="space-y-3">
// //                 <div className="flex items-center justify-between p-2 rounded-lg bg-sentiment-supportive/10">
// //                   <span className="text-sm font-medium text-sentiment-supportive">Positive</span>
// //                   <span className="font-bold text-sentiment-supportive">{stakeholder.sentiment.supportive}</span>
// //                 </div>
// //                 <div className="flex items-center justify-between p-2 rounded-lg bg-sentiment-critical/10">
// //                   <span className="text-sm font-medium text-sentiment-critical">Negative</span>
// //                   <span className="font-bold text-sentiment-critical">{stakeholder.sentiment.critical}</span>
// //                 </div>
// //                 <div className="flex items-center justify-between p-2 rounded-lg bg-sentiment-neutral/10">
// //                   <span className="text-sm font-medium text-sentiment-neutral">Neutral</span>
// //                   <span className="font-bold text-sentiment-neutral">{stakeholder.sentiment.neutral}</span>
// //                 </div>
// //               </div>
              
// //             </CardContent>
// //           </Card>
// //         ))}
// //       </div>

// //       {/* Charts */}
// //       {selectedMetric === 'distribution' ? (
// //         <Card className="shadow-card border-border">
// //           <CardHeader>
// //             <CardTitle>Stakeholder Participation Volume</CardTitle>
// //             <CardDescription>Number of responses from all stakeholder subtypes</CardDescription>
// //           </CardHeader>
// //           <CardContent>
// //           <div style={{ height: '500px' }}>
// //               <ResponsiveContainer width="100%" height="100%">
// //                 <BarChart data={distributionData} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
// //                   <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
// //                   <XAxis
// //                     dataKey="name"
// //                     stroke="hsl(var(--muted-foreground))"
// //                     angle={-45}
// //                     textAnchor="end"
// //                     height={100}
// //                     interval={0}
// //                     fontSize={12}
// //                   />
// //                   <YAxis stroke="hsl(var(--muted-foreground))" />
// //                   <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(107,114,128,0.12)' }} />
// //                   <Bar dataKey="value" radius={[4, 4, 0, 0]}>
// //                     {distributionData.map((entry) => (
// //                       <Cell key={entry.name} fill={entry.fill} />
// //                     ))}
// //                   </Bar>
// //                 </BarChart>
// //               </ResponsiveContainer>
// //             </div>
// //           </CardContent>
// //         </Card>
// //       ) : (
// //         <Card className="shadow-card border-border">
// //           <CardHeader>
// //             <CardTitle>Sentiment Comparison Across All Stakeholder Subtypes</CardTitle>
// //             <CardDescription>How different stakeholder subgroups respond to the consultation</CardDescription>
// //           </CardHeader>
// //           <CardContent>
// //             <div className="h-96">
// //               <ResponsiveContainer width="100%" height="100%">
// //                 <BarChart data={sentimentComparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
// //                   <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
// //                   <XAxis
// //                     dataKey="name"
// //                     stroke="hsl(var(--muted-foreground))"
// //                     angle={-45}
// //                     textAnchor="end"
// //                     height={100}
// //                     interval={0}
// //                     fontSize={12}
// //                   />
// //                   <YAxis stroke="hsl(var(--muted-foreground))" />
// //                   <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsla(var(--muted), 0.5)' }}/>
// //                   <Legend />
// //                   <Bar dataKey="Supportive" stackId="a" fill="hsl(var(--sentiment-supportive))" radius={[4, 4, 0, 0]} />
// //                   <Bar dataKey="Critical" stackId="a" fill="hsl(var(--sentiment-critical))" />
// //                   <Bar dataKey="Neutral" stackId="a" fill="hsl(var(--sentiment-neutral))" radius={[0, 0, 4, 4]}/>
// //                 </BarChart>
// //               </ResponsiveContainer>
// //             </div>
// //           </CardContent>
// //         </Card>
// //       )}

// //       {/* Dynamic Key Insights and other sections remain unchanged */}
// //       <Card className="shadow-card border-border">
// //         <CardHeader>
// //           <CardTitle className="flex items-center gap-2">
// //             <Users className="w-5 h-5" />
// //             {selectedMetric === 'distribution' ? 'Distribution Key Insights' : 'Sentiment Analysis Key Insights'}
// //           </CardTitle>
// //           <CardDescription>
// //             {selectedMetric === 'distribution' 
// //               ? 'Key findings about stakeholder participation patterns'
// //               : 'Key findings about stakeholder sentiment patterns'
// //             }
// //           </CardDescription>
// //         </CardHeader>
// //         <CardContent>
// //           {selectedMetric === 'distribution' ? (
// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //               <div className="space-y-3">
// //                 <h4 className="font-semibold text-individual-student">Highest Participation</h4>
// //                 <div className="bg-individual-student/10 p-4 rounded-lg border-l-4 border-individual-student">
// //                   <p className="text-sm font-medium">Students (Individual)</p>
// //                   <p className="text-2xl font-bold text-individual-student">45 responses</p>
// //                   <p className="text-xs text-muted-foreground mt-1">Highest engagement among all subtypes</p>
// //                 </div>
// //               </div>
              
// //               <div className="space-y-3">
// //                 <h4 className="font-semibold text-org-manufacturing">Moderate Engagement</h4>
// //                 <div className="bg-org-manufacturing/10 p-4 rounded-lg border-l-4 border-org-manufacturing">
// //                   <p className="text-sm font-medium">Manufacturing (Organization)</p>
// //                   <p className="text-2xl font-bold text-org-manufacturing">22 responses</p>
// //                   <p className="text-xs text-muted-foreground mt-1">Consistent organizational participation</p>
// //                 </div>
// //               </div>
              
// //               <div className="space-y-3">
// //                 <h4 className="font-semibold text-org-extractive">Lowest Participation</h4>
// //                 <div className="bg-org-extractive/10 p-4 rounded-lg border-l-4 border-org-extractive">
// //                   <p className="text-sm font-medium">Extractive Industries (Organization)</p>
// //                   <p className="text-2xl font-bold text-org-extractive">15 responses</p>
// //                   <p className="text-xs text-muted-foreground mt-1">Lowest engagement among all subtypes</p>
// //                 </div>
// //               </div>
// //             </div>
// //           ) : (
// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //               <div className="space-y-3">
// //                 <h4 className="font-semibold text-sentiment-supportive">Most Supportive</h4>
// //                 <div className="bg-sentiment-supportive/10 p-4 rounded-lg border-l-4 border-sentiment-supportive">
// //                   <p className="text-sm font-medium">Students (Individual)</p>
// //                   <p className="text-2xl font-bold text-sentiment-supportive">35 positive</p>
// //                   <p className="text-xs text-muted-foreground mt-1">78% supportive sentiment ratio</p>
// //                 </div>
// //               </div>
              
// //               <div className="space-y-3">
// //                 <h4 className="font-semibold text-sentiment-critical">Most Critical</h4>
// //                 <div className="bg-sentiment-critical/10 p-4 rounded-lg border-l-4 border-sentiment-critical">
// //                   <p className="text-sm font-medium">Businessperson (Individual)</p>
// //                   <p className="text-2xl font-bold text-sentiment-critical">14 critical</p>
// //                   <p className="text-xs text-muted-foreground mt-1">50% critical sentiment ratio</p>
// //                 </div>
// //               </div>
              
// //               <div className="space-y-3">
// //                 <h4 className="font-semibold text-sentiment-neutral">Most Balanced</h4>
// //                 <div className="bg-sentiment-neutral/10 p-4 rounded-lg border-l-4 border-sentiment-neutral">
// //                   <p className="text-sm font-medium">Professional Individual</p>
// //                   <p className="text-2xl font-bold text-sentiment-neutral">Mixed views</p>
// //                   <p className="text-xs text-muted-foreground mt-1">Balanced sentiment across categories</p>
// //                 </div>
// //               </div>
// //             </div>
// //           )}
// //         </CardContent>
// //       </Card>
      
// //       <Card className="shadow-card border-border">
// //         <CardHeader>
// //           <CardTitle className="flex items-center gap-2">
// //             <Users className="w-5 h-5" />
// //             Environmental Policy Draft Stakeholder Segmentation
// //           </CardTitle>
// //           <CardDescription>
// //             Key insights from stakeholder participation and sentiment analysis
// //           </CardDescription>
// //         </CardHeader>
// //         <CardContent className="space-y-4">
// //           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //             <div className="space-y-3">
// //               <h4 className="font-semibold text-foreground">Individual Group Analysis</h4>
// //               <ul className="space-y-2 text-sm text-muted-foreground">
// //                 <li className="flex items-start gap-2">
// //                   <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
// //                   <span><strong>Student group dominates</strong> in positive sentiment with 35 supportive responses, showing strong environmental awareness among younger demographics</span>
// //                 </li>
// //                 <li className="flex items-start gap-2">
// //                   <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
// //                   <span><strong>Professional individuals</strong> show balanced engagement with 18 supportive and 10 critical responses</span>
// //                 </li>
// //                 <li className="flex items-start gap-2">
// //                   <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
// //                   <span><strong>Businesspersons</strong> show more reserved participation with mixed sentiment distribution</span>
// //                 </li>
// //               </ul>
// //             </div>
            
// //             <div className="space-y-3">
// //               <h4 className="font-semibold text-foreground">Organization Group Analysis</h4>
// //               <ul className="space-y-2 text-sm text-muted-foreground">
// //                 <li className="flex items-start gap-2">
// //                   <span className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
// //                   <span><strong>Extractive Industries</strong> show the least engagement and most critical sentiment (10 critical vs 3 supportive)</span>
// //                 </li>
// //                 <li className="flex items-start gap-2">
// //                   <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
// //                   <span><strong>Service Economy</strong> organizations lead in positive sentiment with 14 supportive responses</span>
// //                 </li>
// //                 <li className="flex items-start gap-2">
// //                   <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
// //                   <span><strong>Manufacturing sector</strong> shows moderate engagement with slightly more critical than supportive responses</span>
// //                 </li>
// //               </ul>
// //             </div>
// //           </div>
          
// //           <div className="pt-4 border-t border-border">
// //             <h4 className="font-semibold text-foreground mb-3">Key Findings</h4>
// //             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
// //               <div className="bg-muted/50 p-4 rounded-lg">
// //                 <p className="text-sm font-medium text-foreground">Most Supportive</p>
// //                 <p className="text-xs text-muted-foreground mt-1">Students (Individual) with highest positive sentiment ratio</p>
// //               </div>
// //               <div className="bg-muted/50 p-4 rounded-lg">
// //                 <p className="text-sm font-medium text-foreground">Least Engaged</p>
// //                 <p className="text-xs text-muted-foreground mt-1">Extractive Industries with minimal participation</p>
// //               </div>
// //               <div className="bg-muted/50 p-4 rounded-lg">
// //                 <p className="text-sm font-medium text-foreground">Most Balanced</p>
// //                 <p className="text-xs text-muted-foreground mt-1">Professional Individuals with diverse viewpoints</p>
// //               </div>
// //             </div>
// //           </div>
// //         </CardContent>
// //       </Card>

// //       <StakeholderDetailModal 
// //         stakeholderType={selectedStakeholder}
// //         isOpen={isModalOpen}
// //         onClose={() => setIsModalOpen(false)}
// //       />
// //     </div>
// //   );
// // };

// // export default StakeholderSegmentation;



// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';
// import { Users, Building, User, Briefcase, GraduationCap, Factory, Store } from 'lucide-react';
// import { useState } from 'react';
// import { mockStats } from '@/data/MockDataStakeholder';
// import StakeholderDetailModal from './StakeholderDetailModal';

// const StakeholderSegmentation = () => {
//   const [selectedStakeholder, setSelectedStakeholder] = useState<string | null>(null);
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [selectedMetric, setSelectedMetric] = useState<'distribution' | 'sentiment'>('distribution');

//   const handleStakeholderClick = (stakeholderType: string) => {
//     setSelectedStakeholder(stakeholderType);
//     setIsModalOpen(true);
//   };

//   const stakeholderData = [
//     // Individual Subtypes
//     {
//       type: 'Student',
//       category: 'Individual',
//       count: 75,
//       icon: GraduationCap,
//       sentiment: { supportive: 50, critical: 20, neutral: 5 },
//       color: 'hsl(var(--individual-student))',
//       bgGradient: 'from-individual-student/20 to-individual-student/10'
//     },
//     {
//       type: 'Businessperson',
//       category: 'Individual',
//       count: 40,
//       icon: Briefcase,
//       sentiment: { supportive: 15, critical: 15, neutral: 10 },
//       color: 'hsl(var(--individual-business))',
//       bgGradient: 'from-individual-business/20 to-individual-business/10'
//     },
//     {
//       type: 'Professional',
//       category: 'Individual',
//       count: 60,
//       icon: User,
//       sentiment: { supportive: 30, critical: 20, neutral: 10 },
//       color: 'hsl(var(--individual-professional))',
//       bgGradient: 'from-individual-professional/20 to-individual-professional/10'
//     },
//     // Organization Subtypes
//     {
//       type: 'Extractive Industries',
//       category: 'Organization',
//       count: 25,
//       icon: Factory,
//       sentiment: { supportive: 5, critical: 15, neutral: 5 },
//       color: 'hsl(var(--org-extractive))',
//       bgGradient: 'from-org-extractive/20 to-org-extractive/10'
//     },
//     {
//       type: 'Manufacturing',
//       category: 'Organization',
//       count: 35,
//       icon: Building,
//       sentiment: { supportive: 10, critical: 20, neutral: 5 },
//       color: 'hsl(var(--org-manufacturing))',
//       bgGradient: 'from-org-manufacturing/20 to-org-manufacturing/10'
//     },
//     {
//       type: 'Service Economy',
//       category: 'Organization',
//       count: 55,
//       icon: Store,
//       sentiment: { supportive: 40, critical: 10, neutral: 5 },
//       color: 'hsl(var(--org-service))',
//       bgGradient: 'from-org-service/20 to-org-service/10'
//     }
//   ];

//   const distributionData = stakeholderData.map(item => ({
//     name: item.type,
//     value: item.count,
//     fill: item.color,
//   }));

//   const sentimentComparisonData = stakeholderData.map(item => ({
//     name: item.type,
//     Supportive: item.sentiment.supportive,
//     Critical: item.sentiment.critical,
//     Neutral: item.sentiment.neutral,
//   }));

//   const CustomTooltip = ({ active, payload, label }: any) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-card border border-border rounded-lg p-3 shadow-card">
//           <p className="font-medium text-foreground">{label}</p>
//           {payload.map((entry: any, index: number) => (
//             <p key={`item-${index}`} className="text-sm" style={{ color: entry.color }}>
//               {entry.name}: {entry.value}
//             </p>
//           ))}
//         </div>
//       );
//     }
//     return null;
//   };

//   return (
//     <div className="space-y-6">
//       {/* Header Card */}
//       <Card className="shadow-card border-border">
//         <CardHeader>
//           <div className="flex items-center justify-between">
//             <div>
//               <CardTitle className="flex items-center gap-2">
//                 <Users className="w-5 h-5" />
//                 Stakeholder Segmentation
//               </CardTitle>
//               <CardDescription>
//                 Analysis of stakeholder participation and sentiment by category
//               </CardDescription>
//             </div>
//             <Select value={selectedMetric} onValueChange={(value: 'distribution' | 'sentiment') => setSelectedMetric(value)}>
//               <SelectTrigger className="w-48">
//                 <SelectValue />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="distribution">Distribution Analysis</SelectItem>
//                 <SelectItem value="sentiment">Sentiment Comparison</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//         </CardHeader>
//       </Card>

//       {/* Stakeholder Overview Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//         {stakeholderData.map((stakeholder) => (
//           <Card key={stakeholder.type} className={`shadow-card border-border hover:shadow-strong transition-all duration-300 cursor-pointer bg-gradient-to-br ${stakeholder.bgGradient} border-l-4`}
//                 style={{ borderLeftColor: stakeholder.color }}
//                 onClick={() => handleStakeholderClick(stakeholder.type)}>
//             <CardContent className="pt-6">
//               <div className="flex items-center justify-between mb-4">
//                 <div className="flex items-center gap-3">
//                   <div
//                     className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
//                     style={{ backgroundColor: stakeholder.color }}
//                   >
//                     <stakeholder.icon
//                       className="w-6 h-6 text-white"
//                     />
//                   </div>
//                   <div>
//                     <Badge variant="outline" className="mb-1 text-xs">
//                       {stakeholder.category}
//                     </Badge>
//                     <p className="text-sm font-semibold text-foreground">{stakeholder.type}</p>
//                     <p className="text-3xl font-bold text-foreground">{stakeholder.count}</p>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="space-y-3">
//                 <div className="flex items-center justify-between p-2 rounded-lg bg-sentiment-supportive/10">
//                   <span className="text-sm font-medium text-sentiment-supportive">Positive</span>
//                   <span className="font-bold text-sentiment-supportive">{stakeholder.sentiment.supportive}</span>
//                 </div>
//                 <div className="flex items-center justify-between p-2 rounded-lg bg-sentiment-critical/10">
//                   <span className="text-sm font-medium text-sentiment-critical">Negative</span>
//                   <span className="font-bold text-sentiment-critical">{stakeholder.sentiment.critical}</span>
//                 </div>
//                 <div className="flex items-center justify-between p-2 rounded-lg bg-sentiment-neutral/10">
//                   <span className="text-sm font-medium text-sentiment-neutral">Neutral</span>
//                   <span className="font-bold text-sentiment-neutral">{stakeholder.sentiment.neutral}</span>
//                 </div>
//               </div>
              
//             </CardContent>
//           </Card>
//         ))}
//       </div>

//       {/* Charts */}
//       {selectedMetric === 'distribution' ? (
//         <Card className="shadow-card border-border">
//           <CardHeader>
//             <CardTitle>Stakeholder Participation Volume</CardTitle>
//             <CardDescription>Number of responses from all stakeholder subtypes</CardDescription>
//           </CardHeader>
//           <CardContent>
//           <div style={{ height: '500px' }}>
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={distributionData} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
//                   <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
//                   <XAxis
//                     dataKey="name"
//                     stroke="hsl(var(--muted-foreground))"
//                     angle={-45}
//                     textAnchor="end"
//                     height={100}
//                     interval={0}
//                     fontSize={12}
//                   />
//                   <YAxis stroke="hsl(var(--muted-foreground))" />
//                   <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(107,114,128,0.12)' }} />
//                   <Bar dataKey="value" radius={[4, 4, 0, 0]}>
//                     {distributionData.map((entry) => (
//                       <Cell key={entry.name} fill={entry.fill} />
//                     ))}
//                   </Bar>
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </CardContent>
//         </Card>
//       ) : (
//         <Card className="shadow-card border-border">
//           <CardHeader>
//             <CardTitle>Sentiment Comparison Across All Stakeholder Subtypes</CardTitle>
//             <CardDescription>How different stakeholder subgroups respond to the consultation</CardDescription>
//           </CardHeader>
//           <CardContent>
//             <div style={{ height: '500px' }}>
//               <ResponsiveContainer width="100%" height="100%">
//                 <BarChart data={sentimentComparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
//                   <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
//                   <XAxis
//                     dataKey="name"
//                     stroke="hsl(var(--muted-foreground))"
//                     angle={-45}
//                     textAnchor="end"
//                     height={100}
//                     interval={0}
//                     fontSize={12}
//                   />
//                   <YAxis stroke="hsl(var(--muted-foreground))" />
//                   <Tooltip content={<CustomTooltip />} cursor={{ fill: 'hsla(var(--muted), 0.5)' }}/>
//                   <Legend />
//                   <Bar dataKey="Supportive" stackId="a" fill="hsl(var(--sentiment-supportive))" radius={[4, 4, 0, 0]} />
//                   <Bar dataKey="Critical" stackId="a" fill="hsl(var(--sentiment-critical))" />
//                   <Bar dataKey="Neutral" stackId="a" fill="hsl(var(--sentiment-neutral))" radius={[0, 0, 4, 4]}/>
//                 </BarChart>
//               </ResponsiveContainer>
//             </div>
//           </CardContent>
//         </Card>
//       )}

//       {/* Dynamic Key Insights and other sections remain unchanged */}
//       <Card className="shadow-card border-border">
//         <CardHeader>
//           <CardTitle className="flex items-center gap-2">
//             <Users className="w-5 h-5" />
//             {selectedMetric === 'distribution' ? 'Distribution Key Insights' : 'Sentiment Analysis Key Insights'}
//           </CardTitle>
//           <CardDescription>
//             {selectedMetric === 'distribution' 
//               ? 'Key findings about stakeholder participation patterns'
//               : 'Key findings about stakeholder sentiment patterns'
//             }
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           {selectedMetric === 'distribution' ? (
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div className="space-y-3">
//                 <h4 className="font-semibold text-individual-student">Highest Participation</h4>
//                 <div className="bg-individual-student/10 p-4 rounded-lg border-l-4 border-individual-student">
//                   <p className="text-sm font-medium">Students (Individual)</p>
//                   <p className="text-2xl font-bold text-individual-student">75 responses</p>
//                   <p className="text-xs text-muted-foreground mt-1">Highest engagement among all subtypes</p>
//                 </div>
//               </div>
              
//               <div className="space-y-3">
//                 <h4 className="font-semibold text-org-service">Moderate Engagement</h4>
//                 <div className="bg-org-service/10 p-4 rounded-lg border-l-4 border-org-service">
//                   <p className="text-sm font-medium">Service Economy (Organization)</p>
//                   <p className="text-2xl font-bold text-org-service">55 responses</p>
//                   <p className="text-xs text-muted-foreground mt-1">Strong organizational participation</p>
//                 </div>
//               </div>
              
//               <div className="space-y-3">
//                 <h4 className="font-semibold text-org-extractive">Lowest Participation</h4>
//                 <div className="bg-org-extractive/10 p-4 rounded-lg border-l-4 border-org-extractive">
//                   <p className="text-sm font-medium">Extractive Industries (Organization)</p>
//                   <p className="text-2xl font-bold text-org-extractive">25 responses</p>
//                   <p className="text-xs text-muted-foreground mt-1">Lowest engagement among all subtypes</p>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               <div className="space-y-3">
//                 <h4 className="font-semibold text-sentiment-supportive">Most Supportive</h4>
//                 <div className="bg-sentiment-supportive/10 p-4 rounded-lg border-l-4 border-sentiment-supportive">
//                   <p className="text-sm font-medium">Students (Individual)</p>
//                   <p className="text-2xl font-bold text-sentiment-supportive">50 positive</p>
//                   <p className="text-xs text-muted-foreground mt-1">~67% supportive sentiment ratio</p>
//                 </div>
//               </div>
              
//               <div className="space-y-3">
//                 <h4 className="font-semibold text-sentiment-critical">Most Critical</h4>
//                 <div className="bg-sentiment-critical/10 p-4 rounded-lg border-l-4 border-sentiment-critical">
//                   <p className="text-sm font-medium">Manufacturing (Organization)</p>
//                   <p className="text-2xl font-bold text-sentiment-critical">20 critical</p>
//                   <p className="text-xs text-muted-foreground mt-1">~57% critical sentiment ratio</p>
//                 </div>
//               </div>
              
//               <div className="space-y-3">
//                 <h4 className="font-semibold text-sentiment-neutral">Most Balanced</h4>
//                 <div className="bg-sentiment-neutral/10 p-4 rounded-lg border-l-4 border-sentiment-neutral">
//                   <p className="text-sm font-medium">Businessperson (Individual)</p>
//                   <p className="text-2xl font-bold text-sentiment-neutral">Mixed views</p>
//                   <p className="text-xs text-muted-foreground mt-1">Equal supportive (15) and critical (15) views</p>
//                 </div>
//               </div>
//             </div>
//           )}
//         </CardContent>
//       </Card>
      
//       <Card className="shadow-card border-border">
//         <CardHeader>
//           <CardTitle className="flex items-center gap-2">
//             <Users className="w-5 h-5" />
//             Environmental Policy Draft Stakeholder Segmentation
//           </CardTitle>
//           <CardDescription>
//             Key insights from stakeholder participation and sentiment analysis
//           </CardDescription>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             <div className="space-y-3">
//               <h4 className="font-semibold text-foreground">Individual Group Analysis</h4>
//               <ul className="space-y-2 text-sm text-muted-foreground">
//                 <li className="flex items-start gap-2">
//                   <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
//                   <span><strong>Student group dominates</strong> in positive sentiment with 50 supportive responses, showing strong environmental awareness among younger demographics</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
//                   <span><strong>Professional individuals</strong> show balanced engagement with 30 supportive and 20 critical responses</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 flex-shrink-0"></span>
//                   <span><strong>Businesspersons</strong> show the most balanced sentiment, with an equal number of supportive (15) and critical (15) responses</span>
//                 </li>
//               </ul>
//             </div>
            
//             <div className="space-y-3">
//               <h4 className="font-semibold text-foreground">Organization Group Analysis</h4>
//               <ul className="space-y-2 text-sm text-muted-foreground">
//                 <li className="flex items-start gap-2">
//                   <span className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
//                   <span><strong>Extractive Industries</strong> show the least engagement and a highly critical sentiment (15 critical vs 5 supportive)</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
//                   <span><strong>Service Economy</strong> organizations lead in positive sentiment among organizations, with 40 supportive responses</span>
//                 </li>
//                 <li className="flex items-start gap-2">
//                   <span className="w-1.5 h-1.5 bg-destructive rounded-full mt-2 flex-shrink-0"></span>
//                   <span><strong>Manufacturing sector</strong> shows moderate engagement but is the most critical group, with 20 critical responses</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
          
//           <div className="pt-4 border-t border-border">
//             <h4 className="font-semibold text-foreground mb-3">Key Findings</h4>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//               <div className="bg-muted/50 p-4 rounded-lg">
//                 <p className="text-sm font-medium text-foreground">Most Supportive</p>
//                 <p className="text-xs text-muted-foreground mt-1">Students (Individual) with highest positive sentiment count</p>
//               </div>
//               <div className="bg-muted/50 p-4 rounded-lg">
//                 <p className="text-sm font-medium text-foreground">Least Engaged</p>
//                 <p className="text-xs text-muted-foreground mt-1">Extractive Industries with the lowest participation (25 responses)</p>
//               </div>
//               <div className="bg-muted/50 p-4 rounded-lg">
//                 <p className="text-sm font-medium text-foreground">Most Critical</p>
//                 <p className="text-xs text-muted-foreground mt-1">Manufacturing (Organization) with 20 critical responses</p>
//               </div>
//             </div>
//           </div>
//         </CardContent>
//       </Card>

//       <StakeholderDetailModal 
//         stakeholderType={selectedStakeholder}
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//       />
//     </div>
//   );
// };

// export default StakeholderSegmentation;



import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';
import { Users, Building, User, Briefcase, GraduationCap, Factory, Store } from 'lucide-react';
import { useState } from 'react';
import { mockStats } from '@/data/MockDataStakeholder';

const StakeholderSegmentation = () => {
  const [selectedStakeholder, setSelectedStakeholder] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState<'distribution' | 'sentiment'>('distribution');

  const handleStakeholderClick = (stakeholderType: string) => {
    setSelectedStakeholder(stakeholderType);
    setIsModalOpen(true);
  };

  const stakeholderData = [
    // Individual Subtypes
    {
      type: 'Student',
      category: 'Individual',
      count: 100,
      icon: GraduationCap,
      sentiment: { supportive: 67, critical: 27, neutral: 6 },
      color: 'hsl(var(--individual-student))',
      bgGradient: 'from-individual-student/20 to-individual-student/10'
    },
    {
      type: 'Businessperson',
      category: 'Individual',
      count: 120,
      icon: Briefcase,
      sentiment: { supportive: 45, critical: 45, neutral: 30 },
      color: 'hsl(var(--individual-business))',
      bgGradient: 'from-individual-business/20 to-individual-business/10'
    },
    {
      type: 'Professional',
      category: 'Individual',
      count: 200,
      icon: User,
      sentiment: { supportive: 100, critical: 67, neutral: 33 },
      color: 'hsl(var(--individual-professional))',
      bgGradient: 'from-individual-professional/20 to-individual-professional/10'
    },
    // Organization Subtypes
    {
      type: 'Extractive Industries',
      category: 'Organization',
      count: 340,
      icon: Factory,
      sentiment: { supportive: 68, critical: 204, neutral: 68 },
      color: 'hsl(var(--org-extractive))',
      bgGradient: 'from-org-extractive/20 to-org-extractive/10'
    },
    {
      type: 'Manufacturing',
      category: 'Organization',
      count: 300,
      icon: Building,
      sentiment: { supportive: 86, critical: 171, neutral: 43 },
      color: 'hsl(var(--org-manufacturing))',
      bgGradient: 'from-org-manufacturing/20 to-org-manufacturing/10'
    },
    {
      type: 'Service Economy',
      category: 'Organization',
      count: 280,
      icon: Store,
      sentiment: { supportive: 204, critical: 51, neutral: 25 },
      color: 'hsl(var(--org-service))',
      bgGradient: 'from-org-service/20 to-org-service/10'
    }
  ];

  const distributionData = stakeholderData.map(item => ({
    name: item.type,
    value: item.count,
    fill: item.color,
  }));

  const sentimentComparisonData = stakeholderData.map(item => ({
    name: item.type,
    Supportive: item.sentiment.supportive,
    Critical: item.sentiment.critical,
    Neutral: item.sentiment.neutral,
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-border rounded-lg p-3 shadow-card">
          <p className="font-medium text-foreground">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={`item-${index}`} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {entry.value}
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
              <CardTitle className="flex items-center gap-2 text-4xl text-blue-900 font-bold">
                <Users className="w-8 h-8 font-bold" />
                Stakeholder Segmentation
              </CardTitle>
              <CardDescription className='text-lg text-black font-semibold'>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stakeholderData.map((stakeholder) => (
          <Card key={stakeholder.type} className={`shadow-card border-border hover:shadow-strong transition-all duration-300 cursor-pointer bg-gradient-to-br ${stakeholder.bgGradient} border-l-4`}
                style={{ borderLeftColor: stakeholder.color }}
                onClick={() => handleStakeholderClick(stakeholder.type)}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg"
                    style={{ backgroundColor: stakeholder.color }}
                  >
                    <stakeholder.icon
                      className="w-6 h-6 text-white"
                    />
                  </div>
                  <div>
                    <Badge variant="outline" className="mb-1 text-base">
                      {stakeholder.category}
                    </Badge>
                    <p className="text-xl font-semibold text-foreground">{stakeholder.type}</p>
                    <p className="text-3xl font-bold text-foreground">{stakeholder.count}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-2 rounded-lg bg-sentiment-supportive/10">
                  <span className="text-lg font-medium text-sentiment-supportive">Positive</span>
                  <span className="font-bold text-sentiment-supportive">{stakeholder.sentiment.supportive}</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-sentiment-critical/10">
                  <span className="text-lg font-medium text-sentiment-critical">Negative</span>
                  <span className="font-bold text-sentiment-critical">{stakeholder.sentiment.critical}</span>
                </div>
                <div className="flex items-center justify-between p-2 rounded-lg bg-sentiment-neutral/10">
                  <span className="text-lg font-medium text-sentiment-neutral">Neutral</span>
                  <span className="font-bold text-sentiment-neutral">{stakeholder.sentiment.neutral}</span>
                </div>
              </div>
              
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      {selectedMetric === 'distribution' ? (
        <Card className="shadow-card border-border">
          <CardHeader>
            <CardTitle className='text-2xl font-semibold text-blue-900'>Stakeholder Participation Volume</CardTitle>
            <CardDescription className='text-lg text-black'>Number of responses from all stakeholder subtypes</CardDescription>
          </CardHeader>
          <CardContent>
          <div style={{ height: '500px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={distributionData} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="name"
                    stroke="hsl(var(--muted-foreground))"
                    angle={-45}
                    textAnchor="end"
                    height={100}
                    interval={0}
                    fontSize={15}
                  />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(107,114,128,0.12)' }} />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {distributionData.map((entry) => (
                      <Cell key={entry.name} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="shadow-card border-border">
          <CardHeader>
            <CardTitle className='text-2xl font-semibold text-blue-900'>Sentiment Comparison Across All Stakeholder Subtypes</CardTitle>
            <CardDescription className='text-lg text-black'>How different stakeholder subgroups respond to the consultation</CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ height: '500px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={sentimentComparisonData} margin={{ top: 20, right: 30, left: 20, bottom: 80 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis
                    dataKey="name"
                    stroke="hsl(var(--muted-foreground))"
                    angle={-45}
                    textAnchor="end"
                    height={100}
                    interval={0}
                    fontSize={12}
                  />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(107,114,128,0.12)' }}/>
                  <Legend />
                  <Bar dataKey="Supportive" stackId="a" fill="hsl(var(--sentiment-supportive))" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Critical" stackId="a" fill="hsl(var(--sentiment-critical))" />
                  <Bar dataKey="Neutral" stackId="a" fill="hsl(var(--sentiment-neutral))" radius={[0, 0, 4, 4]}/>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Dynamic Key Insights */}
      <Card className="shadow-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-3xl text-blue-900 font-bold">
            <Users className="w-8 h-8" />
            {selectedMetric === 'distribution' ? 'Distribution Key Insights' : 'Sentiment Analysis Key Insights'}
          </CardTitle>
          <CardDescription className='text-lg text-black font-semibold'>
            {selectedMetric === 'distribution' 
              ? 'Key findings about stakeholder participation patterns'
              : 'Key findings about stakeholder sentiment patterns'
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          {selectedMetric === 'distribution' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h4 className="font-semibold text-sentiment-supportive text-xl">Highest Participation</h4>
                <div className="bg-sentiment-supportive/20 p-5 rounded-xl border-l-4 border-sentiment-supportive shadow-sm hover:shadow-md transition-shadow duration-300">
                  <p className="text-base font-medium text-gray-700">Extractive Industries (Organization)</p>
                  <p className="text-3xl font-bold text-sentiment-supportive mt-1">340 responses</p>
                  <p className="text-sm text-gray-600 mt-1">Highest engagement among all subtypes</p>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-sentiment-neutral text-xl">Moderate Engagement</h4>
                <div className="bg-sentiment-neutral/20 p-5 rounded-xl border-l-4 border-sentiment-neutral shadow-sm hover:shadow-md transition-shadow duration-300">
                  <p className="text-base font-medium text-gray-700">Manufacturing (Organization)</p>
                  <p className="text-3xl font-bold text-sentiment-neutral mt-1">300 responses</p>
                  <p className="text-sm text-gray-600 mt-1">Very strong organizational participation</p>
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-sentiment-critical text-xl">Lowest Participation</h4>
                <div className="bg-sentiment-critical/20 p-5 rounded-xl border-l-4 border-sentiment-critical shadow-sm hover:shadow-md transition-shadow duration-300">
                  <p className="text-base font-medium text-gray-700">Students (Individual)</p>
                  <p className="text-3xl font-bold text-sentiment-critical mt-1">100 responses</p>
                  <p className="text-sm text-gray-600 mt-1">Lowest engagement among all subtypes</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
  <div className="space-y-3">
    <h4 className="font-semibold text-sentiment-supportive text-xl">Most Supportive</h4>
    <div className="bg-sentiment-supportive/20 p-5 rounded-xl border-l-4 border-sentiment-supportive shadow-sm hover:shadow-md transition-shadow duration-300">
      <p className="text-base font-medium text-gray-700">Service Economy (Organization)</p>
      <p className="text-3xl font-bold text-sentiment-supportive mt-1">204 positive</p>
      <p className="text-sm text-gray-600 mt-1">~73% supportive sentiment ratio</p>
    </div>
  </div>

  <div className="space-y-3">
    <h4 className="font-semibold text-sentiment-critical text-xl">Most Critical</h4>
    <div className="bg-sentiment-critical/20 p-5 rounded-xl border-l-4 border-sentiment-critical shadow-sm hover:shadow-md transition-shadow duration-300">
      <p className="text-base font-medium text-gray-700">Extractive Industries (Organization)</p>
      <p className="text-3xl font-bold text-sentiment-critical mt-1">204 critical</p>
      <p className="text-sm text-gray-600 mt-1">60% critical sentiment ratio</p>
    </div>
  </div>

  <div className="space-y-3">
    <h4 className="font-semibold text-sentiment-neutral text-xl">Most Balanced</h4>
    <div className="bg-sentiment-neutral/20 p-5 rounded-xl border-l-4 border-sentiment-neutral shadow-sm hover:shadow-md transition-shadow duration-300">
      <p className="text-base font-medium text-gray-700">Businessperson (Individual)</p>
      <p className="text-3xl font-bold text-sentiment-neutral mt-1">Mixed views</p>
      <p className="text-sm text-gray-600 mt-1">Equal supportive (45) and critical (45) views</p>
    </div>
  </div>
</div>
          )}
        </CardContent>
      </Card>
      
      <Card className="shadow-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl text-blue-900 font-bold">
            <Users className="w-8 h-8" />
            Environmental Policy Draft Stakeholder Segmentation
          </CardTitle>
          <CardDescription className='text-lg text-black font-semibold'>
            Key insights from stakeholder participation and sentiment analysis
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* Individual Group Analysis */}
  <div className="space-y-3 bg-blue-300/40 p-4 rounded-lg">
    <h4 className="font-semibold text-blue-900 text-xl">Individual Group Analysis</h4>
    <ul className="space-y-2 text-lg text-black">
      <li className="flex items-start gap-2">
        <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
        <span><strong>Professional individuals are highly engaged</strong> with 200 responses and a generally positive outlook (100 supportive)</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="w-2 h-2 bg-blue-300 rounded-full mt-2 flex-shrink-0"></span>
        <span><strong>Businesspersons</strong> show the most balanced sentiment, with an equal number of supportive (45) and critical (45) responses.</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
        <span><strong>Student group</strong> is the least engaged but maintains a strong supportive stance with 67 positive responses.</span>
      </li>
    </ul>
  </div>

  {/* Organization Group Analysis */}
  <div className="space-y-3 bg-green-300/40 p-4 rounded-lg">
    <h4 className="font-semibold text-green-900 text-xl">Organization Group Analysis</h4>
    <ul className="space-y-2 text-lg text-black">
      <li className="flex items-start gap-2">
        <span className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></span>
        <span><strong>Extractive Industries</strong> are the most engaged group (340 responses) and also the most critical, with 204 critical responses.</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
        <span><strong>Service Economy</strong> organizations are the most supportive group overall, with 204 positive responses.</span>
      </li>
      <li className="flex items-start gap-2">
        <span className="w-2 h-2 bg-red-300 rounded-full mt-2 flex-shrink-0"></span>
        <span><strong>Manufacturing sector</strong> shows high engagement and leans critical, with 171 critical vs. 86 supportive responses.</span>
      </li>
    </ul>
  </div>
</div>

<div className="pt-4 border-t border-border">
  <h4 className="font-bold text-2xl text-blue-900 mb-3">Key Findings</h4>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div className="bg-blue-400/30 p-4 rounded-lg">
      <p className="text-lg font-medium text-foreground">Most Supportive</p>
      <p className="text-base text-black mt-1">
        Service Economy (Organization) with the highest positive sentiment ratio
      </p>
    </div>
    <div className="bg-green-400/30 p-4 rounded-lg">
      <p className="text-lg font-medium text-foreground">Most Engaged</p>
      <p className="text-base text-black mt-1">
        Extractive Industries with the highest participation (340 responses)
      </p>
    </div>
    <div className="bg-red-400/30 p-4 rounded-lg">
      <p className="text-lg font-medium text-foreground">Most Critical</p>
      <p className="text-base text-black mt-1">
        Extractive Industries, with 204 critical responses
      </p>
    </div>
  </div>
</div>

        </CardContent>
      </Card>

    </div>
  );
};

export default StakeholderSegmentation;
