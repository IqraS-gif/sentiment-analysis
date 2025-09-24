// // // import { useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// // // import { Button } from "@/components/ui/button";
// // // import { Badge } from "@/components/ui/badge";
// // // import { Separator } from "@/components/ui/separator";

// // // interface Comment {
// // //   id: string;
// // //   user: string;
// // //   stakeholderType: string;
// // //   comment: string;
// // //   timestamp: string;
// // // }

// // // interface Section {
// // //   id: string;
// // //   title: string;
// // //   content: string;
// // //   comments: Comment[];
// // // }

// // // interface Draft {
// // //   id: string;
// // //   title: string;
// // //   sections: Section[];
// // // }

// // // const mockDrafts: Draft[] = [
// // //   {
// // //     id: "1",
// // //     title: "Environmental Policy Draft 2024",
// // //     sections: [
// // //       {
// // //         id: "s1",
// // //         title: "2.1 Policy Objectives and Scope",
// // //         content: "This section outlines the primary objectives of the environmental policy framework, including the establishment of comprehensive guidelines for sustainable development, carbon emission reduction targets of 40% by 2030, and the implementation of green technology incentives across all industrial sectors. The policy aims to balance environmental protection with economic growth through innovative regulatory mechanisms.",
// // //         comments: [
// // //           {
// // //             id: "c1",
// // //             user: "John Smith",
// // //             stakeholderType: "NGO",
// // //             comment: "The 40% carbon reduction target is ambitious but necessary. We recommend including specific milestones for tracking progress and interim assessments.",
// // //             timestamp: "2024-01-15 10:30"
// // //           },
// // //           {
// // //             id: "c2",
// // //             user: "Maria Garcia",
// // //             stakeholderType: "Industry Representative",
// // //             comment: "While we support environmental goals, the timeline may be too aggressive for small and medium enterprises. Consider phased implementation based on company size.",
// // //             timestamp: "2024-01-15 14:22"
// // //           },
// // //           {
// // //             id: "c3",
// // //             user: "Dr. Robert Chen",
// // //             stakeholderType: "Academic",
// // //             comment: "The policy framework aligns well with international best practices. However, more emphasis should be placed on research and development incentives for clean technology.",
// // //             timestamp: "2024-01-15 16:45"
// // //           },
// // //           {
// // //             id: "c4",
// // //             user: "Sarah Williams",
// // //             stakeholderType: "Citizen",
// // //             comment: "As a concerned parent, I fully support these measures. The future of our children depends on bold action today. Please ensure adequate funding for implementation.",
// // //             timestamp: "2024-01-16 09:20"
// // //           },
// // //           {
// // //             id: "c5",
// // //             user: "Michael Thompson",
// // //             stakeholderType: "Government Official",
// // //             comment: "The objectives are well-defined, but we need clearer coordination mechanisms between federal and state agencies to ensure effective implementation.",
// // //             timestamp: "2024-01-16 11:30"
// // //           }
// // //         ]
// // //       },
// // //       {
// // //         id: "s2",
// // //         title: "2.2 Regulatory Framework and Compliance",
// // //         content: "The regulatory framework establishes a three-tier compliance system with mandatory environmental impact assessments, regular monitoring protocols, and penalty structures for non-compliance. Companies will be required to submit annual sustainability reports and undergo third-party environmental audits. The framework includes provisions for technology transfer programs and green financing mechanisms to support transition efforts.",
// // //         comments: [
// // //           {
// // //             id: "c6",
// // //             user: "Dr. Emily Rodriguez",
// // //             stakeholderType: "Academic",
// // //             comment: "The three-tier system is comprehensive, but the enforcement mechanisms need strengthening. Consider establishing an independent environmental compliance authority.",
// // //             timestamp: "2024-01-16 14:15"
// // //           },
// // //           {
// // //             id: "c7",
// // //             user: "James Patterson",
// // //             stakeholderType: "Industry Representative",
// // //             comment: "The compliance costs could be prohibitive for smaller companies. We suggest a sliding scale for penalties and more generous transition periods for SMEs.",
// // //             timestamp: "2024-01-16 15:45"
// // //           },
// // //           {
// // //             id: "c8",
// // //             user: "Lisa Anderson",
// // //             stakeholderType: "NGO",
// // //             comment: "Strong enforcement is crucial for credibility. We recommend public disclosure of compliance records and citizen participation in monitoring processes.",
// // //             timestamp: "2024-01-17 08:30"
// // //           },
// // //           {
// // //             id: "c9",
// // //             user: "David Kumar",
// // //             stakeholderType: "Citizen",
// // //             comment: "The framework sounds good on paper, but how will you ensure companies actually comply? We need real penalties that hurt, not just slaps on the wrist.",
// // //             timestamp: "2024-01-17 10:15"
// // //           },
// // //           {
// // //             id: "c10",
// // //             user: "Rachel Green",
// // //             stakeholderType: "Government Official",
// // //             comment: "The regulatory framework is sound, but we need better integration with existing environmental laws to avoid regulatory overlap and confusion.",
// // //             timestamp: "2024-01-17 13:20"
// // //           }
// // //         ]
// // //       },
// // //       {
// // //         id: "s3",
// // //         title: "2.3 Implementation Timeline and Milestones",
// // //         content: "Implementation will occur in three phases over 36 months: Phase 1 (Months 1-12) focuses on regulatory setup and stakeholder engagement; Phase 2 (Months 13-24) implements core compliance requirements and monitoring systems; Phase 3 (Months 25-36) involves full system deployment and performance evaluation. Each phase includes specific deliverables, success metrics, and review checkpoints.",
// // //         comments: [
// // //           {
// // //             id: "c11",
// // //             user: "Alex Johnson",
// // //             stakeholderType: "Government Official",
// // //             comment: "The 36-month timeline is more realistic than the original proposal, but we need contingency planning for potential delays in regulatory approvals.",
// // //             timestamp: "2024-01-17 16:45"
// // //           },
// // //           {
// // //             id: "c12",
// // //             user: "Jennifer Lee",
// // //             stakeholderType: "Industry Representative",
// // //             comment: "Phase 1 should include more extensive consultation with industry stakeholders. Twelve months may not be sufficient for proper engagement and feedback incorporation.",
// // //             timestamp: "2024-01-18 09:30"
// // //           },
// // //           {
// // //             id: "c13",
// // //             user: "Dr. Mark Stevens",
// // //             stakeholderType: "Academic",
// // //             comment: "The phased approach is methodical, but consider pilot programs in select regions during Phase 1 to identify potential implementation challenges early.",
// // //             timestamp: "2024-01-18 11:45"
// // //           },
// // //           {
// // //             id: "c14",
// // //             user: "Anna Martinez",
// // //             stakeholderType: "NGO",
// // //             comment: "We appreciate the structured timeline, but urge faster implementation for critical environmental measures. Climate change won't wait for our bureaucracy.",
// // //             timestamp: "2024-01-18 14:20"
// // //           },
// // //           {
// // //             id: "c15",
// // //             user: "Tom Wilson",
// // //             stakeholderType: "Citizen",
// // //             comment: "Three years seems like a long time when we're already seeing the effects of climate change. Can some measures be fast-tracked?",
// // //             timestamp: "2024-01-18 16:10"
// // //           }
// // //         ]
// // //       }
// // //     ]
// // //   },
// // //   {
// // //     id: "2",
// // //     title: "Healthcare Reform Bill 2024",
// // //     sections: [
// // //       {
// // //         id: "s4",
// // //         title: "2.1 Universal Healthcare Coverage Framework",
// // //         content: "This section establishes the foundation for universal healthcare coverage, including eligibility criteria, benefit packages, and service delivery models. The framework ensures comprehensive coverage for preventive care, emergency services, specialized treatments, and mental health services. It also outlines the integration of public and private healthcare providers within a unified system.",
// // //         comments: [
// // //           {
// // //             id: "c16",
// // //             user: "Dr. Patricia Williams",
// // //             stakeholderType: "Healthcare Provider",
// // //             comment: "Universal coverage is essential, but the current provider shortage could create significant bottlenecks. We need substantial investment in medical education and training programs.",
// // //             timestamp: "2024-01-19 11:20"
// // //           },
// // //           {
// // //             id: "c17",
// // //             user: "Robert Johnson",
// // //             stakeholderType: "Insurance Representative",
// // //             comment: "The transition from private insurance to universal coverage needs careful management to avoid market disruption and ensure continuity of care for current beneficiaries.",
// // //             timestamp: "2024-01-19 13:45"
// // //           },
// // //           {
// // //             id: "c18",
// // //             user: "Maria Santos",
// // //             stakeholderType: "Patient Advocate",
// // //             comment: "Finally, a system that puts patients first! However, we need strong protections against discrimination and ensure equal access regardless of pre-existing conditions.",
// // //             timestamp: "2024-01-19 15:30"
// // //           },
// // //           {
// // //             id: "c19",
// // //             user: "Dr. James Mitchell",
// // //             stakeholderType: "Academic",
// // //             comment: "The framework is comprehensive, but cost containment mechanisms need more detail. How will we prevent the system from becoming financially unsustainable?",
// // //             timestamp: "2024-01-20 08:15"
// // //           },
// // //           {
// // //             id: "c20",
// // //             user: "Karen Thompson",
// // //             stakeholderType: "Citizen",
// // //             comment: "As someone who has struggled with medical bills, this gives me hope. But please ensure the system is actually accessible and not just theoretically universal.",
// // //             timestamp: "2024-01-20 10:45"
// // //           }
// // //         ]
// // //       }
// // //     ]
// // //   }
// // // ];

// // // const DraftViewer = () => {
// // //   const [selectedDraft, setSelectedDraft] = useState<Draft | null>(null);
// // //   const [selectedSection, setSelectedSection] = useState<Section | null>(null);
// // //   const navigate = useNavigate();

// // //   const handleDraftSelect = (draftId: string) => {
// // //     const draft = mockDrafts.find(d => d.id === draftId);
// // //     setSelectedDraft(draft || null);
// // //     setSelectedSection(draft?.sections[0] || null);
// // //   };

// // //   const handleSectionSelect = (section: Section) => {
// // //     setSelectedSection(section);
// // //   };

// // //   const handleAnalyze = () => {
// // //     navigate("/dashboard");
// // //   };

// // //   const getStakeholderColor = (type: string) => {
// // //     switch (type) {
// // //       case "NGO": return "bg-green-100 text-green-800";
// // //       case "Industry Representative": return "bg-blue-100 text-blue-800";
// // //       case "Academic": return "bg-purple-100 text-purple-800";
// // //       case "Government Official": return "bg-orange-100 text-orange-800";
// // //       case "Healthcare Provider": return "bg-red-100 text-red-800";
// // //       default: return "bg-gray-100 text-gray-800";
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen bg-background">
// // //       {/* Header */}
// // //       <div className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
// // //         <div className="max-w-7xl mx-auto p-6">
// // //           <h1 className="text-3xl font-bold text-foreground mb-4">Draft Review System</h1>
// // //           <div className="max-w-md">
// // //             <Select onValueChange={handleDraftSelect}>
// // //               <SelectTrigger className="h-12 text-base">
// // //                 <SelectValue placeholder="Select a draft to review" />
// // //               </SelectTrigger>
// // //               <SelectContent>
// // //                 {mockDrafts.map(draft => (
// // //                   <SelectItem key={draft.id} value={draft.id} className="text-base py-3">
// // //                     {draft.title}
// // //                   </SelectItem>
// // //                 ))}
// // //               </SelectContent>
// // //             </Select>
// // //           </div>
// // //         </div>
// // //       </div>

// // //       {selectedDraft && (
// // //         <div className="max-w-7xl mx-auto p-6">
// // //           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
// // //             {/* Left Side - Draft Content */}
// // //             <div className="space-y-6">
// // //               <Card className="shadow-lg border-2">
// // //                 <CardHeader className="bg-primary/5 border-b">
// // //                   <CardTitle className="text-2xl text-primary">{selectedDraft.title}</CardTitle>
// // //                 </CardHeader>
// // //                 <CardContent className="p-6">
// // //                   <div className="space-y-6">
// // //                     {selectedDraft.sections.map(section => (
// // //                       <div key={section.id} className="border-l-4 border-l-primary/20 pl-4">
// // //                         <Button
// // //                           variant={selectedSection?.id === section.id ? "default" : "outline"}
// // //                           className="w-full justify-start mb-4 h-auto py-3 px-4 text-left"
// // //                           onClick={() => handleSectionSelect(section)}
// // //                         >
// // //                           <div className="text-left">
// // //                             <div className="font-semibold text-base">{section.title}</div>
// // //                             <div className="text-sm text-muted-foreground mt-1">
// // //                               {section.comments.length} comments
// // //                             </div>
// // //                           </div>
// // //                         </Button>
                        
// // //                         {selectedSection?.id === section.id && (
// // //                           <div className="mt-4 p-6 bg-muted/50 rounded-lg border-2 border-primary/20">
// // //                             <h3 className="font-bold text-lg mb-4 text-primary">{section.title}</h3>
// // //                             <p className="text-foreground leading-relaxed text-base">{section.content}</p>
// // //                           </div>
// // //                         )}
// // //                       </div>
// // //                     ))}
// // //                   </div>
// // //                 </CardContent>
// // //               </Card>
              
// // //               {/* Analyze Button at bottom of draft */}
// // //               <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
// // //                 <CardContent className="p-6 text-center">
// // //                   <h3 className="font-semibold text-lg mb-2">Ready for Analysis?</h3>
// // //                   <p className="text-muted-foreground mb-4">
// // //                     Analyze all comments and feedback for this draft
// // //                   </p>
// // //                   <Button 
// // //                     onClick={handleAnalyze}
// // //                     size="lg"
// // //                     className="px-8 py-3 text-base font-semibold"
// // //                   >
// // //                     Analyze Complete Draft
// // //                   </Button>
// // //                 </CardContent>
// // //               </Card>
// // //             </div>

// // //             {/* Right Side - Comments */}
// // //             <div className="lg:sticky lg:top-6 lg:h-fit">
// // //               <Card className="shadow-lg border-2 min-h-[600px]">
// // //                 <CardHeader className="bg-secondary/5 border-b">
// // //                   <CardTitle className="text-xl">
// // //                     {selectedSection ? (
// // //                       <div>
// // //                         <div className="text-secondary text-black">Comments on</div>
// // //                         <div className="text-lg font-normal mt-1">{selectedSection.title}</div>
// // //                       </div>
// // //                     ) : (
// // //                       "Section Comments"
// // //                     )}
// // //                   </CardTitle>
// // //                 </CardHeader>
// // //                 <CardContent className="p-6">
// // //                   {selectedSection ? (
// // //                     <div className="space-y-4">
// // //                       <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
// // //                         <span>{selectedSection.comments.length} stakeholder comments</span>
// // //                         <span>Latest feedback</span>
// // //                       </div>
                      
// // //                       {selectedSection.comments.map(comment => (
// // //                         <div key={comment.id} className="border-2 rounded-lg p-4 hover:shadow-md transition-shadow bg-card">
// // //                           <div className="flex items-start justify-between mb-3">
// // //                             <div className="flex items-center gap-3">
// // //                               <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
// // //                                 {comment.user.charAt(0)}
// // //                               </div>
// // //                               <div>
// // //                                 <span className="font-semibold text-base">{comment.user}</span>
// // //                                 <Badge className={`ml-2 ${getStakeholderColor(comment.stakeholderType)}`}>
// // //                                   {comment.stakeholderType}
// // //                                 </Badge>
// // //                               </div>
// // //                             </div>
// // //                             <span className="text-sm text-muted-foreground">{comment.timestamp}</span>
// // //                           </div>
// // //                           <p className="text-foreground leading-relaxed">{comment.comment}</p>
// // //                         </div>
// // //                       ))}
// // //                     </div>
// // //                   ) : (
// // //                     <div className="flex flex-col items-center justify-center py-16 text-center">
// // //                       <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
// // //                         <span className="text-2xl">💬</span>
// // //                       </div>
// // //                       <h3 className="font-semibold text-lg mb-2">Select a Section</h3>
// // //                       <p className="text-muted-foreground">
// // //                         Choose a section from the draft to view stakeholder comments and feedback
// // //                       </p>
// // //                     </div>
// // //                   )}
// // //                 </CardContent>
// // //               </Card>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // };

// // // export default DraftViewer;
// // import { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// // import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// // import { Button } from "@/components/ui/button";
// // import { Badge } from "@/components/ui/badge";

// // // --- (Interfaces are unchanged) ---
// // interface Comment {
// //   id: string;
// //   user: string;
// //   stakeholderType: string;
// //   comment: string;
// //   timestamp: string;
// // }
// // interface Section {
// //   id: string;
// //   title: string;
// //   content: string;
// //   comments: Comment[];
// // }
// // interface Draft {
// //   id: string;
// //   title: string;
// //   sections: Section[];
// // }

// // // --- 1. MOCK DATA UPDATED AS REQUESTED ---
// // const mockDrafts: Draft[] = [
// //   {
// //     id: "1",
// //     title: "Environmental Policy Draft 2024",
// //     sections: [
// //       {
// //         id: "s1",
// //         title: "2.1 Environmental Regulatory Changes",
// //         content: "This section details proposed changes to environmental regulations, focusing on stricter emissions standards for industrial activities. It introduces new reporting requirements and a carbon pricing mechanism to encourage the adoption of cleaner technologies.",
// //         comments: [
// //           { id: "c1", user: "Global Petrochem Inc.", stakeholderType: "Extractive Industries", comment: "The new carbon pricing will disproportionately affect our sector. We propose a longer phase-in period to allow for capital investment in new technologies.", timestamp: "2024-01-15 10:30" },
// //           { id: "c2", user: "Dr. Alisha Khan", stakeholderType: "Professional", comment: "These regulatory changes are aligned with international climate agreements and are a necessary step towards our national emissions targets.", timestamp: "2024-01-15 14:22" },
// //         ]
// //       },
// //       {
// //         id: "s2",
// //         title: "2.2 Current Policy Amendments",
// //         content: "This part of the draft proposes amendments to the existing Clean Air and Water Acts. The key changes include lowering the permissible limits for several pollutants and expanding the list of protected water bodies to include critical wetlands and coastal areas.",
// //         comments: [
// //           { id: "c3", user: "Steel Manufacturing Co.", stakeholderType: "Manufacturing", comment: "Lowering pollutant limits without providing financial aid for equipment upgrades is not feasible. This will impact our production costs significantly.", timestamp: "2024-01-16 14:15" },
// //           { id: "c4", user: "Nature's Voice", stakeholderType: "NGO", comment: "We strongly support the expansion of protected water bodies. This is a critical move to preserve biodiversity and ensure water security.", timestamp: "2024-01-17 08:30" },
// //         ]
// //       },
// //       {
// //         id: "s3",
// //         title: "2.3 Implementation Guidelines",
// //         content: "These guidelines provide a step-by-step roadmap for public and private entities to comply with the new policies. It includes timelines for compliance, details on available support programs, and establishes a new multi-stakeholder committee to oversee the process.",
// //         comments: [
// //           { id: "c5", user: "Finance & Banking Group", stakeholderType: "Service Economy", comment: "The guidelines for 'green financing' are vague. We need more clarity on risk assessment and ROI for these projects to unlock private capital.", timestamp: "2024-01-18 09:30" },
// //           { id: "c6", user: "David Chen", stakeholderType: "Businessperson", comment: "As a small business owner, the compliance roadmap is overwhelming. We need simplified guidelines and dedicated support channels for SMEs.", timestamp: "2024-01-18 11:45" },
// //         ]
// //       },
// //        {
// //         id: "s4",
// //         title: "2.4 Monitoring and Compliance Measures",
// //         content: "This final section establishes a new independent body for monitoring environmental compliance. It outlines the use of satellite imagery and real-time sensors for data collection and mandates public disclosure of compliance data to ensure transparency.",
// //         comments: [
// //           { id: "c7", user: "Laura Evans", stakeholderType: "Student", comment: "Public disclosure of data is the most important part! This will empower citizens to hold polluters accountable. This needs to be a non-negotiable part of the policy.", timestamp: "2024-01-19 15:30" },
// //           { id: "c8", user: "National Farmers Union", stakeholderType: "Organization", comment: "Who pays for the installation and maintenance of these sensors on agricultural land? This seems like an unfunded mandate.", timestamp: "2024-01-20 10:45" }
// //         ]
// //       }
// //     ]
// //   },
// //   // Second draft is kept for the dropdown to function
// //   { id: "2", title: "Healthcare Reform Bill 2024", sections: [ /* ... (content hidden for brevity) ... */ ] }
// // ];


// // const DraftViewer = () => {
// //   // --- (State management is unchanged) ---
// //   const [selectedDraft, setSelectedDraft] = useState<Draft | null>(mockDrafts[0]);
// //   const [selectedSection, setSelectedSection] = useState<Section | null>(mockDrafts[0]?.sections[0] || null);
// //   const navigate = useNavigate();

// //   // --- (Handler functions are unchanged) ---
// //   const handleDraftSelect = (draftId: string) => {
// //     const draft = mockDrafts.find(d => d.id === draftId);
// //     setSelectedDraft(draft || null);
// //     setSelectedSection(draft?.sections[0] || null);
// //   };

// //   const handleSectionSelect = (section: Section) => {
// //     setSelectedSection(section);
// //   };

// //   const handleAnalyze = () => {
// //     navigate("/dashboard");
// //   };

// //   // --- 2. COLOR FUNCTION UPDATED to handle new stakeholder types ---
// //   const getStakeholderColor = (type: string) => {
// //     switch (type) {
// //       // Original Types
// //       case "NGO": return "bg-green-100 text-green-800";
// //       case "Government Official": return "bg-orange-100 text-orange-800";
// //       // New Types
// //       case "Extractive Industries": return "bg-gray-100 text-gray-800";
// //       case "Manufacturing": return "bg-red-100 text-red-800";
// //       case "Service Economy": return "bg-blue-100 text-blue-800";
// //       case "Professional": return "bg-purple-100 text-purple-800";
// //       case "Businessperson": return "bg-indigo-100 text-indigo-800";
// //       case "Student": return "bg-pink-100 text-pink-800";
// //       case "Organization": return "bg-yellow-100 text-yellow-800";
// //       default: return "bg-gray-100 text-gray-800";
// //     }
// //   };

// //   // --- (The entire JSX return block is UNCHANGED from your last version) ---
// //   return (
// //     <div className="min-h-screen bg-slate-50">
// //       {/* Header */}
// //       <div className="border-b bg-white">
// //         <div className="max-w-screen-2xl mx-auto px-6 py-4">
// //           <h1 className="text-2xl font-bold text-foreground mb-2">Draft Review System</h1>
// //           <div className="max-w-md">
// //             <Select defaultValue={selectedDraft?.id} onValueChange={handleDraftSelect}>
// //               <SelectTrigger className="h-11 text-base">
// //                 <SelectValue placeholder="Select a draft to review" />
// //               </SelectTrigger>
// //               <SelectContent>
// //                 {mockDrafts.map(draft => (
// //                   <SelectItem key={draft.id} value={draft.id} className="text-base py-2">
// //                     {draft.title}
// //                   </SelectItem>
// //                 ))}
// //               </SelectContent>
// //             </Select>
// //           </div>
// //         </div>
// //       </div>

// //       {selectedDraft && (
// //         <div className="max-w-screen-2xl mx-auto p-6 py-8">
// //           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
// //             <div className="lg:col-span-5 space-y-6">
// //               <Card className="shadow-md">
// //                 <CardHeader className="bg-slate-50 border-b">
// //                   <CardTitle className="text-xl text-primary">{selectedDraft.title}</CardTitle>
// //                 </CardHeader>
// //                 <CardContent className="p-4 space-y-2">
// //                   {selectedDraft.sections.map(section => (
// //                     <div key={section.id}>
// //                       {selectedSection?.id === section.id ? (
// //                         <div className="bg-primary text-primary-foreground rounded-lg p-4">
// //                           <button onClick={() => handleSectionSelect(section)} className="w-full text-left">
// //                             <div className="font-bold text-base">{section.title}</div>
// //                             <div className="text-sm opacity-80 mt-1">{section.comments.length} comments</div>
// //                           </button>
// //                           <div className="mt-4 pt-4 border-t border-primary-foreground/20">
// //                             <p className="leading-relaxed text-sm">{section.content}</p>
// //                           </div>
// //                         </div>
// //                       ) : (
// //                         <button
// //                           className="w-full text-left p-4 rounded-lg hover:bg-slate-100"
// //                           onClick={() => handleSectionSelect(section)}
// //                         >
// //                           <div className="font-semibold text-gray-700">{section.title}</div>
// //                           <div className="text-sm text-gray-500 mt-1">{section.comments.length} comments</div>
// //                         </button>
// //                       )}
// //                     </div>
// //                   ))}
// //                 </CardContent>
// //               </Card>
              
// //               <Card className="bg-slate-100 border-slate-200">
// //                 <CardContent className="p-6 text-center">
// //                   <h3 className="font-semibold text-lg mb-2">Ready for Analysis?</h3>
// //                   <p className="text-gray-600 mb-4">Analyze all comments and feedback for this draft.</p>
// //                   <Button onClick={handleAnalyze} size="lg" className="px-8 py-3">
// //                     Analyze Complete Draft
// //                   </Button>
// //                 </CardContent>
// //               </Card>
// //             </div>

// //             <div className="lg:col-span-7">
// //               <div className="lg:sticky lg:top-8">
// //                 <Card className="shadow-md">
// //                   <CardHeader className="bg-slate-50 border-b">
// //                     <CardTitle className="text-lg">
// //                       {selectedSection ? (
// //                         <div>
// //                           <div className="text-sm text-gray-500">Comments on</div>
// //                           <div className="font-semibold mt-1 text-gray-800">{selectedSection.title}</div>
// //                         </div>
// //                       ) : "Comments"}
// //                     </CardTitle>
// //                   </CardHeader>
// //                   <CardContent className="p-4">
// //                     {selectedSection ? (
// //                       <div className="space-y-4">
// //                         <div className="flex items-center justify-between text-xs text-gray-500 mb-2 px-2">
// //                           <span>{selectedSection.comments.length} stakeholder comments</span>
// //                           <span>Latest feedback</span>
// //                         </div>
// //                         {selectedSection.comments.map(comment => (
// //                           <div key={comment.id} className="border rounded-lg p-4 bg-white">
// //                             <div className="flex items-center justify-between mb-3">
// //                               <div className="flex items-center gap-3">
// //                                 <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center font-semibold text-slate-600">
// //                                   {comment.user.charAt(0)}
// //                                 </div>
// //                                 <div>
// //                                   <span className="font-semibold text-sm">{comment.user}</span>
// //                                   <Badge variant="outline" className={`ml-2 text-xs ${getStakeholderColor(comment.stakeholderType)}`}>
// //                                     {comment.stakeholderType}
// //                                   </Badge>
// //                                 </div>
// //                               </div>
// //                               <span className="text-xs text-gray-500">{comment.timestamp}</span>
// //                             </div>
// //                             <p className="text-gray-700 leading-relaxed text-sm">{comment.comment}</p>
// //                           </div>
// //                         ))}
// //                       </div>
// //                     ) : (
// //                       <div className="text-center py-16">
// //                         <p className="text-gray-500">Select a section to see comments.</p>
// //                       </div>
// //                     )}
// //                   </CardContent>
// //                 </Card>
// //               </div>
// //             </div>
            
// //           </div>
// //         </div>
// //       )}
// //     </div>
// //   );
// // };

// // export default DraftViewer;
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";
// import { Badge } from "@/components/ui/badge";

// // --- 1. DATA STRUCTURE UPDATED ---
// // The Comment interface now has a structured stakeholder object.
// interface Comment {
//   id: string;
//   user: string;
//   stakeholder: {
//     mainType: 'Individual' | 'Organization';
//     subType: string;
//   };
//   comment: string;
//   timestamp: string;
// }

// interface Section {
//   id: string;
//   title: string;
//   content: string;
//   comments: Comment[];
// }

// interface Draft {
//   id:string;
//   title: string;
//   sections: Section[];
// }

// // --- 2. MOCK DATA UPDATED with new structure, subtypes, and more comments ---
// const mockDrafts: Draft[] = [
//   {
//     id: "1",
//     title: "Environmental Policy Draft 2024",
//     sections: [
//       {
//         id: "s1",
//         title: "2.1 Environmental Regulatory Changes",
//         content: "This section details proposed changes to environmental regulations, focusing on stricter emissions standards for industrial activities. It introduces new reporting requirements and a carbon pricing mechanism to encourage the adoption of cleaner technologies.",
//         comments: [
//           { id: "c1", user: "Global Petrochem Inc.", stakeholder: { mainType: 'Organization', subType: 'Extractive Industries' }, comment: "The new carbon pricing will disproportionately affect our sector. We propose a longer phase-in period.", timestamp: "2024-01-15 10:30" },
//           { id: "c2", user: "Dr. Alisha Khan", stakeholder: { mainType: 'Individual', subType: 'Professional' }, comment: "These regulatory changes are aligned with international climate agreements and are a necessary step.", timestamp: "2024-01-15 14:22" },
//           { id: "c3", user: "Ben Carter", stakeholder: { mainType: 'Individual', subType: 'Student' }, comment: "As a student of environmental science, I fully support these stricter standards. It's about our future.", timestamp: "2024-01-15 16:05" },
//           { id: "c4", user: "EarthWatch Alliance", stakeholder: { mainType: 'Organization', subType: 'NGO' }, comment: "The changes are good, but enforcement needs to be a top priority from day one.", timestamp: "2024-01-15 18:20" },
//           { id: "c5", user: "Sandra Lee", stakeholder: { mainType: 'Individual', subType: 'Businessperson' }, comment: "What financial support will be available for small businesses to adapt to these new regulations?", timestamp: "2024-01-16 09:00" },
//         ]
//       },
//       {
//         id: "s2",
//         title: "2.2 Current Policy Amendments",
//         content: "This part of the draft proposes amendments to the existing Clean Air and Water Acts. The key changes include lowering the permissible limits for several pollutants and expanding the list of protected water bodies.",
//         comments: [
//           { id: "c6", user: "Steel Manufacturing Co.", stakeholder: { mainType: 'Organization', subType: 'Manufacturing' }, comment: "Lowering pollutant limits without providing financial aid for equipment upgrades is not feasible. This will impact production costs.", timestamp: "2024-01-16 14:15" },
//           { id: "c7", user: "Nature's Voice", stakeholder: { mainType: 'Organization', subType: 'NGO' }, comment: "We strongly support the expansion of protected water bodies. This is a critical move to preserve biodiversity.", timestamp: "2024-01-17 08:30" },
//           { id: "c8", user: "Mark Reynolds", stakeholder: { mainType: 'Individual', subType: 'Professional' }, comment: "The legal language in these amendments needs to be tightened to close potential loopholes.", timestamp: "2024-01-17 11:00" },
//           { id: "c9", user: "Green Finance Corp.", stakeholder: { mainType: 'Organization', subType: 'Service Economy' }, comment: "These amendments will create new investment opportunities in water purification and air quality monitoring technologies.", timestamp: "2024-01-17 13:45" },
//           { id: "c10", user: "Chloe Davis", stakeholder: { mainType: 'Individual', subType: 'Student' }, comment: "It's great to see wetlands being included. They are so important for local ecosystems.", timestamp: "2024-01-17 15:20" },
//         ]
//       },
//       {
//         id: "s3",
//         title: "2.3 Implementation Guidelines",
//         content: "These guidelines provide a step-by-step roadmap for public and private entities to comply with the new policies. It includes timelines, details on support programs, and establishes a multi-stakeholder oversight committee.",
//         comments: [
//           { id: "c11", user: "Finance & Banking Group", stakeholder: { mainType: 'Organization', subType: 'Service Economy' }, comment: "The guidelines for 'green financing' are vague. We need more clarity on risk assessment and ROI for these projects.", timestamp: "2024-01-18 09:30" },
//           { id: "c12", user: "David Chen", stakeholder: { mainType: 'Individual', subType: 'Businessperson' }, comment: "The compliance roadmap is overwhelming for small businesses. We need simplified guidelines.", timestamp: "2024-01-18 11:45" },
//           { id: "c13", user: "Auto Parts Ltd.", stakeholder: { mainType: 'Organization', subType: 'Manufacturing' }, comment: "A 24-month timeline for implementation is too short for our supply chain to adapt without significant disruption.", timestamp: "2024-01-18 14:00" },
//           { id: "c14", user: "Dr. Ian Holloway", stakeholder: { mainType: 'Individual', subType: 'Professional' }, comment: "The oversight committee must have representation from the scientific community to be credible.", timestamp: "2024-01-18 16:30" },
//           { id: "c15", user: "Policy Action Network", stakeholder: { mainType: 'Organization', subType: 'NGO' }, comment: "The guidelines look solid, but we are concerned about potential delays. What are the contingency plans?", timestamp: "2024-01-19 10:00" },
//         ]
//       },
//        {
//         id: "s4",
//         title: "2.4 Monitoring and Compliance Measures",
//         content: "This final section establishes a new independent body for monitoring environmental compliance, outlining the use of new technologies for data collection and mandating public disclosure of compliance data.",
//         comments: [
//           { id: "c16", user: "Laura Evans", stakeholder: { mainType: 'Individual', subType: 'Student' }, comment: "Public disclosure of data is the most important part! This will empower citizens to hold polluters accountable.", timestamp: "2024-01-19 15:30" },
//           { id: "c17", user: "National Farmers Union", stakeholder: { mainType: 'Organization', subType: 'Organization' }, comment: "Who pays for the installation and maintenance of these sensors on agricultural land? This seems like an unfunded mandate.", timestamp: "2024-01-20 10:45" },
//           { id: "c18", user: "Data Analytics Solutions", stakeholder: { mainType: 'Organization', subType: 'Service Economy' }, comment: "We support the use of technology for monitoring and can offer our platform to help visualize the compliance data for the public.", timestamp: "2024-01-20 12:15" },
//           { id: "c19", user: "Frank Miller", stakeholder: { mainType: 'Individual', subType: 'Businessperson' }, comment: "This new monitoring body must be truly independent and free from political or corporate influence.", timestamp: "2024-01-20 14:00" },
//           { id: "c20", user: "Eleanor Vance, Esq.", stakeholder: { mainType: 'Individual', subType: 'Professional' }, comment: "The legal framework for this new body's authority needs to be clearly defined to withstand legal challenges.", timestamp: "2024-01-20 16:50" },
//         ]
//       }
//     ]
//   },
//   { id: "2", title: "Healthcare Reform Bill 2024", sections: [ /* Other drafts can be added here */ ] }
// ];


// const DraftViewer = () => {
//   const [selectedDraft, setSelectedDraft] = useState<Draft | null>(mockDrafts[0]);
//   const [selectedSection, setSelectedSection] = useState<Section | null>(mockDrafts[0]?.sections[0] || null);
//   const navigate = useNavigate();

//   const handleDraftSelect = (draftId: string) => {
//     const draft = mockDrafts.find(d => d.id === draftId);
//     setSelectedDraft(draft || null);
//     setSelectedSection(draft?.sections[0] || null);
//   };

//   const handleSectionSelect = (section: Section) => {
//     setSelectedSection(section);
//   };

//   const handleAnalyze = () => {
//     navigate("/dashboard");
//   };

//   // --- 3. COLOR FUNCTION UPDATED to handle new stakeholder subtypes ---
//   const getStakeholderColor = (subType: string) => {
//     switch (subType) {
//       case "NGO": return "bg-green-100 text-green-800";
//       case "Extractive Industries": return "bg-gray-100 text-gray-800";
//       case "Manufacturing": return "bg-red-100 text-red-800";
//       case "Service Economy": return "bg-blue-100 text-blue-800";
//       case "Professional": return "bg-purple-100 text-purple-800";
//       case "Businessperson": return "bg-indigo-100 text-indigo-800";
//       case "Student": return "bg-pink-100 text-pink-800";
//       case "Organization": return "bg-yellow-100 text-yellow-800";
//       default: return "bg-slate-100 text-slate-800";
//     }
//   };

//   // --- UI and LAYOUT IS UNCHANGED ---
//   return (
//     <div className="min-h-screen bg-slate-50">
//       <div className="border-b bg-white">
//         <div className="max-w-screen-2xl mx-auto px-6 py-4">
//           <h1 className="text-2xl font-bold text-foreground mb-2">Draft Review System</h1>
//           <div className="max-w-md">
//             <Select defaultValue={selectedDraft?.id} onValueChange={handleDraftSelect}>
//               <SelectTrigger className="h-11 text-base">
//                 <SelectValue placeholder="Select a draft to review" />
//               </SelectTrigger>
//               <SelectContent>
//                 {mockDrafts.map(draft => (
//                   <SelectItem key={draft.id} value={draft.id} className="text-base py-2">
//                     {draft.title}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//           </div>
//         </div>
//       </div>

//       {selectedDraft && (
//         <div className="max-w-screen-2xl mx-auto p-6 py-8">
//           <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
//             <div className="lg:col-span-5 space-y-6">
//               <Card className="shadow-md">
//                 <CardHeader className="bg-slate-50 border-b">
//                   <CardTitle className="text-xl text-primary">{selectedDraft.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent className="p-4 space-y-2">
//                   {selectedDraft.sections.map(section => (
//                     <div key={section.id}>
//                       {selectedSection?.id === section.id ? (
//                         <div className="bg-primary text-primary-foreground rounded-lg p-4">
//                           <button onClick={() => handleSectionSelect(section)} className="w-full text-left">
//                             <div className="font-bold text-base">{section.title}</div>
//                             <div className="text-sm opacity-80 mt-1">{section.comments.length} comments</div>
//                           </button>
//                           <div className="mt-4 pt-4 border-t border-primary-foreground/20">
//                             <p className="leading-relaxed text-sm">{section.content}</p>
//                           </div>
//                         </div>
//                       ) : (
//                         <button
//                           className="w-full text-left p-4 rounded-lg hover:bg-slate-100"
//                           onClick={() => handleSectionSelect(section)}
//                         >
//                           <div className="font-semibold text-gray-700">{section.title}</div>
//                           <div className="text-sm text-gray-500 mt-1">{section.comments.length} comments</div>
//                         </button>
//                       )}
//                     </div>
//                   ))}
//                 </CardContent>
//               </Card>
//               <Card className="bg-slate-100 border-slate-200">
//                 <CardContent className="p-6 text-center">
//                   <h3 className="font-semibold text-lg mb-2">Ready for Analysis?</h3>
//                   <p className="text-gray-600 mb-4">Analyze all comments and feedback for this draft.</p>
//                   <Button onClick={handleAnalyze} size="lg" className="px-8 py-3">
//                     Analyze Complete Draft
//                   </Button>
//                 </CardContent>
//               </Card>
//             </div>
//             <div className="lg:col-span-7">
//               <div className="lg:sticky lg:top-8">
//                 <Card className="shadow-md">
//                   <CardHeader className="bg-slate-50 border-b">
//                     <CardTitle className="text-lg">
//                       {selectedSection ? (
//                         <div>
//                           <div className="text-sm text-gray-500">Comments on</div>
//                           <div className="font-semibold mt-1 text-gray-800">{selectedSection.title}</div>
//                         </div>
//                       ) : "Comments"}
//                     </CardTitle>
//                   </CardHeader>
//                   <CardContent className="p-4">
//                     {selectedSection ? (
//                       <div className="space-y-4">
//                         <div className="flex items-center justify-between text-xs text-gray-500 mb-2 px-2">
//                           <span>{selectedSection.comments.length} stakeholder comments</span>
//                           <span>Latest feedback</span>
//                         </div>
//                         {selectedSection.comments.map(comment => (
//                           <div key={comment.id} className="border rounded-lg p-4 bg-white">
//                             <div className="flex items-center justify-between mb-3">
//                               <div className="flex items-center gap-3">
//                                 <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center font-semibold text-slate-600">
//                                   {comment.user.charAt(0)}
//                                 </div>
//                                 <div>
//                                   <span className="font-semibold text-sm">{comment.user}</span>
//                                   {/* --- 4. JSX UPDATED to use new data structure --- */}
//                                   <Badge variant="outline" className={`ml-2 text-xs ${getStakeholderColor(comment.stakeholder.subType)}`}>
//                                     {comment.stakeholder.mainType} ({comment.stakeholder.subType})
//                                   </Badge>
//                                 </div>
//                               </div>
//                               <span className="text-xs text-gray-500">{comment.timestamp}</span>
//                             </div>
//                             <p className="text-gray-700 leading-relaxed text-sm">{comment.comment}</p>
//                           </div>
//                         ))}
//                       </div>
//                     ) : (
//                       <div className="text-center py-16">
//                         <p className="text-gray-500">Select a section to see comments.</p>
//                       </div>
//                     )}
//                   </CardContent>
//                 </Card>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DraftViewer;



import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";
import { TrendingUp } from "lucide-react";

// --- 1. DATA STRUCTURE ---
interface Comment {
  id: string;
  user: string;
  stakeholder: {
    mainType: 'Individual' | 'Organization';
    subType: string;
  };
  comment: string;
  timestamp: string;
}

interface Section {
  id: string;
  title: string;
  content: string;
  comments: Comment[];
}

interface Draft {
  id: string;
  title: string;
  sections: Section[];
}

// --- 2. MOCK DATA ---
const mockDrafts: Draft[] = [
  {
    id: "1",
    title: "Environmental Policy Draft 2024",
    sections: [
      {
        id: "s1",
        title: "2.1 Environmental Regulatory Changes",
        content:
          "This section details proposed changes to environmental regulations, focusing on stricter emissions standards for industrial activities. It introduces new reporting requirements and a carbon pricing mechanism to encourage the adoption of cleaner technologies.",
        comments: [
          { id: "c1", user: "Global Petrochem Inc.", stakeholder: { mainType: 'Organization', subType: 'Extractive Industries' }, comment: "The new carbon pricing will disproportionately affect our sector. We propose a longer phase-in period.", timestamp: "2024-01-15 10:30" },
          { id: "c2", user: "Dr. Alisha Khan", stakeholder: { mainType: 'Individual', subType: 'Professional' }, comment: "These regulatory changes are aligned with international climate agreements and are a necessary step.", timestamp: "2024-01-15 14:22" },
          { id: "c3", user: "Ben Carter", stakeholder: { mainType: 'Individual', subType: 'Student' }, comment: "As a student of environmental science, I fully support these stricter standards. It's about our future.", timestamp: "2024-01-15 16:05" },
          { id: "c4", user: "EarthWatch Alliance", stakeholder: { mainType: 'Organization', subType: 'NGO' }, comment: "The changes are good, but enforcement needs to be a top priority from day one.", timestamp: "2024-01-15 18:20" },
          { id: "c5", user: "Sandra Lee", stakeholder: { mainType: 'Individual', subType: 'Businessperson' }, comment: "What financial support will be available for small businesses to adapt to these new regulations?", timestamp: "2024-01-16 09:00" },
        ]
      },
      {
        id: "s2",
        title: "2.2 Current Policy Amendments",
        content:
          "This part of the draft proposes amendments to the existing Clean Air and Water Acts. The key changes include lowering the permissible limits for several pollutants and expanding the list of protected water bodies.",
        comments: [
          { id: "c6", user: "Steel Manufacturing Co.", stakeholder: { mainType: 'Organization', subType: 'Manufacturing' }, comment: "Lowering pollutant limits without providing financial aid for equipment upgrades is not feasible. This will impact production costs.", timestamp: "2024-01-16 14:15" },
          { id: "c7", user: "Nature's Voice", stakeholder: { mainType: 'Organization', subType: 'NGO' }, comment: "We strongly support the expansion of protected water bodies. This is a critical move to preserve biodiversity.", timestamp: "2024-01-17 08:30" },
          { id: "c8", user: "Mark Reynolds", stakeholder: { mainType: 'Individual', subType: 'Professional' }, comment: "The legal language in these amendments needs to be tightened to close potential loopholes.", timestamp: "2024-01-17 11:00" },
          { id: "c9", user: "Green Finance Corp.", stakeholder: { mainType: 'Organization', subType: 'Service Economy' }, comment: "These amendments will create new investment opportunities in water purification and air quality monitoring technologies.", timestamp: "2024-01-17 13:45" },
          { id: "c10", user: "Chloe Davis", stakeholder: { mainType: 'Individual', subType: 'Student' }, comment: "It's great to see wetlands being included. They are so important for local ecosystems.", timestamp: "2024-01-17 15:20" },
        ]
      },
      {
        id: "s3",
        title: "2.3 Implementation Guidelines",
        content:
          "These guidelines provide a step-by-step roadmap for public and private entities to comply with the new policies. It includes timelines, details on support programs, and establishes a multi-stakeholder oversight committee.",
        comments: [
          { id: "c11", user: "Finance & Banking Group", stakeholder: { mainType: 'Organization', subType: 'Service Economy' }, comment: "The guidelines for 'green financing' are vague. We need more clarity on risk assessment and ROI for these projects.", timestamp: "2024-01-18 09:30" },
          { id: "c12", user: "David Chen", stakeholder: { mainType: 'Individual', subType: 'Businessperson' }, comment: "The compliance roadmap is overwhelming for small businesses. We need simplified guidelines.", timestamp: "2024-01-18 11:45" },
          { id: "c13", user: "Auto Parts Ltd.", stakeholder: { mainType: 'Organization', subType: 'Manufacturing' }, comment: "A 24-month timeline for implementation is too short for our supply chain to adapt without significant disruption.", timestamp: "2024-01-18 14:00" },
          { id: "c14", user: "Dr. Ian Holloway", stakeholder: { mainType: 'Individual', subType: 'Professional' }, comment: "The oversight committee must have representation from the scientific community to be credible.", timestamp: "2024-01-18 16:30" },
          { id: "c15", user: "Policy Action Network", stakeholder: { mainType: 'Organization', subType: 'NGO' }, comment: "The guidelines look solid, but we are concerned about potential delays. What are the contingency plans?", timestamp: "2024-01-19 10:00" },
        ]
      },
      {
        id: "s4",
        title: "2.4 Monitoring and Compliance Measures",
        content:
          "This final section establishes a new independent body for monitoring environmental compliance, outlining the use of new technologies for data collection and mandating public disclosure of compliance data.",
        comments: [
          { id: "c16", user: "Laura Evans", stakeholder: { mainType: 'Individual', subType: 'Student' }, comment: "Public disclosure of data is the most important part! This will empower citizens to hold polluters accountable.", timestamp: "2024-01-19 15:30" },
          { id: "c17", user: "National Farmers Union", stakeholder: { mainType: 'Organization', subType: 'Organization' }, comment: "Who pays for the installation and maintenance of these sensors on agricultural land? This seems like an unfunded mandate.", timestamp: "2024-01-20 10:45" },
          { id: "c18", user: "Data Analytics Solutions", stakeholder: { mainType: 'Organization', subType: 'Service Economy' }, comment: "We support the use of technology for monitoring and can offer our platform to help visualize the compliance data for the public.", timestamp: "2024-01-20 12:15" },
          { id: "c19", user: "Frank Miller", stakeholder: { mainType: 'Individual', subType: 'Businessperson' }, comment: "This new monitoring body must be truly independent and free from political or corporate influence.", timestamp: "2024-01-20 14:00" },
          { id: "c20", user: "Eleanor Vance, Esq.", stakeholder: { mainType: 'Individual', subType: 'Professional' }, comment: "The legal framework for this new body's authority needs to be clearly defined to withstand legal challenges.", timestamp: "2024-01-20 16:50" },
        ]
      }
    ]
  }
];

// --- 3. DRAFT VIEWER COMPONENT ---
const DraftViewer = () => {
  const [selectedDraft, setSelectedDraft] = useState<Draft | null>(mockDrafts[0]);
  const [selectedSection, setSelectedSection] = useState<Section | null>(mockDrafts[0]?.sections[0] || null);
  const navigate = useNavigate();

  const handleDraftSelect = (draftId: string) => {
    const draft = mockDrafts.find(d => d.id === draftId);
    setSelectedDraft(draft || null);
    setSelectedSection(draft?.sections[0] || null);
  };

  const handleSectionSelect = (section: Section) => setSelectedSection(section);
  const handleAnalyze = () => navigate("/dashboard");

  const getStakeholderColor = (subType: string) => {
    switch (subType) {
      case "NGO": return "bg-green-100 text-green-800";
      case "Extractive Industries": return "bg-gray-100 text-gray-800";
      case "Manufacturing": return "bg-red-100 text-red-800";
      case "Service Economy": return "bg-blue-100 text-blue-800";
      case "Professional": return "bg-purple-100 text-purple-800";
      case "Businessperson": return "bg-indigo-100 text-indigo-800";
      case "Student": return "bg-pink-100 text-pink-800";
      case "Organization": return "bg-yellow-100 text-yellow-800";
      default: return "bg-slate-100 text-slate-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="border-b bg-blue-900 shadow-sm">
        <div className="max-w-screen-2xl mx-auto px-6 py-4">
          <h1 className="text-4xl font-bold text-white mb-3 flex items-center gap-3">
  <FileText className="w-10 h-10 text-white" />
  Draft Review System
</h1>
          <div className="max-w-md">
            <Select defaultValue={selectedDraft?.id} onValueChange={handleDraftSelect}>
              <SelectTrigger className="h-11 text-base">
                <SelectValue placeholder="Select a draft" />
              </SelectTrigger>
              <SelectContent>
                {mockDrafts.map(draft => (
                  <SelectItem key={draft.id} value={draft.id} className="text-base py-2">
                    {draft.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      {selectedDraft && (
        <div className="max-w-screen-2xl mx-auto p-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

            {/* Left Pane: Sections + Analyze */}
            <div className="lg:col-span-5 space-y-6">
              <Card className="shadow-lg hover:shadow-xl transition-shadow rounded-xl overflow-hidden">
                <CardHeader className="bg-blue-50 border-b">
                  <CardTitle className="text-xl text-gray-900">{selectedDraft.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-2">
                  {selectedDraft.sections.map(section => (
                    <button
                      key={section.id}
                      onClick={() => handleSectionSelect(section)}
                      className={`w-full text-left p-4 rounded-lg transition-all duration-200 
                        ${selectedSection?.id === section.id ? "bg-gradient-to-r from-blue-50 to-blue-100 shadow-md" : "hover:bg-gray-100"}
                      `}
                    >
                      <div className="flex justify-between items-center">
                        <div className="font-semibold text-gray-800">{section.title}</div>
                        <Badge variant="secondary" className="text-xs">{section.comments.length} comments</Badge>
                      </div>
                      {selectedSection?.id === section.id && (
                        <p className="text-sm text-gray-600 mt-2">{section.content}</p>
                      )}
                    </button>
                  ))}
                </CardContent>
              </Card>

              {/* Analyze Card */}
              <Card className="bg-blue-300 text-center shadow-lg rounded-xl hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-blue-900 text-2xl mb-2">Ready for Analysis?</h3>
                  <p className="text-gray-700 mb-4 text-lg">Analyze all comments and feedback for this draft.</p>
                 <Button
  onClick={handleAnalyze}
  size="lg"
  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-lg font-semibold rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
> <TrendingUp className="w-5 h-5 text-white" />
  Analyze Complete Draft
</Button>

                </CardContent>
              </Card>
            </div>

            {/* Right Pane: Comments */}
            <div className="lg:col-span-7">
              <div className="lg:sticky lg:top-8">
                <Card className="shadow-lg rounded-xl overflow-hidden">
                  <CardHeader className="bg-gray-50 border-b">
                    <CardTitle className="text-lg text-gray-900">
                      {selectedSection ? (
                        <>
                          <div className="text-lg text-gray-500">Comments on</div>
                          <div className="font-semibold mt-1 text-lg">{selectedSection.title}</div>
                        </>
                      ) : "Comments"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 space-y-4 max-h-[70vh] overflow-y-auto">
                    {selectedSection ? (
                      selectedSection.comments.length ? (
                        selectedSection.comments.map(comment => (
                          <div key={comment.id} className="border rounded-lg p-4 bg-white shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex items-center justify-between mb-3">
                              <div className="flex items-center gap-3">
                                <div className={`w-9 h-9 rounded-full flex items-center justify-center font-semibold text-black ${getStakeholderColor(comment.stakeholder.subType).split(' ')[0]}`}>
                                  {comment.user.charAt(0)}
                                </div>
                                <div>
                                  <span className="font-semibold text-base">{comment.user}</span>
                                  <Badge variant="outline" className={`ml-2 text-sm ${getStakeholderColor(comment.stakeholder.subType)}`}>
                                    {comment.stakeholder.mainType} ({comment.stakeholder.subType})
                                  </Badge>
                                </div>
                              </div>
                              <span className="text-xs text-gray-500">{comment.timestamp}</span>
                            </div>
                            <p className="text-gray-900 leading-relaxed text-base">{comment.comment}</p>
                          </div>
                        ))
                      ) : (
                        <div className="text-center py-16 text-gray-400">No comments available for this section.</div>
                      )
                    ) : (
                      <div className="text-center py-16 text-gray-400">Select a section to see comments.</div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};

export default DraftViewer;
