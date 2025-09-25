import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, TrendingUp } from "lucide-react";

// Data structures
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

// Mock data
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
  },
  {
    id: "2",
    title: "Indian Multi-Disciplinary Partnership (MDP) Firms Consultation 2025",
    sections: [
      {
        id: "m1",
        title: "1. Introduction",
        content: "The Government of India invites public comments to enable the growth of large Indian firms capable of competing globally by facilitating establishment of Indian Multi-Disciplinary Partnership (MDP) firms.",
        comments: [
          { id: "m1c1", user: "Strategic Advisory Council", stakeholder: { mainType: 'Organization', subType: 'Service Economy' }, comment: "MDPs can unlock end-to-end advisory capabilities within India, reducing dependency on multinational consultancies.", timestamp: "2025-09-17 10:10" },
          { id: "m1c2", user: "Asha Verma", stakeholder: { mainType: 'Individual', subType: 'Professional' }, comment: "This initiative can help retain Indian talent that currently migrates to global firms.", timestamp: "2025-09-17 11:05" },
          { id: "m1c3", user: "Policy Action Network", stakeholder: { mainType: 'Organization', subType: 'NGO' }, comment: "MDPs should incorporate strong ethical safeguards and transparent governance standards from inception.", timestamp: "2025-09-17 12:20" },
          { id: "m1c4", user: "Rajiv Gupta", stakeholder: { mainType: 'Individual', subType: 'Businessperson' }, comment: "Unified service offerings under MDPs will be valuable for SMEs seeking affordable, integrated advice.", timestamp: "2025-09-17 13:10" },
          { id: "m1c5", user: "Auto Parts Ltd.", stakeholder: { mainType: 'Organization', subType: 'Manufacturing' }, comment: "We support the idea, provided there are clear conflict-of-interest rules for audit and advisory separation.", timestamp: "2025-09-17 14:00" }
        ]
      },
      {
        id: "m2",
        title: "2. Current Asymmetry in India’s Professional Services Landscape",
        content: "International firms leverage integrated services, global networks, strong brands, partnership structures, and deep tech alliances—advantages not widely available to Indian firms today.",
        comments: [
          { id: "m2c1", user: "National Industry Forum", stakeholder: { mainType: 'Organization', subType: 'Service Economy' }, comment: "Global networks create scale advantages that Indian firms cannot currently match.", timestamp: "2025-09-17 15:25" },
          { id: "m2c2", user: "GreenEarth Foundation", stakeholder: { mainType: 'Organization', subType: 'NGO' }, comment: "Brand trust is indeed a multiplier—Indian firms need marketing freedom to build reputation responsibly.", timestamp: "2025-09-17 15:45" },
          { id: "m2c3", user: "Priya Nair", stakeholder: { mainType: 'Individual', subType: 'Professional' }, comment: "Partnership tracks at global firms retain talent. Indian firms should adopt similar career pathways.", timestamp: "2025-09-17 16:05" },
          { id: "m2c4", user: "Data Analytics Solutions", stakeholder: { mainType: 'Organization', subType: 'Service Economy' }, comment: "Proprietary platforms combined with alliances drive delivery quality and efficiency.", timestamp: "2025-09-17 16:30" },
          { id: "m2c5", user: "Steel Manufacturing Co.", stakeholder: { mainType: 'Organization', subType: 'Manufacturing' }, comment: "Consistency across geographies is a key differentiator of global networks that clients value.", timestamp: "2025-09-17 17:05" }
        ]
      },
      {
        id: "m3",
        title: "3. Steps Taken So Far by the Government",
        content: "Measures include RBI joint audits and assignment caps, and ICAI steps to encourage consolidation and larger Indian audit firms.",
        comments: [
          { id: "m3c1", user: "Banking Association of India", stakeholder: { mainType: 'Organization', subType: 'Service Economy' }, comment: "RBI’s joint audits promote diversification. Extend similar policies to large NBFCs and insurers.", timestamp: "2025-09-17 17:40" },
          { id: "m3c2", user: "Meera Shah", stakeholder: { mainType: 'Individual', subType: 'Professional' }, comment: "ICAI’s consolidation push is welcome; mentorship for mid-sized firms will accelerate readiness for MDPs.", timestamp: "2025-09-17 18:00" },
          { id: "m3c3", user: "National MSME Council", stakeholder: { mainType: 'Organization', subType: 'Organization' }, comment: "Government procurement should explicitly recognize capable Indian firms to build experience credentials.", timestamp: "2025-09-17 18:25" },
          { id: "m3c4", user: "Arun Kumar", stakeholder: { mainType: 'Individual', subType: 'Businessperson' }, comment: "Clearer compliance pathways for new MDP structures will reduce regulatory uncertainty.", timestamp: "2025-09-17 18:50" },
          { id: "m3c5", user: "TechLaw Collective", stakeholder: { mainType: 'Organization', subType: 'NGO' }, comment: "Safeguards for audit-advisory independence should be codified to avoid conflicts.", timestamp: "2025-09-17 19:15" }
        ]
      },
      {
        id: "m4",
        title: "4. Issues to Address for Growing Indian MDP Firms",
        content: "Key issues: advertising and brand-building restrictions, limits on multidisciplinary partnerships, fragmented licensing, procurement barriers, and lack of global collaboration platforms.",
        comments: [
          { id: "m4c1", user: "Policy Innovation Lab", stakeholder: { mainType: 'Organization', subType: 'NGO' }, comment: "Differentiate between brand-building and solicitation to allow ethical visibility for Indian firms.", timestamp: "2025-09-17 19:35" },
          { id: "m4c2", user: "Vikram Patel", stakeholder: { mainType: 'Individual', subType: 'Professional' }, comment: "Allow MDPs to include MBAs, IT, insolvency experts with clear practice boundaries and accountability.", timestamp: "2025-09-17 19:50" },
          { id: "m4c3", user: "Global Agro Union", stakeholder: { mainType: 'Organization', subType: 'Organization' }, comment: "Procurement criteria should weigh individual expertise and not only firm-level global credentials.", timestamp: "2025-09-17 20:05" },
          { id: "m4c4", user: "Start-up Founders Guild", stakeholder: { mainType: 'Organization', subType: 'Service Economy' }, comment: "Create domestic and cross-border knowledge-sharing alliances to strengthen delivery capacity.", timestamp: "2025-09-17 20:25" },
          { id: "m4c5", user: "Ananya Bose", stakeholder: { mainType: 'Individual', subType: 'Student' }, comment: "Leadership academies and global mobility programs will help cultivate next-gen Indian partners.", timestamp: "2025-09-17 20:40" }
        ]
      }
    ]
  }
];

// Component
const DraftViewer = () => {
  const [selectedDraft, setSelectedDraft] = useState<Draft | null>(mockDrafts[0]);
  const [selectedSection, setSelectedSection] = useState<Section | null>(mockDrafts[0]?.sections[0] || null);
  const navigate = useNavigate();

  const handleDraftSelect = (draftId: string) => {
    const draft = mockDrafts.find(d => d.id === draftId);
    setSelectedDraft(draft || null);
    setSelectedSection(draft?.sections[0] || null);
    try {
      if (draft) {
        localStorage.setItem('selectedDraftId', draft.id);
        localStorage.setItem('selectedDraftTitle', draft.title);
      }
    } catch {}
  };

  const handleSectionSelect = (section: Section) => setSelectedSection(section);
  const handleAnalyze = () => {
    try {
      if (selectedDraft) {
        localStorage.setItem('selectedDraftId', selectedDraft.id);
        localStorage.setItem('selectedDraftTitle', selectedDraft.title);
      }
    } catch {}
    navigate("/dashboard");
  };

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

      {selectedDraft && (
        <div className="max-w-screen-2xl mx-auto p-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
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
                        <Badge variant="secondary" className="text-xs">{100 + (Array.from(section.id).reduce((s,c)=>s + c.charCodeAt(0),0) % 101)} comments</Badge>
                      </div>
                      {selectedSection?.id === section.id && (
                        <p className="text-sm text-gray-600 mt-2">{section.content}</p>
                      )}
                    </button>
                  ))}
                </CardContent>
              </Card>

              <Card className="bg-blue-300 text-center shadow-lg rounded-xl hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <h3 className="font-bold text-blue-900 text-2xl mb-2">Ready for Analysis?</h3>
                  <p className="text-gray-700 mb-4 text-lg">Analyze all comments and feedback for this draft.</p>
                  <Button
                    onClick={handleAnalyze}
                    size="lg"
                    className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-lg font-semibold rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
                  >
                    <TrendingUp className="w-5 h-5 text-white" />
                    Analyze Complete Draft
                  </Button>
                </CardContent>
              </Card>
            </div>

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
