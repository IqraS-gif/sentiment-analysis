export interface Comment {
  id: string;
  stakeholderType: 'Corporate' | 'NGO' | 'Professional' | 'Individual';
  content: string;
  sentiment: 'positive' | 'negative' | 'neutral' | 'supportive' | 'critical' | 'suggestive';
  summary: string;
  theme: string;
  clauseMapping: string[];
  timestamp: string;
  submitterName: string;
  organization?: string;
}

export interface ThemeCluster {
  id: string;
  name: string;
  description: string;
  commentCount: number;
  sentimentBreakdown: {
    positive: number;
    negative: number;
    neutral: number;
  };
  keywords: string[];
}

export interface ClauseMapping {
  id: string;
  clauseNumber: string;
  title: string;
  commentCount: number;
  sentimentRatio: {
    supportive: number;
    critical: number;
    suggestive: number;
  };
}

export const mockComments: Comment[] = [
  {
    id: '1',
    stakeholderType: 'Corporate',
    content: 'The proposed regulations on data protection are comprehensive but may create compliance burdens for smaller enterprises. We recommend a phased implementation approach with clear guidelines for SMEs.',
    sentiment: 'suggestive',
    summary: 'Supports regulation but requests phased implementation for SMEs',
    theme: 'Compliance',
    clauseMapping: ['3.1', '3.2', '5.4'],
    timestamp: '2024-01-15T10:30:00Z',
    submitterName: 'Tech Solutions Ltd',
    organization: 'Tech Solutions Ltd'
  },
  {
    id: '2',
    stakeholderType: 'NGO',
    content: 'We strongly support the transparency requirements outlined in Section 4. These measures will ensure accountability and protect citizen privacy rights.',
    sentiment: 'supportive',
    summary: 'Strong support for transparency requirements',
    theme: 'Transparency',
    clauseMapping: ['4.1', '4.3'],
    timestamp: '2024-01-16T14:22:00Z',
    submitterName: 'Digital Rights Foundation',
    organization: 'Digital Rights Foundation'
  },
  {
    id: '3',
    stakeholderType: 'Professional',
    content: 'The current draft lacks clarity on cross-border data transfer protocols. This ambiguity could lead to implementation challenges and potential conflicts with international standards.',
    sentiment: 'critical',
    summary: 'Criticizes lack of clarity on cross-border protocols',
    theme: 'Implementation',
    clauseMapping: ['6.2', '6.5'],
    timestamp: '2024-01-17T09:15:00Z',
    submitterName: 'Dr. Sarah Johnson',
    organization: 'Legal Experts Association'
  },
  {
    id: '4',
    stakeholderType: 'Individual',
    content: 'As a citizen, I appreciate the government\'s effort to protect our data. However, I\'m concerned about the enforcement mechanisms and whether they will be effective.',
    sentiment: 'neutral',
    summary: 'Appreciates effort but concerned about enforcement',
    theme: 'Enforcement',
    clauseMapping: ['7.1', '7.3'],
    timestamp: '2024-01-18T16:45:00Z',
    submitterName: 'John Smith'
  },
  {
    id: '5',
    stakeholderType: 'Corporate',
    content: 'The notification requirements in Section 2 are excessive and will create unnecessary administrative burden. We propose reducing the notification timeline from 24 to 72 hours.',
    sentiment: 'critical',
    summary: 'Objects to notification requirements, proposes timeline change',
    theme: 'Compliance',
    clauseMapping: ['2.3', '2.4'],
    timestamp: '2024-01-19T11:20:00Z',
    submitterName: 'Financial Services Corp',
    organization: 'Financial Services Corp'
  },
  {
    id: '6',
    stakeholderType: 'NGO',
    content: 'The penalty structure should be more stringent to deter violations. Current fines are insufficient given the potential harm from data breaches.',
    sentiment: 'suggestive',
    summary: 'Recommends more stringent penalties',
    theme: 'Enforcement',
    clauseMapping: ['8.1', '8.2'],
    timestamp: '2024-01-20T13:30:00Z',
    submitterName: 'Privacy Watch',
    organization: 'Privacy Watch'
  }
];

export const mockThemes: ThemeCluster[] = [
  {
    id: '1',
    name: 'Compliance',
    description: 'Comments related to compliance requirements and implementation challenges',
    commentCount: 45,
    sentimentBreakdown: { positive: 15, negative: 20, neutral: 10 },
    keywords: ['compliance', 'implementation', 'burden', 'SME', 'guidelines']
  },
  {
    id: '2',
    name: 'Transparency',
    description: 'Feedback on transparency and accountability measures',
    commentCount: 32,
    sentimentBreakdown: { positive: 25, negative: 4, neutral: 3 },
    keywords: ['transparency', 'accountability', 'disclosure', 'public', 'access']
  },
  {
    id: '3',
    name: 'Implementation',
    description: 'Technical and practical implementation concerns',
    commentCount: 28,
    sentimentBreakdown: { positive: 8, negative: 15, neutral: 5 },
    keywords: ['implementation', 'technical', 'standards', 'protocols', 'clarity']
  },
  {
    id: '4',
    name: 'Enforcement',
    description: 'Comments on enforcement mechanisms and penalties',
    commentCount: 38,
    sentimentBreakdown: { positive: 12, negative: 18, neutral: 8 },
    keywords: ['enforcement', 'penalties', 'violations', 'monitoring', 'compliance']
  }
];

export const mockClauseMappings: ClauseMapping[] = [
  {
    id: '1',
    clauseNumber: '2.1',
    title: 'Environmental Regulatory Changes',
    commentCount: 450,
    sentimentRatio: { supportive: 50, critical: 30, suggestive: 20 }
  },
  {
    id: '2',
    clauseNumber: '2.2',
    title: 'Current Policy Amendments',
    commentCount: 5000,
    sentimentRatio: { supportive: 30, critical: 60, suggestive: 10 }
  },
  {
    id: '3',
    clauseNumber: '2.3',
    title: 'Implementation Guidelines',
    commentCount: 300,
    sentimentRatio: { supportive: 30, critical: 30, suggestive: 40 }
  },
  {
    id: '4',
    clauseNumber: '2.4',
    title: 'Monitoring and Compliance Measures',
    commentCount: 347,
    sentimentRatio: { supportive: 56, critical: 24, suggestive: 20 }
  },
  // {
  //   id: '5',
  //   clauseNumber: '7.1',
  //   title: 'Enforcement Mechanisms',
  //   commentCount: 20,
  //   sentimentRatio: { supportive: 35, critical: 40, suggestive: 25 }
  // },
  // {
  //   id: '6',
  //   clauseNumber: '8.1',
  //   title: 'Penalty Structure',
  //   commentCount: 16,
  //   sentimentRatio: { supportive: 30, critical: 45, suggestive: 25 }
  // }
];

export const mockStats = {
  totalComments: 143,
  sentimentDistribution: {
    supportive: 42,
    critical: 38,
    neutral: 25,
    suggestive: 38
  },
  stakeholderBreakdown: {
    corporate: 45,
    ngo: 32,
    professional: 28,
    individual: 38
  },
  topKeywords: [
    { word: 'compliance', count: 45, sentiment: 'neutral' },
    { word: 'transparency', count: 38, sentiment: 'positive' },
    { word: 'implementation', count: 32, sentiment: 'negative' },
    { word: 'enforcement', count: 28, sentiment: 'neutral' },
    { word: 'privacy', count: 25, sentiment: 'positive' },
    { word: 'burden', count: 22, sentiment: 'negative' },
    { word: 'standards', count: 20, sentiment: 'neutral' },
    { word: 'accountability', count: 18, sentiment: 'positive' }
  ]
};

export const mockTrendData = [
  { date: '2024-01-15', supportive: 12, critical: 8, neutral: 5 },
  { date: '2024-01-16', supportive: 15, critical: 10, neutral: 7 },
  { date: '2024-01-17', supportive: 18, critical: 15, neutral: 8 },
  { date: '2024-01-18', supportive: 22, critical: 18, neutral: 10 },
  { date: '2024-01-19', supportive: 25, critical: 22, neutral: 12 },
  { date: '2024-01-20', supportive: 28, critical: 25, neutral: 15 },
  { date: '2024-01-21', supportive: 32, critical: 28, neutral: 18 }
];


export const mockSentimentKeywords = [
  { 
    word: 'compliance', 
    totalCount: 45, 
    positiveCount: 10, 
    negativeCount: 30, // High negative count reflects "burden"
    neutralCount: 5,
    // Metadata for filtering
    sections: ['Compliance', 'Enforcement'],
    stakeholders: ['Corporate', 'Professional'] 
  },
  { 
    word: 'timeline', 
    totalCount: 38, 
    positiveCount: 2, 
    negativeCount: 35, // Overwhelmingly negative
    neutralCount: 1,
    sections: ['Implementation'],
    stakeholders: ['Corporate', 'NGO', 'Individual']
  },
  { 
    word: 'transparency', 
    totalCount: 32, 
    positiveCount: 28, // Overwhelmingly positive
    negativeCount: 2, 
    neutralCount: 2,
    sections: ['Transparency'],
    stakeholders: ['NGO', 'Individual']
  },
  { 
    word: 'penalties', 
    totalCount: 25, 
    positiveCount: 5, 
    negativeCount: 18, // Mostly negative (concerns about structure)
    neutralCount: 2,
    sections: ['Enforcement'],
    stakeholders: ['NGO', 'Professional']
  },
  { 
    word: 'burden', 
    totalCount: 22, 
    positiveCount: 0, 
    negativeCount: 22, // Exclusively negative
    neutralCount: 0,
    sections: ['Compliance'],
    stakeholders: ['Corporate']
  },
  {
    word: 'privacy',
    totalCount: 20,
    positiveCount: 15,
    negativeCount: 3,
    neutralCount: 2,
    sections: ['Transparency', 'Compliance'],
    stakeholders: ['NGO', 'Individual']
  },
  {
    word: 'standards',
    totalCount: 18,
    positiveCount: 8,
    negativeCount: 5,
    neutralCount: 5,
    sections: ['Implementation'],
    stakeholders: ['Professional', 'Corporate']
  },
  {
    word: 'SMEs', // Small and medium-sized enterprises
    totalCount: 15,
    positiveCount: 1,
    negativeCount: 12, // Context is often about challenges
    neutralCount: 2,
    sections: ['Compliance'],
    stakeholders: ['Corporate']
  }
];



