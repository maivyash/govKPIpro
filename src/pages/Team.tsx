import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, LineChart, Line, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";
import { 
  Users, 
  TrendingUp, 
  AlertCircle,
  CheckCircle2,
  ArrowLeft,
  Clock,
  Target,
  Award
} from "lucide-react";
import { Link } from "react-router-dom";

const Team = () => {
  const departmentScore = 82;
  
  const teamMembers = [
    { name: "Yash Kumar", role: "Field Engineer", score: 85, tasks: "8/10", status: "on-track", initials: "YK" },
    { name: "Priya Sharma", role: "Survey Officer", score: 88, tasks: "10/12", status: "on-track", initials: "PS" },
    { name: "Rahul Verma", role: "Project Lead", score: 92, tasks: "15/15", status: "on-track", initials: "RV" },
    { name: "Amit Singh", role: "Technical Analyst", score: 67, tasks: "6/12", status: "needs-attention", initials: "AS" },
    { name: "Sneha Patel", role: "Documentation Officer", score: 79, tasks: "9/11", status: "on-track", initials: "SP" },
    { name: "Rajesh Kumar", role: "Field Supervisor", score: 90, tasks: "12/13", status: "on-track", initials: "RK" },
  ];

  const weeklyData = [
    { week: "Week 1", completed: 45, target: 50 },
    { week: "Week 2", completed: 52, target: 50 },
    { week: "Week 3", completed: 48, target: 50 },
    { week: "Week 4", completed: 55, target: 50 },
  ];

  const performanceData = [
    { month: "Apr", score: 75 },
    { month: "May", score: 78 },
    { month: "Jun", score: 80 },
    { month: "Jul", score: 79 },
    { month: "Aug", score: 81 },
    { month: "Sep", score: 82 },
  ];

  const getStatusBadge = (status: string) => {
    if (status === "on-track") {
      return <Badge className="bg-accent text-accent-foreground">On Track</Badge>;
    }
    return <Badge className="bg-destructive text-destructive-foreground">Needs Attention</Badge>;
  };

  const getScoreColor = (score: number) => {
    if (score >= 85) return "text-accent";
    if (score >= 70) return "text-primary";
    return "text-destructive";
  };

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
            <Button variant="outline">Generate Team Report</Button>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">Team Dashboard</h1>
            <p className="text-muted-foreground">Infrastructure Development Division</p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Department Overview */}
        <Card className="p-8 mb-8 bg-gradient-to-br from-primary/5 to-secondary/5">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <p className="text-sm text-muted-foreground mb-2">Department Score</p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold">{departmentScore}</span>
                <span className="text-xl text-muted-foreground">/100</span>
              </div>
              <div className="flex items-center gap-2 text-accent text-sm">
                <TrendingUp className="w-4 h-4" />
                <span>+3% this month</span>
              </div>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Team Members</p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold">6</span>
              </div>
              <p className="text-sm text-muted-foreground">Active contributors</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">Tasks This Week</p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold">60</span>
              </div>
              <p className="text-sm text-accent">+12 vs last week</p>
            </div>

            <div>
              <p className="text-sm text-muted-foreground mb-2">On-Time Delivery</p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-4xl font-bold">94</span>
                <span className="text-xl text-muted-foreground">%</span>
              </div>
              <p className="text-sm text-muted-foreground">Above target</p>
            </div>
          </div>
        </Card>

        {/* Performance Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <Card className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-1">Weekly Task Completion</h3>
              <p className="text-sm text-muted-foreground">Completed tasks vs targets</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="week" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="completed" fill="hsl(217 91% 60%)" name="Completed" radius={[8, 8, 0, 0]} />
                <Bar dataKey="target" fill="hsl(24 95% 53%)" name="Target" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-1">Department Performance Trend</h3>
              <p className="text-sm text-muted-foreground">6-month productivity overview</p>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" />
                <YAxis domain={[70, 90]} />
                <Tooltip />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="hsl(142 71% 45%)" 
                  strokeWidth={3}
                  dot={{ fill: "hsl(142 71% 45%)", r: 6 }}
                  name="Department Score"
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Team Members */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-semibold mb-1">Team Members</h3>
              <p className="text-sm text-muted-foreground">Individual performance overview</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">Sort by Score</Button>
              <Button variant="outline" size="sm">Filter</Button>
            </div>
          </div>

          <div className="space-y-4">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex items-center gap-6 p-4 rounded-lg border bg-card hover:shadow-md transition-all">
                <Avatar className="w-12 h-12">
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {member.initials}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1 grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                  <div>
                    <h4 className="font-semibold">{member.name}</h4>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Performance Score</p>
                    <p className={`text-2xl font-bold ${getScoreColor(member.score)}`}>
                      {member.score}
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Tasks Completed</p>
                    <p className="text-lg font-semibold">{member.tasks}</p>
                  </div>

                  <div>
                    <p className="text-sm text-muted-foreground mb-2">Progress</p>
                    <Progress value={member.score} className="h-2" />
                  </div>

                  <div className="flex items-center justify-end gap-2">
                    {getStatusBadge(member.status)}
                    <Button variant="outline" size="sm">View Details</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Insights and Alerts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <Card className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Team Strengths</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>94% on-time task completion rate (above department average)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>Strong collaboration scores across all team members</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                    <span>3 team members in top 10% of organization</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-destructive" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">Areas for Improvement</h3>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span>Amit Singh needs support - 50% task completion rate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span>Response time slightly above department average</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                    <span>Innovation metrics need attention this quarter</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Top Performers */}
        <Card className="p-6 mt-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Award className="w-6 h-6 text-secondary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold">Top Performers This Month</h3>
              <p className="text-sm text-muted-foreground">Recognizing excellence in the team</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {teamMembers
              .sort((a, b) => b.score - a.score)
              .slice(0, 3)
              .map((member, index) => (
                <div key={index} className="flex items-center gap-4 p-4 rounded-lg border bg-gradient-to-br from-accent/5 to-primary/5">
                  <div className="relative">
                    <Avatar className="w-14 h-14">
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold text-lg">
                        {member.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-xs font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold">{member.name}</h4>
                    <p className="text-sm text-muted-foreground">{member.role}</p>
                    <p className="text-lg font-bold text-accent mt-1">{member.score} pts</p>
                  </div>
                </div>
              ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Team;