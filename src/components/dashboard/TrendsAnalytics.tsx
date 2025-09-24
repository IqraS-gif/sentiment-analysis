// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
// import { TrendingUp, AlertTriangle, BarChart3, ArrowUpRight, ArrowDownRight, AlertCircle, Info } from 'lucide-react';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { mockTrendData, monthlyInsights } from '../../data/mockDataTrends';

// const TrendsAnalytics = () => {
//   const CustomTooltip = ({ active, payload, label }: any) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-white border border-border rounded-lg p-4 shadow-lg">
//           <p className="font-semibold text-foreground mb-3 text-base">Date: {label}</p>
//           {payload.map((entry: any, index: number) => (
//             <p key={index} className="text-sm mb-1" style={{ color: entry.color }}>
//               {entry.name}: {entry.value}%
//             </p>
//           ))}
//         </div>
//       );
//     }
//     return null;
//   };

//   // Find months that have notable shifts for reference lines
//   const referenceMonths = monthlyInsights.map(insight => insight.month);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-6">
//       <div className="max-w-6xl mx-auto space-y-8">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-blue-900 mb-2">Comparitive Analysis</h1>
//           <p className="text-blue-700 text-lg">Drafts Sentiment Trends & Performance Insights</p>
//         </div>

//         {/* Notable Sentiment Shifts */}
//         {monthlyInsights.length > 0 && (
//           <Card className="bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200 shadow-lg">
//             <CardHeader>
//               <CardTitle className="flex items-center gap-3 text-orange-800">
//                 <AlertTriangle className="w-6 h-6" />
//                 Notable Sentiment Shifts
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-3">
//                 {monthlyInsights.map((insight, i) => (
//                   <div key={i} className="flex items-center gap-4">
//                     <Badge className="bg-red-500 hover:bg-red-600 text-white font-medium px-3 py-1">
//                       Spike
//                     </Badge>
//                     <span className="font-medium text-orange-800">{insight.month}:</span>
//                     <span className="text-orange-700">{insight.description}</span>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         )}

//         {/* Main Chart */}
//         <Card className="bg-white shadow-xl border-blue-200">
//           <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-t-lg">
//             <CardTitle className="flex items-center gap-3 text-blue-900 text-xl">
//               <BarChart3 className="w-6 h-6" />
//               Monthly Sentiment Analysis
//             </CardTitle>
//             <CardDescription className="text-blue-700">
//               Track positive, negative, and neutral sentiment trends over time
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="p-8">
//             <div className="h-96">
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart 
//                   data={mockTrendData}
//                   margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
//                 >
//                   <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--chart-grid))" />
//                   <XAxis 
//                     dataKey="month"
//                     stroke="hsl(var(--chart-axis))"
//                     fontSize={12}
//                     fontWeight={500}
//                   />
//                   <YAxis 
//                     stroke="hsl(var(--chart-axis))"
//                     fontSize={12}
//                     fontWeight={500}
//                     domain={[0, 100]}
//                   />
//                   <Tooltip content={<CustomTooltip />} />
                  
//                   {/* Reference lines for notable shifts */}
//                   {referenceMonths.map((month) => (
//                     <ReferenceLine 
//                       key={month} 
//                       x={month} 
//                       stroke="#ef4444" 
//                       strokeDasharray="5 5"
//                       strokeWidth={2}
//                     />
//                   ))}
                  
//                   {/* Sentiment lines with beautiful colors */}
//                   <Line 
//                     type="monotone" 
//                     dataKey="supportive" 
//                     stroke="hsl(var(--chart-positive))" 
//                     strokeWidth={4} 
//                     dot={{ r: 6, fill: "hsl(var(--chart-positive))" }} 
//                     name="positive"
//                     activeDot={{ r: 8, stroke: "hsl(var(--chart-positive))", strokeWidth: 3, fill: "white" }}
//                   />
//                   <Line 
//                     type="monotone" 
//                     dataKey="critical" 
//                     stroke="hsl(var(--chart-negative))" 
//                     strokeWidth={4} 
//                     dot={{ r: 6, fill: "hsl(var(--chart-negative))" }} 
//                     name="negative"
//                     activeDot={{ r: 8, stroke: "hsl(var(--chart-negative))", strokeWidth: 3, fill: "white" }}
//                   />
//                   <Line 
//                     type="monotone" 
//                     dataKey="neutral" 
//                     stroke="hsl(var(--chart-neutral))" 
//                     strokeWidth={4} 
//                     dot={{ r: 6, fill: "hsl(var(--chart-neutral))" }} 
//                     name="neutral"
//                     activeDot={{ r: 8, stroke: "hsl(var(--chart-neutral))", strokeWidth: 3, fill: "white" }}
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </CardContent>
//         </Card>

//         {/* Consultation Performance Analysis */}
//         <Card className="bg-white shadow-xl border-blue-200">
//           <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-t-lg flex flex-row items-center justify-between">
//             <div>
//               <CardTitle className="text-blue-900 text-2xl font-bold">Drafts Performance Analysis</CardTitle>
//               <CardDescription className="text-blue-700  text-lg">Top and bottom performing consultations with recommendations</CardDescription>
//             </div>
//             <Button variant="outline" size="sm" className="border-blue-300 text-blue-700 hover:bg-blue-50">Export Report</Button>
//           </CardHeader>
//           <CardContent className="space-y-8 p-8">
//             <div>
//               <div className="flex items-center gap-3 mb-4">
//                 <ArrowUpRight className="w-6 h-6 text-green-600" />
//                 <span className="font-bold text-green-700 text-xl">Top 5 Performing Consultations</span>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full text-sm">
//                   <thead className="text-blue-600 border-b border-blue-200">
//                     <tr className="text-left">
//                       <th className="py-3 pr-4 font-semibold text-xl">Consultation</th>
//                       <th className="py-3 pr-4 font-semibold text-xl">Sentiment</th>
//                       <th className="py-3 pr-4 font-semibold text-xl">Comments</th>
//                       <th className="py-3 pr-4 font-semibold text-xl">Trend</th>
//                       <th className="py-3 pr-4 font-semibold text-xl">Status</th>
//                       <th className="py-3 pr-0 font-semibold text-xl">Recommendation</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {[
//                       { name: 'Foreign Investment Guidelines', sentiment: 8.5, pos: 78, comments: 680, trend: 12, status: 'Excellent', rec: 'Continue current approach' },
//                       { name: 'Digital Filing Procedures', sentiment: 8.1, pos: 72,  comments: 890, trend: 8, status: 'Excellent', rec: 'Expand implementation' },
//                       { name: 'Annual Return Modifications', sentiment: 7.8, pos: 68,  comments: 750, trend: 5, status: 'Good', rec: 'Maintain momentum' },
//                       { name: 'Corporate Governance Reforms', sentiment: 7.2, pos: 65, comments: 1250, trend: 2, status: 'Good', rec: 'Address minor concerns' },
//                       { name: 'Startup Registration Framework', sentiment: 6.8, pos: 58, comments: 1580, trend: 3, status: 'Fair', rec: 'Monitor closely' }
//                     ].map((r, i) => (
//                       <tr key={i} className="border-t border-blue-100 hover:bg-blue-50/50">
//                         <td className="py-4 pr-4 font-medium text-lg text-blue-900">{r.name}</td>
//                         <td className="py-4 pr-4 text-blue-800 text-lg">{r.sentiment.toFixed(1)}/10 <span className="text-blue-600">({r.pos}% positive)</span></td>
//                         <td className="py-4 pr-4 text-blue-800 text-lg">{r.comments.toLocaleString()}</td>
//                         <td className="py-4 pr-4 text-green-600 font-semibold text-lg">+{r.trend}%</td>
//                         <td className="py-4 pr-4">
//                           <Badge className={
//                             r.status === 'Excellent' ? 'bg-green-600 hover:bg-green-700 text-white text-base' : 
//                             r.status === 'Good' ? 'bg-blue-600 hover:bg-blue-700 text-white text-base' : 
//                             'bg-yellow-500 hover:bg-yellow-600 text-white text-base'
//                           }>
//                             {r.status}
//                           </Badge>
//                         </td>
//                         <td className="py-4 pr-0 text-blue-700 text-lg">{r.rec}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center gap-3 mb-4">
//                 <ArrowDownRight className="w-5 h-5 text-red-600" />
//                 <span className="font-semibold text-red-700 text-lg">Bottom 5 Performing Consultations</span>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full text-sm">
//                   <thead className="text-blue-600 border-b border-blue-200">
//                     <tr className="text-left">
//                       <th className="py-3 pr-4 font-semibold">Consultation</th>
//                       <th className="py-3 pr-4 font-semibold">Sentiment</th>
//                       <th className="py-3 pr-4 font-semibold">Engagement</th>
//                       <th className="py-3 pr-4 font-semibold">Comments</th>
//                       <th className="py-3 pr-4 font-semibold">Trend</th>
//                       <th className="py-3 pr-4 font-semibold">Status</th>
//                       <th className="py-3 pr-0 font-semibold">Recommendation</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {[
//                       { name: 'Audit Committee Framework', sentiment: 4.8, pos: 32, engagement: 58, comments: 1890, trend: -15, status: 'Poor', rec: 'Immediate review required' },
//                       { name: 'CSR Compliance Guidelines', sentiment: 5.4, pos: 38, engagement: 65, comments: 2100, trend: -12, status: 'Poor', rec: 'Stakeholder engagement needed' },
//                       { name: 'Board Meeting Regulations', sentiment: 6.2, pos: 45, engagement: 72, comments: 1320, trend: -8, status: 'Fair', rec: 'Address key concerns' },
//                       { name: 'Director Appointment Rules', sentiment: 5.9, pos: 42, engagement: 68, comments: 980, trend: -6, status: 'Fair', rec: 'Clarify requirements' },
//                       { name: 'Financial Reporting Standards', sentiment: 6.0, pos: 44, engagement: 70, comments: 1150, trend: -1, status: 'Fair', rec: 'Simplify guidelines' }
//                     ].map((r, i) => (
//                       <tr key={i} className="border-t border-blue-100 hover:bg-blue-50/50">
//                         <td className="py-4 pr-4 font-medium text-blue-900">{r.name}</td>
//                         <td className="py-4 pr-4 text-blue-800">{r.sentiment.toFixed(1)}/10 <span className="text-blue-600">({r.pos}% positive)</span></td>
//                         <td className="py-4 pr-4 text-blue-800">{r.engagement}%</td>
//                         <td className="py-4 pr-4 text-blue-800">{r.comments.toLocaleString()}</td>
//                         <td className="py-4 pr-4 text-red-600 font-semibold">{r.trend}%</td>
//                         <td className="py-4 pr-4">
//                           <Badge className={
//                             r.status === 'Poor' ? 'bg-red-600 hover:bg-red-700 text-white' : 
//                             'bg-yellow-500 hover:bg-yellow-600 text-white'
//                           }>
//                             {r.status}
//                           </Badge>
//                         </td>
//                         <td className="py-4 pr-0 text-blue-700">{r.rec}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* AI-Generated Insights */}
//         <Card className="bg-white shadow-xl border-blue-200">
//           <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-t-lg">
//             <CardTitle className="text-blue-900 text-xl">AI-Generated Insights</CardTitle>
//             <CardDescription className="text-blue-700">Automated analysis of consultation patterns and anomalies</CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-4 p-8">
//             {[
//               { label: 'Negative Sentiment Spike Detected', impact: 'HIGH IMPACT', ago: '2 hours ago', confidence: 92, text: 'CSR Compliance Guidelines showing 45% negative sentiment increase over past 48 hours. Primary concerns: implementation complexity and compliance costs.' },
//               { label: 'High Engagement Window Identified', impact: 'MEDIUM IMPACT', ago: '4 hours ago', confidence: 88, text: 'Digital Filing Procedures consultation experiencing peak engagement (95% rate). Optimal time for additional stakeholder outreach and feedback collection.' },
//               { label: 'Startup-Related Consultations Gaining Momentum', impact: 'MEDIUM IMPACT', ago: '6 hours ago', confidence: 85, text: 'Startup Registration Framework showing consistent positive trend (+15% sentiment improvement). Consider accelerating implementation timeline.' },
//               { label: 'Unusual Comment Pattern in Audit Framework', impact: 'HIGH IMPACT', ago: '8 hours ago', confidence: 78, text: 'Audit Committee Framework receiving disproportionate negative feedback from specific stakeholder segments. Potential coordinated response detected.' },
//               { label: 'Cross-Consultation Sentiment Correlation', impact: 'LOW IMPACT', ago: '12 hours ago', confidence: 82, text: 'Strong correlation identified between Corporate Governance and Board Meeting regulations sentiment. Consider bundling policy communications.' }
//             ].map((it, i) => (
//               <div key={i} className="p-5 rounded-lg border border-blue-200 bg-gradient-to-r from-blue-50/50 to-white flex items-start gap-4 hover:shadow-md transition-shadow">
//                 <div className="mt-1">
//                   {i === 0 ? <AlertCircle className="w-6 h-6 text-red-600" /> : 
//                    i === 1 ? <TrendingUp className="w-6 h-6 text-green-600" /> : 
//                    i === 2 ? <TrendingUp className="w-6 h-6 text-blue-600" /> : 
//                    i === 3 ? <AlertTriangle className="w-6 h-6 text-amber-600" /> : 
//                    <Info className="w-6 h-6 text-blue-500" />}
//                 </div>
//                 <div className="flex-1 space-y-2">
//                   <div className="flex items-center gap-3 flex-wrap">
//                     <span className="font-semibold text-blue-900">{it.label}</span>
//                     <Badge className={
//                       it.impact.includes('HIGH') ? 'bg-red-600 hover:bg-red-700 text-white' : 
//                       it.impact.includes('MEDIUM') ? 'bg-blue-600 hover:bg-blue-700 text-white' : 
//                       'bg-gray-600 hover:bg-gray-700 text-white'
//                     }>
//                       {it.impact}
//                     </Badge>
//                     <span className="text-sm text-blue-600">{it.ago}</span>
//                     <span className="ml-auto text-sm text-blue-600 font-medium">{it.confidence}% confidence</span>
//                   </div>
//                   <p className="text-sm text-blue-700 leading-relaxed">{it.text}</p>
//                 </div>
//                 <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800 hover:bg-blue-100">
//                   View Details →
//                 </Button>
//               </div>
//             ))}

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
//               <Card className="border-blue-200 bg-gradient-to-br from-red-50 to-red-100">
//                 <CardContent className="pt-6 text-center">
//                   <div className="text-xs text-red-600 font-medium mb-1">Critical Alerts</div>
//                   <div className="text-2xl font-bold text-red-700">1</div>
//                 </CardContent>
//               </Card>
//               <Card className="border-blue-200 bg-gradient-to-br from-green-50 to-green-100">
//                 <CardContent className="pt-6 text-center">
//                   <div className="text-xs text-green-600 font-medium mb-1">Opportunities</div>
//                   <div className="text-2xl font-bold text-green-700">1</div>
//                 </CardContent>
//               </Card>
//               <Card className="border-blue-200 bg-gradient-to-br from-amber-50 to-yellow-100">
//                 <CardContent className="pt-6 text-center">
//                   <div className="text-xs text-amber-600 font-medium mb-1">Need Action</div>
//                   <div className="text-2xl font-bold text-amber-700">2</div>
//                 </CardContent>
//               </Card>
//               <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100">
//                 <CardContent className="pt-6 text-center">
//                   <div className="text-xs text-blue-600 font-medium mb-1">Avg Confidence</div>
//                   <div className="text-2xl font-bold text-blue-700">85%</div>
//                 </CardContent>
//               </Card>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default TrendsAnalytics;





// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
// import { TrendingUp, AlertTriangle, BarChart3, ArrowUpRight, ArrowDownRight, AlertCircle, Info, Scale, FileText, Bot } from 'lucide-react';
// import { Badge } from '@/components/ui/badge';
// import { Button } from '@/components/ui/button';
// import { mockTrendData, monthlyInsights } from '../../data/mockDataTrends';

// const TrendsAnalytics = () => {
//   const CustomTooltip = ({ active, payload, label }: any) => {
//     if (active && payload && payload.length) {
//       return (
//         <div className="bg-white border border-border rounded-lg p-4 shadow-lg">
//           <p className="font-semibold text-foreground mb-3 text-base">Date: {label}</p>
//           {payload.map((entry: any, index: number) => (
//             <p key={`tooltip-${index}`} className="text-sm mb-1" style={{ color: entry.color }}>
//               {entry.name}: {entry.value}%
//             </p>
//           ))}
//         </div>
//       );
//     }
//     return null;
//   };

//   // Find months that have notable shifts for reference lines
//   const referenceMonths = monthlyInsights.map(insight => insight.month);

//   return (
//     <div className="min-h-screen bg-white p-6">
//       <div className="max-w-6xl mx-auto space-y-8">
//         {/* Header */}
//         <div className="text-center mb-8">
//           <h1 className="text-4xl font-bold text-blue-900 mb-2 flex items-center justify-center gap-3">
//             <Scale />
//             Comparitive Analysis
//           </h1>
//           <p className="text-blue-700 text-lg">Drafts Sentiment Trends & Performance Insights</p>
//         </div>

//         {/* Notable Sentiment Shifts */}
//         {monthlyInsights.length > 0 && (
//           <Card className="bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200 shadow-lg">
//             <CardHeader>
//               <CardTitle className="flex items-center gap-3 text-orange-800 text-xl font-bold">
//                 <AlertTriangle className="w-6 h-6" />
//                 Notable Sentiment Shifts
//               </CardTitle>
//             </CardHeader>
//             <CardContent>
//               <div className="space-y-3">
//                 {monthlyInsights.map((insight, i) => (
//                   <div key={i} className="flex items-center gap-4">
//                     <Badge className="bg-red-500 hover:bg-red-600 text-xl text-white font-medium px-3 py-1">
//                       Spike
//                     </Badge>
//                     <span className="font-medium text-orange-800 text-xl">{insight.month}:</span>
//                     <span className="text-orange-700 text-xl">{insight.description}</span>
//                   </div>
//                 ))}
//               </div>
//             </CardContent>
//           </Card>
//         )}

//         {/* Main Chart */}
//         <Card className="bg-white shadow-xl border-blue-200">
//           <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-t-lg">
//             <CardTitle className="flex items-center gap-3 text-blue-900 text-2xl font-bold">
//               <BarChart3 className="w-8 h-8" />
//               Monthly Sentiment Analysis
//             </CardTitle>
//             <CardDescription className="text-blue-700 text-xl ">
//               Track positive, negative, and neutral sentiment trends over time
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="p-8">
//             <div className="h-96">
//               <ResponsiveContainer width="100%" height="100%">
//                 <LineChart 
//                   data={mockTrendData}
//                   margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
//                 >
//                   <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--chart-grid))" />
//                   <XAxis 
//                     dataKey="month"
//                     stroke="hsl(var(--chart-axis))"
//                     fontSize={12}
//                     fontWeight={500}
//                   />
//                   <YAxis 
//                     stroke="hsl(var(--chart-axis))"
//                     fontSize={12}
//                     fontWeight={500}
//                     domain={[0, 100]}
//                   />
//                   <Tooltip content={<CustomTooltip />} />
                  
//                   {/* Reference lines for notable shifts */}
//                   {referenceMonths.map((month) => (
//                     <ReferenceLine 
//                       key={month} 
//                       x={month} 
//                       stroke="#ef4444" 
//                       strokeDasharray="5 5"
//                       strokeWidth={2}
//                     />
//                   ))}
                  
//                   {/* Sentiment lines with beautiful colors */}
//                   <Line 
//                     type="monotone" 
//                     dataKey="supportive" 
//                     stroke="hsl(var(--chart-positive))" 
//                     strokeWidth={4} 
//                     dot={{ r: 6, fill: "hsl(var(--chart-positive))" }} 
//                     name="positive"
//                     activeDot={{ r: 8, stroke: "hsl(var(--chart-positive))", strokeWidth: 3, fill: "white" }}
//                   />
//                   <Line 
//                     type="monotone" 
//                     dataKey="critical" 
//                     stroke="hsl(var(--chart-negative))" 
//                     strokeWidth={4} 
//                     dot={{ r: 6, fill: "hsl(var(--chart-negative))" }} 
//                     name="negative"
//                     activeDot={{ r: 8, stroke: "hsl(var(--chart-negative))", strokeWidth: 3, fill: "white" }}
//                   />
//                   <Line 
//                     type="monotone" 
//                     dataKey="neutral" 
//                     stroke="hsl(var(--chart-neutral))" 
//                     strokeWidth={4} 
//                     dot={{ r: 6, fill: "hsl(var(--chart-neutral))" }} 
//                     name="neutral"
//                     activeDot={{ r: 8, stroke: "hsl(var(--chart-neutral))", strokeWidth: 3, fill: "white" }}
//                   />
//                 </LineChart>
//               </ResponsiveContainer>
//             </div>
//           </CardContent>
//         </Card>
//         {/* Consultation Performance Analysis */}
//         <Card className="bg-white shadow-xl border-blue-200">
//           <CardHeader className="rounded-t-lg flex flex-row items-center justify-between">
//             <div>
//               <CardTitle className="text-blue-900 text-2xl font-bold flex items-center gap-3">
//                 <FileText />
//                 Drafts Performance Analysis
//               </CardTitle>
//               <CardDescription className="text-blue-700  text-lg">Top and bottom performing consultations with recommendations</CardDescription>
//             </div>
//             <Button variant="outline" size="sm" className="border-blue-300 text-blue-700 hover:bg-blue-50">Export Report</Button>
//           </CardHeader>
//           <CardContent className="space-y-8 p-8">
//             <div>
//               <div className="flex items-center gap-3 mb-4">
//                 <ArrowUpRight className="w-6 h-6 text-green-600" />
//                 <span className="font-bold text-green-700 text-xl">Top 5 Performing Consultations</span>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full text-sm">
//                   <thead className="text-blue-600 border-b border-blue-200">
//                     <tr className="text-left">
//                       <th className="py-3 pr-4 font-semibold text-xl">Consultation</th>
//                       <th className="py-3 pr-4 font-semibold text-xl">Sentiment</th>
//                       <th className="py-3 pr-4 font-semibold text-xl">Comments</th>
//                       <th className="py-3 pr-4 font-semibold text-xl">Trend</th>
//                       <th className="py-3 pr-4 font-semibold text-xl">Status</th>
//                       <th className="py-3 pr-0 font-semibold text-xl">Recommendation</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {[
//                       { name: 'Foreign Investment Guidelines', sentiment: 8.5, pos: 78, comments: 680, trend: 12, status: 'Excellent', rec: 'Continue current approach' },
//                       { name: 'Digital Filing Procedures', sentiment: 8.1, pos: 72,  comments: 890, trend: 8, status: 'Excellent', rec: 'Expand implementation' },
//                       { name: 'Annual Return Modifications', sentiment: 7.8, pos: 68,  comments: 750, trend: 5, status: 'Good', rec: 'Maintain momentum' },
//                       { name: 'Corporate Governance Reforms', sentiment: 7.2, pos: 65, comments: 1250, trend: 2, status: 'Good', rec: 'Address minor concerns' },
//                       { name: 'Startup Registration Framework', sentiment: 6.8, pos: 58, comments: 1580, trend: 3, status: 'Fair', rec: 'Monitor closely' }
//                     ].map((r, i) => (
//                       <tr key={i} className="border-t border-blue-100 hover:bg-blue-50/50">
//                         <td className="py-4 pr-4 font-medium text-lg text-blue-900">{r.name}</td>
//                         <td className="py-4 pr-4 text-blue-800 text-lg">{r.sentiment.toFixed(1)}/10 <span className="text-blue-600">({r.pos}% positive)</span></td>
//                         <td className="py-4 pr-4 text-blue-800 text-lg">{r.comments.toLocaleString()}</td>
//                         <td className="py-4 pr-4 text-green-600 font-semibold text-lg">+{r.trend}%</td>
//                         <td className="py-4 pr-4">
//                           <Badge className={
//                             r.status === 'Excellent' ? 'bg-green-600 hover:bg-green-700 text-white text-base' : 
//                             r.status === 'Good' ? 'bg-blue-600 hover:bg-blue-700 text-white text-base' : 
//                             'bg-yellow-500 hover:bg-yellow-600 text-white text-base'
//                           }>
//                             {r.status}
//                           </Badge>
//                         </td>
//                         <td className="py-4 pr-0 text-blue-700 text-lg">{r.rec}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>

//             <div>
//               <div className="flex items-center gap-3 mb-4">
//                 <ArrowDownRight className="w-6 h-6 text-red-600" />
//                 <span className="font-bold text-red-700 text-xl">Bottom 5 Performing Consultations</span>
//               </div>
//               <div className="overflow-x-auto">
//                 <table className="w-full text-sm">
//                   <thead className="text-blue-600 border-b border-blue-200">
//                     <tr className="text-left">
//                       <th className="py-3 pr-4 font-semibold text-xl">Consultation</th>
//                       <th className="py-3 pr-4 font-semibold text-xl">Sentiment</th>
//                       <th className="py-3 pr-4 font-semibold text-xl">Comments</th>
//                       <th className="py-3 pr-4 font-semibold text-xl">Trend</th>
//                       <th className="py-3 pr-4 font-semibold text-xl">Status</th>
//                       <th className="py-3 pr-0 font-semibold text-xl">Recommendation</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {[
//                       { name: 'Audit Committee Framework', sentiment: 4.8, pos: 32,  comments: 1890, trend: -15, status: 'Poor', rec: 'Immediate review required' },
//                       { name: 'CSR Compliance Guidelines', sentiment: 5.4, pos: 38,  comments: 2100, trend: -12, status: 'Poor', rec: 'Stakeholder engagement needed' },
//                       { name: 'Board Meeting Regulations', sentiment: 6.2, pos: 45,  comments: 1320, trend: -8, status: 'Fair', rec: 'Address key concerns' },
//                       { name: 'Director Appointment Rules', sentiment: 5.9, pos: 42,  comments: 980, trend: -6, status: 'Fair', rec: 'Clarify requirements' },
//                       { name: 'Financial Reporting Standards', sentiment: 6.0, pos: 44,   comments: 1150, trend: -1, status: 'Fair', rec: 'Simplify guidelines' }
//                     ].map((r, i) => (
//                       <tr key={i} className="border-t border-blue-100 hover:bg-blue-50/50">
//                         <td className="py-4 pr-4 font-medium text-lg text-blue-900">{r.name}</td>
//                         <td className="py-4 pr-4 text-blue-800 text-lg">{r.sentiment.toFixed(1)}/10 <span className="text-blue-600">({r.pos}% positive)</span></td>
//                         <td className="py-4 pr-4 text-blue-800 text-lg">{r.comments.toLocaleString()}</td>
//                         <td className="py-4 pr-4 text-red-600 font-semibold text-lg">{r.trend}%</td>
//                         <td className="py-4 pr-4">
//                           <Badge className={
//                             r.status === 'Poor' ? 'bg-red-600 hover:bg-red-700 text-white text-base' : 
//                             'bg-yellow-500 hover:bg-yellow-600 text-white text-base'
//                           }>
//                             {r.status}
//                           </Badge>
//                         </td>
//                         <td className="py-4 pr-0 text-blue-700 text-lg">{r.rec}</td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </CardContent>
//         </Card>

//         {/* AI-Generated Insights */}
//         <Card className="bg-white shadow-xl border-blue-200">
//           <CardHeader className="rounded-t-lg">
//             <CardTitle className="text-blue-900 text-3xl font-bold flex items-center gap-3">
//               <Bot className="w-9 h-9 text-blue-900" />
//               AI-Generated Insights
//             </CardTitle>
//             <CardDescription className="text-blue-700 text-xl">Analysis of drafts patterns and anomalies</CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-4 p-8">
//             {[
//               { label: 'Negative Sentiment Spike Detected', impact: 'HIGH IMPACT', ago: '2 hours ago', confidence: 92, text: 'CSR Compliance Guidelines showing 45% negative sentiment increase over past 48 hours. Primary concerns: implementation complexity and compliance costs.' },
//               { label: 'High Engagement Window Identified', impact: 'MEDIUM IMPACT', ago: '4 hours ago', confidence: 88, text: 'Digital Filing Procedures consultation experiencing peak engagement (95% rate). Optimal time for additional stakeholder outreach and feedback collection.' },
//               { label: 'Startup-Related Consultations Gaining Momentum', impact: 'MEDIUM IMPACT', ago: '6 hours ago', confidence: 85, text: 'Startup Registration Framework showing consistent positive trend (+15% sentiment improvement). Consider accelerating implementation timeline.' },
//               { label: 'Unusual Comment Pattern in Audit Framework', impact: 'HIGH IMPACT', ago: '8 hours ago', confidence: 78, text: 'Audit Committee Framework receiving disproportionate negative feedback from specific stakeholder segments. Potential coordinated response detected.' },
//               { label: 'Cross-Consultation Sentiment Correlation', impact: 'LOW IMPACT', ago: '12 hours ago', confidence: 82, text: 'Strong correlation identified between Corporate Governance and Board Meeting regulations sentiment. Consider bundling policy communications.' }
//             ].map((it, i) => (
//               <div key={i} className="p-5 rounded-lg border border-blue-200 bg-gradient-to-r from-blue-50/50 to-white flex items-start gap-4 hover:shadow-md transition-shadow">
//                 <div className="mt-1">
//                   {i === 0 ? <AlertCircle className="w-6 h-6 text-red-600" /> : 
//                    i === 1 ? <TrendingUp className="w-6 h-6 text-green-600" /> : 
//                    i === 2 ? <TrendingUp className="w-6 h-6 text-blue-600" /> : 
//                    i === 3 ? <AlertTriangle className="w-6 h-6 text-amber-600" /> : 
//                    <Info className="w-6 h-6 text-blue-500" />}
//                 </div>
//                 <div className="flex-1 space-y-2">
//                   <div className="flex items-center gap-3 flex-wrap">
//                     <span className="font-semibold text-blue-900 text-xl">{it.label}</span>
//                     <Badge className={
//                       it.impact.includes('HIGH') ? 'bg-red-600 hover:bg-red-700 text-white' : 
//                       it.impact.includes('MEDIUM') ? 'bg-blue-600 hover:bg-blue-700 text-white' : 
//                       'bg-gray-600 hover:bg-gray-700 text-white'
//                     }>
//                       {it.impact}
//                     </Badge>
//                     <span className="text-base text-blue-600">{it.ago}</span>
                    
//                   </div>
//                   <p className="text-lg text-blue-700  font-semibold leading-relaxed">{it.text}</p>
//                 </div>

//               </div>
//             ))}

//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
//               <Card className="border-blue-200 bg-gradient-to-br from-red-50 to-red-100">
//                 <CardContent className="pt-6 text-center">
//                   <div className="text-xs text-red-600 font-medium mb-1">Critical Alerts</div>
//                   <div className="text-2xl font-bold text-red-700">1</div>
//                 </CardContent>
//               </Card>
//               <Card className="border-blue-200 bg-gradient-to-br from-green-50 to-green-100">
//                 <CardContent className="pt-6 text-center">
//                   <div className="text-xs text-green-600 font-medium mb-1">Opportunities</div>
//                   <div className="text-2xl font-bold text-green-700">1</div>
//                 </CardContent>
//               </Card>
//               <Card className="border-blue-200 bg-gradient-to-br from-amber-50 to-yellow-100">
//                 <CardContent className="pt-6 text-center">
//                   <div className="text-xs text-amber-600 font-medium mb-1">Need Action</div>
//                   <div className="text-2xl font-bold text-amber-700">2</div>
//                 </CardContent>
//               </Card>
//               <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100">
//                 <CardContent className="pt-6 text-center">
//                   <div className="text-xs text-blue-600 font-medium mb-1">Avg Confidence</div>
//                   <div className="text-2xl font-bold text-blue-700">85%</div>
//                 </CardContent>
//               </Card>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default TrendsAnalytics;



import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { TrendingUp, AlertTriangle, BarChart3, ArrowUpRight, ArrowDownRight, AlertCircle, Info, Scale, FileText, Bot, Layers, ArrowDown, ArrowUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { mockTrendData, monthlyInsights } from '../../data/mockDataTrends';

const TrendsAnalytics = () => {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white border border-border rounded-lg p-4 shadow-lg">
          <p className="font-semibold text-foreground mb-3 text-base">Date: {label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={`tooltip-${index}`} className="text-sm mb-1" style={{ color: entry.color }}>
              {entry.name}: {entry.value}%
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  // Find months that have notable shifts for reference lines
  const referenceMonths = monthlyInsights.map(insight => insight.month);

  return (
    <div className="min-h-screen bg-white p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-blue-900 mb-2 flex items-center justify-center gap-3">
            <Scale />
            Comparitive Analysis
          </h1>
          <p className="text-blue-700 text-lg">Drafts Sentiment Trends & Performance Insights</p>
        </div>

        {/* Notable Sentiment Shifts */}
        {monthlyInsights.length > 0 && (
          <Card className="bg-gradient-to-r from-orange-50 to-amber-50 border-orange-200 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-orange-800 text-xl font-bold">
                <AlertTriangle className="w-6 h-6" />
                Notable Sentiment Shifts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {monthlyInsights.map((insight, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <Badge className="bg-red-500 hover:bg-red-600 text-xl text-white font-medium px-3 py-1">
                      Spike
                    </Badge>
                    <span className="font-medium text-orange-800 text-xl">{insight.month}:</span>
                    <span className="text-orange-700 text-xl">{insight.description}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Main Chart */}
        <Card className="bg-white shadow-xl border-blue-200">
          <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-t-lg">
            <CardTitle className="flex items-center gap-3 text-blue-900 text-2xl font-bold">
              <BarChart3 className="w-8 h-8" />
              Monthly Sentiment Analysis
            </CardTitle>
            <CardDescription className="text-blue-700 text-xl ">
              Track positive, negative, and neutral sentiment trends over time
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8">
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart 
                  data={mockTrendData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                >
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--chart-grid))" />
                  <XAxis 
                    dataKey="month"
                    stroke="hsl(var(--chart-axis))"
                    fontSize={12}
                    fontWeight={500}
                  />
                  <YAxis 
                    stroke="hsl(var(--chart-axis))"
                    fontSize={12}
                    fontWeight={500}
                    domain={[0, 100]}
                  />
                  <Tooltip content={<CustomTooltip />} />
                  
                  {/* Reference lines for notable shifts */}
                  {referenceMonths.map((month) => (
                    <ReferenceLine 
                      key={month} 
                      x={month} 
                      stroke="#ef4444" 
                      strokeDasharray="5 5"
                      strokeWidth={2}
                    />
                  ))}
                  
                  {/* Sentiment lines with beautiful colors */}
                  <Line 
                    type="monotone" 
                    dataKey="supportive" 
                    stroke="hsl(var(--chart-positive))" 
                    strokeWidth={4} 
                    dot={{ r: 6, fill: "hsl(var(--chart-positive))" }} 
                    name="positive"
                    activeDot={{ r: 8, stroke: "hsl(var(--chart-positive))", strokeWidth: 3, fill: "white" }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="critical" 
                    stroke="hsl(var(--chart-negative))" 
                    strokeWidth={4} 
                    dot={{ r: 6, fill: "hsl(var(--chart-negative))" }} 
                    name="negative"
                    activeDot={{ r: 8, stroke: "hsl(var(--chart-negative))", strokeWidth: 3, fill: "white" }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="neutral" 
                    stroke="hsl(var(--chart-neutral))" 
                    strokeWidth={4} 
                    dot={{ r: 6, fill: "hsl(var(--chart-neutral))" }} 
                    name="neutral"
                    activeDot={{ r: 8, stroke: "hsl(var(--chart-neutral))", strokeWidth: 3, fill: "white" }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Environmental Policy Draft Comparative Analysis */}
        <Card className="bg-white shadow-xl border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-900 text-2xl font-bold flex items-center gap-3">
              <Layers className="w-7 h-7" />
              Environmental Policy Draft Comparative Analysis
            </CardTitle>
            <CardDescription className="text-blue-700 text-lg">
              Analysis of sentiment shift between draft revisions.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-lg p-8">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-red-50/50 border border-red-200">
              <ArrowDown className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
              <div>
                <span className="font-bold text-red-800">Draft 1 (Released May 2024):</span>
                <p className="text-red-700">
                  Encountered a huge spike in negative comments. Analysis indicates primary concerns were related to the perceived high costs of compliance for small businesses and ambiguity in the proposed timeline.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-4 rounded-lg bg-green-50/50 border border-green-200">
              <ArrowUp className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
              <div>
                <span className="font-bold text-green-800">Revised Draft 2 (Released June 2024):</span>
                <p className="text-green-700">
                  Generated a significant spike in positive comments. The revisions, which included a phased rollout and clearer financial incentives, were well-received and directly addressed the main criticisms of the initial draft.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Consultation Performance Analysis */}
        <Card className="bg-white shadow-xl border-blue-200">
          <CardHeader className="rounded-t-lg flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-blue-900 text-2xl font-bold flex items-center gap-3">
                <FileText />
                Drafts Performance Analysis
              </CardTitle>
              <CardDescription className="text-blue-700  text-lg">Top and bottom performing consultations with recommendations</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="border-blue-300 text-blue-700 hover:bg-blue-50">Export Report</Button>
          </CardHeader>
          <CardContent className="space-y-8 p-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <ArrowUpRight className="w-6 h-6 text-green-600" />
                <span className="font-bold text-green-700 text-xl">Top 5 Performing Consultations</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-blue-600 border-b border-blue-200">
                    <tr className="text-left">
                      <th className="py-3 pr-4 font-semibold text-xl">Consultation</th>
                      <th className="py-3 pr-4 font-semibold text-xl">Sentiment</th>
                      <th className="py-3 pr-4 font-semibold text-xl">Comments</th>
                      <th className="py-3 pr-4 font-semibold text-xl">Trend</th>
                      <th className="py-3 pr-4 font-semibold text-xl">Status</th>
                      <th className="py-3 pr-0 font-semibold text-xl">Recommendation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Foreign Investment Guidelines', sentiment: 8.5, pos: 78, comments: 680, trend: 12, status: 'Excellent', rec: 'Continue current approach' },
                      { name: 'Digital Filing Procedures', sentiment: 8.1, pos: 72,  comments: 890, trend: 8, status: 'Excellent', rec: 'Expand implementation' },
                      { name: 'Annual Return Modifications', sentiment: 7.8, pos: 68,  comments: 750, trend: 5, status: 'Good', rec: 'Maintain momentum' },
                      { name: 'Corporate Governance Reforms', sentiment: 7.2, pos: 65, comments: 1250, trend: 2, status: 'Good', rec: 'Address minor concerns' },
                      { name: 'Startup Registration Framework', sentiment: 6.8, pos: 58, comments: 1580, trend: 3, status: 'Fair', rec: 'Monitor closely' }
                    ].map((r, i) => (
                      <tr key={i} className="border-t border-blue-100 hover:bg-blue-50/50">
                        <td className="py-4 pr-4 font-medium text-lg text-blue-900">{r.name}</td>
                        <td className="py-4 pr-4 text-blue-800 text-lg">{r.sentiment.toFixed(1)}/10 <span className="text-blue-600">({r.pos}% positive)</span></td>
                        <td className="py-4 pr-4 text-blue-800 text-lg">{r.comments.toLocaleString()}</td>
                        <td className="py-4 pr-4 text-green-600 font-semibold text-lg">+{r.trend}%</td>
                        <td className="py-4 pr-4">
                          <Badge className={
                            r.status === 'Excellent' ? 'bg-green-600 hover:bg-green-700 text-white text-base' : 
                            r.status === 'Good' ? 'bg-blue-600 hover:bg-blue-700 text-white text-base' : 
                            'bg-yellow-500 hover:bg-yellow-600 text-white text-base'
                          }>
                            {r.status}
                          </Badge>
                        </td>
                        <td className="py-4 pr-0 text-blue-700 text-lg">{r.rec}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <ArrowDownRight className="w-6 h-6 text-red-600" />
                <span className="font-bold text-red-700 text-xl">Bottom 5 Performing Consultations</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="text-blue-600 border-b border-blue-200">
                    <tr className="text-left">
                      <th className="py-3 pr-4 font-semibold text-xl">Consultation</th>
                      <th className="py-3 pr-4 font-semibold text-xl">Sentiment</th>
                      <th className="py-3 pr-4 font-semibold text-xl">Comments</th>
                      <th className="py-3 pr-4 font-semibold text-xl">Trend</th>
                      <th className="py-3 pr-4 font-semibold text-xl">Status</th>
                      <th className="py-3 pr-0 font-semibold text-xl">Recommendation</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { name: 'Audit Committee Framework', sentiment: 4.8, pos: 32,  comments: 1890, trend: -15, status: 'Poor', rec: 'Immediate review required' },
                      { name: 'CSR Compliance Guidelines', sentiment: 5.4, pos: 38,  comments: 2100, trend: -12, status: 'Poor', rec: 'Stakeholder engagement needed' },
                      { name: 'Board Meeting Regulations', sentiment: 6.2, pos: 45,  comments: 1320, trend: -8, status: 'Fair', rec: 'Address key concerns' },
                      { name: 'Director Appointment Rules', sentiment: 5.9, pos: 42,  comments: 980, trend: -6, status: 'Fair', rec: 'Clarify requirements' },
                      { name: 'Financial Reporting Standards', sentiment: 6.0, pos: 44,   comments: 1150, trend: -1, status: 'Fair', rec: 'Simplify guidelines' }
                    ].map((r, i) => (
                      <tr key={i} className="border-t border-blue-100 hover:bg-blue-50/50">
                        <td className="py-4 pr-4 font-medium text-lg text-blue-900">{r.name}</td>
                        <td className="py-4 pr-4 text-blue-800 text-lg">{r.sentiment.toFixed(1)}/10 <span className="text-blue-600">({r.pos}% positive)</span></td>
                        <td className="py-4 pr-4 text-blue-800 text-lg">{r.comments.toLocaleString()}</td>
                        <td className="py-4 pr-4 text-red-600 font-semibold text-lg">{r.trend}%</td>
                        <td className="py-4 pr-4">
                          <Badge className={
                            r.status === 'Poor' ? 'bg-red-600 hover:bg-red-700 text-white text-base' : 
                            'bg-yellow-500 hover:bg-yellow-600 text-white text-base'
                          }>
                            {r.status}
                          </Badge>
                        </td>
                        <td className="py-4 pr-0 text-blue-700 text-lg">{r.rec}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* AI-Generated Insights */}
        <Card className="bg-white shadow-xl border-blue-200">
          <CardHeader className="rounded-t-lg">
            <CardTitle className="text-blue-900 text-3xl font-bold flex items-center gap-3">
              <Bot className="w-9 h-9 text-blue-900" />
              AI-Generated Insights
            </CardTitle>
            <CardDescription className="text-blue-700 text-xl">Analysis of drafts patterns and anomalies</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 p-8">
            {[
              { label: 'Negative Sentiment Spike Detected', impact: 'HIGH IMPACT', ago: '2 hours ago', confidence: 92, text: 'CSR Compliance Guidelines showing 45% negative sentiment increase over past 48 hours. Primary concerns: implementation complexity and compliance costs.' },
              { label: 'High Engagement Window Identified', impact: 'MEDIUM IMPACT', ago: '4 hours ago', confidence: 88, text: 'Digital Filing Procedures consultation experiencing peak engagement (95% rate). Optimal time for additional stakeholder outreach and feedback collection.' },
              { label: 'Startup-Related Consultations Gaining Momentum', impact: 'MEDIUM IMPACT', ago: '6 hours ago', confidence: 85, text: 'Startup Registration Framework showing consistent positive trend (+15% sentiment improvement). Consider accelerating implementation timeline.' },
              { label: 'Unusual Comment Pattern in Audit Framework', impact: 'HIGH IMPACT', ago: '8 hours ago', confidence: 78, text: 'Audit Committee Framework receiving disproportionate negative feedback from specific stakeholder segments. Potential coordinated response detected.' },
              { label: 'Cross-Consultation Sentiment Correlation', impact: 'LOW IMPACT', ago: '12 hours ago', confidence: 82, text: 'Strong correlation identified between Corporate Governance and Board Meeting regulations sentiment. Consider bundling policy communications.' }
            ].map((it, i) => (
              <div key={i} className="p-5 rounded-lg border border-blue-200 bg-gradient-to-r from-blue-50/50 to-white flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="mt-1">
                  {i === 0 ? <AlertCircle className="w-6 h-6 text-red-600" /> : 
                   i === 1 ? <TrendingUp className="w-6 h-6 text-green-600" /> : 
                   i === 2 ? <TrendingUp className="w-6 h-6 text-blue-600" /> : 
                   i === 3 ? <AlertTriangle className="w-6 h-6 text-amber-600" /> : 
                   <Info className="w-6 h-6 text-blue-500" />}
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="font-semibold text-blue-900 text-xl">{it.label}</span>
                    <Badge className={
                      it.impact.includes('HIGH') ? 'bg-red-600 hover:bg-red-700 text-white' : 
                      it.impact.includes('MEDIUM') ? 'bg-blue-600 hover:bg-blue-700 text-white' : 
                      'bg-gray-600 hover:bg-gray-700 text-white'
                    }>
                      {it.impact}
                    </Badge>
                    <span className="text-base text-blue-600">{it.ago}</span>
                    
                  </div>
                  <p className="text-lg text-blue-700  font-semibold leading-relaxed">{it.text}</p>
                </div>

              </div>
            ))}

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <Card className="border-blue-200 bg-gradient-to-br from-red-50 to-red-100">
                <CardContent className="pt-6 text-center">
                  <div className="text-xs text-red-600 font-medium mb-1">Critical Alerts</div>
                  <div className="text-2xl font-bold text-red-700">1</div>
                </CardContent>
              </Card>
              <Card className="border-blue-200 bg-gradient-to-br from-green-50 to-green-100">
                <CardContent className="pt-6 text-center">
                  <div className="text-xs text-green-600 font-medium mb-1">Opportunities</div>
                  <div className="text-2xl font-bold text-green-700">1</div>
                </CardContent>
              </Card>
              <Card className="border-blue-200 bg-gradient-to-br from-amber-50 to-yellow-100">
                <CardContent className="pt-6 text-center">
                  <div className="text-xs text-amber-600 font-medium mb-1">Need Action</div>
                  <div className="text-2xl font-bold text-amber-700">2</div>
                </CardContent>
              </Card>
              <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100">
                <CardContent className="pt-6 text-center">
                  <div className="text-xs text-blue-600 font-medium mb-1">Avg Confidence</div>
                  <div className="text-2xl font-bold text-blue-700">85%</div>
                </CardContent>
              </Card>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TrendsAnalytics;