// // // // // // import { useState } from 'react';
// // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// // // // // // import { Button } from '@/components/ui/button';
// // // // // // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// // // // // // import { mockStats } from '@/data/mockData';

// // // // // // const WordCloud = () => {
// // // // // //   const [selectedFilter, setSelectedFilter] = useState<string>('all');
// // // // // //   const [selectedStakeholder, setSelectedStakeholder] = useState<string>('all');
// // // // // //   const getWordSize = (count: number, maxCount: number) => {
// // // // // //     const minSize = 12;
// // // // // //     const maxSize = 32;
// // // // // //     const ratio = count / maxCount;
// // // // // //     return Math.round(minSize + (maxSize - minSize) * ratio);
// // // // // //   };

// // // // // //   const getSentimentColor = (sentiment: string) => {
// // // // // //     switch (sentiment) {
// // // // // //       case 'positive':
// // // // // //         return 'hsl(var(--sentiment-supportive))';
// // // // // //       case 'negative':
// // // // // //         return 'hsl(var(--sentiment-critical))';
// // // // // //       default:
// // // // // //         return 'hsl(var(--sentiment-neutral))';
// // // // // //     }
// // // // // //   };

// // // // // //   const maxCount = Math.max(...mockStats.topKeywords.map(k => k.count));

// // // // // //   return (
// // // // // //     <Card className="shadow-card border-border">
// // // // // //       <CardHeader>
// // // // // //         <CardTitle>Sentiment-Aware Word Cloud</CardTitle>
// // // // // //         <CardDescription>
// // // // // //           Most frequently mentioned terms colored by sentiment context
// // // // // //         </CardDescription>
        
// // // // // //         {/* Filters */}
// // // // // //         <div className="flex gap-4 mt-4">
// // // // // //           <Select value={selectedFilter} onValueChange={setSelectedFilter}>
// // // // // //             <SelectTrigger className="w-48">
// // // // // //               <SelectValue placeholder="Filter by section" />
// // // // // //             </SelectTrigger>
// // // // // //             <SelectContent>
// // // // // //               <SelectItem value="all">All Sections</SelectItem>
// // // // // //               <SelectItem value="compliance">Compliance</SelectItem>
// // // // // //               <SelectItem value="transparency">Transparency</SelectItem>
// // // // // //               <SelectItem value="implementation">Implementation</SelectItem>
// // // // // //               <SelectItem value="enforcement">Enforcement</SelectItem>
// // // // // //             </SelectContent>
// // // // // //           </Select>
          
// // // // // //           <Select value={selectedStakeholder} onValueChange={setSelectedStakeholder}>
// // // // // //             <SelectTrigger className="w-48">
// // // // // //               <SelectValue placeholder="Filter by stakeholder" />
// // // // // //             </SelectTrigger>
// // // // // //             <SelectContent>
// // // // // //               <SelectItem value="all">All Stakeholders</SelectItem>
// // // // // //               <SelectItem value="corporate">Corporate</SelectItem>
// // // // // //               <SelectItem value="ngo">NGO</SelectItem>
// // // // // //               <SelectItem value="professional">Professional</SelectItem>
// // // // // //               <SelectItem value="individual">Individual</SelectItem>
// // // // // //             </SelectContent>
// // // // // //           </Select>
// // // // // //         </div>
// // // // // //       </CardHeader>
// // // // // //       <CardContent>
// // // // // //         <div className="flex flex-wrap gap-4 items-center justify-center p-6 min-h-64">
// // // // // //           {mockStats.topKeywords.map((keyword, index) => (
// // // // // //             <span
// // // // // //               key={index}
// // // // // //               className="font-medium transition-all duration-200 hover:scale-110 cursor-pointer"
// // // // // //               style={{
// // // // // //                 fontSize: `${getWordSize(keyword.count, maxCount)}px`,
// // // // // //                 color: getSentimentColor(keyword.sentiment),
// // // // // //                 opacity: 0.7 + (keyword.count / maxCount) * 0.3
// // // // // //               }}
// // // // // //               title={`${keyword.word}: ${keyword.count} mentions`}
// // // // // //             >
// // // // // //               {keyword.word}
// // // // // //             </span>
// // // // // //           ))}
// // // // // //         </div>
        
// // // // // //         {/* Sentiment Legend */}
// // // // // //         <div className="border-t border-border pt-4 mt-4">
// // // // // //           <div className="flex items-center justify-between mb-3">
// // // // // //             <h4 className="text-sm font-medium text-foreground">Sentiment Legend</h4>
// // // // // //             <div className="flex items-center gap-4 text-xs">
// // // // // //               <div className="flex items-center gap-2">
// // // // // //                 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(var(--sentiment-supportive))' }}></div>
// // // // // //                 <span>Positive Context</span>
// // // // // //               </div>
// // // // // //               <div className="flex items-center gap-2">
// // // // // //                 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(var(--sentiment-critical))' }}></div>
// // // // // //                 <span>Negative Context</span>
// // // // // //               </div>
// // // // // //               <div className="flex items-center gap-2">
// // // // // //                 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(var(--sentiment-neutral))' }}></div>
// // // // // //                 <span>Neutral Context</span>
// // // // // //               </div>
// // // // // //             </div>
// // // // // //           </div>
          
// // // // // //           <div className="grid grid-cols-2 gap-2">
// // // // // //             {mockStats.topKeywords.slice(0, 6).map((keyword, index) => (
// // // // // //               <div key={index} className="flex items-center justify-between text-sm">
// // // // // //                 <span 
// // // // // //                   className="font-medium"
// // // // // //                   style={{ color: getSentimentColor(keyword.sentiment) }}
// // // // // //                 >
// // // // // //                   {keyword.word}
// // // // // //                 </span>
// // // // // //                 <span className="text-muted-foreground">
// // // // // //                   {keyword.count} mentions
// // // // // //                 </span>
// // // // // //               </div>
// // // // // //             ))}
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </CardContent>
// // // // // //     </Card>
// // // // // //   );
// // // // // // };

// // // // // // export default WordCloud;

// // // // // import { useState, useMemo } from 'react';
// // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// // // // // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// // // // // import { mockStats } from '@/data/mockData';

// // // // // // --- NEW: We need to add metadata to your keywords for filtering to work. ---
// // // // // // In a real app, this data would come from your backend or mockData.ts file.
// // // // // const keywordsWithMetadata = mockStats.topKeywords.map(keyword => {
// // // // //   if (['compliance', 'burden'].includes(keyword.word)) {
// // // // //     return { ...keyword, section: '2.1 GST issues', stakeholder: 'corporate' };
// // // // //   }
// // // // //   if (['transparency', 'accountability', 'privacy'].includes(keyword.word)) {
// // // // //     return { ...keyword, section: '3.1 Transparency Issues', stakeholder: 'ngo' };
// // // // //   }
// // // // //   if (['implementation', 'standards'].includes(keyword.word)) {
// // // // //     return { ...keyword, section: '2.2 Policy changes', stakeholder: 'professional' };
// // // // //   }
// // // // //   if (['enforcement'].includes(keyword.word)) {
// // // // //     return { ...keyword, section: '4.1 Enforcement Issues', stakeholder: 'individual' };
// // // // //   }
// // // // //   return { ...keyword, section: '2.3 General Issues', stakeholder: 'individual' }; // Default
// // // // // });


// // // // // const WordCloud = () => {
// // // // //   // Your state variables are perfect as they are.
// // // // //   const [selectedFilter, setSelectedFilter] = useState<string>('all');
// // // // //   const [selectedStakeholder, setSelectedStakeholder] = useState<string>('all');

// // // // //   // --- 1. FILTERING LOGIC that makes the dropdowns work ---
// // // // //   const filteredKeywords = useMemo(() => {
// // // // //     return keywordsWithMetadata.filter(keyword => {
// // // // //       const sectionMatch = selectedFilter === 'all' || keyword.section === selectedFilter;
// // // // //       const stakeholderMatch = selectedStakeholder === 'all' || keyword.stakeholder === selectedStakeholder;
// // // // //       return sectionMatch && stakeholderMatch;
// // // // //     });
// // // // //   }, [selectedFilter, selectedStakeholder]); // This logic re-runs only when filters change

// // // // //   // --- 2. UPDATED getWordSize function for more "dominant" sizing ---
// // // // //   const getWordSize = (count: number, maxCount: number) => {
// // // // //     if (maxCount === 0) return 14; // Prevent division by zero
// // // // //     const minSize = 14;
// // // // //     const maxSize = 52; // Increased max size for more visual impact
// // // // //     // Using Math.sqrt makes the size difference more pronounced and visually appealing.
// // // // //     const ratio = Math.sqrt(count / maxCount); 
// // // // //     return Math.round(minSize + (maxSize - minSize) * ratio);
// // // // //   };

// // // // //   const getSentimentColor = (sentiment: string) => {
// // // // //     switch (sentiment) {
// // // // //       case 'positive': return 'hsl(var(--sentiment-supportive))';
// // // // //       case 'negative': return 'hsl(var(--sentiment-critical))';
// // // // //       default: return 'hsl(var(--sentiment-neutral))';
// // // // //     }
// // // // //   };

// // // // //   // Calculate maxCount based on the *currently visible* keywords for accurate sizing.
// // // // //   const maxCount = useMemo(() => Math.max(1, ...filteredKeywords.map(k => k.count)), [filteredKeywords]);

// // // // //   return (
// // // // //     <Card className="shadow-card border-border">
// // // // //       <CardHeader>
// // // // //         <CardTitle>Sentiment-Aware Word Cloud</CardTitle>
// // // // //         <CardDescription>
// // // // //           Most frequently mentioned terms colored by sentiment context
// // // // //         </CardDescription>
        
// // // // //         {/* Your filters JSX is perfect and now fully functional */}
// // // // //         <div className="flex flex-col sm:flex-row gap-4 mt-4">
// // // // //           <Select value={selectedFilter} onValueChange={setSelectedFilter}>
// // // // //             <SelectTrigger className="w-full sm:w-48"><SelectValue placeholder="Filter by section" /></SelectTrigger>
// // // // //             <SelectContent>
// // // // //               <SelectItem value="all">All Sections</SelectItem>
// // // // //               <SelectItem value="compliance">Compliance</SelectItem>
// // // // //               <SelectItem value="transparency">Transparency</SelectItem>
// // // // //               <SelectItem value="implementation">Implementation</SelectItem>
// // // // //               <SelectItem value="enforcement">Enforcement</SelectItem>
// // // // //             </SelectContent>
// // // // //           </Select>
          
// // // // //           <Select value={selectedStakeholder} onValueChange={setSelectedStakeholder}>
// // // // //             <SelectTrigger className="w-full sm:w-48"><SelectValue placeholder="Filter by stakeholder" /></SelectTrigger>
// // // // //             <SelectContent>
// // // // //               <SelectItem value="all">All Stakeholders</SelectItem>
// // // // //               <SelectItem value="corporate">Corporate</SelectItem>
// // // // //               <SelectItem value="ngo">NGO</SelectItem>
// // // // //               <SelectItem value="professional">Professional</SelectItem>
// // // // //               <SelectItem value="individual">Individual</SelectItem>
// // // // //             </SelectContent>
// // // // //           </Select>
// // // // //         </div>
// // // // //       </CardHeader>
// // // // //       <CardContent>
// // // // //         <div className="flex flex-wrap gap-x-6 gap-y-4 items-center justify-center p-6 min-h-64 rounded-lg bg-muted/50">
// // // // //           {/* --- 3. RENDER THE FILTERED and better-sized words --- */}
// // // // //           {filteredKeywords.length > 0 ? (
// // // // //             filteredKeywords.map((keyword, index) => (
// // // // //               <span
// // // // //                 key={index}
// // // // //                 className="font-bold transition-all duration-200 hover:scale-110 cursor-pointer"
// // // // //                 style={{
// // // // //                   fontSize: `${getWordSize(keyword.count, maxCount)}px`,
// // // // //                   color: getSentimentColor(keyword.sentiment),
// // // // //                   // Removed opacity for a cleaner look, letting color and size speak.
// // // // //                 }}
// // // // //                 title={`${keyword.word}: ${keyword.count} mentions`}
// // // // //               >
// // // // //                 {keyword.word}
// // // // //               </span>
// // // // //             ))
// // // // //           ) : (
// // // // //             <p className="text-muted-foreground">No keywords match the selected filters.</p>
// // // // //           )}
// // // // //         </div>
        

// // // // // {/* Sentiment Legend */}
// // // // //         <div className="border-t border-border pt-4 mt-4">
// // // // //           <div className="flex items-center justify-between mb-3">
// // // // //             <h4 className="text-sm font-medium text-foreground">Sentiment Legend</h4>
// // // // //             <div className="flex items-center gap-4 text-xs">
// // // // //               <div className="flex items-center gap-2">
// // // // //                 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(var(--sentiment-supportive))' }}></div>
// // // // //                 <span>Positive Context</span>
// // // // //               </div>
// // // // //               <div className="flex items-center gap-2">
// // // // //                 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(var(--sentiment-critical))' }}></div>
// // // // //                 <span>Negative Context</span>
// // // // //               </div>
// // // // //               <div className="flex items-center gap-2">
// // // // //                 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(var(--sentiment-neutral))' }}></div>
// // // // //                 <span>Neutral Context</span>
// // // // //               </div>
// // // // //             </div>
// // // // //           </div>
          
// // // // //           <div className="grid grid-cols-2 gap-2">
// // // // //             {mockStats.topKeywords.slice(0, 6).map((keyword, index) => (
// // // // //               <div key={index} className="flex items-center justify-between text-sm">
// // // // //                 <span 
// // // // //                   className="font-medium"
// // // // //                   style={{ color: getSentimentColor(keyword.sentiment) }}
// // // // //                 >
// // // // //                   {keyword.word}
// // // // //                 </span>
// // // // //                 <span className="text-muted-foreground">
// // // // //                   {keyword.count} mentions
// // // // //                 </span>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>
// // // // //         </div>
// // // // //       </CardContent>
// // // // //     </Card>
// // // // //   );
// // // // // };

// // // // // export default WordCloud;




// // // // // // import { useState, useMemo } from 'react';
// // // // // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// // // // // // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// // // // // // // Make sure to use the new detailed keyword data you created
// // // // // // import { mockSentimentKeywords } from '@/data/mockData';

// // // // // // const WordCloud = () => {
// // // // // //   const [selectedSection, setSelectedSection] = useState<string>('all');
// // // // // //   const [selectedStakeholder, setSelectedStakeholder] = useState<string>('all');

// // // // // //   // --- 1. DYNAMIC FILTERING LOGIC ---
// // // // // //   const filteredKeywords = useMemo(() => {
// // // // // //     // Start with the full list
// // // // // //     return mockSentimentKeywords.filter(keyword => {
// // // // // //       // Check if the keyword matches the selected section filter (or if the filter is 'all')
// // // // // //       const sectionMatch = selectedSection === 'all' || keyword.sections.includes(selectedSection);
// // // // // //       // Check if the keyword matches the selected stakeholder filter (or if the filter is 'all')
// // // // // //       const stakeholderMatch = selectedStakeholder === 'all' || keyword.stakeholders.includes(selectedStakeholder);
// // // // // //       // The keyword is included only if it matches both filters
// // // // // //       return sectionMatch && stakeholderMatch;
// // // // // //     });
// // // // // //   }, [selectedSection, selectedStakeholder]); // This logic re-runs only when filters change

// // // // // //   // --- 2. HELPER FUNCTIONS ---
// // // // // //   const getWordSize = (count: number, maxCount: number) => {
// // // // // //     if (maxCount === 0) return 14; // Prevent division by zero
// // // // // //     const minSize = 14;
// // // // // //     const maxSize = 48; // Increased max size for more impact
// // // // // //     // Using Math.sqrt provides a better visual distribution of sizes than a linear scale
// // // // // //     const ratio = Math.sqrt(count / maxCount); 
// // // // // //     return Math.round(minSize + (maxSize - minSize) * ratio);
// // // // // //   };

// // // // // //   // Determines the color based on which sentiment count is highest
// // // // // //   const getDominantSentimentColor = (keyword: (typeof mockSentimentKeywords)[0]) => {
// // // // // //     const { positiveCount, negativeCount, neutralCount } = keyword;
// // // // // //     const max = Math.max(positiveCount, negativeCount, neutralCount);
// // // // // //     if (max === negativeCount) return 'hsl(var(--sentiment-critical))';
// // // // // //     if (max === positiveCount) return 'hsl(var(--sentiment-supportive))';
// // // // // //     return 'hsl(var(--sentiment-neutral))';
// // // // // //   };
  
// // // // // //   // Gets the max count from the *currently filtered* keywords for accurate sizing
// // // // // //   const maxCount = useMemo(() => Math.max(1, ...filteredKeywords.map(k => k.totalCount)), [filteredKeywords]);

// // // // // //   return (
// // // // // //     <Card className="shadow-card border-border">
// // // // // //       <CardHeader>
// // // // // //         <CardTitle>Sentiment-Aware Word Cloud</CardTitle>
// // // // // //         <CardDescription>
// // // // // //           Frequently mentioned terms colored by their dominant sentiment context.
// // // // // //         </CardDescription>
        
// // // // // //         {/* Filter Controls */}
// // // // // //         <div className="flex flex-col sm:flex-row gap-4 mt-4">
// // // // // //           <Select value={selectedSection} onValueChange={setSelectedSection}>
// // // // // //             <SelectTrigger className="w-full sm:w-48"><SelectValue placeholder="Filter by theme" /></SelectTrigger>
// // // // // //             <SelectContent>
// // // // // //               <SelectItem value="all">All Themes</SelectItem>
// // // // // //               {/* These values must exactly match the strings in your mock data */}
// // // // // //               <SelectItem value="Compliance">Compliance</SelectItem>
// // // // // //               <SelectItem value="Implementation">Implementation</SelectItem>
// // // // // //               <SelectItem value="Enforcement">Enforcement</SelectItem>
// // // // // //               <SelectItem value="Transparency">Transparency</SelectItem>
// // // // // //             </SelectContent>
// // // // // //           </Select>
          
// // // // // //           <Select value={selectedStakeholder} onValueChange={setSelectedStakeholder}>
// // // // // //             <SelectTrigger className="w-full sm:w-48"><SelectValue placeholder="Filter by stakeholder" /></SelectTrigger>
// // // // // //             <SelectContent>
// // // // // //               <SelectItem value="all">All Stakeholders</SelectItem>
// // // // // //               {/* These values must exactly match the strings in your mock data */}
// // // // // //               <SelectItem value="Corporate">Corporate</SelectItem>
// // // // // //               <SelectItem value="NGO">NGO</SelectItem>
// // // // // //               <SelectItem value="Professional">Professional</SelectItem>
// // // // // //               <SelectItem value="Individual">Individual</SelectItem>
// // // // // //             </SelectContent>
// // // // // //           </Select>
// // // // // //         </div>
// // // // // //       </CardHeader>
// // // // // //       <CardContent>
// // // // // //         {/* Word Cloud Display Area */}
// // // // // //         <div className="flex flex-wrap gap-x-6 gap-y-4 items-center justify-center p-6 min-h-64 rounded-lg bg-muted/50">
// // // // // //           {filteredKeywords.length > 0 ? (
// // // // // //             filteredKeywords.map((keyword) => {
// // // // // //               const negPercent = ((keyword.negativeCount / keyword.totalCount) * 100).toFixed(0);
// // // // // //               const posPercent = ((keyword.positiveCount / keyword.totalCount) * 100).toFixed(0);
// // // // // //               const neuPercent = 100 - parseInt(negPercent) - parseInt(posPercent);

// // // // // //               return (
// // // // // //                 <span
// // // // // //                   key={keyword.word}
// // // // // //                   className="font-bold transition-all duration-200 hover:scale-110 cursor-pointer"
// // // // // //                   style={{
// // // // // //                     fontSize: `${getWordSize(keyword.totalCount, maxCount)}px`,
// // // // // //                     color: getDominantSentimentColor(keyword),
// // // // // //                   }}
// // // // // //                   // This title attribute creates the detailed, multi-line hover tooltip
// // // // // //                   title={`Mentions: ${keyword.totalCount}\nNegative: ${negPercent}%\nPositive: ${posPercent}%\nNeutral: ${neuPercent}%`}
// // // // // //                 >
// // // // // //                   {keyword.word}
// // // // // //                 </span>
// // // // // //               );
// // // // // //             })
// // // // // //           ) : (
// // // // // //             <p className="text-muted-foreground">No keywords match the selected filters.</p>
// // // // // //           )}
// // // // // //         </div>
        
// // // // // //         {/* Sentiment Legend */}
// // // // // //         <div className="border-t border-border pt-4 mt-4">
// // // // // //           <h4 className="text-sm font-medium text-foreground mb-3">Sentiment Legend</h4>
// // // // // //           <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
// // // // // //             <div className="flex items-center gap-2">
// // // // // //               <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(var(--sentiment-supportive))' }}></div>
// // // // // //               <span>Dominantly Positive</span>
// // // // // //             </div>
// // // // // //             <div className="flex items-center gap-2">
// // // // // //               <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(var(--sentiment-critical))' }}></div>
// // // // // //               <span>Dominantly Negative</span>
// // // // // //             </div>
// // // // // //             <div className="flex items-center gap-2">
// // // // // //               <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(var(--sentiment-neutral))' }}></div>
// // // // // //               <span>Dominantly Neutral / Mixed</span>
// // // // // //             </div>
// // // // // //           </div>
// // // // // //         </div>
// // // // // //       </CardContent>
// // // // // //     </Card>
// // // // // //   );
// // // // // // };

// // // // // // export default WordCloud;


// // // import { useState, useMemo } from 'react';
// // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// // // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// // // // We are no longer using mockStats for this component, as we define more detailed data below.

// // // // --- 1. EXPANDED & DETAILED MOCK DATA ---
// // // // This data includes the specific section names and more variety for better filtering.
// // // // Replace your old mockKeywords array with this one.
// // // const mockKeywords = [
// // //   // --- Large Words (Counts 70+) ---
// // //   { word: 'transparency', count: 100, sentiment: 'positive', section: '3.1 Transparency Issues', stakeholder: 'NGO' },
// // //   { word: 'compliance', count: 95, sentiment: 'negative', section: '4.1 Enforcement Issues', stakeholder: 'Corporate' },
// // //   { word: 'GST', count: 80, sentiment: 'neutral', section: '2.1 GST issues', stakeholder: 'Corporate' },
  
// // //   // --- Medium Words (Counts 25-60) ---
// // //   { word: 'burden', count: 55, sentiment: 'negative', section: '2.1 GST issues', stakeholder: 'Corporate' },
// // //   { word: 'policy', count: 48, sentiment: 'neutral', section: '2.2 Policy changes', stakeholder: 'Professional' },
// // //   { word: 'tax', count: 42, sentiment: 'negative', section: '2.1 GST issues', stakeholder: 'Corporate' },
// // //   { word: 'enforcement', count: 40, sentiment: 'negative', section: '4.1 Enforcement Issues', stakeholder: 'Individual' },
// // //   { word: 'implementation', count: 38, sentiment: 'negative', section: '2.2 Policy changes', stakeholder: 'Professional' },
// // //   { word: 'benefits', count: 35, sentiment: 'positive', section: '2.1 GST issues', stakeholder: 'NGO' },
// // //   { word: 'penalties', count: 33, sentiment: 'negative', section: '4.1 Enforcement Issues', stakeholder: 'NGO' },
// // //   { word: 'accountability', count: 30, sentiment: 'positive', section: '3.1 Transparency Issues', stakeholder: 'NGO' },
// // //   { word: 'standards', count: 28, sentiment: 'neutral', section: '2.2 Policy changes', stakeholder: 'Corporate' },
// // //   { word: 'credit', count: 26, sentiment: 'positive', section: '2.1 GST issues', stakeholder: 'Professional' },
  
// // //   // --- Small Words (Counts < 25) ---
// // //   { word: 'privacy', count: 24, sentiment: 'negative', section: '3.1 Transparency Issues', stakeholder: 'Individual' },
// // //   { word: 'SMEs', count: 22, sentiment: 'negative', section: '2.1 GST issues', stakeholder: 'Corporate' },
// // //   { word: 'rights', count: 19, sentiment: 'positive', section: '3.1 Transparency Issues', stakeholder: 'NGO' },
// // //   { word: 'clarity', count: 17, sentiment: 'negative', section: '2.2 Policy changes', stakeholder: 'Professional' },
// // //   { word: 'data', count: 15, sentiment: 'neutral', section: '3.1 Transparency Issues', stakeholder: 'Individual' },
// // //   { word: 'cost', count: 14, sentiment: 'negative', section: '2.1 GST issues', stakeholder: 'Corporate' },
// // //   { word: 'guidelines', count: 12, sentiment: 'neutral', section: '2.2 Policy changes', stakeholder: 'Professional' },
// // //   { word: 'risk', count: 10, sentiment: 'negative', section: '4.1 Enforcement Issues', stakeholder: 'Professional' },
// // //   { word: 'access', count: 9, sentiment: 'positive', section: '3.1 Transparency Issues', stakeholder: 'NGO' },
// // //   { word: 'feedback', count: 7, sentiment: 'neutral', section: '2.2 Policy changes', stakeholder: 'Individual' },
// // // ];

// // // const WordCloud = () => {
// // //   const [selectedSection, setSelectedSection] = useState<string>('all');
// // //   const [selectedStakeholder, setSelectedStakeholder] = useState<string>('all');

// // //   // --- DYNAMICALLY GENERATE UNIQUE FILTER OPTIONS ---
// // //   const uniqueSections = useMemo(() => Array.from(new Set(mockKeywords.map(k => k.section))).sort(), []);
// // //   const uniqueStakeholders = useMemo(() => Array.from(new Set(mockKeywords.map(k => k.stakeholder))).sort(), []);

// // //   // Filtering logic that powers the dropdowns
// // //   const filteredKeywords = useMemo(() => {
// // //     return mockKeywords.filter(keyword => {
// // //       const sectionMatch = selectedSection === 'all' || keyword.section === selectedSection;
// // //       const stakeholderMatch = selectedStakeholder === 'all' || keyword.stakeholder === selectedStakeholder;
// // //       return sectionMatch && stakeholderMatch;
// // //     });
// // //   }, [selectedSection, selectedStakeholder]);

// // //   // Updated sizing function for more dominant words
// // //   const getWordSize = (count: number, maxCount: number) => {
// // //     if (maxCount === 0) return 14;
// // //     const minSize = 14;
// // //     const maxSize = 52;
// // //     const ratio = Math.sqrt(count / maxCount); 
// // //     return Math.round(minSize + (maxSize - minSize) * ratio);
// // //   };

// // //   const getSentimentColor = (sentiment: string) => {
// // //     switch (sentiment) {
// // //       case 'positive': return 'hsl(var(--sentiment-supportive))';
// // //       case 'negative': return 'hsl(var(--sentiment-critical))';
// // //       default: return 'hsl(var(--sentiment-neutral))';
// // //     }
// // //   };

// // //   const maxCount = useMemo(() => Math.max(1, ...filteredKeywords.map(k => k.count)), [filteredKeywords]);

// // //   return (
// // //     <Card className="shadow-card border-border">
// // //       <CardHeader>
// // //         <CardTitle>Sentiment-Aware Word Cloud</CardTitle>
// // //         <CardDescription>
// // //           Most frequently mentioned terms colored by sentiment context
// // //         </CardDescription>
        
// // //         {/* --- 2. FILTERS NOW USE DYNAMIC DATA --- */}
// // //         <div className="flex flex-col sm:flex-row gap-4 mt-4">
// // //           <Select value={selectedSection} onValueChange={setSelectedSection}>
// // //             <SelectTrigger className="w-full sm:w-64">
// // //               <SelectValue placeholder="Filter by section" />
// // //             </SelectTrigger>
// // //             <SelectContent>
// // //               <SelectItem value="all">All Sections</SelectItem>
// // //               {uniqueSections.map(section => (
// // //                 <SelectItem key={section} value={section}>
// // //                   {section}
// // //                 </SelectItem>
// // //               ))}
// // //             </SelectContent>
// // //           </Select>
          
// // //           <Select value={selectedStakeholder} onValueChange={setSelectedStakeholder}>
// // //             <SelectTrigger className="w-full sm:w-48">
// // //               <SelectValue placeholder="Filter by stakeholder" />
// // //             </SelectTrigger>
// // //             <SelectContent>
// // //               <SelectItem value="all">All Stakeholders</SelectItem>
// // //               {uniqueStakeholders.map(stakeholder => (
// // //                  <SelectItem key={stakeholder} value={stakeholder}>
// // //                   {stakeholder}
// // //                 </SelectItem>
// // //               ))}
// // //             </SelectContent>
// // //           </Select>
// // //         </div>
// // //       </CardHeader>
// // //       <CardContent>
// // //         <div className="flex flex-wrap gap-x-6 gap-y-4 items-center justify-center p-6 min-h-64 rounded-lg bg-muted/50">
// // //           {filteredKeywords.length > 0 ? (
// // //             filteredKeywords.map((keyword, index) => (
// // //               <span
// // //                 key={index}
// // //                 className="font-bold transition-all duration-200 hover:scale-110 cursor-pointer"
// // //                 style={{
// // //                   fontSize: `${getWordSize(keyword.count, maxCount)}px`,
// // //                   color: getSentimentColor(keyword.sentiment),
// // //                 }}
// // //                 title={`${keyword.word}: ${keyword.count} mentions`}
// // //               >
// // //                 {keyword.word}
// // //               </span>
// // //             ))
// // //           ) : (
// // //             <p className="text-muted-foreground">No keywords match the selected filters.</p>
// // //           )}
// // //         </div>
        
// // //         {/* --- 3. LEGEND NOW USES FILTERED DATA --- */}
// // //         <div className="border-t border-border pt-4 mt-4">
// // //           <div className="flex items-center justify-between mb-3">
// // //             <h4 className="text-sm font-medium text-foreground">Top Keywords in View</h4>
// // //             {/* ... legend color key ... */}
// // //           </div>
// // //           <div className="grid grid-cols-2 gap-x-4 gap-y-2">
// // //             {filteredKeywords.slice(0, 6).map((keyword, index) => (
// // //               <div key={index} className="flex items-center justify-between text-sm">
// // //                 <span className="font-medium" style={{ color: getSentimentColor(keyword.sentiment) }}>
// // //                   {keyword.word}
// // //                 </span>
// // //                 <span className="text-muted-foreground">
// // //                   {keyword.count} mentions
// // //                 </span>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </CardContent>
// // //     </Card>
// // //   );
// // // };

// // // export default WordCloud;



// // // import { useState, useMemo } from 'react';
// // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// // // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// // // // --- 1. EXPANDED & DETAILED MOCK DATA ---
// // // // This data includes the specific section names and more variety for better filtering.
// // // const mockKeywords = [
// // //   // --- Large Words (Counts 70+) ---
// // //   { word: 'transparency', count: 180, sentiment: 'positive', section: '3.1 Transparency Issues', stakeholder: 'NGO' },
// // //   { word: 'compliance', count: 150, sentiment: 'negative', section: '4.1 Enforcement Issues', stakeholder: 'Corporate' },
// // //   { word: 'GST', count: 200, sentiment: 'neutral', section: '2.1 GST issues', stakeholder: 'Corporate' },
// // //   { word: 'burden', count: 190, sentiment: 'negative', section: '2.1 GST issues', stakeholder: 'Corporate' },
// // //     { word: 'policy', count: 160, sentiment: 'neutral', section: '2.2 Policy changes', stakeholder: 'Professional' },
// // //   { word: 'tax', count: 210, sentiment: 'negative', section: '2.1 GST issues', stakeholder: 'Corporate' },
// // //     { word: 'privacy', count: 210, sentiment: 'negative', section: '3.1 Transparency Issues', stakeholder: 'Individual' },
// // //   { word: 'SMEs', count: 150, sentiment: 'negative', section: '2.1 GST issues', stakeholder: 'Corporate' },
  
// // //   // --- Medium Words (Counts 25-60) ---
  

// // //   { word: 'enforcement', count: 100, sentiment: 'negative', section: '4.1 Enforcement Issues', stakeholder: 'Individual' },
// // //   { word: 'implementation', count: 70, sentiment: 'negative', section: '2.2 Policy changes', stakeholder: 'Professional' },
// // //   { word: 'benefits', count: 60, sentiment: 'positive', section: '2.1 GST issues', stakeholder: 'NGO' },
// // //   { word: 'penalties', count: 59, sentiment: 'negative', section: '4.1 Enforcement Issues', stakeholder: 'NGO' },
// // //   { word: 'accountability', count: 60, sentiment: 'positive', section: '3.1 Transparency Issues', stakeholder: 'NGO' },
// // //   { word: 'standards', count: 77, sentiment: 'neutral', section: '2.2 Policy changes', stakeholder: 'Corporate' },
// // //   { word: 'credit', count: 78, sentiment: 'positive', section: '2.1 GST issues', stakeholder: 'Professional' },
  
// // //   // --- Small Words (Counts < 25) ---

// // //   { word: 'rights', count: 19, sentiment: 'positive', section: '3.1 Transparency Issues', stakeholder: 'NGO' },
// // //   { word: 'clarity', count: 17, sentiment: 'negative', section: '2.2 Policy changes', stakeholder: 'Professional' },
// // //   { word: 'data', count: 15, sentiment: 'neutral', section: '3.1 Transparency Issues', stakeholder: 'Individual' },
// // //   { word: 'cost', count: 14, sentiment: 'negative', section: '2.1 GST issues', stakeholder: 'Corporate' },
// // //   { word: 'guidelines', count: 12, sentiment: 'neutral', section: '2.2 Policy changes', stakeholder: 'Professional' },
// // //   { word: 'risk', count: 10, sentiment: 'negative', section: '4.1 Enforcement Issues', stakeholder: 'Professional' },
// // //   { word: 'access', count: 9, sentiment: 'positive', section: '3.1 Transparency Issues', stakeholder: 'NGO' },
// // //   { word: 'feedback', count: 7, sentiment: 'neutral', section: '2.2 Policy changes', stakeholder: 'Individual' },
// // // ];

// // // // --- Utility Function for Shuffling ---
// // // // Using Fisher-Yates shuffle for unbiased randomization
// // // const shuffleArray = <T,>(array: T[]): T[] => {
// // //   const newArray = [...array];
// // //   for (let i = newArray.length - 1; i > 0; i--) {
// // //     const j = Math.floor(Math.random() * (i + 1));
// // //     [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
// // //   }
// // //   return newArray;
// // // };

// // // const WordCloud = () => {
// // //   const [selectedSection, setSelectedSection] = useState<string>('all');
// // //   const [selectedStakeholder, setSelectedStakeholder] = useState<string>('all');

// // //   // --- DYNAMICALLY GENERATE UNIQUE FILTER OPTIONS ---
// // //   const uniqueSections = useMemo(() => Array.from(new Set(mockKeywords.map(k => k.section))).sort(), []);
// // //   const uniqueStakeholders = useMemo(() => Array.from(new Set(mockKeywords.map(k => k.stakeholder))).sort(), []);

// // //   // 1. Filter the keywords based on selections
// // //   const filteredKeywords = useMemo(() => {
// // //     return mockKeywords.filter(keyword => {
// // //       const sectionMatch = selectedSection === 'all' || keyword.section === selectedSection;
// // //       const stakeholderMatch = selectedStakeholder === 'all' || keyword.stakeholder === selectedStakeholder;
// // //       return sectionMatch && stakeholderMatch;
// // //     });
// // //   }, [selectedSection, selectedStakeholder]);

// // //   // 2. Shuffle the filtered list for the mixed cloud layout
// // //   // We use useMemo so it only re-shuffles when the filters change.
// // //   const shuffledKeywords = useMemo(() => {
// // //     return shuffleArray(filteredKeywords);
// // //   }, [filteredKeywords]);

// // //   // Updated sizing function for more dominant words
// // //   const getWordSize = (count: number, maxCount: number) => {
// // //     if (maxCount === 0) return 14;
// // //     const minSize = 14;
// // //     const maxSize = 52;
// // //     // Sqrt scaling prevents the largest words from completely overshadowing others
// // //     const ratio = Math.sqrt(count / maxCount); 
// // //     return Math.round(minSize + (maxSize - minSize) * ratio);
// // //   };

// // //   const getSentimentColor = (sentiment: string) => {
// // //     switch (sentiment) {
// // //       case 'positive': return 'hsl(var(--sentiment-supportive))';
// // //       case 'negative': return 'hsl(var(--sentiment-critical))';
// // //       default: return 'hsl(var(--sentiment-neutral))';
// // //     }
// // //   };

// // //   const maxCount = useMemo(() => Math.max(1, ...filteredKeywords.map(k => k.count)), [filteredKeywords]);

// // //   return (
// // //     <Card className="shadow-card border-border">
// // //       <CardHeader>
// // //         <CardTitle>Sentiment-Aware Word Cloud</CardTitle>
// // //         <CardDescription>
// // //           Most frequently mentioned terms colored by sentiment context
// // //         </CardDescription>
        
// // //         {/* --- FILTERS --- */}
// // //         <div className="flex flex-col sm:flex-row gap-4 mt-4">
// // //           <Select value={selectedSection} onValueChange={setSelectedSection}>
// // //             <SelectTrigger className="w-full sm:w-64">
// // //               <SelectValue placeholder="Filter by section" />
// // //             </SelectTrigger>
// // //             <SelectContent>
// // //               <SelectItem value="all">All Sections</SelectItem>
// // //               {uniqueSections.map(section => (
// // //                 <SelectItem key={section} value={section}>
// // //                   {section}
// // //                 </SelectItem>
// // //               ))}
// // //             </SelectContent>
// // //           </Select>
          
// // //           <Select value={selectedStakeholder} onValueChange={setSelectedStakeholder}>
// // //             <SelectTrigger className="w-full sm:w-48">
// // //               <SelectValue placeholder="Filter by stakeholder" />
// // //             </SelectTrigger>
// // //             <SelectContent>
// // //               <SelectItem value="all">All Stakeholders</SelectItem>
// // //               {uniqueStakeholders.map(stakeholder => (
// // //                  <SelectItem key={stakeholder} value={stakeholder}>
// // //                   {stakeholder}
// // //                 </SelectItem>
// // //               ))}
// // //             </SelectContent>
// // //           </Select>
// // //         </div>
// // //       </CardHeader>
// // //       <CardContent>
// // //         {/* --- WORD CLOUD RENDERING (Uses shuffledKeywords) --- */}
// // //         <div className="flex flex-wrap gap-x-6 gap-y-4 items-center justify-center p-8 min-h-64 rounded-lg bg-muted/50">
// // //           {shuffledKeywords.length > 0 ? (
// // //             shuffledKeywords.map((keyword, index) => (
// // //               <span
// // //                 key={`${keyword.word}-${index}`} // Use index in key as words can repeat in other scenarios
// // //                 className="font-bold transition-all duration-200 hover:scale-110 cursor-pointer"
// // //                 style={{
// // //                   fontSize: `${getWordSize(keyword.count, maxCount)}px`,
// // //                   color: getSentimentColor(keyword.sentiment),
// // //                 }}
// // //                 title={`${keyword.word}: ${keyword.count} mentions`}
// // //               >
// // //                 {keyword.word}
// // //               </span>
// // //             ))
// // //           ) : (
// // //             <p className="text-muted-foreground">No keywords match the selected filters.</p>
// // //           )}
// // //         </div>
        
// // //         {/* --- LEGEND (Uses original filteredKeywords for correct sorting) --- */}
// // //         <div className="border-t border-border pt-4 mt-6">
// // //           <div className="flex items-center justify-between mb-3">
// // //             <h4 className="text-sm font-medium text-foreground">Top Keywords in View</h4>
// // //           </div>
// // //           <div className="grid grid-cols-2 gap-x-4 gap-y-2">
// // //             {filteredKeywords.slice(0, 6).map((keyword, index) => (
// // //               <div key={index} className="flex items-center justify-between text-sm">
// // //                 <span className="font-medium" style={{ color: getSentimentColor(keyword.sentiment) }}>
// // //                   {keyword.word}
// // //                 </span>
// // //                 <span className="text-muted-foreground">
// // //                   {keyword.count} mentions
// // //                 </span>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </CardContent>
// // //     </Card>
// // //   );
// // // };

// // // export default WordCloud;

// // // import { useState, useMemo } from 'react';
// // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// // // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// // // // --- 1. EXPANDED & DETAILED MOCK DATA ---
// // // // This data includes the specific section names and more variety for better filtering.
// // // const mockKeywords = [
// // //   // --- Large Words (Counts 70+) ---
// // //   { word: 'transparency', count: 180, sentiment: 'positive', section: '3.1 Transparency Issues', stakeholder: 'NGO' },
// // //   { word: 'compliance', count: 150, sentiment: 'negative', section: '4.1 Enforcement Issues', stakeholder: 'Corporate' },
// // //   { word: 'GST', count: 200, sentiment: 'neutral', section: '2.1 GST issues', stakeholder: 'Corporate' },
// // //   { word: 'burden', count: 190, sentiment: 'negative', section: '2.1 GST issues', stakeholder: 'Corporate' },
// // //   { word: 'policy', count: 160, sentiment: 'neutral', section: '2.2 Policy changes', stakeholder: 'Professional' },
// // //   { word: 'tax', count: 210, sentiment: 'negative', section: '2.1 GST issues', stakeholder: 'Corporate' },
// // //   { word: 'privacy', count: 210, sentiment: 'negative', section: '3.1 Transparency Issues', stakeholder: 'Individual' },
// // //   { word: 'SMEs', count: 150, sentiment: 'negative', section: '2.1 GST issues', stakeholder: 'Corporate' },
  
// // //   // --- Medium Words (Counts 25-60) ---
// // //   { word: 'enforcement', count: 100, sentiment: 'negative', section: '4.1 Enforcement Issues', stakeholder: 'Individual' },
// // //   { word: 'implementation', count: 70, sentiment: 'negative', section: '2.2 Policy changes', stakeholder: 'Professional' },
// // //   { word: 'benefits', count: 60, sentiment: 'positive', section: '2.1 GST issues', stakeholder: 'NGO' },
// // //   { word: 'penalties', count: 59, sentiment: 'negative', section: '4.1 Enforcement Issues', stakeholder: 'NGO' },
// // //   { word: 'accountability', count: 60, sentiment: 'positive', section: '3.1 Transparency Issues', stakeholder: 'NGO' },
// // //   { word: 'standards', count: 77, sentiment: 'neutral', section: '2.2 Policy changes', stakeholder: 'Corporate' },
// // //   { word: 'credit', count: 78, sentiment: 'positive', section: '2.1 GST issues', stakeholder: 'Professional' },
  
// // //   // --- Small Words (Counts < 25) ---
// // //   { word: 'rights', count: 19, sentiment: 'positive', section: '3.1 Transparency Issues', stakeholder: 'NGO' },
// // //   { word: 'clarity', count: 17, sentiment: 'negative', section: '2.2 Policy changes', stakeholder: 'Professional' },
// // //   { word: 'data', count: 15, sentiment: 'neutral', section: '3.1 Transparency Issues', stakeholder: 'Individual' },
// // //   { word: 'cost', count: 14, sentiment: 'negative', section: '2.1 GST issues', stakeholder: 'Corporate' },
// // //   { word: 'guidelines', count: 12, sentiment: 'neutral', section: '2.2 Policy changes', stakeholder: 'Professional' },
// // //   { word: 'risk', count: 10, sentiment: 'negative', section: '4.1 Enforcement Issues', stakeholder: 'Professional' },
// // //   { word: 'access', count: 9, sentiment: 'positive', section: '3.1 Transparency Issues', stakeholder: 'NGO' },
// // //   { word: 'feedback', count: 7, sentiment: 'neutral', section: '2.2 Policy changes', stakeholder: 'Individual' },
// // // ];

// // // // --- Defines the exact visual order of words from the image ---
// // // const displayOrder = [
// // //     'guidelines', 'access', 'privacy', 'accountability', 'transparency', 'burden',
// // //     'compliance', 'rights', 'cost', 'implementation', 'policy', 'penalties', 'SMEs',
// // //     'tax', 'standards', 'risk', 'data', 'benefits', 'feedback', 'credit', 'GST', 'clarity',
// // //     'enforcement'
// // // ];


// // // const WordCloud = () => {
// // //   const [selectedSection, setSelectedSection] = useState<string>('all');
// // //   const [selectedStakeholder, setSelectedStakeholder] = useState<string>('all');

// // //   // --- DYNAMICALLY GENERATE UNIQUE FILTER OPTIONS ---
// // //   const uniqueSections = useMemo(() => Array.from(new Set(mockKeywords.map(k => k.section))).sort(), []);
// // //   const uniqueStakeholders = useMemo(() => Array.from(new Set(mockKeywords.map(k => k.stakeholder))).sort(), []);

// // //   // 1. Filter the keywords based on selections
// // //   const filteredKeywords = useMemo(() => {
// // //     return mockKeywords.filter(keyword => {
// // //       const sectionMatch = selectedSection === 'all' || keyword.section === selectedSection;
// // //       const stakeholderMatch = selectedStakeholder === 'all' || keyword.stakeholder === selectedStakeholder;
// // //       return sectionMatch && stakeholderMatch;
// // //     });
// // //   }, [selectedSection, selectedStakeholder]);

// // //   // 2. Sort the filtered keywords into the predefined display order
// // //   const orderedKeywords = useMemo(() => {
// // //     const wordOrderMap = new Map(displayOrder.map((word, index) => [word, index]));
// // //     // Sort a copy of the array based on the index in our displayOrder map
// // //     return [...filteredKeywords].sort((a, b) => {
// // //       const indexA = wordOrderMap.get(a.word) ?? Infinity;
// // //       const indexB = wordOrderMap.get(b.word) ?? Infinity;
// // //       return indexA - indexB;
// // //     });
// // //   }, [filteredKeywords]);
  

// // //   // Updated sizing function for more dominant words
// // //   const getWordSize = (count: number, maxCount: number) => {
// // //     if (maxCount === 0) return 14;
// // //     const minSize = 14;
// // //     const maxSize = 52;
// // //     // Sqrt scaling prevents the largest words from completely overshadowing others
// // //     const ratio = Math.sqrt(count / maxCount); 
// // //     return Math.round(minSize + (maxSize - minSize) * ratio);
// // //   };

// // //   const getSentimentColor = (sentiment: string) => {
// // //     switch (sentiment) {
// // //       case 'positive': return 'hsl(var(--sentiment-supportive))';
// // //       case 'negative': return 'hsl(var(--sentiment-critical))';
// // //       default: return 'hsl(var(--sentiment-neutral))';
// // //     }
// // //   };

// // //   const maxCount = useMemo(() => Math.max(1, ...filteredKeywords.map(k => k.count)), [filteredKeywords]);

// // //   // Sort keywords by count for the legend
// // //   const topKeywordsForLegend = useMemo(() => {
// // //       return [...filteredKeywords].sort((a,b) => b.count - a.count);
// // //   }, [filteredKeywords]);

// // //   return (
// // //     <Card className="shadow-card border-border">
// // //       <CardHeader>
// // //         <CardTitle>Sentiment-Aware Word Cloud</CardTitle>
// // //         <CardDescription>
// // //           Most frequently mentioned terms colored by sentiment context
// // //         </CardDescription>
        
// // //         {/* --- FILTERS --- */}
// // //         <div className="flex flex-col sm:flex-row gap-4 mt-4">
// // //           <Select value={selectedSection} onValueChange={setSelectedSection}>
// // //             <SelectTrigger className="w-full sm:w-64">
// // //               <SelectValue placeholder="Filter by section" />
// // //             </SelectTrigger>
// // //             <SelectContent>
// // //               <SelectItem value="all">All Sections</SelectItem>
// // //               {uniqueSections.map(section => (
// // //                 <SelectItem key={section} value={section}>
// // //                   {section}
// // //                 </SelectItem>
// // //               ))}
// // //             </SelectContent>
// // //           </Select>
          
// // //           <Select value={selectedStakeholder} onValueChange={setSelectedStakeholder}>
// // //             <SelectTrigger className="w-full sm:w-48">
// // //               <SelectValue placeholder="Filter by stakeholder" />
// // //             </SelectTrigger>
// // //             <SelectContent>
// // //               <SelectItem value="all">All Stakeholders</SelectItem>
// // //               {uniqueStakeholders.map(stakeholder => (
// // //                  <SelectItem key={stakeholder} value={stakeholder}>
// // //                   {stakeholder}
// // //                 </SelectItem>
// // //               ))}
// // //             </SelectContent>
// // //           </Select>
// // //         </div>
// // //       </CardHeader>
// // //       <CardContent>
// // //         {/* --- WORD CLOUD RENDERING (Uses orderedKeywords) --- */}
// // //         <div className="flex flex-wrap gap-x-6 gap-y-4 items-center justify-center p-8 min-h-64 rounded-lg bg-muted/50">
// // //           {orderedKeywords.length > 0 ? (
// // //             orderedKeywords.map((keyword) => (
// // //               <span
// // //                 key={keyword.word}
// // //                 className="font-bold transition-all duration-200 hover:scale-110 cursor-pointer"
// // //                 style={{
// // //                   fontSize: `${getWordSize(keyword.count, maxCount)}px`,
// // //                   color: getSentimentColor(keyword.sentiment),
// // //                 }}
// // //                 title={`${keyword.word}: ${keyword.count} mentions`}
// // //               >
// // //                 {keyword.word}
// // //               </span>
// // //             ))
// // //           ) : (
// // //             <p className="text-muted-foreground">No keywords match the selected filters.</p>
// // //           )}
// // //         </div>
        
// // //         {/* --- LEGEND (Now uses sorted keywords for accuracy) --- */}
// // //         <div className="border-t border-border pt-4 mt-6">
// // //           <div className="flex items-center justify-between mb-3">
// // //             <h4 className="text-sm font-medium text-foreground">Top Keywords in View</h4>
// // //           </div>
// // //           <div className="grid grid-cols-2 gap-x-4 gap-y-2">
// // //             {topKeywordsForLegend.slice(0, 6).map((keyword, index) => (
// // //               <div key={index} className="flex items-center justify-between text-sm">
// // //                 <span className="font-medium" style={{ color: getSentimentColor(keyword.sentiment) }}>
// // //                   {keyword.word}
// // //                 </span>
// // //                 <span className="text-muted-foreground">
// // //                   {keyword.count} mentions
// // //                 </span>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>
// // //       </CardContent>
// // //     </Card>
// // //   );
// // // };

// // // export default WordCloud;




// // import { useState, useMemo } from 'react';
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// // import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

// // // --- 1. RESTRUCTURED MOCK DATA with nested stakeholders and breakdown ---
// // const mockKeywords = [
// //   { 
// //     word: 'tax', 
// //     count: 210, 
// //     sentiment: 'negative', 
// //     section: '2.1 GST issues',
// //     breakdown: [
// //       { subtype: 'Businessperson', count: 120 },
// //       { subtype: 'Professional', count: 50 },
// //       { subtype: 'Manufacturing', count: 40 },
// //     ]
// //   },
// //   { 
// //     word: 'privacy', 
// //     count: 210, 
// //     sentiment: 'negative', 
// //     section: '3.1 Transparency Issues',
// //     breakdown: [
// //       { subtype: 'Student', count: 100 },
// //       { subtype: 'Professional', count: 60 },
// //       { subtype: 'NGO', count: 50 },
// //     ]
// //   },
// //   { 
// //     word: 'GST', 
// //     count: 200, 
// //     sentiment: 'neutral', 
// //     section: '2.1 GST issues',
// //     breakdown: [
// //       { subtype: 'Manufacturing', count: 90 },
// //       { subtype: 'Service Economy', count: 70 },
// //       { subtype: 'Businessperson', count: 40 },
// //     ]
// //   },
// //   { 
// //     word: 'burden', 
// //     count: 190, 
// //     sentiment: 'negative', 
// //     section: '2.1 GST issues',
// //     breakdown: [
// //       { subtype: 'Extractive Industries', count: 100 },
// //       { subtype: 'Manufacturing', count: 90 },
// //     ]
// //   },
// //   { 
// //     word: 'transparency', 
// //     count: 180, 
// //     sentiment: 'positive', 
// //     section: '3.1 Transparency Issues',
// //     breakdown: [
// //       { subtype: 'NGO', count: 150 },
// //       { subtype: 'Student', count: 30 },
// //     ]
// //   },
// //   { 
// //     word: 'policy', 
// //     count: 160, 
// //     sentiment: 'neutral', 
// //     section: '2.2 Policy changes',
// //     breakdown: [
// //       { subtype: 'Professional', count: 90 },
// //       { subtype: 'Service Economy', count: 70 },
// //     ]
// //   },
// //   { 
// //     word: 'compliance', 
// //     count: 150, 
// //     sentiment: 'negative', 
// //     section: '4.1 Enforcement Issues',
// //     breakdown: [
// //       { subtype: 'Manufacturing', count: 80 },
// //       { subtype: 'Extractive Industries', count: 70 },
// //     ]
// //   },
// //   { 
// //     word: 'SMEs', 
// //     count: 150, 
// //     sentiment: 'negative', 
// //     section: '2.1 GST issues',
// //     breakdown: [
// //       { subtype: 'Businessperson', count: 90 },
// //       { subtype: 'Service Economy', count: 60 },
// //     ]
// //   },
// //   { 
// //     word: 'enforcement', 
// //     count: 100, 
// //     sentiment: 'negative', 
// //     section: '4.1 Enforcement Issues',
// //     breakdown: [
// //       { subtype: 'Professional', count: 40 },
// //       { subtype: 'Businessperson', count: 30 },
// //       { subtype: 'NGO', count: 30 },
// //     ]
// //   },
// //   { 
// //     word: 'credit', 
// //     count: 78, 
// //     sentiment: 'positive', 
// //     section: '2.1 GST issues',
// //     breakdown: [
// //       { subtype: 'Businessperson', count: 48 },
// //       { subtype: 'Professional', count: 30 },
// //     ]
// //   },
// //   { 
// //     word: 'standards', 
// //     count: 77, 
// //     sentiment: 'neutral', 
// //     section: '2.2 Policy changes',
// //     breakdown: [
// //       { subtype: 'Manufacturing', count: 47 },
// //       { subtype: 'Professional', count: 30 },
// //     ]
// //   },
// //   { 
// //     word: 'implementation', 
// //     count: 70, 
// //     sentiment: 'negative', 
// //     section: '2.2 Policy changes',
// //     breakdown: [
// //       { subtype: 'Professional', count: 50 },
// //       { subtype: 'Service Economy', count: 20 },
// //     ]
// //   },
// //   { 
// //     word: 'benefits', 
// //     count: 60, 
// //     sentiment: 'positive', 
// //     section: '2.1 GST issues',
// //     breakdown: [
// //       { subtype: 'NGO', count: 40 },
// //       { subtype: 'Student', count: 20 },
// //     ]
// //   },
// //   { 
// //     word: 'accountability', 
// //     count: 60, 
// //     sentiment: 'positive', 
// //     section: '3.1 Transparency Issues',
// //     breakdown: [
// //       { subtype: 'NGO', count: 60 },
// //     ]
// //   },
// //   { 
// //     word: 'penalties', 
// //     count: 59, 
// //     sentiment: 'negative', 
// //     section: '4.1 Enforcement Issues',
// //     breakdown: [
// //       { subtype: 'Extractive Industries', count: 39 },
// //       { subtype: 'Businessperson', count: 20 },
// //     ]
// //   },
// //   // --- Small words ---
// //   { word: 'rights', count: 19, sentiment: 'positive', section: '3.1 Transparency Issues', breakdown: [{ subtype: 'NGO', count: 19 }] },
// //   { word: 'clarity', count: 17, sentiment: 'negative', section: '2.2 Policy changes', breakdown: [{ subtype: 'Professional', count: 17 }] },
// //   { word: 'data', count: 15, sentiment: 'neutral', section: '3.1 Transparency Issues', breakdown: [{ subtype: 'Student', count: 15 }] },
// //   { word: 'cost', count: 14, sentiment: 'negative', section: '2.1 GST issues', breakdown: [{ subtype: 'Businessperson', count: 14 }] },
// //   { word: 'guidelines', count: 12, sentiment: 'neutral', section: '2.2 Policy changes', breakdown: [{ subtype: 'Professional', count: 12 }] },
// //   { word: 'risk', count: 10, sentiment: 'negative', section: '4.1 Enforcement Issues', breakdown: [{ subtype: 'Extractive Industries', count: 10 }] },
// //   { word: 'access', count: 9, sentiment: 'positive', section: '3.1 Transparency Issues', breakdown: [{ subtype: 'NGO', count: 9 }] },
// //   { word: 'feedback', count: 7, sentiment: 'neutral', section: '2.2 Policy changes', breakdown: [{ subtype: 'Student', count: 7 }] },
// // ];


// // // --- Defines the exact visual order of words ---
// // const displayOrder = [
// //     'guidelines', 'access', 'privacy', 'accountability', 'transparency', 'burden',
// //     'compliance', 'rights', 'cost', 'implementation', 'policy', 'penalties', 'SMEs',
// //     'tax', 'standards', 'risk', 'data', 'benefits', 'feedback', 'credit', 'GST', 'clarity',
// //     'enforcement'
// // ];

// // // --- 2. DEFINE STAKEHOLDER CATEGORIES for filtering ---
// // const stakeholderCategories = {
// //   'Individual': ['Businessperson', 'Student', 'Professional'],
// //   'Organization': ['Extractive Industries', 'Manufacturing', 'Service Economy', 'NGO'],
// // };


// // const WordCloud = () => {
// //   const [selectedSection, setSelectedSection] = useState<string>('all');
// //   const [selectedStakeholder, setSelectedStakeholder] = useState<string>('all');

// //   const uniqueSections = useMemo(() => Array.from(new Set(mockKeywords.map(k => k.section))).sort(), []);

// //   // 3. UPDATE FILTERING LOGIC for nested stakeholders ---
// //   const filteredKeywords = useMemo(() => {
// //     return mockKeywords.filter(keyword => {
// //       const sectionMatch = selectedSection === 'all' || keyword.section === selectedSection;

// //       if (selectedStakeholder === 'all') {
// //         return sectionMatch;
// //       }
      
// //       const stakeholderMatch = keyword.breakdown.some(item => {
// //         if (selectedStakeholder === 'Individual') {
// //           return stakeholderCategories.Individual.includes(item.subtype);
// //         }
// //         if (selectedStakeholder === 'Organization') {
// //           return stakeholderCategories.Organization.includes(item.subtype);
// //         }
// //         return item.subtype === selectedStakeholder;
// //       });

// //       return sectionMatch && stakeholderMatch;
// //     });
// //   }, [selectedSection, selectedStakeholder]);

// //   // Sort the filtered keywords into the predefined display order
// //   const orderedKeywords = useMemo(() => {
// //     const wordOrderMap = new Map(displayOrder.map((word, index) => [word, index]));
// //     return [...filteredKeywords].sort((a, b) => {
// //       const indexA = wordOrderMap.get(a.word) ?? Infinity;
// //       const indexB = wordOrderMap.get(b.word) ?? Infinity;
// //       return indexA - indexB;
// //     });
// //   }, [filteredKeywords]);
  

// //   const getWordSize = (count: number, maxCount: number) => {
// //     if (maxCount === 0) return 14;
// //     const minSize = 14;
// //     const maxSize = 52;
// //     const ratio = Math.sqrt(count / maxCount); 
// //     return Math.round(minSize + (maxSize - minSize) * ratio);
// //   };

// //   const getSentimentColor = (sentiment: string) => {
// //     switch (sentiment) {
// //       case 'positive': return 'hsl(var(--sentiment-supportive))';
// //       case 'negative': return 'hsl(var(--sentiment-critical))';
// //       default: return 'hsl(var(--sentiment-neutral))';
// //     }
// //   };
  
// //   // --- 4. CREATE TOOLTIP STRING from breakdown data ---
// //   const generateBreakdownTitle = (keyword: typeof mockKeywords[0]): string => {
// //     let title = `${keyword.word}: ${keyword.count} total mentions\n\nBreakdown:\n`;
// //     keyword.breakdown.forEach(item => {
// //       title += `- ${item.subtype}: ${item.count}\n`;
// //     });
// //     return title;
// //   };

// //   const maxCount = useMemo(() => Math.max(1, ...filteredKeywords.map(k => k.count)), [filteredKeywords]);

// //   const topKeywordsForLegend = useMemo(() => {
// //       return [...filteredKeywords].sort((a,b) => b.count - a.count);
// //   }, [filteredKeywords]);

// //   return (
// //     <Card className="shadow-card border-border">
// //       <CardHeader>
// //         <CardTitle>Sentiment-Aware Word Cloud</CardTitle>
// //         <CardDescription>
// //           Most frequently mentioned terms colored by sentiment context
// //         </CardDescription>
        
// //         <div className="flex flex-col sm:flex-row gap-4 mt-4">
// //           <Select value={selectedSection} onValueChange={setSelectedSection}>
// //             <SelectTrigger className="w-full sm:w-64">
// //               <SelectValue placeholder="Filter by section" />
// //             </SelectTrigger>
// //             <SelectContent>
// //               <SelectItem value="all">All Sections</SelectItem>
// //               {uniqueSections.map(section => (
// //                 <SelectItem key={section} value={section}>
// //                   {section}
// //                 </SelectItem>
// //               ))}
// //             </SelectContent>
// //           </Select>
          
// //           {/* --- 5. UPDATED STAKEHOLDER SELECT with groups --- */}
// //           <Select value={selectedStakeholder} onValueChange={setSelectedStakeholder}>
// //             <SelectTrigger className="w-full sm:w-56">
// //               <SelectValue placeholder="Filter by stakeholder" />
// //             </SelectTrigger>
// //             <SelectContent>
// //               <SelectItem value="all">All Stakeholders</SelectItem>
// //               <SelectGroup>
// //                 <SelectLabel>By Type</SelectLabel>
// //                 <SelectItem value="Individual">All Individuals</SelectItem>
// //                 <SelectItem value="Organization">All Organizations</SelectItem>
// //               </SelectGroup>
// //               <SelectGroup>
// //                  <SelectLabel>Individual Subtypes</SelectLabel>
// //                  {stakeholderCategories.Individual.map(subtype => (
// //                     <SelectItem key={subtype} value={subtype}>{subtype}</SelectItem>
// //                  ))}
// //               </SelectGroup>
// //                <SelectGroup>
// //                  <SelectLabel>Organization Subtypes</SelectLabel>
// //                  {stakeholderCategories.Organization.map(subtype => (
// //                     <SelectItem key={subtype} value={subtype}>{subtype}</SelectItem>
// //                  ))}
// //               </SelectGroup>
// //             </SelectContent>
// //           </Select>
// //         </div>
// //       </CardHeader>
// //       <CardContent>
// //         <div className="flex flex-wrap gap-x-6 gap-y-4 items-center justify-center p-8 min-h-64 rounded-lg bg-muted/50">
// //           {orderedKeywords.length > 0 ? (
// //             orderedKeywords.map((keyword) => (
// //               <span
// //                 key={keyword.word}
// //                 className="font-bold transition-all duration-200 hover:scale-110 cursor-pointer"
// //                 style={{
// //                   fontSize: `${getWordSize(keyword.count, maxCount)}px`,
// //                   color: getSentimentColor(keyword.sentiment),
// //                 }}
// //                 title={generateBreakdownTitle(keyword)}
// //               >
// //                 {keyword.word}
// //               </span>
// //             ))
// //           ) : (
// //             <p className="text-muted-foreground">No keywords match the selected filters.</p>
// //           )}
// //         </div>
        
// //         <div className="border-t border-border pt-4 mt-6">
// //           <div className="flex items-center justify-between mb-3">
// //             <h4 className="text-sm font-medium text-foreground">Top Keywords in View</h4>
// //           </div>
// //           <div className="grid grid-cols-2 gap-x-4 gap-y-2">
// //             {topKeywordsForLegend.slice(0, 6).map((keyword, index) => (
// //               <div key={index} className="flex items-center justify-between text-sm">
// //                 <span className="font-medium" style={{ color: getSentimentColor(keyword.sentiment) }}>
// //                   {keyword.word}
// //                 </span>
// //                 <span className="text-muted-foreground">
// //                   {keyword.count} mentions
// //                 </span>
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //       </CardContent>
// //     </Card>
// //   );
// // };

// // export default WordCloud;


// import { useState, useMemo } from 'react';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';

// // --- 1. RESTRUCTURED MOCK DATA (NGO REMOVED) ---
// const mockKeywords = [
//   { 
//     word: 'tax', 
//     count: 210, 
//     sentiment: 'negative', 
//     section: '2.1 GST issues',
//     breakdown: [
//       { subtype: 'Businessperson', count: 120 },
//       { subtype: 'Professional', count: 50 },
//       { subtype: 'Manufacturing', count: 40 },
//     ]
//   },
//   { 
//     word: 'privacy', 
//     // count: 210, // OLD
//     count: 160, // NEW (210 - 50 from NGO)
//     sentiment: 'negative', 
//     section: '3.1 Transparency Issues',
//     breakdown: [
//       { subtype: 'Student', count: 100 },
//       { subtype: 'Professional', count: 60 },
//     ]
//   },
//   { 
//     word: 'GST', 
//     count: 200, 
//     sentiment: 'neutral', 
//     section: '2.1 GST issues',
//     breakdown: [
//       { subtype: 'Manufacturing', count: 90 },
//       { subtype: 'Service Economy', count: 70 },
//       { subtype: 'Businessperson', count: 40 },
//     ]
//   },
//   { 
//     word: 'burden', 
//     count: 190, 
//     sentiment: 'negative', 
//     section: '2.1 GST issues',
//     breakdown: [
//       { subtype: 'Extractive Industries', count: 100 },
//       { subtype: 'Manufacturing', count: 90 },
//     ]
//   },
//   { 
//     word: 'policy', 
//     count: 160, 
//     sentiment: 'neutral', 
//     section: '2.2 Policy changes',
//     breakdown: [
//       { subtype: 'Professional', count: 90 },
//       { subtype: 'Service Economy', count: 70 },
//     ]
//   },
//   { 
//     word: 'compliance', 
//     count: 150, 
//     sentiment: 'negative', 
//     section: '4.1 Enforcement Issues',
//     breakdown: [
//       { subtype: 'Manufacturing', count: 80 },
//       { subtype: 'Extractive Industries', count: 70 },
//     ]
//   },
//   { 
//     word: 'SMEs', 
//     count: 150, 
//     sentiment: 'negative', 
//     section: '2.1 GST issues',
//     breakdown: [
//       { subtype: 'Businessperson', count: 90 },
//       { subtype: 'Service Economy', count: 60 },
//     ]
//   },
//     { 
//     word: 'enforcement', 
//     // count: 100, // OLD
//     count: 70, // NEW (100 - 30 from NGO)
//     sentiment: 'negative', 
//     section: '4.1 Enforcement Issues',
//     breakdown: [
//       { subtype: 'Professional', count: 40 },
//       { subtype: 'Businessperson', count: 30 },
//     ]
//   },
//   { 
//     word: 'credit', 
//     count: 78, 
//     sentiment: 'positive', 
//     section: '2.1 GST issues',
//     breakdown: [
//       { subtype: 'Businessperson', count: 48 },
//       { subtype: 'Professional', count: 30 },
//     ]
//   },
//   { 
//     word: 'standards', 
//     count: 77, 
//     sentiment: 'positive', 
//     section: '2.2 Policy changes',
//     breakdown: [
//       { subtype: 'Manufacturing', count: 47 },
//       { subtype: 'Professional', count: 30 },
//     ]
//   },
//   { 
//     word: 'implementation', 
//     count: 70, 
//     sentiment: 'positive', 
//     section: '2.2 Policy changes',
//     breakdown: [
//       { subtype: 'Professional', count: 50 },
//       { subtype: 'Service Economy', count: 20 },
//     ]
//   },
//   { 
//     word: 'penalties', 
//     count: 59, 
//     sentiment: 'negative', 
//     section: '4.1 Enforcement Issues',
//     breakdown: [
//       { subtype: 'Extractive Industries', count: 39 },
//       { subtype: 'Businessperson', count: 20 },
//     ]
//   },
//   { 
//     word: 'transparency', 
//     // count: 180, // OLD
//     count: 30, // NEW (180 - 150 from NGO)
//     sentiment: 'positive', 
//     section: '3.1 Transparency Issues',
//     breakdown: [
//       { subtype: 'Student', count: 30 },
//     ]
//   },
//    { 
//     word: 'benefits', 
//     // count: 60, // OLD
//     count: 20, // NEW (60 - 40 from NGO)
//     sentiment: 'positive', 
//     section: '2.1 GST issues',
//     breakdown: [
//       { subtype: 'Student', count: 20 },
//     ]
//   },
//   // --- Small words ---
//   { word: 'clarity', count: 17, sentiment: 'positive', section: '2.2 Policy changes', breakdown: [{ subtype: 'Professional', count: 17 }] },
//   { word: 'data', count: 15, sentiment: 'positive', section: '3.1 Transparency Issues', breakdown: [{ subtype: 'Student', count: 15 }] },
//   { word: 'cost', count: 14, sentiment: 'negative', section: '2.1 GST issues', breakdown: [{ subtype: 'Businessperson', count: 14 }] },
//   { word: 'guidelines', count: 12, sentiment: 'neutral', section: '2.2 Policy changes', breakdown: [{ subtype: 'Professional', count: 12 }] },
//   { word: 'risk', count: 10, sentiment: 'negative', section: '4.1 Enforcement Issues', breakdown: [{ subtype: 'Extractive Industries', count: 10 }] },
//   { word: 'feedback', count: 7, sentiment: 'neutral', section: '2.2 Policy changes', breakdown: [{ subtype: 'Student', count: 7 }] },
// ];


// // --- Defines the exact visual order of words (NGO-only words removed) ---
// const displayOrder = [
//     'guidelines', 'privacy', 'transparency', 'burden',
//     'compliance', 'cost', 'implementation', 'policy', 'penalties', 'SMEs',
//     'tax', 'standards', 'risk', 'data', 'benefits', 'feedback', 'credit', 'GST', 'clarity',
//     'enforcement'
// ];

// // --- 2. DEFINE STAKEHOLDER CATEGORIES (NGO REMOVED) ---
// const stakeholderCategories = {
//   'Individual': ['Businessperson', 'Student', 'Professional'],
//   'Organization': ['Extractive Industries', 'Manufacturing', 'Service Economy'],
// };


// const WordCloud = () => {
//   const [selectedSection, setSelectedSection] = useState<string>('all');
//   const [selectedStakeholder, setSelectedStakeholder] = useState<string>('all');

//   const uniqueSections = useMemo(() => Array.from(new Set(mockKeywords.map(k => k.section))).sort(), []);

//   // 3. UPDATE FILTERING LOGIC for nested stakeholders ---
//   const filteredKeywords = useMemo(() => {
//     return mockKeywords.filter(keyword => {
//       const sectionMatch = selectedSection === 'all' || keyword.section === selectedSection;

//       if (selectedStakeholder === 'all') {
//         return sectionMatch;
//       }
      
//       const stakeholderMatch = keyword.breakdown.some(item => {
//         if (selectedStakeholder === 'Individual') {
//           return stakeholderCategories.Individual.includes(item.subtype);
//         }
//         if (selectedStakeholder === 'Organization') {
//           return stakeholderCategories.Organization.includes(item.subtype);
//         }
//         return item.subtype === selectedStakeholder;
//       });

//       return sectionMatch && stakeholderMatch;
//     });
//   }, [selectedSection, selectedStakeholder]);

//   // Sort the filtered keywords into the predefined display order
//   const orderedKeywords = useMemo(() => {
//     const wordOrderMap = new Map(displayOrder.map((word, index) => [word, index]));
//     return [...filteredKeywords].sort((a, b) => {
//       const indexA = wordOrderMap.get(a.word) ?? Infinity;
//       const indexB = wordOrderMap.get(b.word) ?? Infinity;
//       return indexA - indexB;
//     });
//   }, [filteredKeywords]);
  

//   const getWordSize = (count: number, maxCount: number) => {
//     if (maxCount === 0) return 14;
//     const minSize = 14;
//     const maxSize = 52;
//     const ratio = Math.sqrt(count / maxCount); 
//     return Math.round(minSize + (maxSize - minSize) * ratio);
//   };

//   const getSentimentColor = (sentiment: string) => {
//     switch (sentiment) {
//       case 'positive': return 'hsl(var(--sentiment-supportive))';
//       case 'negative': return 'hsl(var(--sentiment-critical))';
//       default: return 'hsl(var(--sentiment-neutral))';
//     }
//   };
  
//   // --- 4. CREATE TOOLTIP STRING from breakdown data ---
//   const generateBreakdownTitle = (keyword: typeof mockKeywords[0]): string => {
//     let title = `${keyword.word}: ${keyword.count} total mentions\n\nBreakdown:\n`;
//     keyword.breakdown.forEach(item => {
//       title += `- ${item.subtype}: ${item.count}\n`;
//     });
//     return title;
//   };

//   const maxCount = useMemo(() => Math.max(1, ...filteredKeywords.map(k => k.count)), [filteredKeywords]);

//   const topKeywordsForLegend = useMemo(() => {
//       return [...filteredKeywords].sort((a,b) => b.count - a.count);
//   }, [filteredKeywords]);

//   return (
//     <Card className="shadow-card border-border">
//       <CardHeader>
//         <CardTitle>Sentiment-Aware Word Cloud</CardTitle>
//         <CardDescription>
//           Most frequently mentioned terms colored by sentiment context
//         </CardDescription>
        
//         <div className="flex flex-col sm:flex-row gap-4 mt-4">
//           <Select value={selectedSection} onValueChange={setSelectedSection}>
//             <SelectTrigger className="w-full sm:w-64">
//               <SelectValue placeholder="Filter by section" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All Sections</SelectItem>
//               {uniqueSections.map(section => (
//                 <SelectItem key={section} value={section}>
//                   {section}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
          
//           {/* --- 5. UPDATED STAKEHOLDER SELECT with groups --- */}
//           <Select value={selectedStakeholder} onValueChange={setSelectedStakeholder}>
//             <SelectTrigger className="w-full sm:w-56">
//               <SelectValue placeholder="Filter by stakeholder" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All Stakeholders</SelectItem>
//               <SelectGroup>
//                 <SelectLabel>By Type</SelectLabel>
//                 <SelectItem value="Individual">All Individuals</SelectItem>
//                 <SelectItem value="Organization">All Organizations</SelectItem>
//               </SelectGroup>
//               <SelectGroup>
//                  <SelectLabel>Individual Subtypes</SelectLabel>
//                  {stakeholderCategories.Individual.map(subtype => (
//                     <SelectItem key={subtype} value={subtype}>{subtype}</SelectItem>
//                  ))}
//               </SelectGroup>
//                <SelectGroup>
//                  <SelectLabel>Organization Subtypes</SelectLabel>
//                  {stakeholderCategories.Organization.map(subtype => (
//                     <SelectItem key={subtype} value={subtype}>{subtype}</SelectItem>
//                  ))}
//               </SelectGroup>
//             </SelectContent>
//           </Select>
//         </div>
//       </CardHeader>
//       <CardContent>
//         <div className="flex flex-wrap gap-x-6 gap-y-4 items-center justify-center p-8 min-h-64 rounded-lg bg-muted/50">
//           {orderedKeywords.length > 0 ? (
//             orderedKeywords.map((keyword) => (
//               <span
//                 key={keyword.word}
//                 className="font-bold transition-all duration-200 hover:scale-110 cursor-pointer"
//                 style={{
//                   fontSize: `${getWordSize(keyword.count, maxCount)}px`,
//                   color: getSentimentColor(keyword.sentiment),
//                 }}
//                 title={generateBreakdownTitle(keyword)}
//               >
//                 {keyword.word}
//               </span>
//             ))
//           ) : (
//             <p className="text-muted-foreground">No keywords match the selected filters.</p>
//           )}
//         </div>
        
//         <div className="border-t border-border pt-4 mt-6">
//           <div className="flex items-center justify-between mb-3">
//             <h4 className="text-sm font-medium text-foreground">Top Keywords in View</h4>
//           </div>
//           <div className="grid grid-cols-2 gap-x-4 gap-y-2">
//             {topKeywordsForLegend.slice(0, 6).map((keyword, index) => (
//               <div key={index} className="flex items-center justify-between text-sm">
//                 <span className="font-medium" style={{ color: getSentimentColor(keyword.sentiment) }}>
//                   {keyword.word}
//                 </span>
//                 <span className="text-muted-foreground">
//                   {keyword.count} mentions
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default WordCloud;



// import { useState, useMemo } from 'react';
// import { TrendingUp } from 'lucide-react';

// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
//      import { Cloud } from 'lucide-react';

// // --- 1. RESTRUCTURED MOCK DATA with NEW SECTIONS & KEYWORDS ---
// const mockKeywords = [
//   // --- Section: 2.1 Environmental Regulatory Changes ---
//   { 
//     word: 'emissions', 
//     count: 85, 
//     sentiment: 'negative', 
//     section: '2.1 Environmental Regulatory Changes',
//     breakdown: [
//       { subtype: 'Extractive Industries', count: 50 },
//       { subtype: 'Manufacturing', count: 35 },
//     ]
//   },
//     { 
//     word: 'sustainability', 
//     count: 65, 
//     sentiment: 'positive', 
//     section: '2.1 Environmental Regulatory Changes',
//     breakdown: [
//       { subtype: 'Service Economy', count: 40 },
//       { subtype: 'Student', count: 25 },
//     ]
//   },

//   // --- Section: 2.2 Current Policy Amendments ---
//   { 
//     word: 'tax', 
//     count: 210, 
//     sentiment: 'negative', 
//     section: '2.2 Current Policy Amendments',
//     breakdown: [
//       { subtype: 'Businessperson', count: 120 },
//       { subtype: 'Professional', count: 50 },
//       { subtype: 'Manufacturing', count: 40 },
//     ]
//   },
//     { 
//     word: 'GST', 
//     count: 200, 
//     sentiment: 'neutral', 
//     section: '2.2 Current Policy Amendments',
//     breakdown: [
//       { subtype: 'Manufacturing', count: 90 },
//       { subtype: 'Service Economy', count: 70 },
//       { subtype: 'Businessperson', count: 40 },
//     ]
//   },
//   { 
//     word: 'burden', 
//     count: 190, 
//     sentiment: 'negative', 
//     section: '2.2 Current Policy Amendments',
//     breakdown: [
//       { subtype: 'Extractive Industries', count: 100 },
//       { subtype: 'Manufacturing', count: 90 },
//     ]
//   },
//   { 
//     word: 'policy', 
//     count: 160, 
//     sentiment: 'neutral', 
//     section: '2.2 Current Policy Amendments',
//     breakdown: [
//       { subtype: 'Professional', count: 90 },
//       { subtype: 'Service Economy', count: 70 },
//     ]
//   },
//     { 
//     word: 'SMEs', 
//     count: 150, 
//     sentiment: 'negative', 
//     section: '2.2 Current Policy Amendments',
//     breakdown: [
//       { subtype: 'Businessperson', count: 90 },
//       { subtype: 'Service Economy', count: 60 },
//     ]
//   },
//    { 
//     word: 'credit', 
//     count: 78, 
//     sentiment: 'positive', 
//     section: '2.2 Current Policy Amendments',
//     breakdown: [
//       { subtype: 'Businessperson', count: 48 },
//       { subtype: 'Professional', count: 30 },
//     ]
//   },
//     { 
//     word: 'benefits', 
//     count: 20, 
//     sentiment: 'positive', 
//     section: '2.2 Current Policy Amendments',
//     breakdown: [
//       { subtype: 'Student', count: 20 },
//     ]
//   },
//   { 
//     word: 'cost', 
//     count: 14, 
//     sentiment: 'negative', 
//     section: '2.2 Current Policy Amendments',
//     breakdown: [{ subtype: 'Businessperson', count: 14 }] 
//   },
//   { 
//     word: 'feedback', 
//     count: 7, 
//     sentiment: 'neutral', 
//     section: '2.2 Current Policy Amendments',
//     breakdown: [{ subtype: 'Student', count: 7 }] 
//   },

//   // --- Section: 2.3 Implementation Guidelines ---
//   { 
//     word: 'standards', 
//     count: 77, 
//     sentiment: 'neutral', // Corrected from positive
//     section: '2.3 Implementation Guidelines',
//     breakdown: [
//       { subtype: 'Manufacturing', count: 47 },
//       { subtype: 'Professional', count: 30 },
//     ]
//   },
//   { 
//     word: 'implementation', 
//     count: 70, 
//     sentiment: 'negative', // Corrected from positive
//     section: '2.3 Implementation Guidelines',
//     breakdown: [
//       { subtype: 'Professional', count: 50 },
//       { subtype: 'Service Economy', count: 20 },
//     ]
//   },
//   { 
//     word: 'clarity', 
//     count: 17, 
//     sentiment: 'negative', // Corrected from positive
//     section: '2.3 Implementation Guidelines',
//     breakdown: [{ subtype: 'Professional', count: 17 }] 
//   },
//   { 
//     word: 'guidelines', 
//     count: 12, 
//     sentiment: 'neutral', 
//     section: '2.3 Implementation Guidelines',
//     breakdown: [{ subtype: 'Professional', count: 12 }] 
//   },
  
//   // --- Section: 2.4 Monitoring and Compliance Measures ---
//    { 
//     word: 'privacy', 
//     count: 160, 
//     sentiment: 'negative', 
//     section: '2.4 Monitoring and Compliance Measures',
//     breakdown: [
//       { subtype: 'Student', count: 100 },
//       { subtype: 'Professional', count: 60 },
//     ]
//   },
//   { 
//     word: 'compliance', 
//     count: 150, 
//     sentiment: 'negative', 
//     section: '2.4 Monitoring and Compliance Measures',
//     breakdown: [
//       { subtype: 'Manufacturing', count: 80 },
//       { subtype: 'Extractive Industries', count: 70 },
//     ]
//   },
//   { 
//     word: 'enforcement', 
//     count: 70, 
//     sentiment: 'negative', 
//     section: '2.4 Monitoring and Compliance Measures',
//     breakdown: [
//       { subtype: 'Professional', count: 40 },
//       { subtype: 'Businessperson', count: 30 },
//     ]
//   },
//   { 
//     word: 'penalties', 
//     count: 59, 
//     sentiment: 'negative', 
//     section: '2.4 Monitoring and Compliance Measures',
//     breakdown: [
//       { subtype: 'Extractive Industries', count: 39 },
//       { subtype: 'Businessperson', count: 20 },
//     ]
//   },
//   { 
//     word: 'transparency', 
//     count: 30, 
//     sentiment: 'positive', 
//     section: '2.4 Monitoring and Compliance Measures',
//     breakdown: [
//       { subtype: 'Student', count: 30 },
//     ]
//   },
//   { 
//     word: 'data', 
//     count: 15, 
//     sentiment: 'neutral', // Corrected from positive
//     section: '2.4 Monitoring and Compliance Measures',
//     breakdown: [{ subtype: 'Student', count: 15 }] 
//   },
//   { 
//     word: 'risk', 
//     count: 10, 
//     sentiment: 'negative', 
//     section: '2.4 Monitoring and Compliance Measures',
//     breakdown: [{ subtype: 'Extractive Industries', count: 10 }] 
//   },
// ];


// // --- Defines the exact visual order of words (New keywords added) ---
// const displayOrder = [
//     'guidelines', 'privacy', 'transparency', 'burden', 'emissions',
//     'compliance', 'cost', 'implementation', 'policy', 'penalties', 'SMEs',
//     'tax', 'standards', 'risk', 'data', 'benefits', 'sustainability', 'feedback', 'credit', 'GST', 'clarity',
//     'enforcement'
// ];

// // --- 2. DEFINE STAKEHOLDER CATEGORIES (Unchanged) ---
// const stakeholderCategories = {
//   'Individual': ['Businessperson', 'Student', 'Professional'],
//   'Organization': ['Extractive Industries', 'Manufacturing', 'Service Economy'],
// };


// const WordCloud = () => {
//   const [selectedSection, setSelectedSection] = useState<string>('all');
//   const [selectedStakeholder, setSelectedStakeholder] = useState<string>('all');

//   const uniqueSections = useMemo(() => Array.from(new Set(mockKeywords.map(k => k.section))).sort(), []);

//   // --- 3. FILTERING LOGIC (Unchanged, it adapts automatically) ---
//   const filteredKeywords = useMemo(() => {
//     return mockKeywords.filter(keyword => {
//       const sectionMatch = selectedSection === 'all' || keyword.section === selectedSection;

//       if (selectedStakeholder === 'all') {
//         return sectionMatch;
//       }
      
//       const stakeholderMatch = keyword.breakdown.some(item => {
//         if (selectedStakeholder === 'Individual') {
//           return stakeholderCategories.Individual.includes(item.subtype);
//         }
//         if (selectedStakeholder === 'Organization') {
//           return stakeholderCategories.Organization.includes(item.subtype);
//         }
//         return item.subtype === selectedStakeholder;
//       });

//       return sectionMatch && stakeholderMatch;
//     });
//   }, [selectedSection, selectedStakeholder]);

//   // Sort the filtered keywords into the predefined display order
//   const orderedKeywords = useMemo(() => {
//     const wordOrderMap = new Map(displayOrder.map((word, index) => [word, index]));
//     return [...filteredKeywords].sort((a, b) => {
//       const indexA = wordOrderMap.get(a.word) ?? Infinity;
//       const indexB = wordOrderMap.get(b.word) ?? Infinity;
//       return indexA - indexB;
//     });
//   }, [filteredKeywords]);
  

//   const getWordSize = (count: number, maxCount: number) => {
//     if (maxCount === 0) return 14;
//     const minSize = 14;
//     const maxSize = 52;
//     const ratio = Math.sqrt(count / maxCount); 
//     return Math.round(minSize + (maxSize - minSize) * ratio);
//   };

//   const getSentimentColor = (sentiment: string) => {
//     switch (sentiment) {
//       case 'positive': return 'hsl(var(--sentiment-supportive))';
//       case 'negative': return 'hsl(var(--sentiment-critical))';
//       default: return 'hsl(var(--sentiment-neutral))';
//     }
//   };
  
//   // --- 4. CREATE TOOLTIP STRING (Unchanged) ---
//   const generateBreakdownTitle = (keyword: typeof mockKeywords[0]): string => {
//     let title = `${keyword.word}: ${keyword.count} total mentions\n\nBreakdown:\n`;
//     keyword.breakdown.forEach(item => {
//       title += `- ${item.subtype}: ${item.count}\n`;
//     });
//     return title;
//   };

//   const maxCount = useMemo(() => Math.max(1, ...filteredKeywords.map(k => k.count)), [filteredKeywords]);

//   const topKeywordsForLegend = useMemo(() => {
//       return [...filteredKeywords].sort((a,b) => b.count - a.count);
//   }, [filteredKeywords]);

//   return (
//     <Card className="shadow-card border-border">
//       <CardHeader>

// <CardTitle className="text-3xl font-bold text-blue-900 flex items-center gap-2">
//   <Cloud className="w-8 h-8 text-blue-900" strokeWidth={3} />
//   Sentiment-Aware Word Cloud
// </CardTitle>

//         <CardDescription className='text-lg font-medium text-gray-950'>
//           Most frequently mentioned terms colored by sentiment context
//         </CardDescription>
        
//         <div className="flex flex-col sm:flex-row gap-4 mt-4">
//           {/* Section filter will now show the 4 new sections automatically */}
//           <Select value={selectedSection} onValueChange={setSelectedSection}>
//             <SelectTrigger className="w-full sm:w-64">
//               <SelectValue placeholder="Filter by section" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All Sections</SelectItem>
//               {uniqueSections.map(section => (
//                 <SelectItem key={section} value={section}>
//                   {section}
//                 </SelectItem>
//               ))}
//             </SelectContent>
//           </Select>
          
//           {/* Stakeholder filter is unchanged */}
//           <Select value={selectedStakeholder} onValueChange={setSelectedStakeholder}>
//             <SelectTrigger className="w-full sm:w-56">
//               <SelectValue placeholder="Filter by stakeholder" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All Stakeholders</SelectItem>
//               <SelectGroup>
//                 <SelectLabel>By Type</SelectLabel>
//                 <SelectItem value="Individual">All Individuals</SelectItem>
//                 <SelectItem value="Organization">All Organizations</SelectItem>
//               </SelectGroup>
//               <SelectGroup>
//                  <SelectLabel>Individual Subtypes</SelectLabel>
//                  {stakeholderCategories.Individual.map(subtype => (
//                     <SelectItem key={subtype} value={subtype}>{subtype}</SelectItem>
//                  ))}
//               </SelectGroup>
//                <SelectGroup>
//                  <SelectLabel>Organization Subtypes</SelectLabel>
//                  {stakeholderCategories.Organization.map(subtype => (
//                     <SelectItem key={subtype} value={subtype}>{subtype}</SelectItem>
//                  ))}
//               </SelectGroup>
//             </SelectContent>
//           </Select>
//         </div>
//       </CardHeader>
//       <CardContent>
//         <div className="flex flex-wrap gap-x-6 gap-y-4 items-center justify-center p-8 min-h-64 rounded-lg bg-muted/50">
//           {orderedKeywords.length > 0 ? (
//             orderedKeywords.map((keyword) => (
//               <span
//                 key={keyword.word}
//                 className="font-bold transition-all duration-200 hover:scale-110 cursor-pointer"
//                 style={{
//                   fontSize: `${getWordSize(keyword.count, maxCount)}px`,
//                   color: getSentimentColor(keyword.sentiment),
//                 }}
//                 title={generateBreakdownTitle(keyword)}
//               >
//                 {keyword.word}
//               </span>
//             ))
//           ) : (
//             <p className="text-muted-foreground">No keywords match the selected filters.</p>
//           )}
//         </div>
        
//         <div className="border-t border-border pt-4 mt-6">
//           <div className="flex items-center justify-between mb-3">
// <h4 className="text-2xl font-bold text-blue-900 flex items-center gap-2">
//   <TrendingUp className="w-6 h-6 text-blue-900" />
//   Top Keywords in View
// </h4>
//           </div>
//           <div className="grid grid-cols-2 gap-x-4 gap-y-2">
//             {topKeywordsForLegend.slice(0, 6).map((keyword, index) => (
//               <div key={index} className="flex items-center justify-between text-sm">
//                 <span className="font-bold text-lg" style={{ color: getSentimentColor(keyword.sentiment) }}>
//                   {keyword.word}
//                 </span>
//                 <span className="text-black">
//                   {keyword.count} mentions
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default WordCloud;
import { useState, useMemo } from 'react';
// --- ICONS IMPORTED ---
import { TrendingUp, Cloud, MessageSquare, Smile, User } from 'lucide-react';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

// --- MOCK DATA ---
const mockKeywords = [
  // --- Section: 2.1 Environmental Regulatory Changes ---
  { word: 'emissions', count: 85, sentiment: 'negative', section: '2.1 Environmental Regulatory Changes', breakdown: [{ subtype: 'Extractive Industries', count: 50 }, { subtype: 'Manufacturing', count: 35 }] },
  { word: 'sustainability', count: 65, sentiment: 'positive', section: '2.1 Environmental Regulatory Changes', breakdown: [{ subtype: 'Service Economy', count: 40 }, { subtype: 'Student', count: 25 }] },
  // --- Section: 2.2 Current Policy Amendments ---
  { word: 'tax', count: 210, sentiment: 'negative', section: '2.2 Current Policy Amendments', breakdown: [{ subtype: 'Businessperson', count: 120 }, { subtype: 'Professional', count: 50 }, { subtype: 'Manufacturing', count: 40 }] },
  { word: 'GST', count: 200, sentiment: 'neutral', section: '2.2 Current Policy Amendments', breakdown: [{ subtype: 'Manufacturing', count: 90 }, { subtype: 'Service Economy', count: 70 }, { subtype: 'Businessperson', count: 40 }] },
  { word: 'burden', count: 190, sentiment: 'negative', section: '2.2 Current Policy Amendments', breakdown: [{ subtype: 'Extractive Industries', count: 100 }, { subtype: 'Manufacturing', count: 90 }] },
  { word: 'policy', count: 160, sentiment: 'neutral', section: '2.2 Current Policy Amendments', breakdown: [{ subtype: 'Professional', count: 90 }, { subtype: 'Service Economy', count: 70 }] },
  { word: 'SMEs', count: 150, sentiment: 'negative', section: '2.2 Current Policy Amendments', breakdown: [{ subtype: 'Businessperson', count: 90 }, { subtype: 'Service Economy', count: 60 }] },
  { word: 'credit', count: 78, sentiment: 'positive', section: '2.2 Current Policy Amendments', breakdown: [{ subtype: 'Businessperson', count: 48 }, { subtype: 'Professional', count: 30 }] },
  { word: 'benefits', count: 20, sentiment: 'positive', section: '2.2 Current Policy Amendments', breakdown: [{ subtype: 'Student', count: 20 }] },
  { word: 'cost', count: 14, sentiment: 'negative', section: '2.2 Current Policy Amendments', breakdown: [{ subtype: 'Businessperson', count: 14 }] },
  { word: 'feedback', count: 7, sentiment: 'neutral', section: '2.2 Current Policy Amendments', breakdown: [{ subtype: 'Student', count: 7 }] },
  // --- Section: 2.3 Implementation Guidelines ---
  { word: 'standards', count: 77, sentiment: 'neutral', section: '2.3 Implementation Guidelines', breakdown: [{ subtype: 'Manufacturing', count: 47 }, { subtype: 'Professional', count: 30 }] },
  { word: 'implementation', count: 70, sentiment: 'negative', section: '2.3 Implementation Guidelines', breakdown: [{ subtype: 'Professional', count: 50 }, { subtype: 'Service Economy', count: 20 }] },
  { word: 'clarity', count: 17, sentiment: 'negative', section: '2.3 Implementation Guidelines', breakdown: [{ subtype: 'Professional', count: 17 }] },
  { word: 'guidelines', count: 12, sentiment: 'neutral', section: '2.3 Implementation Guidelines', breakdown: [{ subtype: 'Professional', count: 12 }] },
  // --- Section: 2.4 Monitoring and Compliance Measures ---
  { word: 'privacy', count: 160, sentiment: 'negative', section: '2.4 Monitoring and Compliance Measures', breakdown: [{ subtype: 'Student', count: 100 }, { subtype: 'Professional', count: 60 }] },
  { word: 'compliance', count: 150, sentiment: 'negative', section: '2.4 Monitoring and Compliance Measures', breakdown: [{ subtype: 'Manufacturing', count: 80 }, { subtype: 'Extractive Industries', count: 70 }] },
  { word: 'enforcement', count: 70, sentiment: 'negative', section: '2.4 Monitoring and Compliance Measures', breakdown: [{ subtype: 'Professional', count: 40 }, { subtype: 'Businessperson', count: 30 }] },
  { word: 'penalties', count: 59, sentiment: 'negative', section: '2.4 Monitoring and Compliance Measures', breakdown: [{ subtype: 'Extractive Industries', count: 39 }, { subtype: 'Businessperson', count: 20 }] },
  { word: 'transparency', count: 30, sentiment: 'positive', section: '2.4 Monitoring and Compliance Measures', breakdown: [{ subtype: 'Student', count: 30 }] },
  { word: 'data', count: 15, sentiment: 'neutral', section: '2.4 Monitoring and Compliance Measures', breakdown: [{ subtype: 'Student', count: 15 }] },
  { word: 'risk', count: 10, sentiment: 'negative', section: '2.4 Monitoring and Compliance Measures', breakdown: [{ subtype: 'Extractive Industries', count: 10 }] },
];

const mockComments = [
    // Comments for 'tax' (negative)
    { id: 1, text: "The new tax policy is a significant burden on small businesses.", author: "John Doe", role: "Businessperson", sentiment: "negative", wordCount: 12, keywords: ["tax", "burden", "SMEs"] },
    { id: 6, text: "I'm concerned the recent tax hikes will stifle growth for startups.", author: "Alice Johnson", role: "Businessperson", sentiment: "negative", wordCount: 11, keywords: ["tax"] },
    { id: 7, text: "Another tax increase? This is becoming unsustainable for my family's budget.", author: "Robert Smith", role: "Professional", sentiment: "negative", wordCount: 13, keywords: ["tax", "cost"] },

    // Comments for 'sustainability' (positive)
    { id: 2, text: "I'm optimistic about the sustainability goals, but implementation seems challenging.", author: "Jane Smith", role: "Professional", sentiment: "positive", wordCount: 13, keywords: ["sustainability", "implementation"] },
    { id: 8, text: "Our company's commitment to sustainability is attracting new talent.", author: "Priya Singh", role: "Service Economy", sentiment: "positive", wordCount: 10, keywords: ["sustainability"] },
    { id: 9, text: "It's great to see the government prioritizing sustainability in their new policies.", author: "Ben Carter", role: "Student", sentiment: "positive", wordCount: 13, keywords: ["sustainability", "policy", "benefits"] },

    // Comments for 'clarity' (negative)
    { id: 3, text: "The lack of clarity in the new guidelines is concerning for everyone involved.", author: "Peter Jones", role: "Professional", sentiment: "negative", wordCount: 13, keywords: ["clarity", "guidelines"] },
    { id: 10, text: "We cannot proceed until we have more clarity on the enforcement of these standards.", author: "Isabelle Rodriguez", role: "Manufacturing", sentiment: "negative", wordCount: 15, keywords: ["clarity", "enforcement", "standards"] },
    { id: 11, text: "Without clarity, businesses are hesitant to invest in the required changes.", author: "Tom Wilson", role: "Businessperson", sentiment: "negative", wordCount: 12, keywords: ["clarity"] },

    // Comments for 'GST' and 'credit' (positive/neutral)
    { id: 4, text: "The GST credit is a welcome benefit for students struggling with costs.", author: "Emily White", role: "Student", sentiment: "positive", wordCount: 12, keywords: ["GST", "credit", "benefits"] },
    { id: 12, text: "Understanding the GST implications for international trade is complex but manageable.", author: "Frank Miller", role: "Businessperson", sentiment: "neutral", wordCount: 12, keywords: ["GST"] },
    { id: 13, text: "The unified GST system has streamlined our accounting processes significantly.", author: "Grace Lee", role: "Service Economy", sentiment: "neutral", wordCount: 11, keywords: ["GST"] },

    // Comments for 'compliance' and 'emissions' (negative)
    { id: 5, text: "Compliance with these emission standards will be extremely costly.", author: "Michael Brown", role: "Manufacturing", sentiment: "negative", wordCount: 9, keywords: ["compliance", "emissions", "cost"] },
    { id: 14, text: "The burden of regulatory compliance is overwhelming for SMEs and needs to be simplified.", author: "David Chen", role: "Businessperson", sentiment: "negative", wordCount: 15, keywords: ["compliance", "burden", "SMEs"] },
    { id: 15, text: "Fear of non-compliance penalties is a major stressor for our industry.", author: "Olivia Garcia", role: "Extractive Industries", sentiment: "negative", wordCount: 12, keywords: ["compliance", "penalties", "risk"] },
    { id: 16, text: "Reducing emissions is crucial, but the proposed timeline is too aggressive.", author: "Henry Ford", role: "Manufacturing", sentiment: "negative", wordCount: 12, keywords: ["emissions"] },

    // Comments for 'privacy' (negative)
    { id: 17, text: "I'm very worried about data privacy with these new monitoring measures.", author: "Sophia Martinez", role: "Student", sentiment: "negative", wordCount: 12, keywords: ["data", "privacy"] },
    { id: 18, text: "The policy shows a shocking disregard for personal privacy and data protection.", author: "William Davis", role: "Professional", sentiment: "negative", wordCount: 13, keywords: ["policy", "privacy", "data"] },
    { id: 19, text: "There are not enough safeguards to protect user privacy from potential misuse.", author: "Ava Taylor", role: "Student", sentiment: "negative", wordCount: 13, keywords: ["privacy", "risk"] },
    
    // Comments for 'implementation' (negative)
    { id: 20, text: "The implementation of this policy has been a disaster from the start.", author: "James Harris", role: "Professional", sentiment: "negative", wordCount: 12, keywords: ["implementation", "policy"] },
    { id: 21, text: "Poor implementation is undermining the good intentions of the original law.", author: "Mia Clark", role: "Service Economy", sentiment: "negative", wordCount: 12, keywords: ["implementation"] },
    { id: 22, text: "There was no clear plan for implementation, leading to widespread confusion.", author: "Noah Lewis", role: "Businessperson", sentiment: "negative", wordCount: 12, keywords: ["implementation", "clarity"] },
    
    // Comments for 'guidelines' (neutral)
    { id: 23, text: "The official guidelines for the project submission were released yesterday.", author: "Chloe Kim", role: "Professional", sentiment: "neutral", wordCount: 10, keywords: ["guidelines"] },
    { id: 24, text: "We need to follow the established brand guidelines to ensure design consistency.", author: "Leo Rivera", role: "Service Economy", sentiment: "neutral", wordCount: 12, keywords: ["guidelines"] },
    { id: 25, text: "Could you please provide a link to the community posting guidelines?", author: "Sam Jones", role: "Student", sentiment: "neutral", wordCount: 11, keywords: ["guidelines"] },

    // Comments for 'transparency' (positive)
    { id: 26, text: "Increased transparency in the supply chain is a huge win for consumers.", author: "Nora Patel", role: "Professional", sentiment: "positive", wordCount: 12, keywords: ["transparency"] },
    { id: 27, text: "We appreciate the board's commitment to transparency regarding future plans.", author: "Daniel Yi", role: "Businessperson", sentiment: "positive", wordCount: 11, keywords: ["transparency"] },
    { id: 28, text: "A high level of transparency is essential for building public trust.", author: "Fatima Al-Jamil", role: "Student", sentiment: "positive", wordCount: 11, keywords: ["transparency", "trust"] },

    // Comments for 'policy' (neutral)
    { id: 29, text: "The committee is currently reviewing the existing remote work policy.", author: "Admin Clerk", role: "Service Economy", sentiment: "neutral", wordCount: 10, keywords: ["policy", "review"] },
    { id: 30, text: "This document outlines the changes to the returns policy, effective next month.", author: "Retail Manager", role: "Businessperson", sentiment: "neutral", wordCount: 13, keywords: ["policy"] },
    { id: 31, text: "The university's academic honesty policy is available in the student handbook.", author: "Librarian", role: "Professional", sentiment: "neutral", wordCount: 12, keywords: ["policy", "student"] },

    // Comments for 'standards' (neutral)
    { id: 32, text: "All our products are manufactured to meet the latest safety standards.", author: "QA Engineer", role: "Manufacturing", sentiment: "neutral", wordCount: 11, keywords: ["standards", "safety"] },
    { id: 33, text: "The report benchmarks our performance against industry standards.", author: "Market Analyst", role: "Professional", sentiment: "neutral", wordCount: 8, keywords: ["standards", "performance"] },
    { id: 34, text: "It is important to adhere to accessibility standards in web development.", author: "Web Developer", role: "Service Economy", sentiment: "neutral", wordCount: 11, keywords: ["standards", "accessibility"] },

    // Comments for 'data' (neutral)
    { id: 35, text: "The team is currently in the process of analyzing the collected user data.", author: "Data Scientist", role: "Professional", sentiment: "neutral", wordCount: 13, keywords: ["data", "analysis"] },
    { id: 36, text: "This chart visualizes historical sales data from the last fiscal quarter.", author: "Business Analyst", role: "Businessperson", sentiment: "neutral", wordCount: 11, keywords: ["data", "sales"] },
    { id: 37, text: "We need to ensure the integrity and accuracy of the source data before proceeding.", author: "Researcher", role: "Professional", sentiment: "neutral", wordCount: 14, keywords: ["data", "integrity"] },

    // Comments for 'feedback' (neutral)
    { id: 38, text: "The survey is designed to gather user feedback on the new software features.", author: "UX Researcher", role: "Professional", sentiment: "neutral", wordCount: 12, keywords: ["feedback", "user"] },
    { id: 39, text: "We will incorporate the feedback from our client into the next project revision.", author: "Project Manager", role: "Service Economy", sentiment: "neutral", wordCount: 13, keywords: ["feedback", "client"] },
    { id: 40, text: "Constructive feedback is a crucial part of the performance review process.", author: "HR Specialist", role: "Professional", sentiment: "neutral", wordCount: 11, keywords: ["feedback", "review"] },
];


const displayOrder = [
    'guidelines', 'privacy', 'transparency', 'burden', 'emissions',
    'compliance', 'cost', 'implementation', 'policy', 'penalties', 'SMEs',
    'tax', 'standards', 'risk', 'data', 'benefits', 'sustainability', 'feedback', 'credit', 'GST', 'clarity',
    'enforcement'
];
const stakeholderCategories = {
  'Individual': ['Businessperson', 'Student', 'Professional'],
  'Organization': ['Extractive Industries', 'Manufacturing', 'Service Economy'],
};

interface SelectedKeyword {
  word: string;
  sentiment: string;
}

const WordCloudAndAnalysis = () => {
  const [selectedSection, setSelectedSection] = useState<string>('all');
  const [selectedStakeholder, setSelectedStakeholder] = useState<string>('all');
  const [selectedKeyword, setSelectedKeyword] = useState<SelectedKeyword | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const uniqueSections = useMemo(() => Array.from(new Set(mockKeywords.map(k => k.section))).sort(), []);

  const filteredKeywords = useMemo(() => {
    return mockKeywords.filter(keyword => {
      const sectionMatch = selectedSection === 'all' || keyword.section === selectedSection;
      if (selectedStakeholder === 'all') {
        return sectionMatch;
      }
      const stakeholderMatch = keyword.breakdown.some(item => {
        if (selectedStakeholder === 'Individual') {
          return stakeholderCategories.Individual.includes(item.subtype);
        }
        if (selectedStakeholder === 'Organization') {
          return stakeholderCategories.Organization.includes(item.subtype);
        }
        return item.subtype === selectedStakeholder;
      });
      return sectionMatch && stakeholderMatch;
    });
  }, [selectedSection, selectedStakeholder]);

  const orderedKeywords = useMemo(() => {
    const wordOrderMap = new Map(displayOrder.map((word, index) => [word, index]));
    return [...filteredKeywords].sort((a, b) => {
      const indexA = wordOrderMap.get(a.word) ?? Infinity;
      const indexB = wordOrderMap.get(b.word) ?? Infinity;
      return indexA - indexB;
    });
  }, [filteredKeywords]);

  const getWordSize = (count: number, maxCount: number) => {
    if (maxCount === 0) return 14;
    const minSize = 14;
    const maxSize = 52;
    const ratio = Math.sqrt(count / maxCount);
    return Math.round(minSize + (maxSize - minSize) * ratio);
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'hsl(var(--sentiment-supportive))';
      case 'negative': return 'hsl(var(--sentiment-critical))';
      default: return 'hsl(var(--sentiment-neutral))';
    }
  };

  const generateBreakdownTitle = (keyword: typeof mockKeywords[0]): string => {
    let title = `${keyword.word}: ${keyword.count} total mentions\n\nBreakdown:\n`;
    keyword.breakdown.forEach(item => {
      title += `- ${item.subtype}: ${item.count}\n`;
    });
    return title;
  };

  const maxCount = useMemo(() => Math.max(1, ...filteredKeywords.map(k => k.count)), [filteredKeywords]);
  const topKeywordsForLegend = useMemo(() => {
      return [...filteredKeywords].sort((a,b) => b.count - a.count);
  }, [filteredKeywords]);

  const handleKeywordClick = (word: string, sentiment: string) => {
    setSelectedKeyword({ word, sentiment });
    setSearchQuery('');
  };

  const handleKeywordClear = () => {
    setSelectedKeyword(null);
  };

  const filteredComments = useMemo(() => {
    if (!selectedKeyword) return [];
    let filtered = mockComments;
    filtered = filtered.filter(comment => {
      const hasKeyword = comment.keywords.some(kw =>
        kw.toLowerCase().includes(selectedKeyword.word.toLowerCase())
      ) || comment.text.toLowerCase().includes(selectedKeyword.word.toLowerCase());
      const hasSameSentiment = comment.sentiment === selectedKeyword.sentiment;
      return hasKeyword && hasSameSentiment;
    });
    if (searchQuery) {
      filtered = filtered.filter(comment =>
        comment.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comment.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comment.role.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filtered;
  }, [selectedKeyword, searchQuery]);

  const getSentimentBadgeColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'text-green-600 bg-green-50 border-green-200';
      case 'negative': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-amber-600 bg-amber-50 border-amber-200';
    }
  };
  const getSentimentLabel = (sentiment: string) => sentiment.charAt(0).toUpperCase() + sentiment.slice(1);
  const highlightKeywords = (text: string, keywords: string[], p0: string) => {
    let highlightedText = text;
    keywords.forEach(keyword => {
      const regex = new RegExp(`(${keyword})`, 'gi');
      highlightedText = highlightedText.replace(regex, '<span class="text-primary font-medium bg-primary/10 px-1 rounded">$1</span>');
    });
    return highlightedText;
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-card border-border">
        <CardHeader>
            <CardTitle className="text-3xl font-bold text-blue-900 flex items-center gap-2">
              <Cloud className="w-8 h-8 text-blue-900" strokeWidth={3} />
              Sentiment-Aware Word Cloud
            </CardTitle>
            <CardDescription className='text-lg font-medium text-gray-950'>
              Click a word below to analyze related comments.
            </CardDescription>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Select value={selectedSection} onValueChange={setSelectedSection}>
                <SelectTrigger className="w-full sm:w-64">
                  <SelectValue placeholder="Filter by section" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sections</SelectItem>
                  {uniqueSections.map(section => (
                    <SelectItem key={section} value={section}>{section}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedStakeholder} onValueChange={setSelectedStakeholder}>
                <SelectTrigger className="w-full sm:w-56">
                  <SelectValue placeholder="Filter by stakeholder" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Stakeholders</SelectItem>
                  <SelectGroup>
                    <SelectLabel>By Type</SelectLabel>
                    <SelectItem value="Individual">All Individuals</SelectItem>
                    <SelectItem value="Organization">All Organizations</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                     <SelectLabel>Individual Subtypes</SelectLabel>
                     {stakeholderCategories.Individual.map(subtype => (
                        <SelectItem key={subtype} value={subtype}>{subtype}</SelectItem>
                     ))}
                  </SelectGroup>
                   <SelectGroup>
                     <SelectLabel>Organization Subtypes</SelectLabel>
                     {stakeholderCategories.Organization.map(subtype => (
                        <SelectItem key={subtype} value={subtype}>{subtype}</SelectItem>
                     ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-x-6 gap-y-4 items-center justify-center p-8 min-h-64 rounded-lg bg-muted/50">
            {orderedKeywords.length > 0 ? (
              orderedKeywords.map((keyword) => (
                <span
                  key={keyword.word}
                  className="font-bold transition-all duration-200 hover:scale-110 cursor-pointer"
                  style={{
                    fontSize: `${getWordSize(keyword.count, maxCount)}px`,
                    color: getSentimentColor(keyword.sentiment),
                  }}
                  title={generateBreakdownTitle(keyword)}
                  onClick={() => handleKeywordClick(keyword.word, keyword.sentiment)}
                >
                  {keyword.word}
                </span>
              ))
            ) : (
              <p className="text-muted-foreground">No keywords match the selected filters.</p>
            )}
          </div>
          <div className="border-t border-border pt-4 mt-6">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-2xl font-bold text-blue-900 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-blue-900" />
                Top Keywords in View
              </h4>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {topKeywordsForLegend.slice(0, 6).map((keyword, index) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <span className="font-bold text-lg" style={{ color: getSentimentColor(keyword.sentiment) }}>
                    {keyword.word}
                  </span>
                  <span className="text-black">
                    {keyword.count} mentions
                  </span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* --- THIS ENTIRE BLOCK IS UPDATED BASED ON YOUR LAST REQUEST --- */}
{/* --- THIS ENTIRE BLOCK IS UPDATED BASED ON YOUR LAST REQUEST --- */}
{selectedKeyword && (
  <Card className="shadow-card border-border">
    <CardHeader>
      <div className="flex items-center justify-between">
        <div>
          <CardTitle className="flex items-center gap-2 text-4xl font-bold text-blue-900">
            <MessageSquare className="w-8 h-8 text-blue-900" />
            Comment Analysis
            <Badge
              variant="outline"
              className="text-lg cursor-pointer hover:bg-destructive hover:text-destructive-foreground"
              onClick={handleKeywordClear}
            >
              Filtered by: {selectedKeyword.word} ({selectedKeyword.sentiment}) ✕
            </Badge>
          </CardTitle>
          <CardDescription>
            {filteredComments.length} comments found
          </CardDescription>
        </div>
        <div className="text-base text-black flex items-center gap-4">
          <Input
            placeholder="Filter comments..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-48"
          />
          <span className="text-base text-muted-foreground">25 per page</span>
        </div>
      </div>
    </CardHeader>
    <CardContent>
      <div className="space-y-6">
        {/* Table Header */}
        <div className="grid grid-cols-12 gap-x-8 text-sm font-medium text-muted-foreground border-b pb-2">
          <div className="col-span-6 text-2xl text-black font-semibold flex items-center gap-2">
            <MessageSquare className="w-6 h-6" />
            <span>Comment</span>
          </div>
          <div className="col-span-2 text-2xl text-black font-semibold flex items-center justify-center gap-2">
            <Smile className="w-6 h-6" />
            <span>Sentiment</span>
          </div>
          <div className="col-span-4 text-2xl text-black font-semibold flex items-center gap-2">
            <User className="w-6 h-6" />
            <span>Author</span>
          </div>
        </div>

        {/* Table Rows */}
        <div className="space-y-4 bg-blue-50 dark:bg-blue-950 rounded-lg p-4">
          {filteredComments.map((comment) => (
            <div
              key={comment.id}
              className="grid grid-cols-12 gap-x-8 py-4 border-b border-border/50 last:border-b-0
                         hover:bg-gray-50 dark:hover:bg-gray-800 transition rounded-lg"
            >
              {/* Comment Column */}
              <div className="col-span-6 text-left">
                <div className="space-y-2">
                  <p
                    className="text-xl text-black leading-relaxed"
                    dangerouslySetInnerHTML={{
                      __html: highlightKeywords(
                        comment.text,
                        comment.keywords,
                        "font-bold bg-yellow-200 px-1 rounded"
                      ),
                    }}
                  />
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="text-lg text-black font-semibold">
                      {comment.wordCount} words
                    </span>
                    {comment.keywords.map((kw, index) => (
                      <Badge
                        key={index}
                        variant="secondary"
                        className="text-lg px-2 py-0"
                      >
                        {kw}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sentiment Column */}
              <div className="col-span-2 flex justify-center items-center">
                <Badge
                  className={`${getSentimentBadgeColor(comment.sentiment)} border text-lg`}
                  variant="outline"
                >
                  {getSentimentLabel(comment.sentiment)}
                </Badge>
              </div>

              {/* Author Column */}
              <div className="col-span-4 text-left">
                <div className="space-y-1">
                  <p className="text-xl font-medium text-black">
                    {comment.author}
                  </p>
                  <p className="text-lg text-muted-foreground">{comment.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredComments.length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            <p>No comments found matching your criteria.</p>
            <button
              onClick={handleKeywordClear}
              className="text-primary hover:underline mt-2"
            >
              Clear filter
            </button>
          </div>
        )}
      </div>
    </CardContent>
  </Card>
)}
</div>

  );
};

export default WordCloudAndAnalysis;