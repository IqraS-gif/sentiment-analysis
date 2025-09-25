// Mock data for the summary view components

export const mockSectionSummaries = {
  "2.1": {
    title: "Environmental Regulatory Changes",
    keyFindings: [
      "Strong support for stricter emissions standards across all stakeholder groups",
      "Significant concerns about implementation timeline feasibility",
      "High engagement from corporate stakeholders requesting phased approach",
      "NGOs advocate for more aggressive targets"
    ],
    positiveHighlights: "Broad consensus on the need for enhanced environmental protections, with 78% of respondents supporting the overall direction.",
    areasOfConcern: "Implementation timeline concerns from 65% of corporate stakeholders, potential economic impact on small businesses",
    sentimentDistribution: {
      positive: 45,
      negative: 20,
      neutral: 10
    },
    stakeholderDistribution: {
      businessperson: 20,
      student: 8,
      professional: 12,
      extractiveIndustries: 15,
      manufacturing: 20,
      serviceEconomy: 25
    },
    totalComments: 156
  },
  "2.2": {
    title: "Current Policy Amendments",
    keyFindings: [
      "Mixed reactions to proposed changes in regulatory oversight",
      "Strong professional stakeholder engagement on technical specifications",
      "Concerns about clarity in amended language",
      "Support for enhanced transparency measures"
    ],
    positiveHighlights: "Enhanced transparency measures received 82% approval rating, particularly from NGO and individual stakeholders.",
    areasOfConcern: "Regulatory oversight changes face resistance from 58% of corporate respondents citing operational complexity",
    sentimentDistribution: {
      positive: 38,
      negative: 25,
      neutral: 37
    },
    stakeholderDistribution: {
      businessperson: 15,
      student: 3,
      professional: 22,
      extractiveIndustries: 25,
      manufacturing: 20,
      serviceEconomy: 15
    },
    totalComments: 128
  },
  "2.3": {
    title: "Implementation Guidelines",
    keyFindings: [
      "Clear preference for phased implementation approach",
      "Resource allocation concerns from smaller organizations",
      "Strong support for training and capacity building programs",
      "Technical assistance requirements highlighted across sectors"
    ],
    positiveHighlights: "Training programs and technical assistance proposals received overwhelming support (89%) across all stakeholder types.",
    areasOfConcern: "Resource constraints identified by 72% of smaller organizations, timeline concerns for full implementation",
    sentimentDistribution: {
      positive: 52,
      negative: 15,
      neutral: 33
    },
    stakeholderDistribution: {
      businessperson: 12,
      student: 8,
      professional: 20,
      extractiveIndustries: 15,
      manufacturing: 20,
      serviceEconomy: 25
    },
    totalComments: 194
  },
  "2.4": {
    title: "Monitoring and Compliance Measures",
    keyFindings: [
      "High support for robust monitoring frameworks",
      "Concerns about compliance burden and costs",
      "Strong advocacy for transparent reporting mechanisms",
      "Mixed reactions to proposed penalty structures"
    ],
    positiveHighlights: "Transparent reporting mechanisms gained 85% support, with particular enthusiasm from NGO and professional groups.",
    areasOfConcern: "Compliance costs and administrative burden flagged by 69% of corporate stakeholders, penalty structure opposition",
    sentimentDistribution: {
      positive: 42,
      negative: 30,
      neutral: 28
    },
    stakeholderDistribution: {
      businessperson: 10,
      student: 5,
      professional: 15,
      extractiveIndustries: 30,
      manufacturing: 25,
      serviceEconomy: 15
    },
    totalComments: 172
  }
};

export const mockClauseMappings = [
  { id: "1", clauseNumber: "2.1", title: "Environmental Regulatory Changes" },
  { id: "2", clauseNumber: "2.2", title: "Current Policy Amendments" },
  { id: "3", clauseNumber: "2.3", title: "Implementation Guidelines" },
  { id: "4", clauseNumber: "2.4", title: "Monitoring and Compliance Measures" }
];

export const mockComments = [
  {
    id: "c1",
    content: "The proposed emissions standards are necessary but the timeline is too aggressive for our industry to adapt properly.",
    summary: "Supports standards but concerns about timeline",
    sentiment: "suggestive" as const,
    theme: "Environmental Protection",
    stakeholderType: "Corporate",
    submitterName: "John Smith",
    organization: "Manufacturing Alliance",
    timestamp: "2024-01-15T10:30:00Z",
    clauseMapping: ["2.1"]
  },
  {
    id: "c2", 
    content: "We strongly support the enhanced monitoring requirements as they will ensure better compliance across the board.",
    summary: "Strong support for monitoring requirements",
    sentiment: "supportive" as const,
    theme: "Compliance",
    stakeholderType: "NGO",
    submitterName: "Sarah Johnson",
    organization: "Environmental Watch",
    timestamp: "2024-01-16T14:20:00Z",
    clauseMapping: ["2.4"]
  }
];

export const mockSentimentKeywords = [
  { word: "transparency", positiveCount: 45, negativeCount: 3 },
  { word: "timeline", positiveCount: 12, negativeCount: 38 },
  { word: "compliance", positiveCount: 34, negativeCount: 15 },
  { word: "implementation", positiveCount: 28, negativeCount: 22 }
];

export const mockStats = {
  stakeholderBreakdown: {
    businessperson: 15,
    student: 8,
    professional: 17,
    extractiveIndustries: 20,
    manufacturing: 22,
    serviceEconomy: 18
  },
  overallSentimentDistribution: {
    positive: 44,
    negative: 22,
    neutral: 27
  }
};

export const mockThemes = [
  { name: "Environmental Protection", commentCount: 89 },
  { name: "Implementation Timeline", commentCount: 67 },
  { name: "Compliance Requirements", commentCount: 54 },
  { name: "Economic Impact", commentCount: 43 }
];
