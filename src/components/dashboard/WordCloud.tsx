// // import { useState } from 'react';
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// // import { Button } from '@/components/ui/button';
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// // import { mockStats } from '@/data/mockData';

// // const WordCloud = () => {
// //   const [selectedFilter, setSelectedFilter] = useState<string>('all');
// //   const [selectedStakeholder, setSelectedStakeholder] = useState<string>('all');
// //   const getWordSize = (count: number, maxCount: number) => {
// //     const minSize = 12;
// //     const maxSize = 32;
// //     const ratio = count / maxCount;
// //     return Math.round(minSize + (maxSize - minSize) * ratio);
// //   };

// //   const getSentimentColor = (sentiment: string) => {
// //     switch (sentiment) {
// //       case 'positive':
// //         return 'hsl(var(--sentiment-supportive))';
// //       case 'negative':
// //         return 'hsl(var(--sentiment-critical))';
// //       default:
// //         return 'hsl(var(--sentiment-neutral))';
// //     }
// //   };

// //   const maxCount = Math.max(...mockStats.topKeywords.map(k => k.count));

// //   return (
// //     <Card className="shadow-card border-border">
// //       <CardHeader>
// //         <CardTitle>Sentiment-Aware Word Cloud</CardTitle>
// //         <CardDescription>
// //           Most frequently mentioned terms colored by sentiment context
// //         </CardDescription>
        
// //         {/* Filters */}
// //         <div className="flex gap-4 mt-4">
// //           <Select value={selectedFilter} onValueChange={setSelectedFilter}>
// //             <SelectTrigger className="w-48">
// //               <SelectValue placeholder="Filter by section" />
// //             </SelectTrigger>
// //             <SelectContent>
// //               <SelectItem value="all">All Sections</SelectItem>
// //               <SelectItem value="compliance">Compliance</SelectItem>
// //               <SelectItem value="transparency">Transparency</SelectItem>
// //               <SelectItem value="implementation">Implementation</SelectItem>
// //               <SelectItem value="enforcement">Enforcement</SelectItem>
// //             </SelectContent>
// //           </Select>
          
// //           <Select value={selectedStakeholder} onValueChange={setSelectedStakeholder}>
// //             <SelectTrigger className="w-48">
// //               <SelectValue placeholder="Filter by stakeholder" />
// //             </SelectTrigger>
// //             <SelectContent>
// //               <SelectItem value="all">All Stakeholders</SelectItem>
// //               <SelectItem value="corporate">Corporate</SelectItem>
// //               <SelectItem value="ngo">NGO</SelectItem>
// //               <SelectItem value="professional">Professional</SelectItem>
// //               <SelectItem value="individual">Individual</SelectItem>
// //             </SelectContent>
// //           </Select>
// //         </div>
// //       </CardHeader>
// //       <CardContent>
// //         <div className="flex flex-wrap gap-4 items-center justify-center p-6 min-h-64">
// //           {mockStats.topKeywords.map((keyword, index) => (
// //             <span
// //               key={index}
// //               className="font-medium transition-all duration-200 hover:scale-110 cursor-pointer"
// //               style={{
// //                 fontSize: `${getWordSize(keyword.count, maxCount)}px`,
// //                 color: getSentimentColor(keyword.sentiment),
// //                 opacity: 0.7 + (keyword.count / maxCount) * 0.3
// //               }}
// //               title={`${keyword.word}: ${keyword.count} mentions`}
// //             >
// //               {keyword.word}
// //             </span>
// //           ))}
// //         </div>
        
// //         {/* Sentiment Legend */}
// //         <div className="border-t border-border pt-4 mt-4">
// //           <div className="flex items-center justify-between mb-3">
// //             <h4 className="text-sm font-medium text-foreground">Sentiment Legend</h4>
// //             <div className="flex items-center gap-4 text-xs">
// //               <div className="flex items-center gap-2">
// //                 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(var(--sentiment-supportive))' }}></div>
// //                 <span>Positive Context</span>
// //               </div>
// //               <div className="flex items-center gap-2">
// //                 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(var(--sentiment-critical))' }}></div>
// //                 <span>Negative Context</span>
// //               </div>
// //               <div className="flex items-center gap-2">
// //                 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(var(--sentiment-neutral))' }}></div>
// //                 <span>Neutral Context</span>
// //               </div>
// //             </div>
// //           </div>
          
// //           <div className="grid grid-cols-2 gap-2">
// //             {mockStats.topKeywords.slice(0, 6).map((keyword, index) => (
// //               <div key={index} className="flex items-center justify-between text-sm">
// //                 <span 
// //                   className="font-medium"
// //                   style={{ color: getSentimentColor(keyword.sentiment) }}
// //                 >
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
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// import { mockStats } from '@/data/mockData';

// // --- NEW: We need to add metadata to your keywords for filtering to work. ---
// // In a real app, this data would come from your backend or mockData.ts file.
// const keywordsWithMetadata = mockStats.topKeywords.map(keyword => {
//   if (['compliance', 'burden'].includes(keyword.word)) {
//     return { ...keyword, section: '2.1 GST issues', stakeholder: 'corporate' };
//   }
//   if (['transparency', 'accountability', 'privacy'].includes(keyword.word)) {
//     return { ...keyword, section: '3.1 Transparency Issues', stakeholder: 'ngo' };
//   }
//   if (['implementation', 'standards'].includes(keyword.word)) {
//     return { ...keyword, section: '2.2 Policy changes', stakeholder: 'professional' };
//   }
//   if (['enforcement'].includes(keyword.word)) {
//     return { ...keyword, section: '4.1 Enforcement Issues', stakeholder: 'individual' };
//   }
//   return { ...keyword, section: '2.3 General Issues', stakeholder: 'individual' }; // Default
// });


// const WordCloud = () => {
//   // Your state variables are perfect as they are.
//   const [selectedFilter, setSelectedFilter] = useState<string>('all');
//   const [selectedStakeholder, setSelectedStakeholder] = useState<string>('all');

//   // --- 1. FILTERING LOGIC that makes the dropdowns work ---
//   const filteredKeywords = useMemo(() => {
//     return keywordsWithMetadata.filter(keyword => {
//       const sectionMatch = selectedFilter === 'all' || keyword.section === selectedFilter;
//       const stakeholderMatch = selectedStakeholder === 'all' || keyword.stakeholder === selectedStakeholder;
//       return sectionMatch && stakeholderMatch;
//     });
//   }, [selectedFilter, selectedStakeholder]); // This logic re-runs only when filters change

//   // --- 2. UPDATED getWordSize function for more "dominant" sizing ---
//   const getWordSize = (count: number, maxCount: number) => {
//     if (maxCount === 0) return 14; // Prevent division by zero
//     const minSize = 14;
//     const maxSize = 52; // Increased max size for more visual impact
//     // Using Math.sqrt makes the size difference more pronounced and visually appealing.
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

//   // Calculate maxCount based on the *currently visible* keywords for accurate sizing.
//   const maxCount = useMemo(() => Math.max(1, ...filteredKeywords.map(k => k.count)), [filteredKeywords]);

//   return (
//     <Card className="shadow-card border-border">
//       <CardHeader>
//         <CardTitle>Sentiment-Aware Word Cloud</CardTitle>
//         <CardDescription>
//           Most frequently mentioned terms colored by sentiment context
//         </CardDescription>
        
//         {/* Your filters JSX is perfect and now fully functional */}
//         <div className="flex flex-col sm:flex-row gap-4 mt-4">
//           <Select value={selectedFilter} onValueChange={setSelectedFilter}>
//             <SelectTrigger className="w-full sm:w-48"><SelectValue placeholder="Filter by section" /></SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All Sections</SelectItem>
//               <SelectItem value="compliance">Compliance</SelectItem>
//               <SelectItem value="transparency">Transparency</SelectItem>
//               <SelectItem value="implementation">Implementation</SelectItem>
//               <SelectItem value="enforcement">Enforcement</SelectItem>
//             </SelectContent>
//           </Select>
          
//           <Select value={selectedStakeholder} onValueChange={setSelectedStakeholder}>
//             <SelectTrigger className="w-full sm:w-48"><SelectValue placeholder="Filter by stakeholder" /></SelectTrigger>
//             <SelectContent>
//               <SelectItem value="all">All Stakeholders</SelectItem>
//               <SelectItem value="corporate">Corporate</SelectItem>
//               <SelectItem value="ngo">NGO</SelectItem>
//               <SelectItem value="professional">Professional</SelectItem>
//               <SelectItem value="individual">Individual</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//       </CardHeader>
//       <CardContent>
//         <div className="flex flex-wrap gap-x-6 gap-y-4 items-center justify-center p-6 min-h-64 rounded-lg bg-muted/50">
//           {/* --- 3. RENDER THE FILTERED and better-sized words --- */}
//           {filteredKeywords.length > 0 ? (
//             filteredKeywords.map((keyword, index) => (
//               <span
//                 key={index}
//                 className="font-bold transition-all duration-200 hover:scale-110 cursor-pointer"
//                 style={{
//                   fontSize: `${getWordSize(keyword.count, maxCount)}px`,
//                   color: getSentimentColor(keyword.sentiment),
//                   // Removed opacity for a cleaner look, letting color and size speak.
//                 }}
//                 title={`${keyword.word}: ${keyword.count} mentions`}
//               >
//                 {keyword.word}
//               </span>
//             ))
//           ) : (
//             <p className="text-muted-foreground">No keywords match the selected filters.</p>
//           )}
//         </div>
        

// {/* Sentiment Legend */}
//         <div className="border-t border-border pt-4 mt-4">
//           <div className="flex items-center justify-between mb-3">
//             <h4 className="text-sm font-medium text-foreground">Sentiment Legend</h4>
//             <div className="flex items-center gap-4 text-xs">
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(var(--sentiment-supportive))' }}></div>
//                 <span>Positive Context</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(var(--sentiment-critical))' }}></div>
//                 <span>Negative Context</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(var(--sentiment-neutral))' }}></div>
//                 <span>Neutral Context</span>
//               </div>
//             </div>
//           </div>
          
//           <div className="grid grid-cols-2 gap-2">
//             {mockStats.topKeywords.slice(0, 6).map((keyword, index) => (
//               <div key={index} className="flex items-center justify-between text-sm">
//                 <span 
//                   className="font-medium"
//                   style={{ color: getSentimentColor(keyword.sentiment) }}
//                 >
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




// // import { useState, useMemo } from 'react';
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// // // Make sure to use the new detailed keyword data you created
// // import { mockSentimentKeywords } from '@/data/mockData';

// // const WordCloud = () => {
// //   const [selectedSection, setSelectedSection] = useState<string>('all');
// //   const [selectedStakeholder, setSelectedStakeholder] = useState<string>('all');

// //   // --- 1. DYNAMIC FILTERING LOGIC ---
// //   const filteredKeywords = useMemo(() => {
// //     // Start with the full list
// //     return mockSentimentKeywords.filter(keyword => {
// //       // Check if the keyword matches the selected section filter (or if the filter is 'all')
// //       const sectionMatch = selectedSection === 'all' || keyword.sections.includes(selectedSection);
// //       // Check if the keyword matches the selected stakeholder filter (or if the filter is 'all')
// //       const stakeholderMatch = selectedStakeholder === 'all' || keyword.stakeholders.includes(selectedStakeholder);
// //       // The keyword is included only if it matches both filters
// //       return sectionMatch && stakeholderMatch;
// //     });
// //   }, [selectedSection, selectedStakeholder]); // This logic re-runs only when filters change

// //   // --- 2. HELPER FUNCTIONS ---
// //   const getWordSize = (count: number, maxCount: number) => {
// //     if (maxCount === 0) return 14; // Prevent division by zero
// //     const minSize = 14;
// //     const maxSize = 48; // Increased max size for more impact
// //     // Using Math.sqrt provides a better visual distribution of sizes than a linear scale
// //     const ratio = Math.sqrt(count / maxCount); 
// //     return Math.round(minSize + (maxSize - minSize) * ratio);
// //   };

// //   // Determines the color based on which sentiment count is highest
// //   const getDominantSentimentColor = (keyword: (typeof mockSentimentKeywords)[0]) => {
// //     const { positiveCount, negativeCount, neutralCount } = keyword;
// //     const max = Math.max(positiveCount, negativeCount, neutralCount);
// //     if (max === negativeCount) return 'hsl(var(--sentiment-critical))';
// //     if (max === positiveCount) return 'hsl(var(--sentiment-supportive))';
// //     return 'hsl(var(--sentiment-neutral))';
// //   };
  
// //   // Gets the max count from the *currently filtered* keywords for accurate sizing
// //   const maxCount = useMemo(() => Math.max(1, ...filteredKeywords.map(k => k.totalCount)), [filteredKeywords]);

// //   return (
// //     <Card className="shadow-card border-border">
// //       <CardHeader>
// //         <CardTitle>Sentiment-Aware Word Cloud</CardTitle>
// //         <CardDescription>
// //           Frequently mentioned terms colored by their dominant sentiment context.
// //         </CardDescription>
        
// //         {/* Filter Controls */}
// //         <div className="flex flex-col sm:flex-row gap-4 mt-4">
// //           <Select value={selectedSection} onValueChange={setSelectedSection}>
// //             <SelectTrigger className="w-full sm:w-48"><SelectValue placeholder="Filter by theme" /></SelectTrigger>
// //             <SelectContent>
// //               <SelectItem value="all">All Themes</SelectItem>
// //               {/* These values must exactly match the strings in your mock data */}
// //               <SelectItem value="Compliance">Compliance</SelectItem>
// //               <SelectItem value="Implementation">Implementation</SelectItem>
// //               <SelectItem value="Enforcement">Enforcement</SelectItem>
// //               <SelectItem value="Transparency">Transparency</SelectItem>
// //             </SelectContent>
// //           </Select>
          
// //           <Select value={selectedStakeholder} onValueChange={setSelectedStakeholder}>
// //             <SelectTrigger className="w-full sm:w-48"><SelectValue placeholder="Filter by stakeholder" /></SelectTrigger>
// //             <SelectContent>
// //               <SelectItem value="all">All Stakeholders</SelectItem>
// //               {/* These values must exactly match the strings in your mock data */}
// //               <SelectItem value="Corporate">Corporate</SelectItem>
// //               <SelectItem value="NGO">NGO</SelectItem>
// //               <SelectItem value="Professional">Professional</SelectItem>
// //               <SelectItem value="Individual">Individual</SelectItem>
// //             </SelectContent>
// //           </Select>
// //         </div>
// //       </CardHeader>
// //       <CardContent>
// //         {/* Word Cloud Display Area */}
// //         <div className="flex flex-wrap gap-x-6 gap-y-4 items-center justify-center p-6 min-h-64 rounded-lg bg-muted/50">
// //           {filteredKeywords.length > 0 ? (
// //             filteredKeywords.map((keyword) => {
// //               const negPercent = ((keyword.negativeCount / keyword.totalCount) * 100).toFixed(0);
// //               const posPercent = ((keyword.positiveCount / keyword.totalCount) * 100).toFixed(0);
// //               const neuPercent = 100 - parseInt(negPercent) - parseInt(posPercent);

// //               return (
// //                 <span
// //                   key={keyword.word}
// //                   className="font-bold transition-all duration-200 hover:scale-110 cursor-pointer"
// //                   style={{
// //                     fontSize: `${getWordSize(keyword.totalCount, maxCount)}px`,
// //                     color: getDominantSentimentColor(keyword),
// //                   }}
// //                   // This title attribute creates the detailed, multi-line hover tooltip
// //                   title={`Mentions: ${keyword.totalCount}\nNegative: ${negPercent}%\nPositive: ${posPercent}%\nNeutral: ${neuPercent}%`}
// //                 >
// //                   {keyword.word}
// //                 </span>
// //               );
// //             })
// //           ) : (
// //             <p className="text-muted-foreground">No keywords match the selected filters.</p>
// //           )}
// //         </div>
        
// //         {/* Sentiment Legend */}
// //         <div className="border-t border-border pt-4 mt-4">
// //           <h4 className="text-sm font-medium text-foreground mb-3">Sentiment Legend</h4>
// //           <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground">
// //             <div className="flex items-center gap-2">
// //               <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(var(--sentiment-supportive))' }}></div>
// //               <span>Dominantly Positive</span>
// //             </div>
// //             <div className="flex items-center gap-2">
// //               <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(var(--sentiment-critical))' }}></div>
// //               <span>Dominantly Negative</span>
// //             </div>
// //             <div className="flex items-center gap-2">
// //               <div className="w-3 h-3 rounded-full" style={{ backgroundColor: 'hsl(var(--sentiment-neutral))' }}></div>
// //               <span>Dominantly Neutral / Mixed</span>
// //             </div>
// //           </div>
// //         </div>
// //       </CardContent>
// //     </Card>
// //   );
// // };

// // export default WordCloud;


import { useState, useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
// We are no longer using mockStats for this component, as we define more detailed data below.

// --- 1. EXPANDED & DETAILED MOCK DATA ---
// This data includes the specific section names and more variety for better filtering.
const mockKeywords = [
  // Section 2.1
  { word: 'GST', count: 48, sentiment: 'neutral', section: '2.1 GST issues', stakeholder: 'Corporate' },
  { word: 'tax', count: 42, sentiment: 'negative', section: '2.1 GST issues', stakeholder: 'Corporate' },
  { word: 'benefits', count: 35, sentiment: 'positive', section: '2.1 GST issues', stakeholder: 'NGO' },
  { word: 'credit', count: 25, sentiment: 'positive', section: '2.1 GST issues', stakeholder: 'Professional' },

  // Section 2.2
  { word: 'policy', count: 45, sentiment: 'neutral', section: '2.2 Policy changes', stakeholder: 'Professional' },
  { word: 'implementation', count: 38, sentiment: 'negative', section: '2.2 Policy changes', stakeholder: 'Professional' },
  { word: 'standards', count: 28, sentiment: 'neutral', section: '2.2 Policy changes', stakeholder: 'Corporate' },

  // Section 3.1
  { word: 'transparency', count: 52, sentiment: 'positive', section: '3.1 Transparency Issues', stakeholder: 'NGO' },
  { word: 'accountability', count: 30, sentiment: 'positive', section: '3.1 Transparency Issues', stakeholder: 'NGO' },
  { word: 'privacy', count: 25, sentiment: 'negative', section: '3.1 Transparency Issues', stakeholder: 'Individual' },
  
  // Section 4.1
  { word: 'enforcement', count: 40, sentiment: 'negative', section: '4.1 Enforcement Issues', stakeholder: 'Individual' },
  { word: 'penalties', count: 33, sentiment: 'negative', section: '4.1 Enforcement Issues', stakeholder: 'NGO' },
  { word: 'compliance', count: 29, sentiment: 'neutral', section: '4.1 Enforcement Issues', stakeholder: 'Corporate' },
];


const WordCloud = () => {
  const [selectedSection, setSelectedSection] = useState<string>('all');
  const [selectedStakeholder, setSelectedStakeholder] = useState<string>('all');

  // --- DYNAMICALLY GENERATE UNIQUE FILTER OPTIONS ---
  const uniqueSections = useMemo(() => Array.from(new Set(mockKeywords.map(k => k.section))).sort(), []);
  const uniqueStakeholders = useMemo(() => Array.from(new Set(mockKeywords.map(k => k.stakeholder))).sort(), []);

  // Filtering logic that powers the dropdowns
  const filteredKeywords = useMemo(() => {
    return mockKeywords.filter(keyword => {
      const sectionMatch = selectedSection === 'all' || keyword.section === selectedSection;
      const stakeholderMatch = selectedStakeholder === 'all' || keyword.stakeholder === selectedStakeholder;
      return sectionMatch && stakeholderMatch;
    });
  }, [selectedSection, selectedStakeholder]);

  // Updated sizing function for more dominant words
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

  const maxCount = useMemo(() => Math.max(1, ...filteredKeywords.map(k => k.count)), [filteredKeywords]);

  return (
    <Card className="shadow-card border-border">
      <CardHeader>
        <CardTitle>Sentiment-Aware Word Cloud</CardTitle>
        <CardDescription>
          Most frequently mentioned terms colored by sentiment context
        </CardDescription>
        
        {/* --- 2. FILTERS NOW USE DYNAMIC DATA --- */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Select value={selectedSection} onValueChange={setSelectedSection}>
            <SelectTrigger className="w-full sm:w-64">
              <SelectValue placeholder="Filter by section" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Sections</SelectItem>
              {uniqueSections.map(section => (
                <SelectItem key={section} value={section}>
                  {section}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          
          <Select value={selectedStakeholder} onValueChange={setSelectedStakeholder}>
            <SelectTrigger className="w-full sm:w-48">
              <SelectValue placeholder="Filter by stakeholder" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Stakeholders</SelectItem>
              {uniqueStakeholders.map(stakeholder => (
                 <SelectItem key={stakeholder} value={stakeholder}>
                  {stakeholder}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-x-6 gap-y-4 items-center justify-center p-6 min-h-64 rounded-lg bg-muted/50">
          {filteredKeywords.length > 0 ? (
            filteredKeywords.map((keyword, index) => (
              <span
                key={index}
                className="font-bold transition-all duration-200 hover:scale-110 cursor-pointer"
                style={{
                  fontSize: `${getWordSize(keyword.count, maxCount)}px`,
                  color: getSentimentColor(keyword.sentiment),
                }}
                title={`${keyword.word}: ${keyword.count} mentions`}
              >
                {keyword.word}
              </span>
            ))
          ) : (
            <p className="text-muted-foreground">No keywords match the selected filters.</p>
          )}
        </div>
        
        {/* --- 3. LEGEND NOW USES FILTERED DATA --- */}
        <div className="border-t border-border pt-4 mt-4">
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-sm font-medium text-foreground">Top Keywords in View</h4>
            {/* ... legend color key ... */}
          </div>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            {filteredKeywords.slice(0, 6).map((keyword, index) => (
              <div key={index} className="flex items-center justify-between text-sm">
                <span className="font-medium" style={{ color: getSentimentColor(keyword.sentiment) }}>
                  {keyword.word}
                </span>
                <span className="text-muted-foreground">
                  {keyword.count} mentions
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default WordCloud;