import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { Scale, BarChart2 } from 'lucide-react';
import { mockSectionSummaries as envSectionSummaries } from '@/data/mockDataSummary';
import { mdpSectionSummaries } from '@/data/mockDataMDP';

const computeTotals = (sections: Record<string, { totalComments: number; sentimentDistribution: { positive: number; negative: number; neutral: number } }>) => {
  let total = 0;
  let pos = 0;
  let neg = 0;
  let neu = 0;
  Object.values(sections).forEach((s) => {
    total += s.totalComments;
    pos += (s.sentimentDistribution.positive / 100) * s.totalComments;
    neg += (s.sentimentDistribution.negative / 100) * s.totalComments;
    neu += (s.sentimentDistribution.neutral / 100) * s.totalComments;
  });
  return { total: Math.round(total), pos: Math.round(pos), neg: Math.round(neg), neu: Math.round(neu) };
};

const SentimentChart = () => {
  const selectedDraftId = typeof window !== 'undefined' ? localStorage.getItem('selectedDraftId') : null;
  const isMDP = selectedDraftId === '2';
  const sections = isMDP ? mdpSectionSummaries : envSectionSummaries;
  const totals = computeTotals(sections as any);

  const sentimentData = [
    { name: 'Positive', value: totals.pos, color: '#22c55e', percentage: Math.round((totals.pos / Math.max(1, totals.pos + totals.neg + totals.neu)) * 100) },
    { name: 'Negative', value: totals.neg, color: '#ef4444', percentage: Math.round((totals.neg / Math.max(1, totals.pos + totals.neg + totals.neu)) * 100) },
    { name: 'Neutral', value: totals.neu, color: 'orange', percentage: Math.round((totals.neu / Math.max(1, totals.pos + totals.neg + totals.neu)) * 100) },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-gray-100 border border-gray-300 rounded-lg p-3 shadow-lg">
          <p className="font-bold text-gray-900">{data.name}</p>
          <p className="text-sm text-gray-800">{new Intl.NumberFormat().format(data.value)} comments ({data.percentage}%)</p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="shadow-lg border-border">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-3xl font-bold text-blue-900">
          <BarChart2 className="w-8 h-8 text-blue-900 fill-blue-900" strokeWidth={2} />
          Overall Sentiment Analysis Of Draft
        </CardTitle>
        <CardDescription className="text-xl font-sem text-black-600">
          Primary sentiment breakdown from a total of {new Intl.NumberFormat().format(totals.total)} comments.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={sentimentData} cx="50%" cy="50%" outerRadius={90} dataKey="value" labelLine={false} label={({ percentage }) => `${percentage}%`}>
                  {sentimentData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(107,114,128,0.12)' }} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sentimentData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" stroke="#475569" fontSize={12} />
                <YAxis stroke="#475569" fontSize={12} />
                <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(107,114,128,0.12)' }} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {sentimentData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="flex justify-center items-center flex-wrap gap-x-6 gap-y-2 mt-4">
          {sentimentData.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-sm text-gray-600">{item.name} ({new Intl.NumberFormat().format(item.value)})</span>
            </div>
          ))}
        </div>

        <div className="mt-6 border-t border-border pt-6">
          <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-4 border-l-4 border-blue-500">
            <Scale className="h-6 w-6 mt-1 flex-shrink-0 text-blue-600" />
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-1">Key Takeaway</h3>
              <ul className="space-y-2 text-base text-blue-800 list-disc list-inside">
                <li>
                  The feedback is polarized across <span className="font-bold">Positive ({new Intl.NumberFormat().format(totals.pos)})</span>, <span className="font-bold">Negative ({new Intl.NumberFormat().format(totals.neg)})</span> and <span className="font-bold">Neutral ({new Intl.NumberFormat().format(totals.neu)})</span> comments.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SentimentChart;
