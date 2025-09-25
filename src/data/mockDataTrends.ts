// Mock data for trends analytics with monthly data
export const mockTrendData = [
  { month: 'Jan', supportive: 35, critical: 25, neutral: 30 },
  { month: 'Feb', supportive: 45, critical: 20, neutral: 28 },
  { month: 'Mar', supportive: 38, critical: 35, neutral: 27 },
  { month: 'Apr', supportive: 48, critical: 18, neutral: 30 },
  { month: 'May', supportive: 25, critical: 45, neutral: 25 },
  { month: 'Jun', supportive: 55, critical: 15, neutral: 28 },
  { month: 'Jul', supportive: 45, critical: 25, neutral: 30 }
];

export const monthlyInsights = [
  {
    month: 'May',
    type: 'spike' as const,
    description: 'Negative sentiment spike after industry concerns raised'
  },
  {
    month: 'Jun', 
    type: 'spike' as const,
    description: 'Positive response to revised timeline announcement'
  }
];