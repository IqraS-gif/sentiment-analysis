import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
// mockStats is still imported to maintain structure, but its values will be overridden.
import { mockStats } from '@/data/mockData'; 
import { Scale } from 'lucide-react'; // Icon for the takeaway section
import { BarChart2 } from "lucide-react";

const SentimentChart = () => {
  // --- 1. NEW DATA: A new stats object is created to reflect 6,097 comments ---
  const newStats = {
    totalComments: 6097,
    sentimentDistribution: {
      supportive: 1791,
      critical: 1620,
      neutral: 1066,
    }
  };

  const visibleSentimentsTotal = newStats.sentimentDistribution.supportive + newStats.sentimentDistribution.critical + newStats.sentimentDistribution.neutral;

  const sentimentData = [
    { 
      name: 'Positive', 
      value: newStats.sentimentDistribution.supportive, 
      color: '#22c55e', // Green
      percentage: Math.round((newStats.sentimentDistribution.supportive / visibleSentimentsTotal) * 100)
    },
    { 
      name: 'Negative', 
      value: newStats.sentimentDistribution.critical, 
      color: '#ef4444', // Red
      percentage: Math.round((newStats.sentimentDistribution.critical / visibleSentimentsTotal) * 100)
    },
    { 
      name: 'Neutral', 
      value: newStats.sentimentDistribution.neutral, 
      color: 'orange', // Orange color is preserved as requested
      percentage: Math.round((newStats.sentimentDistribution.neutral / visibleSentimentsTotal) * 100)
    }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white border border-gray-300 rounded-lg p-3 shadow-lg">
          <p className="font-bold text-black-800">{data.name}</p>
          <p className="text-sm text-black-600">
            {/* Numbers are now formatted with commas */}
            {new Intl.NumberFormat().format(data.value)} comments ({data.percentage}%)
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="shadow-lg border-border">
      <CardHeader>
        {/* Your custom styles are preserved */}
<CardTitle className="flex items-center gap-2 text-3xl font-bold text-blue-900">
<BarChart2 className="w-8 h-8 text-blue-900 fill-blue-900" strokeWidth={2} />

  Overall Sentiment Analysis Of Draft
</CardTitle>

        <CardDescription className="text-xl font-sem text-black-600">
          {/* Using the new total comments, formatted with a comma */}
          Primary sentiment breakdown from a total of {new Intl.NumberFormat().format(newStats.totalComments)} comments.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Charts will now use the new, larger data */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Pie Chart */}
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie 
                  data={sentimentData} 
                  cx="50%" 
                  cy="50%" 
                  outerRadius={90} 
                  dataKey="value" 
                  labelLine={false}
                  label={({ name, percentage }) => `${percentage}%`}
                >
                  {sentimentData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          {/* Bar Chart */}
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={sentimentData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" stroke="#475569" fontSize={12} />
                <YAxis stroke="#475569" fontSize={12} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {sentimentData.map((entry, index) => <Cell key={`cell-${index}`} fill={entry.color} />)}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Legend */}
        <div className="flex justify-center items-center flex-wrap gap-x-6 gap-y-2 mt-4">
          {sentimentData.map((item, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
              {/* Values are formatted with commas */}
              <span className="text-sm text-gray-600">{item.name} ({new Intl.NumberFormat().format(item.value)})</span>
            </div>
          ))}
        </div>

        {/* --- Key Takeaway section now reflects the new data --- */}
        <div className="mt-6 border-t border-border pt-6">
          <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-4 border-l-4 border-blue-500">
            <Scale className="h-6 w-6 mt-1 flex-shrink-0 text-blue-600" />
            <div>
              <h3 className="text-xl font-bold text-blue-900 mb-1">Key Takeaway</h3>
                    <ul className="space-y-2 text-base text-blue-800 list-disc list-inside">
                <li>
                  The feedback is highly polarized, with a nearly even split between
                  <span className="font-bold"> Positive ({new Intl.NumberFormat().format(newStats.sentimentDistribution.supportive)})</span> and 
                  <span className="font-bold"> Negative ({new Intl.NumberFormat().format(newStats.sentimentDistribution.critical)})</span> comments.
                </li>
                <li>
                  This indicates that while there is strong support for the policy, there are also significant areas of concern that need to be addressed.
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