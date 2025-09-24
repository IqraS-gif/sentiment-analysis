// // // import { useEffect, useMemo, useState } from "react";
// // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// // // import { Input } from "@/components/ui/input";
// // // import { Badge } from "@/components/ui/badge";
// // // import { Button } from "@/components/ui/button";
// // // import { FileText, Filter, Search, Sparkles, ListChecks, Building2, User, Heart, Briefcase, GraduationCap, Factory, Store } from "lucide-react";
// // // import { mockClauseMappings, mockComments, mockSentimentKeywords, mockStats, mockThemes, mockSectionSummaries } from "@/data/mockDataSummary";

// // // // Helper to format stakeholder key
// // // const prettyStakeholder = (key: string) => {
// // //   switch (key) {
// // //     case "businessperson":
// // //       return "Businessperson";
// // //     case "student":
// // //       return "Student";
// // //     case "professional":
// // //       return "Professional";
// // //     case "extractiveIndustries":
// // //       return "Extractive Industries";
// // //     case "manufacturing":
// // //       return "Manufacturing";
// // //     case "serviceEconomy":
// // //       return "Service Economy";
// // //     default:
// // //       return key;
// // //   }
// // // };

// // // // Helper function for sentiment colors
// // // const getSentimentColor = (sentiment: string) => {
// // //   switch (sentiment) {
// // //     case "supportive": return "bg-green-500";
// // //     case "neutral": return "bg-gray-500";
// // //     case "critical": return "bg-red-500";
// // //     case "suggestive": return "bg-blue-500";
// // //     default: return "bg-gray-400";
// // //   }
// // // };

// // // function useDraftInsights() {
// // //   return useMemo(() => {
// // //     // Top positive and negative keywords
// // //     const positives = [...mockSentimentKeywords]
// // //       .sort((a, b) => b.positiveCount - a.positiveCount)
// // //       .slice(0, 2)
// // //       .map((k) => k.word);

// // //     const negatives = [...mockSentimentKeywords]
// // //       .sort((a, b) => b.negativeCount - a.negativeCount)
// // //       .slice(0, 2)
// // //       .map((k) => k.word);

// // //     // Most discussed theme
// // //     const topTheme = [...mockThemes].sort((a, b) => b.commentCount - a.commentCount)[0];

// // //     // Most engaged stakeholder
// // //     const stakeholderEntries = Object.entries(mockStats.stakeholderBreakdown) as Array<[string, number]>;
// // //     const topStakeholder = stakeholderEntries.sort((a, b) => b[1] - a[1])[0]?.[0] ?? "corporate";

// // //     const keyFindings: string[] = [
// // //       `Strong support around ${positives.join(" and ")}`,
// // //       `Significant concerns about ${negatives.join(" and ")}`,
// // //       topTheme ? `Most discussed theme: ${topTheme.name}` : "",
// // //       `High engagement from ${prettyStakeholder(topStakeholder)} stakeholders`,
// // //     ].filter(Boolean);

// // //     const positiveHighlights = positives.length
// // //       ? `Broad support for ${positives.join(", ")} across groups.`
// // //       : "Support present across multiple areas.";

// // //     const areasOfConcern = negatives.length
// // //       ? `Concerns center on ${negatives.join(", ")}.`
// // //       : "Concerns span multiple topics.";

// // //     return { keyFindings, positiveHighlights, areasOfConcern };
// // //   }, []);
// // // }

// // // function sentimentScore(counts: { supportive: number; critical: number; neutral: number; suggestive: number }) {
// // //   const weights = { supportive: 1, suggestive: 0.6, neutral: 0.5, critical: 0 } as const;
// // //   const total = counts.supportive + counts.critical + counts.neutral + counts.suggestive;
// // //   if (!total) return 0;
// // //   const score =
// // //     counts.supportive * weights.supportive +
// // //     counts.suggestive * weights.suggestive +
// // //     counts.neutral * weights.neutral +
// // //     counts.critical * weights.critical;
// // //   return Math.round((score / total) * 100);
// // // }

// // // const DraftSummary = () => {
// // //   const { keyFindings, positiveHighlights, areasOfConcern } = useDraftInsights();
// // //   const [selectedDraftTitle, setSelectedDraftTitle] = useState<string>("");
// // //   const [draftPoints, setDraftPoints] = useState<string[] | null>(null);

// // //   useEffect(() => {
// // //     const t = localStorage.getItem("selectedDraftTitle") || "Digital Governance Framework - Draft Policy";
// // //     setSelectedDraftTitle(t);
// // //     try {
// // //       const raw = localStorage.getItem("selectedDraftPoints");
// // //       if (raw) {
// // //         const arr = JSON.parse(raw);
// // //         if (Array.isArray(arr)) setDraftPoints(arr.filter(Boolean));
// // //       }
// // //     } catch {}
// // //   }, []);

// // //   return (
// // //     <Card className="shadow-card border-border">
// // //       <CardHeader>
// // //         <div className="flex items-center justify-between">
// // //           <div>
// // //             <CardTitle className="flex items-center gap-2 text-4xl font-bold text-blue-900">
// // //               <Sparkles className="w-8 h-8" />
// // //               Draft Summary
// // //             </CardTitle>
// // //             <CardDescription>
// // //               {selectedDraftTitle ? (
// // //                 <span className="text-lg text-gray-600">
// // //                   Selected draft: <span className="font-medium text-lg text-black">Environmental Policy Draft 2024</span>
// // //                 </span>
// // //               ) : (
// // //                 "Concise overview of key consultation insights"
// // //               )}
// // //             </CardDescription>
// // //           </div>
// // //         </div>
// // //       </CardHeader>
// // //       <CardContent className="space-y-6">
// // //         <div className="rounded-lg border border-border bg-muted/30 p-4">
// // //           <div className="font-bold mb-2 text-2xl text-blue-900">Key Findings</div>
// // //           <ul className="list-disc pl-5 space-y-1 text-lg text-black font-medium">
// // //             {(draftPoints && draftPoints.length > 0 ? draftPoints : keyFindings).map((k) => (
// // //               <li key={k}>{k}</li>
// // //             ))}
// // //           </ul>
// // //         </div>

// // //         <div className="rounded-lg border border-border p-4 bg-green-50/40 dark:bg-green-950/20">
// // //           <div className="font-bold text-green-700 dark:text-green-300 mb-1 text-2xl">Positive Highlights</div>
// // //           <p className="text-sm text-foreground">{positiveHighlights}</p>
// // //         </div>

// // //         <div className="rounded-lg border border-border p-4 bg-red-50/40 dark:bg-red-950/20">
// // //           <div className="font-bold text-red-700 dark:text-red-300 mb-1 text-2xl">Areas of Concern</div>
// // //           <p className="text-sm text-foreground">{areasOfConcern}</p>
// // //         </div>

// // //         {/* Sentiment Distribution */}
// // //         <div className="rounded-lg border border-border p-4 bg-card">
// // //           <div className="font-semibold mb-3 text-2xl">Overall Sentiment Distribution</div>
// // //           <div className="space-y-2">
// // //             {Object.entries(mockStats.overallSentimentDistribution).map(([sentiment, percentage]) => (
// // //               <div key={sentiment} className="flex items-center gap-3 ">
// // //                 <div className="w-20 text-lg capitalize">{sentiment}</div>
// // //                 <div className="flex-1 bg-muted rounded-full h-2">
// // //                   <div
// // //                     className={`h-2 rounded-full ${getSentimentColor(sentiment)}`}
// // //                     style={{ width: `${percentage}%` }}
// // //                   />
// // //                 </div>
// // //                 <div className="w-10 text-lg text-right">{String(percentage)}%</div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Stakeholder Distribution */}
// // //         <div className="rounded-lg border border-border p-4 bg-card">
// // //           <div className="font-semibold mb-3 text-3xl">Stakeholder Distribution</div>
          
// // //           {/* Individual Group */}
// // //           <div className="mb-4">
// // //             <div className="text-2xl font-semibold text-blue-900 mb-2">Individual Subtypes</div>
// // //             <div className="grid grid-cols-1 gap-2">
// // //               {['businessperson', 'student', 'professional'].map((stakeholder) => {
// // //                 const percentage = mockStats.stakeholderBreakdown[stakeholder as keyof typeof mockStats.stakeholderBreakdown];
// // //                 const Icon = iconForStakeholder(prettyStakeholder(stakeholder));
// // //                 return (
// // //                   <div key={stakeholder} className="flex items-center gap-3 p-2 rounded-lg bg-muted/30">
// // //                     <Icon className="w-6 h-6 text-primary" />
// // //                     <div className="flex-1">
// // //                       <div className="text-xl font-medium">{prettyStakeholder(stakeholder)}</div>
// // //                       <div className="text-lg text-muted-foreground">{String(percentage)}% of comments</div>
// // //                     </div>
// // //                   </div>
// // //                 );
// // //               })}
// // //             </div>
// // //           </div>

// // //           {/* Organization Group */}
// // //           <div>
// // //             <div className="text-sm font-medium text-muted-foreground mb-2">Organization Subtypes</div>
// // //             <div className="grid grid-cols-1 gap-2">
// // //               {['extractiveIndustries', 'manufacturing', 'serviceEconomy'].map((stakeholder) => {
// // //                 const percentage = mockStats.stakeholderBreakdown[stakeholder as keyof typeof mockStats.stakeholderBreakdown];
// // //                 const Icon = iconForStakeholder(prettyStakeholder(stakeholder));
// // //                 return (
// // //                   <div key={stakeholder} className="flex items-center gap-3 p-2 rounded-lg bg-muted/30">
// // //                     <Icon className="w-4 h-4 text-primary" />
// // //                     <div className="flex-1">
// // //                       <div className="text-sm font-medium">{prettyStakeholder(stakeholder)}</div>
// // //                       <div className="text-xs text-muted-foreground">{percentage}% of comments</div>
// // //                     </div>
// // //                   </div>
// // //                 );
// // //               })}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </CardContent>
// // //     </Card>
// // //   );
// // // };

// // // const iconForStakeholder = (type: string) => {
// // //   switch (type) {
// // //     case "Businessperson":
// // //       return Briefcase;
// // //     case "Student":
// // //       return GraduationCap;
// // //     case "Professional":
// // //       return User;
// // //     case "Extractive Industries":
// // //       return Building2;
// // //     case "Manufacturing":
// // //       return Factory;
// // //     case "Service Economy":
// // //       return Store;
// // //     default:
// // //       return User;
// // //   }
// // // };

// // // const SectionSummary = () => {
// // //   const [selectedSection, setSelectedSection] = useState<string>("2.1");
  
// // //   const sectionData = mockSectionSummaries[selectedSection as keyof typeof mockSectionSummaries];
  

// // //   return (
// // //     <Card className="shadow-card border-border">
// // //       <CardHeader>
// // //         <div className="flex items-center justify-between gap-3">
// // //           <div>
// // //             <CardTitle className="flex items-center gap-2">
// // //               <FileText className="w-5 h-5" />
// // //               Section Summary
// // //             </CardTitle>
// // //             <CardDescription>Summary of comments received for each draft section</CardDescription>
// // //           </div>
// // //           <div className="flex gap-2">
// // //             <Select value={selectedSection} onValueChange={setSelectedSection}>
// // //               <SelectTrigger className="w-80">
// // //                 <SelectValue placeholder="Select section" />
// // //               </SelectTrigger>
// // //               <SelectContent>
// // //                 <SelectItem value="2.1">2.1 Environmental Regulatory Changes</SelectItem>
// // //                 <SelectItem value="2.2">2.2 Current Policy Amendments</SelectItem>
// // //                 <SelectItem value="2.3">2.3 Implementation Guidelines</SelectItem>
// // //                 <SelectItem value="2.4">2.4 Monitoring and Compliance Measures</SelectItem>
// // //               </SelectContent>
// // //             </Select>
// // //           </div>
// // //         </div>
// // //       </CardHeader>
// // //       <CardContent className="space-y-6">
// // //         {/* Section Overview */}
// // //         <div className="rounded-lg border border-border p-4 bg-muted/30">
// // //           <div className="flex items-center justify-between mb-3">
// // //             <h3 className="font-semibold text-lg">{sectionData.title}</h3>
// // //             <Badge variant="secondary">{sectionData.totalComments} comments</Badge>
// // //           </div>
// // //         </div>

// // //         {/* Key Findings */}
// // //         <div className="rounded-lg border border-border bg-card p-4">
// // //           <div className="font-semibold mb-3 flex items-center gap-2">
// // //             <Sparkles className="w-4 h-4" />
// // //             Key Findings
// // //           </div>
// // //           <ul className="list-disc pl-5 space-y-1 text-sm text-foreground">
// // //             {sectionData.keyFindings.map((finding, idx) => (
// // //               <li key={idx}>{finding}</li>
// // //             ))}
// // //           </ul>
// // //         </div>

// // //         {/* Positive Highlights */}
// // //         <div className="rounded-lg border border-border p-4 bg-green-50/40 dark:bg-green-950/20">
// // //           <div className="font-semibold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2">
// // //             <Heart className="w-4 h-4" />
// // //             Positive Highlights
// // //           </div>
// // //           <p className="text-sm text-foreground">{sectionData.positiveHighlights}</p>
// // //         </div>

// // //         {/* Areas of Concern */}
// // //         <div className="rounded-lg border border-border p-4 bg-red-50/40 dark:bg-red-950/20">
// // //           <div className="font-semibold text-red-700 dark:text-red-300 mb-2 flex items-center gap-2">
// // //             <ListChecks className="w-4 h-4" />
// // //             Areas of Concern
// // //           </div>
// // //           <p className="text-sm text-foreground">{sectionData.areasOfConcern}</p>
// // //         </div>

// // //         {/* Sentiment Distribution */}
// // //         <div className="rounded-lg border border-border p-4 bg-card">
// // //           <div className="font-semibold mb-3">Sentiment Distribution</div>
// // //           <div className="space-y-2">
// // //             {Object.entries(sectionData.sentimentDistribution).map(([sentiment, percentage]) => (
// // //               <div key={sentiment} className="flex items-center gap-3">
// // //                 <div className="w-20 text-sm capitalize">{sentiment}</div>
// // //                 <div className="flex-1 bg-muted rounded-full h-2">
// // //                   <div
// // //                     className={`h-2 rounded-full ${getSentimentColor(sentiment)}`}
// // //                     style={{ width: `${percentage}%` }}
// // //                   />
// // //                 </div>
// // //                 <div className="w-10 text-sm text-right">{String(percentage)}%</div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Stakeholder Distribution */}
// // //         <div className="rounded-lg border border-border p-4 bg-card">
// // //           <div className="font-semibold mb-3">Stakeholder Distribution</div>
// // //           <div className="grid grid-cols-2 gap-3">
// // //             {Object.entries(sectionData.stakeholderDistribution).map(([stakeholder, percentage]) => {
// // //               const Icon = iconForStakeholder(prettyStakeholder(stakeholder));
// // //               return (
// // //                 <div key={stakeholder} className="flex items-center gap-3 p-2 rounded-lg bg-muted/30">
// // //                   <Icon className="w-4 h-4 text-primary" />
// // //                   <div className="flex-1">
// // //                     <div className="text-sm font-medium">{prettyStakeholder(stakeholder)}</div>
// // //                     <div className="text-xs text-muted-foreground">{String(percentage)}% of comments</div>
// // //                   </div>
// // //                 </div>
// // //               );
// // //             })}
// // //           </div>
// // //         </div>

// // //         <div className="flex justify-end">
// // //           <Button variant="outline">Export Section Summary</Button>
// // //         </div>
// // //       </CardContent>
// // //     </Card>
// // //   );
// // // };

// // // const SummaryView = () => {
// // //   return (
// // //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// // //       <DraftSummary />
// // //       <SectionSummary />
// // //     </div>
// // //   );
// // // };

// // // export default SummaryView;



// // // import { useEffect, useMemo, useState } from "react";
// // // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// // // import { Input } from "@/components/ui/input";
// // // import { Badge } from "@/components/ui/badge";
// // // import { Button } from "@/components/ui/button";
// // // import { FileText, Filter, Search, Sparkles, ListChecks, Building2, User, Heart, Briefcase, GraduationCap, Factory, Store } from "lucide-react";
// // // import { mockClauseMappings, mockComments, mockSentimentKeywords, mockStats, mockThemes, mockSectionSummaries } from "@/data/mockDataSummary";

// // // // Helper to format stakeholder key
// // // const prettyStakeholder = (key: string) => {
// // //   switch (key) {
// // //     case "businessperson":
// // //       return "Businessperson";
// // //     case "student":
// // //       return "Student";
// // //     case "professional":
// // //       return "Professional";
// // //     case "extractiveIndustries":
// // //       return "Extractive Industries";
// // //     case "manufacturing":
// // //       return "Manufacturing";
// // //     case "serviceEconomy":
// // //       return "Service Economy";
// // //     default:
// // //       return key;
// // //   }
// // // };

// // // // Helper function for sentiment colors
// // // const getSentimentColor = (sentiment: string) => {
// // //   switch (sentiment) {
// // //     case "supportive": return "bg-green-500";
// // //     case "neutral": return "bg-gray-500";
// // //     case "critical": return "bg-red-500";
// // //     case "suggestive": return "bg-blue-500";
// // //     default: return "bg-gray-400";
// // //   }
// // // };

// // // function useDraftInsights() {
// // //   return useMemo(() => {
// // //     // Top positive and negative keywords
// // //     const positives = [...mockSentimentKeywords]
// // //       .sort((a, b) => b.positiveCount - a.positiveCount)
// // //       .slice(0, 2)
// // //       .map((k) => k.word);

// // //     const negatives = [...mockSentimentKeywords]
// // //       .sort((a, b) => b.negativeCount - a.negativeCount)
// // //       .slice(0, 2)
// // //       .map((k) => k.word);

// // //     // Most discussed theme
// // //     const topTheme = [...mockThemes].sort((a, b) => b.commentCount - a.commentCount)[0];

// // //     // Most engaged stakeholder
// // //     const stakeholderEntries = Object.entries(mockStats.stakeholderBreakdown) as Array<[string, number]>;
// // //     const topStakeholder = stakeholderEntries.sort((a, b) => b[1] - a[1])[0]?.[0] ?? "corporate";

// // //     const keyFindings: string[] = [
// // //       `Strong support around ${positives.join(" and ")}`,
// // //       `Significant concerns about ${negatives.join(" and ")}`,
// // //       topTheme ? `Most discussed theme: ${topTheme.name}` : "",
// // //       `High engagement from ${prettyStakeholder(topStakeholder)} stakeholders`,
// // //     ].filter(Boolean);

// // //     const positiveHighlights = positives.length
// // //       ? `Broad support for ${positives.join(", ")} across groups.`
// // //       : "Support present across multiple areas.";

// // //     const areasOfConcern = negatives.length
// // //       ? `Concerns center on ${negatives.join(", ")}.`
// // //       : "Concerns span multiple topics.";

// // //     return { keyFindings, positiveHighlights, areasOfConcern };
// // //   }, []);
// // // }

// // // function sentimentScore(counts: { supportive: number; critical: number; neutral: number; suggestive: number }) {
// // //   const weights = { supportive: 1, suggestive: 0.6, neutral: 0.5, critical: 0 } as const;
// // //   const total = counts.supportive + counts.critical + counts.neutral + counts.suggestive;
// // //   if (!total) return 0;
// // //   const score =
// // //     counts.supportive * weights.supportive +
// // //     counts.suggestive * weights.suggestive +
// // //     counts.neutral * weights.neutral +
// // //     counts.critical * weights.critical;
// // //   return Math.round((score / total) * 100);
// // // }

// // // const DraftSummary = () => {
// // //   const { keyFindings, positiveHighlights, areasOfConcern } = useDraftInsights();
// // //   const [selectedDraftTitle, setSelectedDraftTitle] = useState<string>("");
// // //   const [draftPoints, setDraftPoints] = useState<string[] | null>(null);

// // //   useEffect(() => {
// // //     const t = localStorage.getItem("selectedDraftTitle") || "Digital Governance Framework - Draft Policy";
// // //     setSelectedDraftTitle(t);
// // //     try {
// // //       const raw = localStorage.getItem("selectedDraftPoints");
// // //       if (raw) {
// // //         const arr = JSON.parse(raw);
// // //         if (Array.isArray(arr)) setDraftPoints(arr.filter(Boolean));
// // //       }
// // //     } catch {}
// // //   }, []);

// // //   return (
// // //     <Card className="shadow-card border-border">
// // //       <CardHeader>
// // //         <div className="flex items-center justify-between">
// // //           <div>
// // //             <CardTitle className="flex items-center gap-2 text-4xl font-bold text-blue-900">
// // //               <Sparkles className="w-8 h-8" />
// // //               Draft Summary
// // //             </CardTitle>
// // //             <CardDescription>
// // //               {selectedDraftTitle ? (
// // //                 <span className="text-lg text-gray-600">
// // //                   Selected draft: <span className="font-medium text-lg text-black">Environmental Policy Draft 2024</span>
// // //                 </span>
// // //               ) : (
// // //                 "Concise overview of key consultation insights"
// // //               )}
// // //             </CardDescription>
// // //           </div>
// // //         </div>
// // //       </CardHeader>
// // //       <CardContent className="space-y-6">
// // //         <div className="rounded-lg border border-border bg-muted/30 p-4">
// // //           <div className="font-bold mb-2 text-2xl text-blue-900">Key Findings</div>
// // //           <ul className="list-disc pl-5 space-y-1 text-lg text-black font-medium">
// // //             {(draftPoints && draftPoints.length > 0 ? draftPoints : keyFindings).map((k) => (
// // //               <li key={k}>{k}</li>
// // //             ))}
// // //           </ul>
// // //         </div>

// // //         <div className="rounded-lg border border-border p-4 bg-green-50/40 dark:bg-green-950/20">
// // //           <div className="font-bold text-green-700 dark:text-green-300 mb-1 text-2xl">Positive Highlights</div>
// // //           <p className="text-lg text-black">{positiveHighlights}</p>
// // //         </div>

// // //         <div className="rounded-lg border border-border p-4 bg-red-50/40 dark:bg-red-950/20">
// // //           <div className="font-bold text-red-700 dark:text-red-300 mb-1 text-2xl">Areas of Concern</div>
// // //           <p className="text-lg text-black">{areasOfConcern}</p>
// // //         </div>

// // //         {/* Sentiment Distribution */}
// // //         <div className="rounded-lg border border-border p-4 bg-card">
// // //           <div className="font-semibold mb-3 text-2xl">Overall Sentiment Distribution</div>
// // //           <div className="space-y-2">
// // //             {Object.entries(mockStats.overallSentimentDistribution).map(([sentiment, percentage]) => (
// // //               <div key={sentiment} className="flex items-center gap-3 ">
// // //                 <div className="w-20 text-lg capitalize">{sentiment}</div>
// // //                 <div className="flex-1 bg-muted rounded-full h-2">
// // //                   <div
// // //                     className={`h-2 rounded-full ${getSentimentColor(sentiment)}`}
// // //                     style={{ width: `${percentage}%` }}
// // //                   />
// // //                 </div>
// // //                 <div className="w-10 text-lg text-right">{String(percentage)}%</div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Stakeholder Distribution */}
// // //         <div className="rounded-lg border border-border p-4 bg-card">
// // //           <div className="font-semibold mb-3 text-3xl">Stakeholder Distribution</div>
          
// // //           {/* Individual Group */}
// // //           <div className="mb-4">
// // //             <div className="text-2xl font-semibold text-blue-900 mb-2">Individual Subtypes</div>
// // //             <div className="grid grid-cols-1 gap-2">
// // //               {['businessperson', 'student', 'professional'].map((stakeholder) => {
// // //                 const percentage = mockStats.stakeholderBreakdown[stakeholder as keyof typeof mockStats.stakeholderBreakdown];
// // //                 const Icon = iconForStakeholder(prettyStakeholder(stakeholder));
// // //                 return (
// // //                   <div key={stakeholder} className="flex items-center gap-3 p-2 rounded-lg bg-muted/30">
// // //                     <Icon className="w-6 h-6 text-primary" />
// // //                     <div className="flex-1">
// // //                       <div className="text-xl font-medium">{prettyStakeholder(stakeholder)}</div>
// // //                       <div className="text-lg text-muted-foreground">{String(percentage)}% of comments</div>
// // //                     </div>
// // //                   </div>
// // //                 );
// // //               })}
// // //             </div>
// // //           </div>

// // //           {/* Organization Group */}
// // //           <div>
// // //             <div className="text-2xl font-semibold text-blue-900 mb-2">Organization Subtypes</div>
// // //             <div className="grid grid-cols-1 gap-2">
// // //               {['extractiveIndustries', 'manufacturing', 'serviceEconomy'].map((stakeholder) => {
// // //                 const percentage = mockStats.stakeholderBreakdown[stakeholder as keyof typeof mockStats.stakeholderBreakdown];
// // //                 const Icon = iconForStakeholder(prettyStakeholder(stakeholder));
// // //                 return (
// // //                   <div key={stakeholder} className="flex items-center gap-3 p-2 rounded-lg bg-muted/30">
// // //                     <Icon className="w-6 h-6 text-primary" />
// // //                     <div className="flex-1">
// // //                       <div className="text-xl font-medium">{prettyStakeholder(stakeholder)}</div>
// // //                       <div className="text-lg text-muted-foreground">{percentage}% of comments</div>
// // //                     </div>
// // //                   </div>
// // //                 );
// // //               })}
// // //             </div>
// // //           </div>
// // //         </div>
// // //       </CardContent>
// // //     </Card>
// // //   );
// // // };

// // // const iconForStakeholder = (type: string) => {
// // //   switch (type) {
// // //     case "Businessperson":
// // //       return Briefcase;
// // //     case "Student":
// // //       return GraduationCap;
// // //     case "Professional":
// // //       return User;
// // //     case "Extractive Industries":
// // //       return Building2;
// // //     case "Manufacturing":
// // //       return Factory;
// // //     case "Service Economy":
// // //       return Store;
// // //     default:
// // //       return User;
// // //   }
// // // };

// // // const SectionSummary = () => {
// // //   const [selectedSection, setSelectedSection] = useState<string>("2.1");
  
// // //   const sectionData = mockSectionSummaries[selectedSection as keyof typeof mockSectionSummaries];
  
// // //   const individualStakeholders = ['businessperson', 'student', 'professional'];
// // //   const organizationStakeholders = ['extractiveIndustries', 'manufacturing', 'serviceEconomy'];


// // //   return (
// // //     <Card className="shadow-card border-border">
// // //       <CardHeader>
// // //         <div className="flex items-center justify-between gap-3">
// // //           <div>
// // //             <CardTitle className="flex items-center gap-3 text-4xl font-bold text-blue-900">
// // //               <FileText className="w-8 h-8" />
// // //               Section Summary
// // //             </CardTitle>
// // //             <CardDescription className="text-lg text-gray-600">
// // //               Summary of comments for each draft section
// // //             </CardDescription>
// // //           </div>
// // //           <div className="flex gap-2">
// // //             <Select value={selectedSection} onValueChange={setSelectedSection}>
// // //               <SelectTrigger className="w-80">
// // //                 <SelectValue placeholder="Select section" />
// // //               </SelectTrigger>
// // //               <SelectContent>
// // //                 <SelectItem value="2.1">2.1 Environmental Regulatory Changes</SelectItem>
// // //                 <SelectItem value="2.2">2.2 Current Policy Amendments</SelectItem>
// // //                 <SelectItem value="2.3">2.3 Implementation Guidelines</SelectItem>
// // //                 <SelectItem value="2.4">2.4 Monitoring and Compliance Measures</SelectItem>
// // //               </SelectContent>
// // //             </Select>
// // //           </div>
// // //         </div>
// // //       </CardHeader>
// // //       <CardContent className="space-y-6">
// // //         {/* Section Overview */}
// // //         <div className="rounded-lg border border-border p-4 bg-muted/30">
// // //           <div className="flex items-center justify-between">
// // //             <h3 className="font-semibold text-xl">{sectionData.title}</h3>
// // //             <Badge variant="secondary" className="text-lg">{sectionData.totalComments} comments</Badge>
// // //           </div>
// // //         </div>

// // //         {/* Key Findings */}
// // //         <div className="rounded-lg border border-border bg-muted/30 p-4">
// // //           <div className="font-bold mb-2 text-2xl text-blue-900 flex items-center gap-2">
// // //             <Sparkles className="w-6 h-6" />
// // //             Key Findings
// // //           </div>
// // //           <ul className="list-disc pl-5 space-y-1 text-lg text-black font-medium">
// // //             {sectionData.keyFindings.map((finding, idx) => (
// // //               <li key={idx}>{finding}</li>
// // //             ))}
// // //           </ul>
// // //         </div>

// // //         {/* Positive Highlights */}
// // //         <div className="rounded-lg border border-border p-4 bg-green-50/40 dark:bg-green-950/20">
// // //           <div className="font-bold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2 text-2xl">
// // //             <Heart className="w-6 h-6" />
// // //             Positive Highlights
// // //           </div>
// // //           <p className="text-lg text-black  ">{sectionData.positiveHighlights}</p>
// // //         </div>

// // //         {/* Areas of Concern */}
// // //         <div className="rounded-lg border border-border p-4 bg-red-50/40 dark:bg-red-950/20">
// // //           <div className="font-bold text-red-700 dark:text-red-300 mb-2 flex items-center gap-2 text-2xl">
// // //             <ListChecks className="w-6 h-6" />
// // //             Areas of Concern
// // //           </div>
// // //           <p className="text-lg text-black">{sectionData.areasOfConcern}</p>
// // //         </div>

// // //         {/* Sentiment Distribution */}
// // //         <div className="rounded-lg border border-border p-4 bg-card">
// // //           <div className="font-semibold mb-3 text-2xl">Sentiment Distribution</div>
// // //           <div className="space-y-2">
// // //             {Object.entries(sectionData.sentimentDistribution).map(([sentiment, percentage]) => (
// // //               <div key={sentiment} className="flex items-center gap-3">
// // //                 <div className="w-20 text-lg capitalize">{sentiment}</div>
// // //                 <div className="flex-1 bg-muted rounded-full h-2">
// // //                   <div
// // //                     className={`h-2 rounded-full ${getSentimentColor(sentiment)}`}
// // //                     style={{ width: `${percentage}%` }}
// // //                   />
// // //                 </div>
// // //                 <div className="w-10 text-lg text-right">{String(percentage)}%</div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         {/* Stakeholder Distribution */}
// // //         <div className="rounded-lg border border-border p-4 bg-card">
// // //           <div className="font-semibold mb-3 text-3xl">Stakeholder Distribution</div>
          
// // //           {/* Individual Group */}
// // //           <div className="mb-4">
// // //             <div className="text-2xl font-semibold text-blue-900 mb-2">Individual Subtypes</div>
// // //             <div className="grid grid-cols-1 gap-2">
// // //               {individualStakeholders.map((stakeholder) => {
// // //                 const percentage = sectionData.stakeholderDistribution[stakeholder as keyof typeof sectionData.stakeholderDistribution];
// // //                 if (!percentage) return null;
// // //                 const Icon = iconForStakeholder(prettyStakeholder(stakeholder));
// // //                 return (
// // //                   <div key={stakeholder} className="flex items-center gap-3 p-2 rounded-lg bg-muted/30">
// // //                     <Icon className="w-6 h-6 text-primary" />
// // //                     <div className="flex-1">
// // //                       <div className="text-xl font-medium">{prettyStakeholder(stakeholder)}</div>
// // //                       <div className="text-lg text-muted-foreground">{String(percentage)}% of comments</div>
// // //                     </div>
// // //                   </div>
// // //                 );
// // //               })}
// // //             </div>
// // //           </div>
          
// // //           {/* Organization Group */}
// // //           <div>
// // //             <div className="text-sm font-medium text-muted-foreground mb-2">Organization Subtypes</div>
// // //             <div className="grid grid-cols-1 gap-2">
// // //               {organizationStakeholders.map((stakeholder) => {
// // //                 const percentage = sectionData.stakeholderDistribution[stakeholder as keyof typeof sectionData.stakeholderDistribution];
// // //                 if (!percentage) return null;
// // //                 const Icon = iconForStakeholder(prettyStakeholder(stakeholder));
// // //                 return (
// // //                   <div key={stakeholder} className="flex items-center gap-3 p-2 rounded-lg bg-muted/30">
// // //                     <Icon className="w-4 h-4 text-primary" />
// // //                     <div className="flex-1">
// // //                       <div className="text-sm font-medium">{prettyStakeholder(stakeholder)}</div>
// // //                       <div className="text-xs text-muted-foreground">{percentage}% of comments</div>
// // //                     </div>
// // //                   </div>
// // //                 );
// // //               })}
// // //             </div>
// // //           </div>
// // //         </div>

// // //         <div className="flex justify-end">
// // //           <Button variant="outline">Export Section Summary</Button>
// // //         </div>
// // //       </CardContent>
// // //     </Card>
// // //   );
// // // };

// // // const SummaryView = () => {
// // //   return (
// // //     <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
// // //       <DraftSummary />
// // //       <SectionSummary />
// // //     </div>
// // //   );
// // // };

// // // export default SummaryView;



// // import { useEffect, useMemo, useState } from "react";
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// // import { Input } from "@/components/ui/input";
// // import { Badge } from "@/components/ui/badge";
// // import { Button } from "@/components/ui/button";
// // import { FileText, Filter, Search, Sparkles, ListChecks, Building2, User, Heart, Briefcase, GraduationCap, Factory, Store } from "lucide-react";
// // import { mockClauseMappings, mockComments, mockSentimentKeywords, mockStats, mockThemes, mockSectionSummaries } from "@/data/mockDataSummary";

// // // Helper to format stakeholder key
// // const prettyStakeholder = (key: string) => {
// //   switch (key) {
// //     case "businessperson":
// //       return "Businessperson";
// //     case "student":
// //       return "Student";
// //     case "professional":
// //       return "Professional";
// //     case "extractiveIndustries":
// //       return "Extractive Industries";
// //     case "manufacturing":
// //       return "Manufacturing";
// //     case "serviceEconomy":
// //       return "Service Economy";
// //     default:
// //       return key;
// //   }
// // };

// // // Helper function for sentiment colors
// // const getSentimentColor = (sentiment: string) => {
// //   switch (sentiment) {
// //     case "supportive": return "bg-green-500";
// //     case "neutral": return "bg-gray-500";
// //     case "critical": return "bg-red-500";
// //     case "suggestive": return "bg-blue-500";
// //     default: return "bg-gray-400";
// //   }
// // };

// // function useDraftInsights() {
// //   return useMemo(() => {
// //     // Top positive and negative keywords
// //     const positives = [...mockSentimentKeywords]
// //       .sort((a, b) => b.positiveCount - a.positiveCount)
// //       .slice(0, 2)
// //       .map((k) => k.word);

// //     const negatives = [...mockSentimentKeywords]
// //       .sort((a, b) => b.negativeCount - a.negativeCount)
// //       .slice(0, 2)
// //       .map((k) => k.word);

// //     // Most discussed theme
// //     const topTheme = [...mockThemes].sort((a, b) => b.commentCount - a.commentCount)[0];

// //     // Most engaged stakeholder
// //     const stakeholderEntries = Object.entries(mockStats.stakeholderBreakdown) as Array<[string, number]>;
// //     const topStakeholder = stakeholderEntries.sort((a, b) => b[1] - a[1])[0]?.[0] ?? "corporate";

// //     const keyFindings: string[] = [
// //       `Strong support around ${positives.join(" and ")}`,
// //       `Significant concerns about ${negatives.join(" and ")}`,
// //       topTheme ? `Most discussed theme: ${topTheme.name}` : "",
// //       `High engagement from ${prettyStakeholder(topStakeholder)} stakeholders`,
// //     ].filter(Boolean);

// //     const positiveHighlights = positives.length
// //       ? `Broad support for ${positives.join(", ")} across groups.`
// //       : "Support present across multiple areas.";

// //     const areasOfConcern = negatives.length
// //       ? `Concerns center on ${negatives.join(", ")}.`
// //       : "Concerns span multiple topics.";

// //     return { keyFindings, positiveHighlights, areasOfConcern };
// //   }, []);
// // }

// // function sentimentScore(counts: { supportive: number; critical: number; neutral: number; suggestive: number }) {
// //   const weights = { supportive: 1, suggestive: 0.6, neutral: 0.5, critical: 0 } as const;
// //   const total = counts.supportive + counts.critical + counts.neutral + counts.suggestive;
// //   if (!total) return 0;
// //   const score =
// //     counts.supportive * weights.supportive +
// //     counts.suggestive * weights.suggestive +
// //     counts.neutral * weights.neutral +
// //     counts.critical * weights.critical;
// //   return Math.round((score / total) * 100);
// // }

// // const DraftSummary = () => {
// //   const { keyFindings, positiveHighlights, areasOfConcern } = useDraftInsights();
// //   const [selectedDraftTitle, setSelectedDraftTitle] = useState<string>("");
// //   const [draftPoints, setDraftPoints] = useState<string[] | null>(null);

// //   useEffect(() => {
// //     const t = localStorage.getItem("selectedDraftTitle") || "Digital Governance Framework - Draft Policy";
// //     setSelectedDraftTitle(t);
// //     try {
// //       const raw = localStorage.getItem("selectedDraftPoints");
// //       if (raw) {
// //         const arr = JSON.parse(raw);
// //         if (Array.isArray(arr)) setDraftPoints(arr.filter(Boolean));
// //       }
// //     } catch {}
// //   }, []);

// //   return (
// //     <Card className="shadow-card border-border">
// //       <CardHeader>
// //         <div className="flex items-center justify-between">
// //           <div>
// //             <CardTitle className="flex items-center gap-2 text-4xl font-bold text-blue-900">
// //               <Sparkles className="w-8 h-8" />
// //               Draft Summary
// //             </CardTitle>
// //             <CardDescription>
// //               {selectedDraftTitle ? (
// //                 <span className="text-lg text-gray-600">
// //                   Selected draft: <span className="font-medium text-lg text-black">Environmental Policy Draft 2024</span>
// //                 </span>
// //               ) : (
// //                 "Concise overview of key consultation insights"
// //               )}
// //             </CardDescription>
// //           </div>
// //         </div>
// //       </CardHeader>
// //       <CardContent className="space-y-6">
// //         <div className="rounded-lg border border-border bg-muted/30 p-4">
// //           <div className="font-bold mb-2 text-2xl text-blue-900">Key Findings</div>
// //           <ul className="list-disc pl-4 space-y-1 text-lg text-black font-medium">
// //             {(draftPoints && draftPoints.length > 0 ? draftPoints : keyFindings).map((k) => (
// //               <li key={k}>{k}</li>
// //             ))}
// //           </ul>
// //         </div>

// //         <div className="rounded-lg border border-border p-4 bg-green-50/40 dark:bg-green-950/20">
// //           <div className="font-bold text-green-700 dark:text-green-300 mb-1 text-2xl">Positive Highlights</div>
// //           <p className="text-lg text-black">{positiveHighlights}</p>
// //         </div>

// //         <div className="rounded-lg border border-border p-4 bg-red-50/40 dark:bg-red-950/20">
// //           <div className="font-bold text-red-700 dark:text-red-300 mb-1 text-2xl">Areas of Concern</div>
// //           <p className="text-lg text-black">{areasOfConcern}</p>
// //         </div>

// //         {/* Sentiment Distribution */}
// //         <div className="rounded-lg border border-border p-4 bg-card">
// //           <div className="font-semibold mb-3 text-2xl">Overall Sentiment Distribution</div>
// //           <div className="space-y-2">
// //             {Object.entries(mockStats.overallSentimentDistribution).map(([sentiment, percentage]) => (
// //               <div key={sentiment} className="flex items-center gap-3 ">
// //                 <div className="w-20 text-lg capitalize">{sentiment}</div>
// //                 <div className="flex-1 bg-muted rounded-full h-2">
// //                   <div
// //                     className={`h-2 rounded-full ${getSentimentColor(sentiment)}`}
// //                     style={{ width: `${percentage}%` }}
// //                   />
// //                 </div>
// //                 <div className="w-10 text-lg text-right">{String(percentage)}%</div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Stakeholder Distribution */}
// //         <div className="rounded-lg border border-border p-4 bg-card">
// //           <div className="font-semibold mb-3 text-3xl">Stakeholder Distribution</div>
          
// //           {/* Individual Group */}
// //           <div className="mb-4">
// //             <div className="text-2xl font-semibold text-blue-900 mb-2">Individual Subtypes</div>
// //             <div className="grid grid-cols-1 gap-2">
// //               {['businessperson', 'student', 'professional'].map((stakeholder) => {
// //                 const percentage = mockStats.stakeholderBreakdown[stakeholder as keyof typeof mockStats.stakeholderBreakdown];
// //                 const Icon = iconForStakeholder(prettyStakeholder(stakeholder));
// //                 return (
// //                   <div key={stakeholder} className="flex items-center gap-3 p-2 rounded-lg bg-muted/30 hover:bg-muted/60 transition-transform transform hover:scale-105 cursor-pointer">
// //                     <Icon className="w-6 h-6 text-primary" />
// //                     <div className="flex-1">
// //                       <div className="text-xl font-medium">{prettyStakeholder(stakeholder)}</div>
// //                       <div className="text-lg text-muted-foreground">{String(percentage)}% of comments</div>
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </div>

// //           {/* Organization Group */}
// //           <div>
// //             <div className="text-2xl font-semibold text-blue-900 mb-2">Organization Subtypes</div>
// //             <div className="grid grid-cols-1 gap-2">
// //               {['extractiveIndustries', 'manufacturing', 'serviceEconomy'].map((stakeholder) => {
// //                 const percentage = mockStats.stakeholderBreakdown[stakeholder as keyof typeof mockStats.stakeholderBreakdown];
// //                 const Icon = iconForStakeholder(prettyStakeholder(stakeholder));
// //                 return (
// //                   <div key={stakeholder} className="flex items-center gap-3 p-2 rounded-lg bg-muted/30 hover:bg-muted/60 transition-transform transform hover:scale-105 cursor-pointer">
// //                     <Icon className="w-6 h-6 text-primary" />
// //                     <div className="flex-1">
// //                       <div className="text-xl font-medium">{prettyStakeholder(stakeholder)}</div>
// //                       <div className="text-lg text-muted-foreground">{percentage}% of comments</div>
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </div>
// //         </div>
// //       </CardContent>
// //     </Card>
// //   );
// // };

// // const iconForStakeholder = (type: string) => {
// //   switch (type) {
// //     case "Businessperson":
// //       return Briefcase;
// //     case "Student":
// //       return GraduationCap;
// //     case "Professional":
// //       return User;
// //     case "Extractive Industries":
// //       return Building2;
// //     case "Manufacturing":
// //       return Factory;
// //     case "Service Economy":
// //       return Store;
// //     default:
// //       return User;
// //   }
// // };

// // const SectionSummary = () => {
// //   const [selectedSection, setSelectedSection] = useState<string>("2.1");
  
// //   const sectionData = mockSectionSummaries[selectedSection as keyof typeof mockSectionSummaries];
  
// //   const individualStakeholders = ['businessperson', 'student', 'professional'];
// //   const organizationStakeholders = ['extractiveIndustries', 'manufacturing', 'serviceEconomy'];


// //   return (
// //     <Card className="shadow-card border-border">
// //       <CardHeader>
// //         <div className="flex items-center justify-between gap-3">
// //           <div>
// //             <CardTitle className="flex items-center gap-3 text-4xl font-bold text-blue-900">
// //               <FileText className="w-8 h-8" />
// //               Section Summary
// //             </CardTitle>
// //             <CardDescription className="text-lg text-gray-600">
// //               Summary of comments for each draft section
// //             </CardDescription>
// //           </div>
// //           <div className="flex gap-2">
// //             <Select value={selectedSection} onValueChange={setSelectedSection}>
// //               <SelectTrigger className="w-80">
// //                 <SelectValue placeholder="Select section" />
// //               </SelectTrigger>
// //               <SelectContent>
// //                 <SelectItem value="2.1">2.1 Environmental Regulatory Changes</SelectItem>
// //                 <SelectItem value="2.2">2.2 Current Policy Amendments</SelectItem>
// //                 <SelectItem value="2.3">2.3 Implementation Guidelines</SelectItem>
// //                 <SelectItem value="2.4">2.4 Monitoring and Compliance Measures</SelectItem>
// //               </SelectContent>
// //             </Select>
// //           </div>
// //         </div>
// //       </CardHeader>
// //       <CardContent className="space-y-6">
// //         {/* Section Overview */}
// //         <div className="rounded-lg border border-border p-4 bg-muted/30">
// //           <div className="flex items-center justify-between">
// //             <h3 className="font-semibold text-xl">{sectionData.title}</h3>
// //             <Badge variant="secondary" className="text-lg">{sectionData.totalComments} comments</Badge>
// //           </div>
// //         </div>

// //         {/* Key Findings */}
// //         <div className="rounded-lg border border-border bg-muted/30 p-4">
// //           <div className="font-bold mb-2 text-2xl text-blue-900 flex items-center gap-2">
// //             <Sparkles className="w-6 h-6" />
// //             Key Findings
// //           </div>
// //           <ul className="list-disc pl-4 space-y-1 text-lg text-black font-medium">
// //             {sectionData.keyFindings.map((finding, idx) => (
// //               <li key={idx}>{finding}</li>
// //             ))}
// //           </ul>
// //         </div>

// //         {/* Positive Highlights */}
// //         <div className="rounded-lg border border-border p-4 bg-green-50/40 dark:bg-green-950/20">
// //           <div className="font-bold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2 text-2xl">
// //             <Heart className="w-6 h-6" />
// //             Positive Highlights
// //           </div>
// //           <p className="text-lg text-black  ">{sectionData.positiveHighlights}</p>
// //         </div>

// //         {/* Areas of Concern */}
// //         <div className="rounded-lg border border-border p-4 bg-red-50/40 dark:bg-red-950/20">
// //           <div className="font-bold text-red-700 dark:text-red-300 mb-2 flex items-center gap-2 text-2xl">
// //             <ListChecks className="w-6 h-6" />
// //             Areas of Concern
// //           </div>
// //           <p className="text-lg text-black">{sectionData.areasOfConcern}</p>
// //         </div>

// //         {/* Sentiment Distribution */}
// //         <div className="rounded-lg border border-border p-4 bg-card">
// //           <div className="font-semibold mb-3 text-2xl">Sentiment Distribution</div>
// //           <div className="space-y-2">
// //             {Object.entries(sectionData.sentimentDistribution).map(([sentiment, percentage]) => (
// //               <div key={sentiment} className="flex items-center gap-3">
// //                 <div className="w-20 text-lg capitalize">{sentiment}</div>
// //                 <div className="flex-1 bg-muted rounded-full h-2">
// //                   <div
// //                     className={`h-2 rounded-full ${getSentimentColor(sentiment)}`}
// //                     style={{ width: `${percentage}%` }}
// //                   />
// //                 </div>
// //                 <div className="w-10 text-lg text-right">{String(percentage)}%</div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Stakeholder Distribution */}
// //         <div className="rounded-lg border border-border p-4 bg-card">
// //           <div className="font-semibold mb-3 text-3xl">Stakeholder Distribution</div>
          
// //           {/* Individual Group */}
// //           <div className="mb-4">
// //             <div className="text-2xl font-semibold text-blue-900 mb-2">Individual Subtypes</div>
// //             <div className="grid grid-cols-1 gap-2">
// //               {individualStakeholders.map((stakeholder) => {
// //                 const percentage = sectionData.stakeholderDistribution[stakeholder as keyof typeof sectionData.stakeholderDistribution];
// //                 if (!percentage) return null;
// //                 const Icon = iconForStakeholder(prettyStakeholder(stakeholder));
// //                 return (
// //                   <div key={stakeholder} className="flex items-center gap-3 p-2 rounded-lg bg-muted/30 hover:bg-muted/60 transition-transform transform hover:scale-105 cursor-pointer">
// //                     <Icon className="w-6 h-6 text-primary" />
// //                     <div className="flex-1">
// //                       <div className="text-xl font-medium">{prettyStakeholder(stakeholder)}</div>
// //                       <div className="text-lg text-muted-foreground">{String(percentage)}% of comments</div>
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </div>
          
// //           {/* Organization Group */}
// //           <div>
// //             <div className="text-2xl font-semibold text-blue-900 mb-2">Organization Subtypes</div>
// //             <div className="grid grid-cols-1 gap-2">
// //               {organizationStakeholders.map((stakeholder) => {
// //                 const percentage = sectionData.stakeholderDistribution[stakeholder as keyof typeof sectionData.stakeholderDistribution];
// //                 if (!percentage) return null;
// //                 const Icon = iconForStakeholder(prettyStakeholder(stakeholder));
// //                 return (
// //                   <div key={stakeholder} className="flex items-center gap-3 p-2 rounded-lg bg-muted/30 hover:bg-muted/60 transition-transform transform hover:scale-105 cursor-pointer">
// //                     <Icon className="w-6 h-6 text-primary" />
// //                     <div className="flex-1">
// //                       <div className="text-xl font-medium">{prettyStakeholder(stakeholder)}</div>
// //                       <div className="text-lg text-muted-foreground">{percentage}% of comments</div>
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </div>
// //         </div>

// //         <div className="flex justify-end">
// //           <Button variant="outline" className="hover:bg-primary/10">Export Section Summary</Button>
// //         </div>
// //       </CardContent>
// //     </Card>
// //   );
// // };

// // const SummaryView = () => {
// //   return (
// //     <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
// //       <DraftSummary />
// //       <SectionSummary />
// //     </div>
// //   );
// // };

// // export default SummaryView;


// // import { useEffect, useMemo, useState } from "react";
// // import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// // import { Input } from "@/components/ui/input";
// // import { Badge } from "@/components/ui/badge";
// // import { Button } from "@/components/ui/button";
// // import { FileText, Filter, Search, Sparkles, ListChecks, Building2, User, Heart, Briefcase, GraduationCap, Factory, Store } from "lucide-react";
// // import { mockClauseMappings, mockComments, mockSentimentKeywords, mockStats, mockThemes, mockSectionSummaries } from "@/data/mockDataSummary";

// // // Helper to format stakeholder key
// // const prettyStakeholder = (key: string) => {
// //   switch (key) {
// //     case "businessperson":
// //       return "Businessperson";
// //     case "student":
// //       return "Student";
// //     case "professional":
// //       return "Professional";
// //     case "extractiveIndustries":
// //       return "Extractive Industries";
// //     case "manufacturing":
// //       return "Manufacturing";
// //     case "serviceEconomy":
// //       return "Service Economy";
// //     default:
// //       return key;
// //   }
// // };

// // // Helper function for sentiment colors
// // const getSentimentColor = (sentiment: string) => {
// //   switch (sentiment) {
// //     case "supportive": return "bg-green-500";
// //     case "neutral": return "bg-gray-500";
// //     case "critical": return "bg-red-500";
// //     case "suggestive": return "bg-blue-500";
// //     default: return "bg-gray-400";
// //   }
// // };

// // function useDraftInsights() {
// //   return useMemo(() => {
// //     // Top positive and negative keywords
// //     const positives = [...mockSentimentKeywords]
// //       .sort((a, b) => b.positiveCount - a.positiveCount)
// //       .slice(0, 2)
// //       .map((k) => k.word);

// //     const negatives = [...mockSentimentKeywords]
// //       .sort((a, b) => b.negativeCount - a.negativeCount)
// //       .slice(0, 2)
// //       .map((k) => k.word);

// //     // Most discussed theme
// //     const topTheme = [...mockThemes].sort((a, b) => b.commentCount - a.commentCount)[0];

// //     // Most engaged stakeholder
// //     const stakeholderEntries = Object.entries(mockStats.stakeholderBreakdown) as Array<[string, number]>;
// //     const topStakeholder = stakeholderEntries.sort((a, b) => b[1] - a[1])[0]?.[0] ?? "corporate";

// //     const keyFindings: string[] = [
// //       `Strong support around ${positives.join(" and ")}`,
// //       `Significant concerns about ${negatives.join(" and ")}`,
// //       topTheme ? `Most discussed theme: ${topTheme.name}` : "",
// //       `High engagement from ${prettyStakeholder(topStakeholder)} stakeholders`,
// //     ].filter(Boolean);

// //     const positiveHighlights = positives.length
// //       ? `Broad support for ${positives.join(", ")} across groups.`
// //       : "Support present across multiple areas.";

// //     const areasOfConcern = negatives.length
// //       ? `Concerns center on ${negatives.join(", ")}.`
// //       : "Concerns span multiple topics.";

// //     return { keyFindings, positiveHighlights, areasOfConcern };
// //   }, []);
// // }

// // function sentimentScore(counts: { supportive: number; critical: number; neutral: number; suggestive: number }) {
// //   const weights = { supportive: 1, suggestive: 0.6, neutral: 0.5, critical: 0 } as const;
// //   const total = counts.supportive + counts.critical + counts.neutral + counts.suggestive;
// //   if (!total) return 0;
// //   const score =
// //     counts.supportive * weights.supportive +
// //     counts.suggestive * weights.suggestive +
// //     counts.neutral * weights.neutral +
// //     counts.critical * weights.critical;
// //   return Math.round((score / total) * 100);
// // }

// // const DraftSummary = () => {
// //   const { keyFindings, positiveHighlights, areasOfConcern } = useDraftInsights();
// //   const [selectedDraftTitle, setSelectedDraftTitle] = useState<string>("");
// //   const [draftPoints, setDraftPoints] = useState<string[] | null>(null);

// //   useEffect(() => {
// //     const t = localStorage.getItem("selectedDraftTitle") || "Digital Governance Framework - Draft Policy";
// //     setSelectedDraftTitle(t);
// //     try {
// //       const raw = localStorage.getItem("selectedDraftPoints");
// //       if (raw) {
// //         const arr = JSON.parse(raw);
// //         if (Array.isArray(arr)) setDraftPoints(arr.filter(Boolean));
// //       }
// //     } catch {}
// //   }, []);

// //   return (
// //     <Card className="shadow-card border-border">
// //       <CardHeader>
// //         <div className="flex items-center justify-between">
// //           <div>
// //             <CardTitle className="flex items-center gap-2 text-4xl font-bold text-blue-900">
// //               <Sparkles className="w-8 h-8" />
// //               Draft Summary
// //             </CardTitle>
// //             <CardDescription>
// //               {selectedDraftTitle ? (
// //                 <span className="text-lg text-gray-600">
// //                   Selected draft: <span className="font-medium text-lg text-black">Environmental Policy Draft 2024</span>
// //                 </span>
// //               ) : (
// //                 "Concise overview of key consultation insights"
// //               )}
// //             </CardDescription>
// //           </div>
// //         </div>
// //       </CardHeader>
// //       <CardContent className="space-y-6">
// //         <div className="rounded-lg border border-border bg-muted/30 p-4">
// //           <div className="font-bold mb-2 text-2xl text-blue-900">Key Findings</div>
// //           <ul className="list-disc list-outside pl-4 space-y-1 text-lg text-black font-medium">
// //             {(draftPoints && draftPoints.length > 0 ? draftPoints : keyFindings).map((k) => (
// //               <li key={k}>{k}</li>
// //             ))}
// //           </ul>
// //         </div>

// //         <div className="rounded-lg border border-border p-4 bg-green-50/40 dark:bg-green-950/20">
// //           <div className="font-bold text-green-700 dark:text-green-300 mb-1 text-2xl">Positive Highlights</div>
// //           <p className="text-lg text-black">{positiveHighlights}</p>
// //         </div>

// //         <div className="rounded-lg border border-border p-4 bg-red-50/40 dark:bg-red-950/20">
// //           <div className="font-bold text-red-700 dark:text-red-300 mb-1 text-2xl">Areas of Concern</div>
// //           <p className="text-lg text-black">{areasOfConcern}</p>
// //         </div>

// //         {/* Sentiment Distribution */}
// //         <div className="rounded-lg border border-border p-4 bg-card">
// //           <div className="font-semibold mb-3 text-2xl">Overall Sentiment Distribution</div>
// //           <div className="space-y-2">
// //             {Object.entries(mockStats.overallSentimentDistribution).map(([sentiment, percentage]) => (
// //               <div key={sentiment} className="flex items-center gap-3 ">
// //                 <div className="w-20 text-lg capitalize">{sentiment}</div>
// //                 <div className="flex-1 bg-muted rounded-full h-2">
// //                   <div
// //                     className={`h-2 rounded-full ${getSentimentColor(sentiment)}`}
// //                     style={{ width: `${percentage}%` }}
// //                   />
// //                 </div>
// //                 <div className="w-10 text-lg text-right">{String(percentage)}%</div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Stakeholder Distribution */}
// //         <div className="rounded-lg border border-border p-4 bg-card">
// //           <div className="font-semibold mb-3 text-3xl">Stakeholder Distribution</div>
          
// //           {/* Individual Group */}
// //           <div className="mb-4">
// //             <div className="text-2xl font-semibold text-blue-900 mb-2">Individual Subtypes</div>
// //             <div className="grid grid-cols-1 gap-2">
// //               {['businessperson', 'student', 'professional'].map((stakeholder) => {
// //                 const percentage = mockStats.stakeholderBreakdown[stakeholder as keyof typeof mockStats.stakeholderBreakdown];
// //                 const Icon = iconForStakeholder(prettyStakeholder(stakeholder));
// //                 return (
// //                   <div key={stakeholder} className="flex items-center gap-3 p-2 rounded-lg bg-muted/30 hover:bg-muted/60 transition-transform transform hover:scale-105 cursor-pointer">
// //                     <Icon className="w-6 h-6 text-primary" />
// //                     <div className="flex-1">
// //                       <div className="text-xl font-medium">{prettyStakeholder(stakeholder)}</div>
// //                       <div className="text-lg text-muted-foreground">{String(percentage)}% of comments</div>
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </div>

// //           {/* Organization Group */}
// //           <div>
// //             <div className="text-2xl font-semibold text-blue-900 mb-2">Organization Subtypes</div>
// //             <div className="grid grid-cols-1 gap-2">
// //               {['extractiveIndustries', 'manufacturing', 'serviceEconomy'].map((stakeholder) => {
// //                 const percentage = mockStats.stakeholderBreakdown[stakeholder as keyof typeof mockStats.stakeholderBreakdown];
// //                 const Icon = iconForStakeholder(prettyStakeholder(stakeholder));
// //                 return (
// //                   <div key={stakeholder} className="flex items-center gap-3 p-2 rounded-lg bg-muted/30 hover:bg-muted/60 transition-transform transform hover:scale-105 cursor-pointer">
// //                     <Icon className="w-6 h-6 text-primary" />
// //                     <div className="flex-1">
// //                       <div className="text-xl font-medium">{prettyStakeholder(stakeholder)}</div>
// //                       <div className="text-lg text-muted-foreground">{percentage}% of comments</div>
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </div>
// //         </div>
// //       </CardContent>
// //     </Card>
// //   );
// // };

// // const iconForStakeholder = (type: string) => {
// //   switch (type) {
// //     case "Businessperson":
// //       return Briefcase;
// //     case "Student":
// //       return GraduationCap;
// //     case "Professional":
// //       return User;
// //     case "Extractive Industries":
// //       return Building2;
// //     case "Manufacturing":
// //       return Factory;
// //     case "Service Economy":
// //       return Store;
// //     default:
// //       return User;
// //   }
// // };

// // const SectionSummary = () => {
// //   const [selectedSection, setSelectedSection] = useState<string>("2.1");
  
// //   const sectionData = mockSectionSummaries[selectedSection as keyof typeof mockSectionSummaries];
  
// //   const individualStakeholders = ['businessperson', 'student', 'professional'];
// //   const organizationStakeholders = ['extractiveIndustries', 'manufacturing', 'serviceEconomy'];


// //   return (
// //     <Card className="shadow-card border-border">
// //       <CardHeader>
// //         <div className="flex items-start justify-between gap-3">
// //           <div className="flex-shrink-0">
// //             <CardTitle className="flex items-baseline gap-2 text-4xl font-bold text-blue-900">
// //               <FileText className="w-8 h-8" />
// //               Section Summary
// //             </CardTitle>
// //             <CardDescription className="text-lg text-gray-600">
// //               Summary of comments for each draft section
// //             </CardDescription>
// //           </div>
// //           <div className="flex gap-1 mt-1">
// //             <Select value={selectedSection} onValueChange={setSelectedSection}>
// //               <SelectTrigger className="w-80">
// //                 <SelectValue placeholder="Select section" />
// //               </SelectTrigger>
// //               <SelectContent>
// //                 <SelectItem value="2.1">2.1 Environmental Regulatory Changes</SelectItem>
// //                 <SelectItem value="2.2">2.2 Current Policy Amendments</SelectItem>
// //                 <SelectItem value="2.3">2.3 Implementation Guidelines</SelectItem>
// //                 <SelectItem value="2.4">2.4 Monitoring and Compliance Measures</SelectItem>
// //               </SelectContent>
// //             </Select>
// //           </div>
// //         </div>
// //       </CardHeader>
// //       <CardContent className="space-y-6">
// //         {/* Section Overview */}
// //         <div className="rounded-lg border border-border p-4 bg-muted/30">
// //           <div className="flex items-center justify-between">
// //             <h3 className="font-semibold text-xl">{sectionData.title}</h3>
// //             <Badge variant="secondary" className="text-lg">{sectionData.totalComments} comments</Badge>
// //           </div>
// //         </div>

// //         {/* Key Findings */}
// //         <div className="rounded-lg border border-border bg-muted/30 p-4">
// //           <div className="font-bold mb-2 text-2xl text-blue-900 flex items-center gap-2">
// //             <Sparkles className="w-6 h-6" />
// //             Key Findings
// //           </div>
// //           <ul className="list-disc list-outside pl-4 space-y-1 text-lg text-black font-medium">
// //             {sectionData.keyFindings.map((finding, idx) => (
// //               <li key={idx}>{finding}</li>
// //             ))}
// //           </ul>
// //         </div>

// //         {/* Positive Highlights */}
// //         <div className="rounded-lg border border-border p-4 bg-green-50/40 dark:bg-green-950/20">
// //           <div className="font-bold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2 text-2xl">
// //             <Heart className="w-6 h-6" />
// //             Positive Highlights
// //           </div>
// //           <p className="text-lg text-black  ">{sectionData.positiveHighlights}</p>
// //         </div>

// //         {/* Areas of Concern */}
// //         <div className="rounded-lg border border-border p-4 bg-red-50/40 dark:bg-red-950/20">
// //           <div className="font-bold text-red-700 dark:text-red-300 mb-2 flex items-center gap-2 text-2xl">
// //             <ListChecks className="w-6 h-6" />
// //             Areas of Concern
// //           </div>
// //           <p className="text-lg text-black">{sectionData.areasOfConcern}</p>
// //         </div>

// //         {/* Sentiment Distribution */}
// //         <div className="rounded-lg border border-border p-4 bg-card">
// //           <div className="font-semibold mb-3 text-2xl">Sentiment Distribution</div>
// //           <div className="space-y-2">
// //             {Object.entries(sectionData.sentimentDistribution).map(([sentiment, percentage]) => (
// //               <div key={sentiment} className="flex items-center gap-3">
// //                 <div className="w-20 text-lg capitalize">{sentiment}</div>
// //                 <div className="flex-1 bg-muted rounded-full h-2">
// //                   <div
// //                     className={`h-2 rounded-full ${getSentimentColor(sentiment)}`}
// //                     style={{ width: `${percentage}%` }}
// //                   />
// //                 </div>
// //                 <div className="w-10 text-lg text-right">{String(percentage)}%</div>
// //               </div>
// //             ))}
// //           </div>
// //         </div>

// //         {/* Stakeholder Distribution */}
// //         <div className="rounded-lg border border-border p-4 bg-card">
// //           <div className="font-semibold mb-3 text-3xl">Stakeholder Distribution</div>
          
// //           {/* Individual Group */}
// //           <div className="mb-4">
// //             <div className="text-2xl font-semibold text-blue-900 mb-2">Individual Subtypes</div>
// //             <div className="grid grid-cols-1 gap-2">
// //               {individualStakeholders.map((stakeholder) => {
// //                 const percentage = sectionData.stakeholderDistribution[stakeholder as keyof typeof sectionData.stakeholderDistribution];
// //                 if (!percentage) return null;
// //                 const Icon = iconForStakeholder(prettyStakeholder(stakeholder));
// //                 return (
// //                   <div key={stakeholder} className="flex items-center gap-3 p-2 rounded-lg bg-muted/30 hover:bg-muted/60 transition-transform transform hover:scale-105 cursor-pointer">
// //                     <Icon className="w-6 h-6 text-primary" />
// //                     <div className="flex-1">
// //                       <div className="text-xl font-medium">{prettyStakeholder(stakeholder)}</div>
// //                       <div className="text-lg text-muted-foreground">{String(percentage)}% of comments</div>
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </div>
          
// //           {/* Organization Group */}
// //           <div>
// //             <div className="text-2xl font-semibold text-blue-900 mb-2">Organization Subtypes</div>
// //             <div className="grid grid-cols-1 gap-2">
// //               {organizationStakeholders.map((stakeholder) => {
// //                 const percentage = sectionData.stakeholderDistribution[stakeholder as keyof typeof sectionData.stakeholderDistribution];
// //                 if (!percentage) return null;
// //                 const Icon = iconForStakeholder(prettyStakeholder(stakeholder));
// //                 return (
// //                   <div key={stakeholder} className="flex items-start gap-3 p-2 rounded-lg bg-muted/30 hover:bg-muted/60 transition-transform transform hover:scale-105 cursor-pointer">
// //                     <Icon className="w-6 h-6 text-primary" />
// //                     <div className="flex-1">
// //                       <div className="text-xl font-medium">{prettyStakeholder(stakeholder)}</div>
// //                       <div className="text-lg text-muted-foreground">{percentage}% of comments</div>
// //                     </div>
// //                   </div>
// //                 );
// //               })}
// //             </div>
// //           </div>
// //         </div>

// //         <div className="flex justify-end">
// //           <Button variant="outline" className="hover:bg-primary/10">Export Section Summary</Button>
// //         </div>
// //       </CardContent>
// //     </Card>
// //   );
// // };

// // const SummaryView = () => {
// //   return (
// //     <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
// //       <DraftSummary />
// //       <SectionSummary />
// //     </div>
// //   );
// // };

// // export default SummaryView;  


// import { useEffect, useMemo, useState } from "react";
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Input } from "@/components/ui/input";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { FileText, Filter, Search, Sparkles, ListChecks, Building2, User, Heart, Briefcase, GraduationCap, Factory, Store } from "lucide-react";
// import { mockClauseMappings, mockComments, mockSentimentKeywords, mockStats, mockThemes, mockSectionSummaries } from "@/data/mockDataSummary";

// // Helper to format stakeholder key
// const prettyStakeholder = (key: string) => {
//   switch (key) {
//     case "businessperson":
//       return "Businessperson";
//     case "student":
//       return "Student";
//     case "professional":
//       return "Professional";
//     case "extractiveIndustries":
//       return "Extractive Industries";
//     case "manufacturing":
//       return "Manufacturing";
//     case "serviceEconomy":
//       return "Service Economy";
//     default:
//       return key;
//   }
// };

// // Helper function for sentiment colors
// const getSentimentColor = (sentiment: string) => {
//   switch (sentiment) {
//     case "supportive": return "bg-green-500";
//     case "neutral": return "bg-gray-500";
//     case "critical": return "bg-red-500";
//     case "suggestive": return "bg-blue-500";
//     default: return "bg-gray-400";
//   }
// };

// function useDraftInsights() {
//   return useMemo(() => {
//     // Top positive and negative keywords
//     const positives = [...mockSentimentKeywords]
//       .sort((a, b) => b.positiveCount - a.positiveCount)
//       .slice(0, 2)
//       .map((k) => k.word);

//     const negatives = [...mockSentimentKeywords]
//       .sort((a, b) => b.negativeCount - a.negativeCount)
//       .slice(0, 2)
//       .map((k) => k.word);

//     // Most discussed theme
//     const topTheme = [...mockThemes].sort((a, b) => b.commentCount - a.commentCount)[0];

//     // Most engaged stakeholder
//     const stakeholderEntries = Object.entries(mockStats.stakeholderBreakdown) as Array<[string, number]>;
//     const topStakeholder = stakeholderEntries.sort((a, b) => b[1] - a[1])[0]?.[0] ?? "corporate";

//     const keyFindings: string[] = [
//       `Strong support around ${positives.join(" and ")}`,
//       `Significant concerns about ${negatives.join(" and ")}`,
//       topTheme ? `Most discussed theme: ${topTheme.name}` : "",
//       `High engagement from ${prettyStakeholder(topStakeholder)} stakeholders`,
//     ].filter(Boolean);

//     const positiveHighlights = positives.length
//       ? `Broad support for ${positives.join(", ")} across groups.`
//       : "Support present across multiple areas.";

//     const areasOfConcern = negatives.length
//       ? `Concerns center on ${negatives.join(", ")}.`
//       : "Concerns span multiple topics.";

//     return { keyFindings, positiveHighlights, areasOfConcern };
//   }, []);
// }

// function sentimentScore(counts: { supportive: number; critical: number; neutral: number; suggestive: number }) {
//   const weights = { supportive: 1, suggestive: 0.6, neutral: 0.5, critical: 0 } as const;
//   const total = counts.supportive + counts.critical + counts.neutral + counts.suggestive;
//   if (!total) return 0;
//   const score =
//     counts.supportive * weights.supportive +
//     counts.suggestive * weights.suggestive +
//     counts.neutral * weights.neutral +
//     counts.critical * weights.critical;
//   return Math.round((score / total) * 100);
// }

// const DraftSummary = () => {
//   const { keyFindings, positiveHighlights, areasOfConcern } = useDraftInsights();
//   const [selectedDraftTitle, setSelectedDraftTitle] = useState<string>("");
//   const [draftPoints, setDraftPoints] = useState<string[] | null>(null);

//   useEffect(() => {
//     const t = localStorage.getItem("selectedDraftTitle") || "Digital Governance Framework - Draft Policy";
//     setSelectedDraftTitle(t);
//     try {
//       const raw = localStorage.getItem("selectedDraftPoints");
//       if (raw) {
//         const arr = JSON.parse(raw);
//         if (Array.isArray(arr)) setDraftPoints(arr.filter(Boolean));
//       }
//     } catch {}
//   }, []);

//   return (
//     <Card className="shadow-card border-border">
//       <CardHeader>
//         <div className="flex items-center justify-between">
//           <div>
//             <CardTitle className="flex items-center gap-2 text-4xl font-bold text-blue-900">
//               <Sparkles className="w-8 h-8" />
//               Draft Summary
//             </CardTitle>
//             <CardDescription>
//               {selectedDraftTitle ? (
//                 <span className="text-lg text-gray-600">
//                   Selected draft: <span className="font-medium text-lg text-black">Environmental Policy Draft 2024</span>
//                 </span>
//               ) : (
//                 "Concise overview of key consultation insights"
//               )}
//             </CardDescription>
//           </div>
//         </div>
//       </CardHeader>
//       <CardContent className="space-y-6">
//         <div className="rounded-lg border border-border bg-muted/30 p-4">
//           <div className="font-bold mb-2 text-2xl text-blue-900 flex items-center gap-2">
//             <Sparkles className="w-6 h-6" />
//             Key Findings
//           </div>
//           <ul className="list-disc list-outside pl-4 space-y-1 text-lg text-black font-medium">
//             {(draftPoints && draftPoints.length > 0 ? draftPoints : keyFindings).map((k) => (
//               <li key={k}>{k}</li>
//             ))}
//           </ul>
//         </div>

//         <div className="rounded-lg border border-border p-4 bg-green-50/40 dark:bg-green-950/20">
//           <div className="font-bold text-green-700 dark:text-green-300 mb-1 text-2xl flex items-center gap-2">
//             <Heart className="w-6 h-6" />
//             Positive Highlights
//             </div>
//           <p className="text-lg text-black">{positiveHighlights}</p>
//         </div>

//         <div className="rounded-lg border border-border p-4 bg-red-50/40 dark:bg-red-950/20">
//           <div className="font-bold text-red-700 dark:text-red-300 mb-1 text-2xl flex items-center gap-2">
//             <ListChecks className="w-6 h-6" />
//             Areas of Concern
//             </div>
//           <p className="text-lg text-black">{areasOfConcern}</p>
//         </div>

//         {/* Sentiment Distribution */}
//         <div className="rounded-lg border border-border p-4 bg-card">
//           <div className="font-semibold mb-3 text-2xl">Overall Sentiment Distribution</div>
//           <div className="space-y-2">
//             {Object.entries(mockStats.overallSentimentDistribution).map(([sentiment, percentage]) => (
//               <div key={sentiment} className="flex items-center gap-3 ">
//                 <div className="w-20 text-lg capitalize">{sentiment}</div>
//                 <div className="flex-1 bg-muted rounded-full h-2">
//                   <div
//                     className={`h-2 rounded-full ${getSentimentColor(sentiment)}`}
//                     style={{ width: `${percentage}%` }}
//                   />
//                 </div>
//                 <div className="w-10 text-lg text-right">{String(percentage)}%</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Stakeholder Distribution */}
//         <div className="rounded-lg border border-border p-4 bg-card">
//           <div className="font-semibold mb-3 text-3xl">Stakeholder Distribution</div>
          
//           {/* Individual Group */}
//           <div className="mb-4">
//             <div className="text-2xl font-semibold text-blue-900 mb-2">Individual Subtypes</div>
//             <div className="grid grid-cols-1 gap-2">
//               {['businessperson', 'student', 'professional'].map((stakeholder) => {
//                 const percentage = mockStats.stakeholderBreakdown[stakeholder as keyof typeof mockStats.stakeholderBreakdown];
//                 const Icon = iconForStakeholder(prettyStakeholder(stakeholder));
//                 return (
//                   <div key={stakeholder} className="flex items-center gap-3 p-2 rounded-lg bg-muted/30 hover:bg-muted/60 transition-transform transform hover:scale-105 cursor-pointer">
//                     <Icon className="w-6 h-6 text-primary" />
//                     <div className="flex-1">
//                       <div className="text-xl font-medium">{prettyStakeholder(stakeholder)}</div>
//                       <div className="text-lg text-muted-foreground">{String(percentage)}% of comments</div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>

//           {/* Organization Group */}
//           <div>
//             <div className="text-2xl font-semibold text-blue-900 mb-2">Organization Subtypes</div>
//             <div className="grid grid-cols-1 gap-2">
//               {['extractiveIndustries', 'manufacturing', 'serviceEconomy'].map((stakeholder) => {
//                 const percentage = mockStats.stakeholderBreakdown[stakeholder as keyof typeof mockStats.stakeholderBreakdown];
//                 const Icon = iconForStakeholder(prettyStakeholder(stakeholder));
//                 return (
//                   <div key={stakeholder} className="flex items-center gap-3 p-2 rounded-lg bg-muted/30 hover:bg-muted/60 transition-transform transform hover:scale-105 cursor-pointer">
//                     <Icon className="w-6 h-6 text-primary" />
//                     <div className="flex-1">
//                       <div className="text-xl font-medium">{prettyStakeholder(stakeholder)}</div>
//                       <div className="text-lg text-muted-foreground">{percentage}% of comments</div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// const iconForStakeholder = (type: string) => {
//   switch (type) {
//     case "Businessperson":
//       return Briefcase;
//     case "Student":
//       return GraduationCap;
//     case "Professional":
//       return User;
//     case "Extractive Industries":
//       return Building2;
//     case "Manufacturing":
//       return Factory;
//     case "Service Economy":
//       return Store;
//     default:
//       return User;
//   }
// };

// const SectionSummary = () => {
//   const [selectedSection, setSelectedSection] = useState<string>("2.1");
  
//   const sectionData = mockSectionSummaries[selectedSection as keyof typeof mockSectionSummaries];
  
//   const individualStakeholders = ['businessperson', 'student', 'professional'];
//   const organizationStakeholders = ['extractiveIndustries', 'manufacturing', 'serviceEconomy'];


//   return (
//     <Card className="shadow-card border-border">
//       <CardHeader>
//         <div className="flex items-start justify-between gap-3">
//           <div className="flex-shrink-0">
//             <CardTitle className="flex items-baseline gap-2 text-4xl font-bold text-blue-900">
//               <FileText className="w-8 h-8" />
//               Section Summary
//             </CardTitle>
//             <CardDescription className="text-lg text-gray-600">
//               Summary of comments for each draft section
//             </CardDescription>
//           </div>
//           <div className="flex gap-1 mt-1">
//             <Select value={selectedSection} onValueChange={setSelectedSection}>
//               <SelectTrigger className="w-80">
//                 <SelectValue placeholder="Select section" />
//               </SelectTrigger>
//               <SelectContent>
//                 <SelectItem value="2.1">2.1 Environmental Regulatory Changes</SelectItem>
//                 <SelectItem value="2.2">2.2 Current Policy Amendments</SelectItem>
//                 <SelectItem value="2.3">2.3 Implementation Guidelines</SelectItem>
//                 <SelectItem value="2.4">2.4 Monitoring and Compliance Measures</SelectItem>
//               </SelectContent>
//             </Select>
//           </div>
//         </div>
//       </CardHeader>
//       <CardContent className="space-y-6">
//         {/* Section Overview */}
//         <div className="rounded-lg border border-border p-4 bg-muted/30">
//           <div className="flex items-center justify-between">
//             <h3 className="font-semibold text-xl">{sectionData.title}</h3>
//             <Badge variant="secondary" className="text-lg">{sectionData.totalComments} comments</Badge>
//           </div>
//         </div>

//         {/* Key Findings */}
//         <div className="rounded-lg border border-border bg-muted/30 p-4">
//           <div className="font-bold mb-2 text-2xl text-blue-900 flex items-center gap-2">
//             <Sparkles className="w-6 h-6" />
//             Key Findings
//           </div>
//           <ul className="list-disc list-outside pl-4 space-y-1 text-lg text-black font-medium text-left">
//             {sectionData.keyFindings.map((finding, idx) => (
//               <li key={idx}>{finding}</li>
//             ))}
//           </ul>
//         </div>

//         {/* Positive Highlights */}
//         <div className="rounded-lg border border-border p-4 bg-green-50/40 dark:bg-green-950/20">
//           <div className="font-bold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2 text-2xl">
//             <Heart className="w-6 h-6" />
//             Positive Highlights
//           </div>
//           <p className="text-lg text-black  ">{sectionData.positiveHighlights}</p>
//         </div>

//         {/* Areas of Concern */}
//         <div className="rounded-lg border border-border p-4 bg-red-50/40 dark:bg-red-950/20">
//           <div className="font-bold text-red-700 dark:text-red-300 mb-2 flex items-center gap-2 text-2xl">
//             <ListChecks className="w-6 h-6" />
//             Areas of Concern
//           </div>
//           <p className="text-lg text-black">{sectionData.areasOfConcern}</p>
//         </div>

//         {/* Sentiment Distribution */}
//         <div className="rounded-lg border border-border p-4 bg-card">
//           <div className="font-semibold mb-3 text-2xl">Sentiment Distribution</div>
//           <div className="space-y-2">
//             {Object.entries(sectionData.sentimentDistribution).map(([sentiment, percentage]) => (
//               <div key={sentiment} className="flex items-center gap-3">
//                 <div className="w-20 text-lg capitalize">{sentiment}</div>
//                 <div className="flex-1 bg-muted rounded-full h-2">
//                   <div
//                     className={`h-2 rounded-full ${getSentimentColor(sentiment)}`}
//                     style={{ width: `${percentage}%` }}
//                   />
//                 </div>
//                 <div className="w-10 text-lg text-right">{String(percentage)}%</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Stakeholder Distribution */}
//         <div className="rounded-lg border border-border p-4 bg-card">
//           <div className="font-semibold mb-3 text-3xl">Stakeholder Distribution</div>
          
//           {/* Individual Group */}
//           <div className="mb-4">
//             <div className="text-2xl font-semibold text-blue-900 mb-2">Individual Subtypes</div>
//             <div className="grid grid-cols-1 gap-2">
//               {individualStakeholders.map((stakeholder) => {
//                 const percentage = sectionData.stakeholderDistribution[stakeholder as keyof typeof sectionData.stakeholderDistribution];
//                 if (!percentage) return null;
//                 const Icon = iconForStakeholder(prettyStakeholder(stakeholder));
//                 return (
//                   <div key={stakeholder} className="flex items-center gap-3 p-2 rounded-lg bg-muted/30 hover:bg-muted/60 transition-transform transform hover:scale-105 cursor-pointer">
//                     <Icon className="w-6 h-6 text-primary" />
//                     <div className="flex-1">
//                       <div className="text-xl font-medium">{prettyStakeholder(stakeholder)}</div>
//                       <div className="text-lg text-muted-foreground">{String(percentage)}% of comments</div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
          
//           {/* Organization Group */}
//           <div>
//             <div className="text-2xl font-semibold text-blue-900 mb-2">Organization Subtypes</div>
//             <div className="grid grid-cols-1 gap-2">
//               {organizationStakeholders.map((stakeholder) => {
//                 const percentage = sectionData.stakeholderDistribution[stakeholder as keyof typeof sectionData.stakeholderDistribution];
//                 if (!percentage) return null;
//                 const Icon = iconForStakeholder(prettyStakeholder(stakeholder));
//                 return (
//                   <div key={stakeholder} className="flex items-start gap-3 p-2 rounded-lg bg-muted/30 hover:bg-muted/60 transition-transform transform hover:scale-105 cursor-pointer">
//                     <Icon className="w-6 h-6 text-primary" />
//                     <div className="flex-1">
//                       <div className="text-xl font-medium">{prettyStakeholder(stakeholder)}</div>
//                       <div className="text-lg text-muted-foreground">{percentage}% of comments</div>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         </div>

//         <div className="flex justify-end">
//           <Button variant="outline" className="hover:bg-primary/10">Export Section Summary</Button>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// const SummaryView = () => {
//   return (
//     <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
//       <DraftSummary />
//       <SectionSummary />
//     </div>
//   );
// };

// export default SummaryView;



import { useEffect, useMemo, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, Filter, Search, Sparkles, ListChecks, Building2, User, Heart, Briefcase, GraduationCap, Factory, Store } from "lucide-react";
import { mockClauseMappings, mockComments, mockSentimentKeywords, mockStats, mockThemes, mockSectionSummaries } from "@/data/mockDataSummary";

// Helper to format stakeholder key
const prettyStakeholder = (key: string) => {
  switch (key) {
    case "businessperson":
      return "Businessperson";
    case "student":
      return "Student";
    case "professional":
      return "Professional";
    case "extractiveIndustries":
      return "Extractive Industries";
    case "manufacturing":
      return "Manufacturing";
    case "serviceEconomy":
      return "Service Economy";
    default:
      return key;
  }
};

// Helper function for sentiment colors
const getSentimentColor = (sentiment: string) => {
  switch (sentiment) {
    case "supportive": return "bg-green-500";
    case "neutral": return "bg-gray-500";
    case "critical": return "bg-red-500";
    case "suggestive": return "bg-blue-500";
    default: return "bg-gray-400";
  }
};

function useDraftInsights() {
  return useMemo(() => {
    // Top positive and negative keywords
    const positives = [...mockSentimentKeywords]
      .sort((a, b) => b.positiveCount - a.positiveCount)
      .slice(0, 2)
      .map((k) => k.word);

    const negatives = [...mockSentimentKeywords]
      .sort((a, b) => b.negativeCount - a.negativeCount)
      .slice(0, 2)
      .map((k) => k.word);

    // Most discussed theme
    const topTheme = [...mockThemes].sort((a, b) => b.commentCount - a.commentCount)[0];

    // Most engaged stakeholder
    const stakeholderEntries = Object.entries(mockStats.stakeholderBreakdown) as Array<[string, number]>;
    const topStakeholder = stakeholderEntries.sort((a, b) => b[1] - a[1])[0]?.[0] ?? "corporate";

    const keyFindings: string[] = [
      `Strong support around ${positives.join(" and ")}`,
      `Significant concerns about ${negatives.join(" and ")}`,
      topTheme ? `Most discussed theme: ${topTheme.name}` : "",
      `High engagement from ${prettyStakeholder(topStakeholder)} stakeholders`,
    ].filter(Boolean);

    const positiveHighlights = positives.length
      ? `Broad support for ${positives.join(", ")} across groups.`
      : "Support present across multiple areas.";

    const areasOfConcern = negatives.length
      ? `Concerns center on ${negatives.join(", ")}.`
      : "Concerns span multiple topics.";

    return { keyFindings, positiveHighlights, areasOfConcern };
  }, []);
}

function sentimentScore(counts: { supportive: number; critical: number; neutral: number; suggestive: number }) {
  const weights = { supportive: 1, suggestive: 0.6, neutral: 0.5, critical: 0 } as const;
  const total = counts.supportive + counts.critical + counts.neutral + counts.suggestive;
  if (!total) return 0;
  const score =
    counts.supportive * weights.supportive +
    counts.suggestive * weights.suggestive +
    counts.neutral * weights.neutral +
    counts.critical * weights.critical;
  return Math.round((score / total) * 100);
}

const DraftSummary = () => {
  const { keyFindings, positiveHighlights, areasOfConcern } = useDraftInsights();
  const [selectedDraftTitle, setSelectedDraftTitle] = useState<string>("");
  const [draftPoints, setDraftPoints] = useState<string[] | null>(null);

  useEffect(() => {
    const t = localStorage.getItem("selectedDraftTitle") || "Digital Governance Framework - Draft Policy";
    setSelectedDraftTitle(t);
    try {
      const raw = localStorage.getItem("selectedDraftPoints");
      if (raw) {
        const arr = JSON.parse(raw);
        if (Array.isArray(arr)) setDraftPoints(arr.filter(Boolean));
      }
    } catch {}
  }, []);

  return (
    <Card className="shadow-card border-border transition-all duration-300 hover:border-primary hover:shadow-lg">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="flex items-center gap-2 text-4xl font-bold text-blue-900">
              <Sparkles className="w-8 h-8" />
              Draft Summary
            </CardTitle>
            <CardDescription>
              {selectedDraftTitle ? (
                <span className="text-lg text-gray-600">
                  Selected draft: <span className="font-medium text-lg text-black">Environmental Policy Draft 2024</span>
                </span>
              ) : (
                "Concise overview of key consultation insights"
              )}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="rounded-lg border border-border bg-muted/30 p-4">
          <div className="font-bold mb-2 text-2xl text-blue-900 flex items-center gap-2">
            <Sparkles className="w-6 h-6" />
            Key Findings
          </div>
          <ul className="list-disc list-outside pl-4 space-y-1 text-lg text-black font-medium">
            {(draftPoints && draftPoints.length > 0 ? draftPoints : keyFindings).map((k) => (
              <li key={k}>{k}</li>
            ))}
          </ul>
        </div>

        <div className="rounded-lg border border-border p-4 bg-green-50/40 dark:bg-green-950/20">
          <div className="font-bold text-green-700 dark:text-green-300 mb-1 text-2xl flex items-center gap-2">
            <Heart className="w-6 h-6" />
            Positive Highlights
            </div>
          <p className="text-lg text-black">{positiveHighlights}</p>
        </div>

        <div className="rounded-lg border border-border p-4 bg-red-50/40 dark:bg-red-950/20">
          <div className="font-bold text-red-700 dark:text-red-300 mb-1 text-2xl flex items-center gap-2">
            <ListChecks className="w-6 h-6" />
            Areas of Concern
            </div>
          <p className="text-lg text-black">{areasOfConcern}</p>
        </div>

        {/* Sentiment Distribution */}
        <div className="rounded-lg border border-border p-4 bg-card">
          <div className="font-semibold mb-3 text-2xl">Overall Sentiment Distribution</div>
          <div className="space-y-2">
            {Object.entries(mockStats.overallSentimentDistribution).map(([sentiment, percentage]) => (
              <div key={sentiment} className="flex items-center gap-3 ">
                <div className="w-20 text-lg capitalize">{sentiment}</div>
                <div className="flex-1 bg-muted rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${getSentimentColor(sentiment)}`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <div className="w-10 text-lg text-right">{String(percentage)}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stakeholder Distribution */}
        <div className="rounded-lg border border-border p-4 bg-card">
          <div className="font-semibold mb-3 text-3xl">Stakeholder Distribution</div>
          
          {/* Individual Group */}
          <div className="mb-4">
            <div className="text-2xl font-semibold text-blue-900 mb-2">Individual Subtypes</div>
            <div className="grid grid-cols-1 gap-2">
              {['businessperson', 'student', 'professional'].map((stakeholder) => {
                const percentage = mockStats.stakeholderBreakdown[stakeholder as keyof typeof mockStats.stakeholderBreakdown];
                const Icon = iconForStakeholder(prettyStakeholder(stakeholder));
                return (
                  <div key={stakeholder} className="flex items-center gap-3 p-2 rounded-lg bg-muted/30 hover:bg-muted/60 transition-transform transform hover:scale-105 cursor-pointer">
                    <Icon className="w-6 h-6 text-primary" />
                    <div className="flex-1">
                      <div className="text-xl font-medium">{prettyStakeholder(stakeholder)}</div>
                      <div className="text-lg text-muted-foreground">{String(percentage)}% of comments</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Organization Group */}
          <div>
            <div className="text-2xl font-semibold text-blue-900 mb-2">Organization Subtypes</div>
            <div className="grid grid-cols-1 gap-2">
              {['extractiveIndustries', 'manufacturing', 'serviceEconomy'].map((stakeholder) => {
                const percentage = mockStats.stakeholderBreakdown[stakeholder as keyof typeof mockStats.stakeholderBreakdown];
                const Icon = iconForStakeholder(prettyStakeholder(stakeholder));
                return (
                  <div key={stakeholder} className="flex items-center gap-3 p-2 rounded-lg bg-muted/30 hover:bg-muted/60 transition-transform transform hover:scale-105 cursor-pointer">
                    <Icon className="w-6 h-6 text-primary" />
                    <div className="flex-1">
                      <div className="text-xl font-medium">{prettyStakeholder(stakeholder)}</div>
                      <div className="text-lg text-muted-foreground">{percentage}% of comments</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const iconForStakeholder = (type: string) => {
  switch (type) {
    case "Businessperson":
      return Briefcase;
    case "Student":
      return GraduationCap;
    case "Professional":
      return User;
    case "Extractive Industries":
      return Building2;
    case "Manufacturing":
      return Factory;
    case "Service Economy":
      return Store;
    default:
      return User;
  }
};

const SectionSummary = () => {
  const [selectedSection, setSelectedSection] = useState<string>("2.1");
  
  const sectionData = mockSectionSummaries[selectedSection as keyof typeof mockSectionSummaries];
  
  const individualStakeholders = ['businessperson', 'student', 'professional'];
  const organizationStakeholders = ['extractiveIndustries', 'manufacturing', 'serviceEconomy'];


  return (
    <Card className="shadow-card border-border transition-all duration-300 hover:border-primary hover:shadow-lg">
      <CardHeader>
        <div className="flex items-start justify-between gap-3">
          <div className="flex-shrink-0">
            <CardTitle className="flex items-baseline gap-2 text-4xl font-bold text-blue-900">
              <FileText className="w-8 h-8" />
              Section Summary
            </CardTitle>
            <CardDescription className="text-lg text-gray-600">
              Summary of comments for each draft section
            </CardDescription>
          </div>
          <div className="flex-shrink-0">
            <Select value={selectedSection} onValueChange={setSelectedSection}>
              <SelectTrigger className="w-[340px] h-14 text-lg">
                <SelectValue placeholder="Select section" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2.1">2.1 Environmental Regulatory Changes</SelectItem>
                <SelectItem value="2.2">2.2 Current Policy Amendments</SelectItem>
                <SelectItem value="2.3">2.3 Implementation Guidelines</SelectItem>
                <SelectItem value="2.4">2.4 Monitoring and Compliance Measures</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Section Overview */}
        <div className="rounded-lg border border-border p-4 bg-muted/30">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-xl">{sectionData.title}</h3>
            <Badge variant="secondary" className="text-lg">{sectionData.totalComments} comments</Badge>
          </div>
        </div>

        {/* Key Findings */}
        <div className="rounded-lg border border-border bg-muted/30 p-4">
          <div className="font-bold mb-2 text-2xl text-blue-900 flex items-center gap-2">
            <Sparkles className="w-6 h-6" />
            Key Findings
          </div>
          <ul className="list-disc list-outside pl-4 space-y-1 text-lg text-black font-medium text-left">
            {sectionData.keyFindings.map((finding, idx) => (
              <li key={idx}>{finding}</li>
            ))}
          </ul>
        </div>

        {/* Positive Highlights */}
        <div className="rounded-lg border border-border p-4 bg-green-50/40 dark:bg-green-950/20">
          <div className="font-bold text-green-700 dark:text-green-300 mb-2 flex items-center gap-2 text-2xl">
            <Heart className="w-6 h-6" />
            Positive Highlights
          </div>
          <p className="text-lg text-black  ">{sectionData.positiveHighlights}</p>
        </div>

        {/* Areas of Concern */}
        <div className="rounded-lg border border-border p-4 bg-red-50/40 dark:bg-red-950/20">
          <div className="font-bold text-red-700 dark:text-red-300 mb-2 flex items-center gap-2 text-2xl">
            <ListChecks className="w-6 h-6" />
            Areas of Concern
          </div>
          <p className="text-lg text-black">{sectionData.areasOfConcern}</p>
        </div>

        {/* Sentiment Distribution */}
        <div className="rounded-lg border border-border p-4 bg-card">
          <div className="font-semibold mb-3 text-2xl">Sentiment Distribution</div>
          <div className="space-y-2">
            {Object.entries(sectionData.sentimentDistribution).map(([sentiment, percentage]) => (
              <div key={sentiment} className="flex items-center gap-3">
                <div className="w-20 text-lg capitalize">{sentiment}</div>
                <div className="flex-1 bg-muted rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${getSentimentColor(sentiment)}`}
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <div className="w-10 text-lg text-right">{String(percentage)}%</div>
              </div>
            ))}
          </div>
        </div>

        {/* Stakeholder Distribution */}
        <div className="rounded-lg border border-border p-4 bg-card">
          <div className="font-semibold mb-3 text-3xl">Stakeholder Distribution</div>
          
          {/* Individual Group */}
          <div className="mb-4">
            <div className="text-2xl font-semibold text-blue-900 mb-2">Individual Subtypes</div>
            <div className="grid grid-cols-1 gap-2">
              {individualStakeholders.map((stakeholder) => {
                const percentage = sectionData.stakeholderDistribution[stakeholder as keyof typeof sectionData.stakeholderDistribution];
                if (!percentage) return null;
                const Icon = iconForStakeholder(prettyStakeholder(stakeholder));
                return (
                  <div key={stakeholder} className="flex items-center gap-3 p-2 rounded-lg bg-muted/30 hover:bg-muted/60 transition-transform transform hover:scale-105 cursor-pointer">
                    <Icon className="w-6 h-6 text-primary" />
                    <div className="flex-1">
                      <div className="text-xl font-medium">{prettyStakeholder(stakeholder)}</div>
                      <div className="text-lg text-muted-foreground">{String(percentage)}% of comments</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Organization Group */}
          <div>
            <div className="text-2xl font-semibold text-blue-900 mb-2">Organization Subtypes</div>
            <div className="grid grid-cols-1 gap-2">
              {organizationStakeholders.map((stakeholder) => {
                const percentage = sectionData.stakeholderDistribution[stakeholder as keyof typeof sectionData.stakeholderDistribution];
                if (!percentage) return null;
                const Icon = iconForStakeholder(prettyStakeholder(stakeholder));
                return (
                  <div key={stakeholder} className="flex items-start gap-3 p-2 rounded-lg bg-muted/30 hover:bg-muted/60 transition-transform transform hover:scale-105 cursor-pointer">
                    <Icon className="w-6 h-6 text-primary" />
                    <div className="flex-1">
                      <div className="text-xl font-medium">{prettyStakeholder(stakeholder)}</div>
                      <div className="text-lg text-muted-foreground">{percentage}% of comments</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <Button variant="outline" className="hover:bg-primary/10">Export Section Summary</Button>
        </div>
      </CardContent>
    </Card>
  );
};

const SummaryView = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
      <DraftSummary />
      <SectionSummary />
    </div>
  );
};

export default SummaryView;