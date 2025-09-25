export const mdpSectionSummaries = {
  "1": {
    title: "1. Introduction",
    keyFindings: [
      "MDPs can reduce dependency on multinational firms via integrated Indian advisory",
      "Talent retention improves with clear partnership tracks and mobility programs",
      "Ethical safeguards and conflict-of-interest separation are essential",
      "SMEs benefit from unified service offerings"
    ],
    positiveHighlights: "Broad support for creating Indian MDP champions with strong governance.",
    areasOfConcern: "Need clear independence norms and phased enablement for SMEs",
    sentimentDistribution: { positive: 48, negative: 22, neutral: 30 },
    stakeholderDistribution: {
      businessperson: 18,
      student: 6,
      professional: 20,
      extractiveIndustries: 10,
      manufacturing: 18,
      serviceEconomy: 28
    },
    totalComments: 145
  },
  "2": {
    title: "2. Current Asymmetry in India’s Professional Services Landscape",
    keyFindings: [
      "Global networks drive scale, consistency, and delivery quality",
      "Brand trust acts as a multiplier; ethical brand-building needed",
      "Partnership structures improve accountability and retention",
      "Deep tech alliances and proprietary platforms provide an edge"
    ],
    positiveHighlights: "Stakeholders support brand-building and alliances under ethical norms.",
    areasOfConcern: "Indian firms lack global collaboration platforms and consistent delivery systems",
    sentimentDistribution: { positive: 36, negative: 38, neutral: 26 },
    stakeholderDistribution: {
      businessperson: 14,
      student: 4,
      professional: 24,
      extractiveIndustries: 22,
      manufacturing: 20,
      serviceEconomy: 16
    },
    totalComments: 132
  },
  "3": {
    title: "3. Steps Taken So Far by the Government",
    keyFindings: [
      "RBI joint audits and assignment caps diversified opportunities",
      "ICAI consolidation encourages larger Indian firms",
      "Public procurement should recognize individual expert credentials",
      "Clarity needed for new MDP compliance pathways"
    ],
    positiveHighlights: "Consensus on continuing RBI/ICAI reforms and enabling MDP growth",
    areasOfConcern: "Procurement criteria and regulatory clarity require improvement",
    sentimentDistribution: { positive: 44, negative: 24, neutral: 32 },
    stakeholderDistribution: {
      businessperson: 16,
      student: 5,
      professional: 21,
      extractiveIndustries: 16,
      manufacturing: 20,
      serviceEconomy: 22
    },
    totalComments: 158
  },
  "4": {
    title: "4. Issues to Address for Growing Indian MDP Firms",
    keyFindings: [
      "Differentiate brand-building from solicitation to allow ethical visibility",
      "Expand MDP eligibility (MBAs, IT, insolvency experts) with safeguards",
      "Harmonize fragmented licensing and empower cross-border alliances",
      "Procurement to weigh individual expertise, not just firm-level globals"
    ],
    positiveHighlights: "High support for calibrated deregulation and collaboration platforms.",
    areasOfConcern: "Conflicts of interest and oversight must be tightly managed",
    sentimentDistribution: { positive: 40, negative: 34, neutral: 26 },
    stakeholderDistribution: {
      businessperson: 20,
      student: 7,
      professional: 23,
      extractiveIndustries: 18,
      manufacturing: 18,
      serviceEconomy: 14
    },
    totalComments: 169
  }
};

export const mdpComments = [
  {
    id: "mdp1",
    content: "MDPs can unlock end-to-end advisory capabilities within India, reducing dependency on multinationals.",
    summary: "Supports Indian MDP champions",
    sentiment: "positive" as const,
    theme: "Capability Building",
    stakeholderType: "Corporate",
    submitterName: "Strategic Advisory Council",
    organization: "SAC India",
    timestamp: "2025-09-17T10:10:00Z",
    clauseMapping: ["1"]
  },
  {
    id: "mdp2",
    content: "Differentiate brand-building from solicitation; allow ethical marketing for Indian firms.",
    summary: "Support ethical brand-building",
    sentiment: "positive" as const,
    theme: "Brand & Ethics",
    stakeholderType: "NGO",
    submitterName: "GreenEarth Foundation",
    organization: "GreenEarth",
    timestamp: "2025-09-17T15:45:00Z",
    clauseMapping: ["2"]
  }
];

export const mdpSentimentKeywords = [
  { word: "MDP", positiveCount: 30, negativeCount: 10 },
  { word: "branding", positiveCount: 22, negativeCount: 12 },
  { word: "licensing", positiveCount: 12, negativeCount: 25 },
  { word: "procurement", positiveCount: 10, negativeCount: 28 },
  { word: "alliances", positiveCount: 26, negativeCount: 8 },
  { word: "technology", positiveCount: 24, negativeCount: 9 },
  { word: "platforms", positiveCount: 18, negativeCount: 7 },
  { word: "ethics", positiveCount: 20, negativeCount: 14 },
  { word: "conflicts", positiveCount: 6, negativeCount: 22 },
  { word: "independence", positiveCount: 16, negativeCount: 10 },
  { word: "mobility", positiveCount: 12, negativeCount: 5 },
  { word: "talent", positiveCount: 19, negativeCount: 8 },
  { word: "training", positiveCount: 14, negativeCount: 6 },
  { word: "standardization", positiveCount: 13, negativeCount: 9 },
  { word: "quality", positiveCount: 21, negativeCount: 6 },
  { word: "delivery", positiveCount: 15, negativeCount: 7 },
  { word: "transparency", positiveCount: 17, negativeCount: 5 },
  { word: "oversight", positiveCount: 8, negativeCount: 18 },
  { word: "innovation", positiveCount: 23, negativeCount: 7 },
  { word: "governance", positiveCount: 20, negativeCount: 11 },
  { word: "SMEs", positiveCount: 11, negativeCount: 9 }
];

export const mdpStats = {
  stakeholderBreakdown: {
    businessperson: 18,
    student: 7,
    professional: 22,
    extractiveIndustries: 18,
    manufacturing: 19,
    serviceEconomy: 16
  },
  overallSentimentDistribution: {
    positive: 46,
    negative: 28,
    neutral: 26
  }
};

export const mdpClauseMappings = [
  { id: "1", clauseNumber: "1", title: "Introduction" },
  { id: "2", clauseNumber: "2", title: "Current Asymmetry" },
  { id: "3", clauseNumber: "3", title: "Steps Taken So Far" },
  { id: "4", clauseNumber: "4", title: "Issues to Address" }
];
