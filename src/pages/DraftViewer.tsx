import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface Comment {
  id: string;
  user: string;
  stakeholderType: string;
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

const mockDrafts: Draft[] = [
  {
    id: "1",
    title: "Environmental Policy Draft 2024",
    sections: [
      {
        id: "s1",
        title: "2.1 Policy Objectives and Scope",
        content: "This section outlines the primary objectives of the environmental policy framework, including the establishment of comprehensive guidelines for sustainable development, carbon emission reduction targets of 40% by 2030, and the implementation of green technology incentives across all industrial sectors. The policy aims to balance environmental protection with economic growth through innovative regulatory mechanisms.",
        comments: [
          {
            id: "c1",
            user: "John Smith",
            stakeholderType: "NGO",
            comment: "The 40% carbon reduction target is ambitious but necessary. We recommend including specific milestones for tracking progress and interim assessments.",
            timestamp: "2024-01-15 10:30"
          },
          {
            id: "c2",
            user: "Maria Garcia",
            stakeholderType: "Industry Representative",
            comment: "While we support environmental goals, the timeline may be too aggressive for small and medium enterprises. Consider phased implementation based on company size.",
            timestamp: "2024-01-15 14:22"
          },
          {
            id: "c3",
            user: "Dr. Robert Chen",
            stakeholderType: "Academic",
            comment: "The policy framework aligns well with international best practices. However, more emphasis should be placed on research and development incentives for clean technology.",
            timestamp: "2024-01-15 16:45"
          },
          {
            id: "c4",
            user: "Sarah Williams",
            stakeholderType: "Citizen",
            comment: "As a concerned parent, I fully support these measures. The future of our children depends on bold action today. Please ensure adequate funding for implementation.",
            timestamp: "2024-01-16 09:20"
          },
          {
            id: "c5",
            user: "Michael Thompson",
            stakeholderType: "Government Official",
            comment: "The objectives are well-defined, but we need clearer coordination mechanisms between federal and state agencies to ensure effective implementation.",
            timestamp: "2024-01-16 11:30"
          }
        ]
      },
      {
        id: "s2",
        title: "2.2 Regulatory Framework and Compliance",
        content: "The regulatory framework establishes a three-tier compliance system with mandatory environmental impact assessments, regular monitoring protocols, and penalty structures for non-compliance. Companies will be required to submit annual sustainability reports and undergo third-party environmental audits. The framework includes provisions for technology transfer programs and green financing mechanisms to support transition efforts.",
        comments: [
          {
            id: "c6",
            user: "Dr. Emily Rodriguez",
            stakeholderType: "Academic",
            comment: "The three-tier system is comprehensive, but the enforcement mechanisms need strengthening. Consider establishing an independent environmental compliance authority.",
            timestamp: "2024-01-16 14:15"
          },
          {
            id: "c7",
            user: "James Patterson",
            stakeholderType: "Industry Representative",
            comment: "The compliance costs could be prohibitive for smaller companies. We suggest a sliding scale for penalties and more generous transition periods for SMEs.",
            timestamp: "2024-01-16 15:45"
          },
          {
            id: "c8",
            user: "Lisa Anderson",
            stakeholderType: "NGO",
            comment: "Strong enforcement is crucial for credibility. We recommend public disclosure of compliance records and citizen participation in monitoring processes.",
            timestamp: "2024-01-17 08:30"
          },
          {
            id: "c9",
            user: "David Kumar",
            stakeholderType: "Citizen",
            comment: "The framework sounds good on paper, but how will you ensure companies actually comply? We need real penalties that hurt, not just slaps on the wrist.",
            timestamp: "2024-01-17 10:15"
          },
          {
            id: "c10",
            user: "Rachel Green",
            stakeholderType: "Government Official",
            comment: "The regulatory framework is sound, but we need better integration with existing environmental laws to avoid regulatory overlap and confusion.",
            timestamp: "2024-01-17 13:20"
          }
        ]
      },
      {
        id: "s3",
        title: "2.3 Implementation Timeline and Milestones",
        content: "Implementation will occur in three phases over 36 months: Phase 1 (Months 1-12) focuses on regulatory setup and stakeholder engagement; Phase 2 (Months 13-24) implements core compliance requirements and monitoring systems; Phase 3 (Months 25-36) involves full system deployment and performance evaluation. Each phase includes specific deliverables, success metrics, and review checkpoints.",
        comments: [
          {
            id: "c11",
            user: "Alex Johnson",
            stakeholderType: "Government Official",
            comment: "The 36-month timeline is more realistic than the original proposal, but we need contingency planning for potential delays in regulatory approvals.",
            timestamp: "2024-01-17 16:45"
          },
          {
            id: "c12",
            user: "Jennifer Lee",
            stakeholderType: "Industry Representative",
            comment: "Phase 1 should include more extensive consultation with industry stakeholders. Twelve months may not be sufficient for proper engagement and feedback incorporation.",
            timestamp: "2024-01-18 09:30"
          },
          {
            id: "c13",
            user: "Dr. Mark Stevens",
            stakeholderType: "Academic",
            comment: "The phased approach is methodical, but consider pilot programs in select regions during Phase 1 to identify potential implementation challenges early.",
            timestamp: "2024-01-18 11:45"
          },
          {
            id: "c14",
            user: "Anna Martinez",
            stakeholderType: "NGO",
            comment: "We appreciate the structured timeline, but urge faster implementation for critical environmental measures. Climate change won't wait for our bureaucracy.",
            timestamp: "2024-01-18 14:20"
          },
          {
            id: "c15",
            user: "Tom Wilson",
            stakeholderType: "Citizen",
            comment: "Three years seems like a long time when we're already seeing the effects of climate change. Can some measures be fast-tracked?",
            timestamp: "2024-01-18 16:10"
          }
        ]
      }
    ]
  },
  {
    id: "2",
    title: "Healthcare Reform Bill 2024",
    sections: [
      {
        id: "s4",
        title: "2.1 Universal Healthcare Coverage Framework",
        content: "This section establishes the foundation for universal healthcare coverage, including eligibility criteria, benefit packages, and service delivery models. The framework ensures comprehensive coverage for preventive care, emergency services, specialized treatments, and mental health services. It also outlines the integration of public and private healthcare providers within a unified system.",
        comments: [
          {
            id: "c16",
            user: "Dr. Patricia Williams",
            stakeholderType: "Healthcare Provider",
            comment: "Universal coverage is essential, but the current provider shortage could create significant bottlenecks. We need substantial investment in medical education and training programs.",
            timestamp: "2024-01-19 11:20"
          },
          {
            id: "c17",
            user: "Robert Johnson",
            stakeholderType: "Insurance Representative",
            comment: "The transition from private insurance to universal coverage needs careful management to avoid market disruption and ensure continuity of care for current beneficiaries.",
            timestamp: "2024-01-19 13:45"
          },
          {
            id: "c18",
            user: "Maria Santos",
            stakeholderType: "Patient Advocate",
            comment: "Finally, a system that puts patients first! However, we need strong protections against discrimination and ensure equal access regardless of pre-existing conditions.",
            timestamp: "2024-01-19 15:30"
          },
          {
            id: "c19",
            user: "Dr. James Mitchell",
            stakeholderType: "Academic",
            comment: "The framework is comprehensive, but cost containment mechanisms need more detail. How will we prevent the system from becoming financially unsustainable?",
            timestamp: "2024-01-20 08:15"
          },
          {
            id: "c20",
            user: "Karen Thompson",
            stakeholderType: "Citizen",
            comment: "As someone who has struggled with medical bills, this gives me hope. But please ensure the system is actually accessible and not just theoretically universal.",
            timestamp: "2024-01-20 10:45"
          }
        ]
      }
    ]
  }
];

const DraftViewer = () => {
  const [selectedDraft, setSelectedDraft] = useState<Draft | null>(null);
  const [selectedSection, setSelectedSection] = useState<Section | null>(null);
  const navigate = useNavigate();

  const handleDraftSelect = (draftId: string) => {
    const draft = mockDrafts.find(d => d.id === draftId);
    setSelectedDraft(draft || null);
    setSelectedSection(draft?.sections[0] || null);
  };

  const handleSectionSelect = (section: Section) => {
    setSelectedSection(section);
  };

  const handleAnalyze = () => {
    navigate("/dashboard");
  };

  const getStakeholderColor = (type: string) => {
    switch (type) {
      case "NGO": return "bg-green-100 text-green-800";
      case "Industry Representative": return "bg-blue-100 text-blue-800";
      case "Academic": return "bg-purple-100 text-purple-800";
      case "Government Official": return "bg-orange-100 text-orange-800";
      case "Healthcare Provider": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="max-w-7xl mx-auto p-6">
          <h1 className="text-3xl font-bold text-foreground mb-4">Draft Review System</h1>
          <div className="max-w-md">
            <Select onValueChange={handleDraftSelect}>
              <SelectTrigger className="h-12 text-base">
                <SelectValue placeholder="Select a draft to review" />
              </SelectTrigger>
              <SelectContent>
                {mockDrafts.map(draft => (
                  <SelectItem key={draft.id} value={draft.id} className="text-base py-3">
                    {draft.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {selectedDraft && (
        <div className="max-w-7xl mx-auto p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Draft Content */}
            <div className="space-y-6">
              <Card className="shadow-lg border-2">
                <CardHeader className="bg-primary/5 border-b">
                  <CardTitle className="text-2xl text-primary">{selectedDraft.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {selectedDraft.sections.map(section => (
                      <div key={section.id} className="border-l-4 border-l-primary/20 pl-4">
                        <Button
                          variant={selectedSection?.id === section.id ? "default" : "outline"}
                          className="w-full justify-start mb-4 h-auto py-3 px-4 text-left"
                          onClick={() => handleSectionSelect(section)}
                        >
                          <div className="text-left">
                            <div className="font-semibold text-base">{section.title}</div>
                            <div className="text-sm text-muted-foreground mt-1">
                              {section.comments.length} comments
                            </div>
                          </div>
                        </Button>
                        
                        {selectedSection?.id === section.id && (
                          <div className="mt-4 p-6 bg-muted/50 rounded-lg border-2 border-primary/20">
                            <h3 className="font-bold text-lg mb-4 text-primary">{section.title}</h3>
                            <p className="text-foreground leading-relaxed text-base">{section.content}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Analyze Button at bottom of draft */}
              <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-lg mb-2">Ready for Analysis?</h3>
                  <p className="text-muted-foreground mb-4">
                    Analyze all comments and feedback for this draft
                  </p>
                  <Button 
                    onClick={handleAnalyze}
                    size="lg"
                    className="px-8 py-3 text-base font-semibold"
                  >
                    Analyze Complete Draft
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Right Side - Comments */}
            <div className="lg:sticky lg:top-6 lg:h-fit">
              <Card className="shadow-lg border-2 min-h-[600px]">
                <CardHeader className="bg-secondary/5 border-b">
                  <CardTitle className="text-xl">
                    {selectedSection ? (
                      <div>
                        <div className="text-secondary text-black">Comments on</div>
                        <div className="text-lg font-normal mt-1">{selectedSection.title}</div>
                      </div>
                    ) : (
                      "Section Comments"
                    )}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  {selectedSection ? (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
                        <span>{selectedSection.comments.length} stakeholder comments</span>
                        <span>Latest feedback</span>
                      </div>
                      
                      {selectedSection.comments.map(comment => (
                        <div key={comment.id} className="border-2 rounded-lg p-4 hover:shadow-md transition-shadow bg-card">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-semibold text-primary">
                                {comment.user.charAt(0)}
                              </div>
                              <div>
                                <span className="font-semibold text-base">{comment.user}</span>
                                <Badge className={`ml-2 ${getStakeholderColor(comment.stakeholderType)}`}>
                                  {comment.stakeholderType}
                                </Badge>
                              </div>
                            </div>
                            <span className="text-sm text-muted-foreground">{comment.timestamp}</span>
                          </div>
                          <p className="text-foreground leading-relaxed">{comment.comment}</p>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-4">
                        <span className="text-2xl">💬</span>
                      </div>
                      <h3 className="font-semibold text-lg mb-2">Select a Section</h3>
                      <p className="text-muted-foreground">
                        Choose a section from the draft to view stakeholder comments and feedback
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DraftViewer;