import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LineChart, Line, BarChart, Bar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { 
  TrendingUp, 
  Target, 
  Award,
  Clock,
  FileText,
  Users,
  Lightbulb,
  ArrowLeft,
  Download
} from "lucide-react";
import { Link } from "react-router-dom";

const KPI = () => {
  const productivityScore = 85;
  
  const trendData = [
    { month: "Apr", score: 72 },
    { month: "May", score: 75 },
    { month: "Jun", score: 78 },
    { month: "Jul", score: 80 },
    { month: "Aug", score: 82 },
    { month: "Sep", score: 85 },
  ];

  const categoryData = [
    { category: "Timeliness", score: 90 },
    { category: "Quality", score: 85 },
    { category: "Collaboration", score: 80 },
    { category: "Innovation", score: 75 },
    { category: "Accuracy", score: 88 },
  ];

  const radarData = [
    { subject: "Technical Skills", score: 90, fullMark: 100 },
    { subject: "Communication", score: 85, fullMark: 100 },
    { subject: "Leadership", score: 75, fullMark: 100 },
    { subject: "Problem Solving", score: 88, fullMark: 100 },
    { subject: "Time Management", score: 92, fullMark: 100 },
  ];

  const kpis = [
    {
      title: "File Disposal Rate",
      description: "Average time to complete file processing",
      current: 90,
      target: 95,
      unit: "%",
      trend: "+8%",
      icon: FileText,
      color: "text-primary"
    },
    {
      title: "Task Completion Rate",
      description: "Percentage of tasks completed on time",
      current: 87,
      target: 90,
      unit: "%",
      trend: "+5%",
      icon: Target,
      color: "text-accent"
    },
    {
      title: "Response Time",
      description: "Average response time to queries",
      current: 2.5,
      target: 2,
      unit: "hrs",
      trend: "-12%",
      icon: Clock,
      color: "text-secondary"
    },
    {
      title: "Team Collaboration",
      description: "Cross-department collaboration score",
      current: 80,
      target: 85,
      unit: "%",
      trend: "+3%",
      icon: Users,
      color: "text-primary"
    }
  ];

  const achievements = [
    { title: "Top Performer Q2", date: "Jun 2025", icon: Award },
    { title: "Innovation Award", date: "Aug 2025", icon: Lightbulb },
    { title: "100% On-Time Delivery", date: "Sep 2025", icon: Target },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <Button variant="outline">
              <Download className="w-4 h-4 mr-2" />
              Export Report
            </Button>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">Key Performance Indicators</h1>
            <p className="text-muted-foreground">Track and analyze your performance metrics</p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Overall Score */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h2 className="text-lg text-muted-foreground mb-2">Overall Productivity Score</h2>
              <div className="flex items-baseline gap-4 mb-4">
                <span className="text-6xl font-bold">{productivityScore}</span>
                <span className="text-2xl text-muted-foreground">/100</span>
                <div className="flex items-center gap-2 text-accent">
                  <TrendingUp className="w-5 h-5" />
                  <span className="text-lg font-semibold">+5% this month</span>
                </div>
              </div>
              <Progress value={productivityScore} className="h-3 mb-2" />
              <p className="text-sm text-muted-foreground">You're performing better than 78% of your peers</p>
            </div>
            <div className="hidden lg:block">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-card flex items-center justify-center">
                  <Award className="w-20 h-20 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* KPI Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {kpis.map((kpi, index) => {
            const Icon = kpi.icon;
            const progressValue = (kpi.current / kpi.target) * 100;
            
            return (
              <Card key={index} className="p-6 card-hover">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${kpi.color}`} />
                  </div>
                  <span className="text-sm font-semibold text-accent">{kpi.trend}</span>
                </div>
                <h3 className="font-semibold mb-1">{kpi.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{kpi.description}</p>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-bold">{kpi.current}</span>
                    <span className="text-muted-foreground">/ {kpi.target} {kpi.unit}</span>
                  </div>
                  <Progress value={progressValue} className="h-2" />
                </div>
              </Card>
            );
          })}
        </div>

        {/* Charts Section */}
        <Tabs defaultValue="trend" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto">
            <TabsTrigger value="trend">Performance Trend</TabsTrigger>
            <TabsTrigger value="category">By Category</TabsTrigger>
            <TabsTrigger value="skills">Skills Assessment</TabsTrigger>
          </TabsList>

          <TabsContent value="trend">
            <Card className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-1">6-Month Performance Trend</h3>
                <p className="text-sm text-muted-foreground">Your productivity score over the last 6 months</p>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[60, 100]} />
                  <Tooltip />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="hsl(217 91% 60%)" 
                    strokeWidth={3}
                    dot={{ fill: "hsl(217 91% 60%)", r: 6 }}
                    name="Productivity Score"
                  />
                </LineChart>
              </ResponsiveContainer>
            </Card>
          </TabsContent>

          <TabsContent value="category">
            <Card className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-1">Performance by Category</h3>
                <p className="text-sm text-muted-foreground">Breakdown of your scores across different metrics</p>
              </div>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={categoryData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis type="number" domain={[0, 100]} />
                  <YAxis dataKey="category" type="category" width={120} />
                  <Tooltip />
                  <Bar dataKey="score" fill="hsl(217 91% 60%)" radius={[0, 8, 8, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </TabsContent>

          <TabsContent value="skills">
            <Card className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-1">Skills Assessment</h3>
                <p className="text-sm text-muted-foreground">Comprehensive evaluation of your core competencies</p>
              </div>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={radarData}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis dataKey="subject" />
                  <PolarRadiusAxis domain={[0, 100]} />
                  <Radar 
                    name="Your Score" 
                    dataKey="score" 
                    stroke="hsl(217 91% 60%)" 
                    fill="hsl(217 91% 60%)" 
                    fillOpacity={0.6} 
                  />
                  <Tooltip />
                </RadarChart>
              </ResponsiveContainer>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Achievements */}
        <Card className="p-6 mt-8">
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-1">Recent Achievements</h3>
            <p className="text-sm text-muted-foreground">Your performance milestones and recognitions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg border bg-card">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.date}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* AI Insights */}
        <Card className="p-6 mt-8 bg-gradient-to-br from-accent/5 to-primary/5">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
              <Lightbulb className="w-6 h-6 text-accent" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">AI-Powered Insights</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Your response time has improved by 12% compared to last month, showing excellent attention to urgent tasks.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Consider focusing on innovation metrics - you're close to reaching the department average.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span>Your timeliness score is exceptional - you're in the top 10% of your division.</span>
                </li>
              </ul>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default KPI;