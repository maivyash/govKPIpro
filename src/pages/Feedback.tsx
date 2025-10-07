import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ThumbsUp, MessageCircle, MoreHorizontal, Image as ImageIcon } from "lucide-react";

const mockFeedback = [
  {
    id: 1,
    author: "Anonymous User",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    title: "New Project Tracking System",
    content: "I think we should implement a new system for tracking project progress. It would help us stay organized and meet deadlines more effectively.",
    timestamp: "Posted 2 days ago",
    likes: 25,
    comments: 12,
  },
  {
    id: 2,
    author: "Sarah Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    title: "More Team-Building Activities",
    content: "It would be great if we could have more team-building activities. It would help us bond and work together more effectively.",
    timestamp: "Posted 1 week ago",
    likes: 18,
    comments: 8,
  },
];

const leaderboard = [
  { rank: 1, name: "Ethan Carter", suggestions: 15 },
  { rank: 2, name: "Olivia Bennett", suggestions: 12 },
  { rank: 3, name: "Noah Parker", suggestions: 10 },
];

export default function Feedback() {
  const [postAnonymously, setPostAnonymously] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");

  const handlePost = () => {
    console.log("Posting feedback:", { text: feedbackText, anonymous: postAnonymously });
    setFeedbackText("");
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold mb-2">Feedback & Engagement</h1>
        <p className="text-muted-foreground">Share your ideas and suggestions to help us improve our workplace.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Feedback Wall */}
        <div className="lg:col-span-2 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Feedback Wall</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Avatar>
                    <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Current" />
                    <AvatarFallback>YU</AvatarFallback>
                  </Avatar>
                  <Textarea
                    placeholder="Share your suggestions or ideas..."
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    className="min-h-[100px]"
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Button variant="ghost" size="sm">
                      <ImageIcon className="h-4 w-4 mr-2" />
                      Add Image
                    </Button>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="anonymous"
                        checked={postAnonymously}
                        onCheckedChange={(checked) => setPostAnonymously(checked as boolean)}
                      />
                      <label
                        htmlFor="anonymous"
                        className="text-sm text-muted-foreground cursor-pointer"
                      >
                        Post anonymously
                      </label>
                    </div>
                  </div>
                  <Button onClick={handlePost}>Post</Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Feedback Posts */}
          {mockFeedback.map((item) => (
            <Card key={item.id}>
              <CardContent className="pt-6">
                <div className="flex gap-3">
                  <Avatar>
                    <AvatarImage src={item.avatar} />
                    <AvatarFallback>{item.author[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{item.content}</p>
                        <p className="text-xs text-muted-foreground mt-2">{item.timestamp}</p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-4 pt-2">
                      <Button variant="ghost" size="sm">
                        <ThumbsUp className="h-4 w-4 mr-1" />
                        {item.likes}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <MessageCircle className="h-4 w-4 mr-1" />
                        {item.comments}
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Sentiment Summary & Leaderboard */}
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            <Card>
              <CardHeader>
                <CardDescription>Overall Sentiment</CardDescription>
                <CardTitle className="text-3xl text-primary">Positive</CardTitle>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardDescription>Engagement Rate</CardDescription>
                <CardTitle className="text-3xl text-primary">85%</CardTitle>
              </CardHeader>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Leaderboard</CardTitle>
              <CardDescription>Most helpful suggestions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {leaderboard.map((item) => (
                  <div key={item.rank} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">
                        {item.rank}
                      </div>
                      <div>
                        <p className="font-medium">{item.name}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{item.suggestions}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
