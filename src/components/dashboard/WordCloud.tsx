import { useState, useMemo } from 'react';
import { TrendingUp, Cloud, MessageSquare, Smile, User } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { mdpSentimentKeywords, mdpStats, mdpSectionSummaries } from '@/data/mockDataMDP';

// Base ENV keywords (kept from previous implementation)
const envKeywords = [
  { word: 'emissions', count: 85, sentiment: 'negative', section: '2.1 Environmental Regulatory Changes', breakdown: [{ subtype: 'Extractive Industries', count: 50 }, { subtype: 'Manufacturing', count: 35 }] },
  { word: 'sustainability', count: 65, sentiment: 'positive', section: '2.1 Environmental Regulatory Changes', breakdown: [{ subtype: 'Service Economy', count: 40 }, { subtype: 'Student', count: 25 }] },
  { word: 'tax', count: 210, sentiment: 'negative', section: '2.2 Current Policy Amendments', breakdown: [{ subtype: 'Businessperson', count: 120 }, { subtype: 'Professional', count: 50 }, { subtype: 'Manufacturing', count: 40 }] },
  { word: 'GST', count: 200, sentiment: 'neutral', section: '2.2 Current Policy Amendments', breakdown: [{ subtype: 'Manufacturing', count: 90 }, { subtype: 'Service Economy', count: 70 }, { subtype: 'Businessperson', count: 40 }] },
  { word: 'burden', count: 190, sentiment: 'negative', section: '2.2 Current Policy Amendments', breakdown: [{ subtype: 'Extractive Industries', count: 100 }, { subtype: 'Manufacturing', count: 90 }] },
  { word: 'policy', count: 160, sentiment: 'neutral', section: '2.2 Current Policy Amendments', breakdown: [{ subtype: 'Professional', count: 90 }, { subtype: 'Service Economy', count: 70 }] },
  { word: 'SMEs', count: 150, sentiment: 'negative', section: '2.2 Current Policy Amendments', breakdown: [{ subtype: 'Businessperson', count: 90 }, { subtype: 'Service Economy', count: 60 }] },
  { word: 'credit', count: 78, sentiment: 'positive', section: '2.2 Current Policy Amendments', breakdown: [{ subtype: 'Businessperson', count: 48 }, { subtype: 'Professional', count: 30 }] },
  { word: 'benefits', count: 20, sentiment: 'positive', section: '2.2 Current Policy Amendments', breakdown: [{ subtype: 'Student', count: 20 }] },
  { word: 'cost', count: 14, sentiment: 'negative', section: '2.2 Current Policy Amendments', breakdown: [{ subtype: 'Businessperson', count: 14 }] },
  { word: 'feedback', count: 7, sentiment: 'neutral', section: '2.2 Current Policy Amendments', breakdown: [{ subtype: 'Student', count: 7 }] },
  { word: 'standards', count: 77, sentiment: 'neutral', section: '2.3 Implementation Guidelines', breakdown: [{ subtype: 'Manufacturing', count: 47 }, { subtype: 'Professional', count: 30 }] },
  { word: 'implementation', count: 70, sentiment: 'negative', section: '2.3 Implementation Guidelines', breakdown: [{ subtype: 'Professional', count: 50 }, { subtype: 'Service Economy', count: 20 }] },
  { word: 'clarity', count: 17, sentiment: 'negative', section: '2.3 Implementation Guidelines', breakdown: [{ subtype: 'Professional', count: 17 }] },
  { word: 'guidelines', count: 12, sentiment: 'neutral', section: '2.3 Implementation Guidelines', breakdown: [{ subtype: 'Professional', count: 12 }] },
  { word: 'privacy', count: 160, sentiment: 'negative', section: '2.4 Monitoring and Compliance Measures', breakdown: [{ subtype: 'Student', count: 100 }, { subtype: 'Professional', count: 60 }] },
  { word: 'compliance', count: 150, sentiment: 'negative', section: '2.4 Monitoring and Compliance Measures', breakdown: [{ subtype: 'Manufacturing', count: 80 }, { subtype: 'Extractive Industries', count: 70 }] },
  { word: 'enforcement', count: 70, sentiment: 'negative', section: '2.4 Monitoring and Compliance Measures', breakdown: [{ subtype: 'Professional', count: 40 }, { subtype: 'Businessperson', count: 30 }] },
  { word: 'penalties', count: 59, sentiment: 'negative', section: '2.4 Monitoring and Compliance Measures', breakdown: [{ subtype: 'Extractive Industries', count: 39 }, { subtype: 'Businessperson', count: 20 }] },
  { word: 'transparency', count: 30, sentiment: 'positive', section: '2.4 Monitoring and Compliance Measures', breakdown: [{ subtype: 'Student', count: 30 }] },
  { word: 'data', count: 15, sentiment: 'neutral', section: '2.4 Monitoring and Compliance Measures', breakdown: [{ subtype: 'Student', count: 15 }] },
  { word: 'risk', count: 10, sentiment: 'negative', section: '2.4 Monitoring and Compliance Measures', breakdown: [{ subtype: 'Extractive Industries', count: 10 }] },
];

const stakeholderCategories = {
  Individual: ['Businessperson', 'Student', 'Professional'],
  Organization: ['Extractive Industries', 'Manufacturing', 'Service Economy'],
};

const displayOrder = [
  'guidelines', 'privacy', 'transparency', 'burden', 'emissions',
  'compliance', 'cost', 'implementation', 'policy', 'penalties', 'SMEs',
  'tax', 'standards', 'risk', 'data', 'benefits', 'sustainability', 'feedback', 'credit', 'GST', 'clarity', 'enforcement'
];

const buildMdpKeywords = () => {
  const totalWeights = mdpStats.stakeholderBreakdown;
  const subtypes = ['businessperson','student','professional','extractiveIndustries','manufacturing','serviceEconomy'] as const;
  const weightSum = subtypes.reduce((s, k) => s + (totalWeights as any)[k], 0);

  return mdpSentimentKeywords.map(k => {
    const total = (k as any).totalCount ? (k as any).totalCount : k.positiveCount + k.negativeCount;
    const diff = Math.abs(k.positiveCount - k.negativeCount);
    const sentiment = diff <= 5 ? 'neutral' : (k.positiveCount > k.negativeCount ? 'positive' : 'negative');
    const breakdown = subtypes.map((st) => ({
      subtype: (
        st === 'businessperson' ? 'Businessperson' :
        st === 'student' ? 'Student' :
        st === 'professional' ? 'Professional' :
        st === 'extractiveIndustries' ? 'Extractive Industries' :
        st === 'manufacturing' ? 'Manufacturing' : 'Service Economy'
      ),
      count: Math.round((totalWeights as any)[st] / weightSum * total)
    }));
    return {
      word: k.word,
      count: total,
      sentiment,
      section: 'All Sections',
      breakdown,
    };
  });
};

const ensureMinCommentsPerKeyword = (baseComments: any[], keywords: any[], minPerWord = 10) => {
  const authors = [
    { name: 'Ananya Iyer', role: 'Professional' },
    { name: 'Rahul Mehta', role: 'Businessperson' },
    { name: 'Neha Sharma', role: 'Professional' },
    { name: 'Vivek Rao', role: 'Service Economy' },
    { name: 'Priyanka Das', role: 'Professional' },
    { name: 'Amit Kulkarni', role: 'Manufacturing' },
    { name: 'Zoya Khan', role: 'Student' },
    { name: 'Arjun Patel', role: 'Businessperson' },
    { name: 'Meera Joshi', role: 'Professional' },
    { name: 'Sanjay Gupta', role: 'Professional' }
  ];
  const makeText = (word: string, sentiment: string) => {
    switch (sentiment) {
      case 'positive':
        return `Multiple respondents praised ${word}, highlighting clear benefits and long-term value.`;
      case 'negative':
        return `Several stakeholders raised concerns about ${word}, citing risks and potential burdens.`;
      default:
        return `Comments noted ${word} factually without taking a strong stance.`;
    }
  };
  const existingMaxId = baseComments.reduce((m, c) => Math.max(m, Number(c.id) || 0), 0);
  let nextId = existingMaxId + 1;
  const out = [...baseComments];
  keywords.forEach((k) => {
    const count = out.filter(c => c.sentiment === k.sentiment && (c.keywords?.some((kw: string) => kw.toLowerCase().includes(k.word.toLowerCase())) || String(c.text).toLowerCase().includes(k.word.toLowerCase()))).length;
    for (let i = count; i < minPerWord; i++) {
      const a = authors[i % authors.length];
      const text = makeText(k.word, k.sentiment);
      const related = (keywords.find((w: any) => w.word !== k.word)?.word) || k.word;
      out.push({
        id: nextId++,
        text,
        author: a.name,
        role: a.role,
        sentiment: k.sentiment,
        wordCount: text.split(' ').length,
        keywords: [k.word, related]
      });
    }
  });
  return out;
};

const WordCloudAndAnalysis = () => {
  const selectedDraftId = typeof window !== 'undefined' ? localStorage.getItem('selectedDraftId') : null;
  const isMDP = selectedDraftId === '2';

  const mockKeywords = useMemo(() => (isMDP ? buildMdpKeywords() : envKeywords), [isMDP]);
  const baseComments: any[] = [];
  const extendedComments = useMemo(() => ensureMinCommentsPerKeyword(baseComments, mockKeywords, 10), [mockKeywords]);

  const uniqueSections = useMemo(() => {
    if (isMDP) {
      return ['All Sections', ...Object.values(mdpSectionSummaries).map((s: any) => s.title)];
    }
    return Array.from(new Set(mockKeywords.map((k: any) => k.section))).sort();
  }, [mockKeywords, isMDP]);

  const [selectedSection, setSelectedSection] = useState<string>('all');
  const [selectedStakeholder, setSelectedStakeholder] = useState<string>('all');
  const [selectedKeyword, setSelectedKeyword] = useState<{ word: string; sentiment: string } | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredKeywords = useMemo(() => {
    return (mockKeywords as any[]).filter((keyword) => {
      const sectionMatch = selectedSection === 'all' || keyword.section === selectedSection || (isMDP && keyword.section === 'All Sections');
      if (selectedStakeholder === 'all') return sectionMatch;
      const stakeholderMatch = keyword.breakdown.some((item: any) => {
        if (selectedStakeholder === 'Individual') return stakeholderCategories.Individual.includes(item.subtype);
        if (selectedStakeholder === 'Organization') return stakeholderCategories.Organization.includes(item.subtype);
        return item.subtype === selectedStakeholder;
      });
      return sectionMatch && stakeholderMatch;
    });
  }, [mockKeywords, selectedSection, selectedStakeholder, isMDP]);

  const orderedKeywords = useMemo(() => {
    const wordOrderMap = new Map(displayOrder.map((word, index) => [word, index]));
    return [...filteredKeywords].sort((a: any, b: any) => {
      const indexA = wordOrderMap.get(a.word) ?? Infinity;
      const indexB = wordOrderMap.get(b.word) ?? Infinity;
      return indexA - indexB;
    });
  }, [filteredKeywords]);

  const getWordSize = (count: number, maxCount: number) => {
    if (maxCount === 0) return 14;
    const minSize = 14;
    const maxSize = 52;
    const ratio = Math.sqrt(count / maxCount);
    return Math.round(minSize + (maxSize - minSize) * ratio);
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'hsl(var(--sentiment-supportive))';
      case 'negative': return 'hsl(var(--sentiment-critical))';
      default: return 'hsl(var(--sentiment-neutral))';
    }
  };

  const generateBreakdownTitle = (keyword: any): string => {
    let title = `${keyword.word}: ${keyword.count} total mentions\n\nBreakdown:\n`;
    keyword.breakdown.forEach((item: any) => {
      title += `- ${item.subtype}: ${item.count}\n`;
    });
    return title;
  };

  const maxCount = useMemo(() => Math.max(1, ...filteredKeywords.map((k: any) => k.count)), [filteredKeywords]);
  const topKeywordsForLegend = useMemo(() => [...filteredKeywords].sort((a: any, b: any) => b.count - a.count), [filteredKeywords]);

  const handleKeywordClick = (word: string, sentiment: string) => {
    setSelectedKeyword({ word, sentiment });
    setSearchQuery('');
  };
  const handleKeywordClear = () => setSelectedKeyword(null);

  const filteredComments = useMemo(() => {
    if (!selectedKeyword) return [] as any[];
    let filtered = extendedComments;
    filtered = filtered.filter((comment: any) => {
      const hasKeyword = comment.keywords.some((kw: string) => kw.toLowerCase().includes(selectedKeyword.word.toLowerCase())) || comment.text.toLowerCase().includes(selectedKeyword.word.toLowerCase());
      const hasSameSentiment = comment.sentiment === selectedKeyword.sentiment;
      return hasKeyword && hasSameSentiment;
    });
    if (searchQuery) {
      filtered = filtered.filter((comment: any) =>
        comment.text.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comment.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        comment.role.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    return filtered;
  }, [selectedKeyword, searchQuery, extendedComments]);

  const getSentimentBadgeColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'text-green-600 bg-green-50 border-green-200';
      case 'negative': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-amber-600 bg-amber-50 border-amber-200';
    }
  };
  const getSentimentLabel = (sentiment: string) => sentiment.charAt(0).toUpperCase() + sentiment.slice(1);
  const highlightKeywords = (text: string, keywords: string[], p0: string) => {
    let highlightedText = text;
    keywords.forEach(keyword => {
      const regex = new RegExp(`(${keyword})`, 'gi');
      highlightedText = highlightedText.replace(regex, '<span class="text-primary font-medium bg-primary/10 px-1 rounded">$1</span>');
    });
    return highlightedText;
  };

  return (
    <div className="space-y-6">
      <Card className="shadow-card border-border">
        <CardHeader>
            <CardTitle className="text-3xl font-bold text-blue-900 flex items-center gap-2">
              <Cloud className="w-8 h-8 text-blue-900" strokeWidth={3} />
              Sentiment-Aware Word Cloud
            </CardTitle>
            <CardDescription className='text-lg font-medium text-gray-950'>
              Click a word below to analyze related comments.
            </CardDescription>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Select value={selectedSection} onValueChange={setSelectedSection}>
                <SelectTrigger className="w-full sm:w-64 md:w-72">
                  <SelectValue placeholder="Filter by section" />
                </SelectTrigger>
                <SelectContent align="start" sideOffset={4} position="popper" className="z-50 w-[var(--radix-select-trigger-width)] max-h-64 overflow-auto">
                  <SelectItem value="all">All Sections</SelectItem>
                  {uniqueSections.map((section) => (
                    <SelectItem key={section} value={section}>{section}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={selectedStakeholder} onValueChange={setSelectedStakeholder}>
                <SelectTrigger className="w-full sm:w-56 md:w-64">
                  <SelectValue placeholder="Filter by stakeholder" />
                </SelectTrigger>
                <SelectContent align="start" sideOffset={4} position="popper" className="z-50 w-[var(--radix-select-trigger-width)] max-h-72 overflow-auto">
                  <SelectItem value="all">All Stakeholders</SelectItem>
                  <SelectGroup>
                    <SelectLabel>By Type</SelectLabel>
                    <SelectItem value="Individual">All Individuals</SelectItem>
                    <SelectItem value="Organization">All Organizations</SelectItem>
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Individual Subtypes</SelectLabel>
                    {stakeholderCategories.Individual.map((subtype) => (
                      <SelectItem key={subtype} value={subtype}>{subtype}</SelectItem>
                    ))}
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Organization Subtypes</SelectLabel>
                    {stakeholderCategories.Organization.map((subtype) => (
                      <SelectItem key={subtype} value={subtype}>{subtype}</SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-x-6 gap-y-4 items-center justify-center p-8 min-h-64 rounded-lg bg-muted/50">
            {orderedKeywords.length > 0 ? (
              orderedKeywords.map((keyword: any) => (
                <span
                  key={keyword.word}
                  className="font-bold transition-all duration-200 hover:scale-110 cursor-pointer"
                  style={{ fontSize: `${getWordSize(keyword.count, maxCount)}px`, color: getSentimentColor(keyword.sentiment) }}
                  title={generateBreakdownTitle(keyword)}
                  onClick={() => handleKeywordClick(keyword.word, keyword.sentiment)}
                >
                  {keyword.word}
                </span>
              ))
            ) : (
              <p className="text-muted-foreground">No keywords match the selected filters.</p>
            )}
          </div>
          <div className="border-t border-border pt-4 mt-6">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-2xl font-bold text-blue-900 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-blue-900" />
                Top Keywords in View
              </h4>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              {topKeywordsForLegend.slice(0, 6).map((keyword: any, index: number) => (
                <div key={index} className="flex items-center justify-between text-sm">
                  <span className="font-bold text-lg" style={{ color: getSentimentColor(keyword.sentiment) }}>
                    {keyword.word}
                  </span>
                  <span className="text-black">{keyword.count} mentions</span>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {selectedKeyword && (
        <Card className="shadow-card border-border">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="flex items-center gap-2 text-4xl font-bold text-blue-900">
                  <MessageSquare className="w-8 h-8 text-blue-900" />
                  Comment Analysis
                  <Badge variant="outline" className="text-lg cursor-pointer hover:bg-destructive hover:text-destructive-foreground" onClick={handleKeywordClear}>
                    Filtered by: {selectedKeyword.word} ({selectedKeyword.sentiment}) ✕
                  </Badge>
                </CardTitle>
                <CardDescription>{filteredComments.length} comments found</CardDescription>
              </div>
              <div className="text-base text-black flex items-center gap-4">
                <Input placeholder="Filter comments..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-48" />
                <span className="text-base text-muted-foreground">25 per page</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-12 gap-x-8 text-sm font-medium text-muted-foreground border-b pb-2">
                <div className="col-span-6 text-2xl text-black font-semibold flex items-center gap-2">
                  <MessageSquare className="w-6 h-6" />
                  <span>Comment</span>
                </div>
                <div className="col-span-2 text-2xl text-black font-semibold flex items-center justify-center gap-2">
                  <Smile className="w-6 h-6" />
                  <span>Sentiment</span>
                </div>
                <div className="col-span-4 text-2xl text-black font-semibold flex items-center gap-2">
                  <User className="w-6 h-6" />
                  <span>Author</span>
                </div>
              </div>

              <div className="space-y-4 bg-blue-50 dark:bg-blue-950 rounded-lg p-4">
                {filteredComments.map((comment: any) => (
                  <div key={comment.id} className="grid grid-cols-12 gap-x-8 py-4 border-b border-border/50 last:border-b-0 hover:bg-gray-50 dark:hover:bg-gray-800 transition rounded-lg">
                    <div className="col-span-6 text-left">
                      <div className="space-y-2">
                        <p className="text-xl text-black leading-relaxed" dangerouslySetInnerHTML={{ __html: highlightKeywords(comment.text, comment.keywords.slice(0, 2), 'font-bold bg-yellow-200 px-1 rounded') }} />
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="text-lg text-black font-semibold">{comment.wordCount} words</span>
                          {comment.keywords.map((kw: string, index: number) => (
                            <Badge key={index} variant="secondary" className="text-lg px-2 py-0">{kw}</Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 flex justify-center items-center">
                      <Badge className={`${getSentimentBadgeColor(comment.sentiment)} border text-lg`} variant="outline">{getSentimentLabel(comment.sentiment)}</Badge>
                    </div>
                    <div className="col-span-4 text-left">
                      <div className="space-y-1">
                        <p className="text-xl font-medium text-black">{comment.author}</p>
                        <p className="text-lg text-muted-foreground">{comment.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredComments.length === 0 && (
                <div className="text-center py-8 text-muted-foreground">
                  <p>No comments found matching your criteria.</p>
                  <button onClick={handleKeywordClear} className="text-primary hover:underline mt-2">Clear filter</button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default WordCloudAndAnalysis;
