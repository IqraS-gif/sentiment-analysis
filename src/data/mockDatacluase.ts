// src/data/mockData.ts

export interface Comment {
  id: string;
  stakeholderType: 'Corporate' | 'NGO' | 'Professional' | 'Individual';
  content: string; // Changed from 'content' to 'text' to match component usage
  sentiment: 'positive' | 'negative' | 'neutral' | 'supportive' | 'critical' | 'suggestive';
  summary: string;
  theme: string;
  clauseMapping: string[];
  timestamp: string;
  submitterName: string; // Changed from 'author' to 'submitterName'
  organization?: string;
}

export interface ClauseMapping {
  id:string;
  clauseNumber: string;
  title: string;
  commentCount: number;
  sentimentRatio: {
    supportive: number;
    critical: number;
    suggestive: number;
  };
  // We will dynamically add comments to this structure
  comments?: Comment[];
}

export const mockComments: Comment[] = [
  {
    id: '1',
    stakeholderType: 'Corporate',
    content: 'The proposed regulations on data protection are comprehensive but may create compliance burdens for smaller enterprises. We recommend a phased implementation approach with clear guidelines for SMEs.',
    sentiment: 'suggestive',
    summary: 'Supports regulation but requests phased implementation for SMEs',
    theme: 'Compliance',
    clauseMapping: ['2.3'],
    timestamp: '2024-01-15T10:30:00Z',
    submitterName: 'Tech Solutions Ltd',
    organization: 'Tech Solutions Ltd'
  },
  {
    id: '2',
    stakeholderType: 'NGO',
    content: 'We strongly support the transparency requirements outlined in Section 2.4. These measures will ensure accountability and protect citizen privacy rights.',
    sentiment: 'supportive',
    summary: 'Strong support for transparency requirements',
    theme: 'Transparency',
    clauseMapping: ['2.4'],
    timestamp: '2024-01-16T14:22:00Z',
    submitterName: 'Digital Rights Foundation',
    organization: 'Digital Rights Foundation'
  },
  {
    id: '3',
    stakeholderType: 'Professional',
    content: 'The current draft for 2.2 lacks clarity on cross-border data transfer protocols. This ambiguity could lead to implementation challenges.',
    sentiment: 'critical',
    summary: 'Criticizes lack of clarity on cross-border protocols',
    theme: 'Implementation',
    clauseMapping: ['2.2'],
    timestamp: '2024-01-17T09:15:00Z',
    submitterName: 'Dr. Sarah Johnson',
    organization: 'Legal Experts Association'
  },
  {
    id: '4',
    stakeholderType: 'Individual',
    content: 'I appreciate the government\'s effort in 2.1 to protect our environment. However, I am concerned about the enforcement mechanisms.',
    sentiment: 'suggestive',
    summary: 'Appreciates effort but concerned about enforcement',
    theme: 'Enforcement',
    clauseMapping: ['2.1'],
    timestamp: '2024-01-18T16:45:00Z',
    submitterName: 'John Smith'
  },
  {
    id: '5',
    stakeholderType: 'Corporate',
    content: 'The notification requirements in Section 2.3 are excessive. We propose reducing the notification timeline.',
    sentiment: 'critical',
    summary: 'Objects to notification requirements, proposes timeline change',
    theme: 'Compliance',
    clauseMapping: ['2.3'],
    timestamp: '2024-01-19T11:20:00Z',
    submitterName: 'Financial Services Corp',
    organization: 'Financial Services Corp'
  },
   {
    id: '6',
    stakeholderType: 'Corporate',
    content: 'The amendments in 2.2 are a significant step backward for our industry and will stifle innovation.',
    sentiment: 'critical',
    summary: 'Strongly opposes the amendments in 2.2',
    theme: 'Policy',
    clauseMapping: ['2.2'],
    timestamp: '2024-01-21T11:00:00Z',
    submitterName: 'Global Innovations Inc.',
    organization: 'Global Innovations Inc.'
  },
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
];