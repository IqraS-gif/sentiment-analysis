import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { MessageCircle, AlertTriangle, CheckCircle, Lightbulb } from 'lucide-react';
import { mockClauseMappings, ClauseMapping as ClauseMappingType } from '@/data/mockData';
import ClauseDetailModal from './ClauseDetailModal';
import { MessageSquareText, Scale } from 'lucide-react'; 
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';

const ClauseMapping = () => {
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

  // Prepare data for the vertical stacked bar chart
  const chartData = mockClauseMappings.map(clause => ({
    name: `Section ${clause.clauseNumber}`,
    Positive: clause.sentimentRatio.supportive,
    Negative: clause.sentimentRatio.critical,
    Neutral: clause.sentimentRatio.suggestive,
  }));
  
  // Formatter for Y-axis to show percentage values
  const yAxisFormatter = (tick) => {
    return `${tick * 100}`;
  };

  // Formatter for the tooltip to show the original percentage values
  const tooltipFormatter = (value, name, props) => {
    // The value from props.payload contains the original percentage
    return [`${props.payload[name]}%`, name];
  };


  return (
    <div className="space-y-6">
      {/* --- VERTICAL STACKED BAR CHART --- */}
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
              stackOffset="expand" // This prop creates the 100% stacked effect
              margin={{
                top: 20,
                right: 30,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis 
                tickFormatter={yAxisFormatter} 
                domain={[0, 1]}
                ticks={[0, 0.25, 0.5, 0.75, 1]}
              />
              <Tooltip formatter={tooltipFormatter} />
              <Legend />
              {/* Bars are stacked in the order they are declared */}
              <Bar dataKey="Positive" stackId="a" fill="#16a34a"  maxBarSize={90}/>
              <Bar dataKey="Negative" stackId="a" fill="#ef4444"  maxBarSize={90} />
              <Bar dataKey="Neutral" stackId="a" fill="#f59e0b"  maxBarSize={90}/>
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>


      {/* --- DETAILED CLAUSE ANALYSIS --- */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {mockClauseMappings.map((clause) => {
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
                {/* Sentiment Breakdown */}
                <div className="space-y-3"> {/* Added a parent div for consistent spacing */}

                  {/* Positive Sentiment */}
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
                      <div 
                        className="h-full bg-sentiment-supportive transition-all"
                        style={{ width: `${clause.sentimentRatio.supportive}%` }}
                      />
                    </Progress>
                  </div>

                  {/* Negative Sentiment */}
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
                      <div 
                        className="h-full bg-sentiment-critical transition-all"
                        style={{ width: `${clause.sentimentRatio.critical}%` }}
                      />
                    </Progress>
                  </div>

                  {/* Neutral Sentiment */}
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
                      <div 
                        className="h-full bg-sentiment-suggestive transition-all"
                        style={{ width: `${clause.sentimentRatio.suggestive}%` }}
                      />
                    </Progress>
                  </div>
                </div>

                {/* Overall Assessment */}
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
