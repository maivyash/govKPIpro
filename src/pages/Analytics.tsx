import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, TrendingUp } from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";

const productivityData = [
  { month: "Jan", value: 65 },
  { month: "Feb", value: 70 },
  { month: "Mar", value: 68 },
  { month: "Apr", value: 75 },
  { month: "May", value: 85 },
  { month: "Jun", value: 90 },
];

const performersData = [
  { name: "Top Performer 1", value: 95 },
  { name: "Top Performer 2", value: 88 },
  { name: "Bottom Performer 1", value: 45 },
  { name: "Bottom Performer 2", value: 52 },
];

const examplePrompts = [
  "Show me the most productive departments.",
  "What are the key factors affecting productivity?",
  "Suggest ways to improve task completion rates.",
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold mb-2">AI-Powered Productivity Dashboard</h1>
        <p className="text-muted-foreground">Advanced analytics and insights powered by AI</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Department Productivity Heatmap */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Department Productivity Heatmap</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="aspect-video rounded-lg bg-gradient-to-br from-green-900 via-teal-800 to-green-950 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white/60 text-sm">Interactive heatmap visualization</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* GovAssist AI */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2 mb-2">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Bot className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle>GovAssist</CardTitle>
                <CardDescription className="text-xs">Your AI assistant for productivity insights</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            <p className="text-sm font-medium mb-2">Example Prompts</p>
            {examplePrompts.map((prompt, index) => (
              <Button
                key={index}
                variant="outline"
                className="w-full justify-start text-left h-auto py-3 px-4 text-sm"
              >
                {prompt}
              </Button>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Productivity Trend */}
      <Card>
        <CardHeader>
          <CardTitle>Productivity Trend Over Time</CardTitle>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-3xl font-bold">+15%</span>
            <span className="text-sm text-green-600 flex items-center gap-1">
              <TrendingUp className="h-4 w-4" />
              +15% vs Last 3 Months
            </span>
          </div>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={productivityData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="value"
                stroke="hsl(var(--primary))"
                strokeWidth={2}
                fill="url(#colorValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Bottom Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Overdue Tasks Forecast */}
        <Card>
          <CardHeader>
            <CardTitle>Overdue Tasks Forecast</CardTitle>
            <CardDescription>Predicted Overdue Tasks</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-4xl font-bold">25</div>
              <p className="text-sm text-destructive">+10% increase forecast</p>
            </div>
          </CardContent>
        </Card>

        {/* Top & Bottom Performers */}
        <Card>
          <CardHeader>
            <CardTitle>Top & Bottom Performers</CardTitle>
            <CardDescription>Performance Ranking</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={performersData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={120} className="text-xs" />
                <Tooltip />
                <Bar
                  dataKey="value"
                  fill="hsl(var(--primary))"
                  radius={[0, 4, 4, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
