import { useMemo, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { MessageCircle, AlertTriangle, CheckCircle, Lightbulb, MessageSquareText } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid, Cell } from 'recharts';
import { ClauseMapping as ClauseMappingType, mockClauseMappings as envClauseMappings } from '@/data/mockData';
import ClauseDetailModal from './ClauseDetailModal';
import { mockSectionSummaries as envSectionSummaries } from '@/data/mockDataSummary';
import { mdpSectionSummaries, mdpStats } from '@/data/mockDataMDP';

const useDraftAwareClauses = (): ClauseMappingType[] => {
  const selectedDraftId = typeof window !== 'undefined' ? localStorage.getItem('selectedDraftId') : null;
  const isMDP = selectedDraftId === '2';

  if (!isMDP) {
    // Use existing enriched env dataset from mockData
    return envClauseMappings;
  }

  // Build MDP clause mappings from section summaries and overall sentiment distribution
  const entries = Object.entries(mdpSectionSummaries) as Array<[
    string,
    {
      title: string;
      totalComments: number;
      sentimentDistribution: { positive: number; negative: number; neutral: number };
    }
  ]>;

  const mapped: ClauseMappingType[] = entries.map(([key, val], idx) => {
    const total = val.totalComments;
    const pos = Math.round((val.sentimentDistribution.positive / 100) * total);
    const neg = Math.round((val.sentimentDistribution.negative / 100) * total);
    const neu = Math.max(0, total - pos - neg);
    return {
      id: String(idx + 1),
      clauseNumber: key,
      title: val.title,
      commentCount: total,
      sentimentRatio: {
        supportive: Math.round((pos / Math.max(1, total)) * 100),
        critical: Math.round((neg / Math.max(1, total)) * 100),
        suggestive: Math.round((neu / Math.max(1, total)) * 100),
      },
    };
  });

  return mapped;
};

const ClauseMapping = () => {
  const clauses = useDraftAwareClauses();
  const [selectedClause, setSelectedClause] = useState<ClauseMappingType | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClauseClick = (clause: ClauseMappingType) => {
    setSelectedClause(clause);
    setIsModalOpen(true);
  };

  const getOverallSentiment = (ratio: { supportive: number; critical: number; suggestive: number }) => {
    const max = Math.max(ratio.supportive, ratio.critical, ratio.suggestive);
    if (max === ratio.supportive) return { type: 'Positive', color: 'text-sentiment-supportive', icon: CheckCircle };
    if (max === ratio.critical) return { type: 'Negative', color: 'text-sentiment-critical', icon: AlertTriangle };
    return { type: 'Neutral', color: 'text-sentiment-suggestive', icon: Lightbulb };
  };

  const chartData = useMemo(() =>
    clauses.map((clause) => ({
      name: `Section ${clause.clauseNumber}`,
      Positive: clause.sentimentRatio.supportive,
      Negative: clause.sentimentRatio.critical,
      Neutral: clause.sentimentRatio.suggestive,
    })),
  [clauses]);

  const yAxisFormatter = (tick: number) => `${tick * 100}`;
  const tooltipFormatter = (value: any, name: any, props: any) => [`${props.payload[name]}%`, name];

  return (
    <div className="space-y-6">
      <Card className="shadow-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-3xl font-bold text-blue-900">
            <MessageSquareText className="w-8 h-8 text-blue-900" />
            <span>Section Sentiment Overview</span>
          </CardTitle>
          <CardDescription className="text-black text-lg">
            Visual representation of positive, negative, and neutral comments per section.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart
              data={chartData}
              stackOffset="expand"
              margin={{ top: 20, right: 30, left: 0, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis tickFormatter={yAxisFormatter} domain={[0, 1]} ticks={[0, 0.25, 0.5, 0.75, 1]} />
              <Tooltip 
                formatter={tooltipFormatter} 
                cursor={{ fill: 'rgba(107,114,128,0.12)' }}
                contentStyle={{ background: '#f3f4f6', border: '1px solid #e5e7eb', color: '#111827' }}
                itemStyle={{ color: '#111827' }}
              />
              <Legend />
              <Bar dataKey="Positive" stackId="a" fill="#16a34a" maxBarSize={90} />
              <Bar dataKey="Negative" stackId="a" fill="#ef4444" maxBarSize={90} />
              <Bar dataKey="Neutral" stackId="a" fill="#f59e0b" maxBarSize={90} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {clauses.map((clause) => {
          const overallSentiment = getOverallSentiment(clause.sentimentRatio);
          return (
            <Card key={clause.id} className="shadow-card border-border hover:shadow-strong transition-all duration-200 cursor-pointer" onClick={() => handleClauseClick(clause)}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl flex items-center gap-2">
                      Section {clause.clauseNumber}
                      <overallSentiment.icon className={`w-5 h-5 ${overallSentiment.color}`} />
                    </CardTitle>
                    <CardDescription className='text-xl font-bold text-black-900 '>{clause.title}</CardDescription>
                  </div>
                  <Badge variant="outline" className="flex items-center gap-1">
                    <MessageCircle className="w-5 h-5" />
                    {clause.commentCount}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-sentiment-supportive" />
                        <span className='text-lg font-medium text-blue-900'>Positive</span>
                      </div>
                      <span className="text-lg font-semibold text-green-800">
                        {clause.sentimentRatio.supportive}% ({Math.round((clause.sentimentRatio.supportive / 100) * clause.commentCount)})
                      </span>
                    </div>
                    <Progress value={clause.sentimentRatio.supportive} className="h-2 bg-slate-100">
                      <div className="h-full bg-sentiment-supportive transition-all" style={{ width: `${clause.sentimentRatio.supportive}%` }} />
                    </Progress>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-sentiment-critical" />
                        <span className='text-lg font-medium  text-blue-900'>Negative</span>
                      </div>
                      <span className="text-lg font-semibold text-red-600">
                        {clause.sentimentRatio.critical}% ({Math.round((clause.sentimentRatio.critical / 100) * clause.commentCount)})
                      </span>
                    </div>
                    <Progress value={clause.sentimentRatio.critical} className="h-2 bg-slate-100">
                      <div className="h-full bg-sentiment-critical transition-all" style={{ width: `${clause.sentimentRatio.critical}%` }} />
                    </Progress>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Lightbulb className="w-4 h-4 text-sentiment-suggestive" />
                        <span className='text-lg font-medium  text-blue-900'>Neutral</span>
                      </div>
                      <span className="text-lg font-semibold text-yellow-600">
                        {clause.sentimentRatio.suggestive}% ({Math.round((clause.sentimentRatio.suggestive / 100) * clause.commentCount)})
                      </span>
                    </div>
                    <Progress value={clause.sentimentRatio.suggestive} className="h-2 bg-slate-100">
                      <div className="h-full bg-sentiment-suggestive transition-all" style={{ width: `${clause.sentimentRatio.suggestive}%` }} />
                    </Progress>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-4 border-t border-border">
                  <span className="text-base text-black font-semibold">Overall trend:</span>
                  <Badge className={`text-base ${overallSentiment.color} bg-transparent border`}>
                    {overallSentiment.type}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <ClauseDetailModal 
        clause={selectedClause}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ClauseMapping;
