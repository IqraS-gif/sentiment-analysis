import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ChevronDown, ChevronUp, Search, Filter, Calendar, User, Building } from 'lucide-react';
import { mockComments, Comment } from '@/data/mockData';

const CommentsList = () => {
  const [expandedComments, setExpandedComments] = useState<Set<string>>(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [sentimentFilter, setSentimentFilter] = useState<string>('all');
  const [stakeholderFilter, setStakeholderFilter] = useState<string>('all');

  const filteredComments = mockComments.filter(comment => {
    const matchesSearch = comment.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         comment.summary.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSentiment = sentimentFilter === 'all' || comment.sentiment === sentimentFilter;
    const matchesStakeholder = stakeholderFilter === 'all' || comment.stakeholderType === stakeholderFilter;
    
    return matchesSearch && matchesSentiment && matchesStakeholder;
  });

  const toggleExpanded = (commentId: string) => {
    const newExpanded = new Set(expandedComments);
    if (newExpanded.has(commentId)) {
      newExpanded.delete(commentId);
    } else {
      newExpanded.add(commentId);
    }
    setExpandedComments(newExpanded);
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'supportive':
        return 'bg-sentiment-supportive/20 text-sentiment-supportive border-sentiment-supportive/30';
      case 'critical':
        return 'bg-sentiment-critical/20 text-sentiment-critical border-sentiment-critical/30';
      case 'neutral':
        return 'bg-sentiment-neutral/20 text-sentiment-neutral border-sentiment-neutral/30';
      case 'suggestive':
        return 'bg-sentiment-suggestive/20 text-sentiment-suggestive border-sentiment-suggestive/30';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  const getStakeholderIcon = (type: string) => {
    switch (type) {
      case 'Corporate':
        return Building;
      case 'Individual':
        return User;
      default:
        return User;
    }
  };

  return (
    <div className="space-y-6">
      {/* Filters */}
      <Card className="shadow-card border-border">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Filter className="w-5 h-5" />
            Filter Comments
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search comments..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={sentimentFilter} onValueChange={setSentimentFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by sentiment" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sentiments</SelectItem>
                <SelectItem value="supportive">Supportive</SelectItem>
                <SelectItem value="critical">Critical</SelectItem>
                <SelectItem value="neutral">Neutral</SelectItem>
                <SelectItem value="suggestive">Suggestive</SelectItem>
              </SelectContent>
            </Select>
            <Select value={stakeholderFilter} onValueChange={setStakeholderFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by stakeholder" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Stakeholders</SelectItem>
                <SelectItem value="Corporate">Corporate</SelectItem>
                <SelectItem value="NGO">NGO</SelectItem>
                <SelectItem value="Professional">Professional</SelectItem>
                <SelectItem value="Individual">Individual</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Comments List */}
      <Card className="shadow-card border-border">
        <CardHeader>
          <CardTitle>Stakeholder Comments ({filteredComments.length})</CardTitle>
          <CardDescription>
            Detailed analysis of stakeholder feedback with AI-generated summaries
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {filteredComments.map((comment) => {
              const isExpanded = expandedComments.has(comment.id);
              const StakeholderIcon = getStakeholderIcon(comment.stakeholderType);

              return (
                <Collapsible key={comment.id} open={isExpanded} onOpenChange={() => toggleExpanded(comment.id)}>
                  <div className="border border-border rounded-lg p-4 transition-all duration-200 hover:shadow-soft">
                    {/* Comment Header */}
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          <StakeholderIcon className="w-4 h-4 text-muted-foreground" />
                          <span className="font-medium text-foreground">
                            {comment.submitterName}
                          </span>
                          {comment.organization && (
                            <span className="text-sm text-muted-foreground">
                              ({comment.organization})
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-xs">
                          {comment.stakeholderType}
                        </Badge>
                        <Badge className={`text-xs ${getSentimentColor(comment.sentiment)}`}>
                          {comment.sentiment}
                        </Badge>
                      </div>
                    </div>

                    {/* AI Summary */}
                    <div className="bg-muted/50 rounded-lg p-3 mb-3">
                      <h4 className="text-sm font-medium text-foreground mb-1">AI Summary</h4>
                      <p className="text-sm text-muted-foreground">{comment.summary}</p>
                    </div>

                    {/* Theme and Clause Mapping */}
                    <div className="flex items-center gap-4 mb-3 text-sm">
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Theme:</span>
                        <Badge variant="secondary" className="text-xs">
                          {comment.theme}
                        </Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-muted-foreground">Clauses:</span>
                        <div className="flex gap-1">
                          {comment.clauseMapping.map((clause, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {clause}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Expand/Collapse Trigger */}
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" size="sm" className="w-full justify-between">
                        <span>{isExpanded ? 'Hide' : 'Show'} full comment</span>
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </Button>
                    </CollapsibleTrigger>

                    {/* Full Comment Content */}
                    <CollapsibleContent className="mt-3">
                      <div className="border-t border-border pt-3">
                        <h4 className="text-sm font-medium text-foreground mb-2">Full Comment</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {comment.content}
                        </p>
                        <div className="flex items-center gap-2 mt-3 text-xs text-muted-foreground">
                          <Calendar className="w-3 h-3" />
                          {new Date(comment.timestamp).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>
                      </div>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CommentsList;