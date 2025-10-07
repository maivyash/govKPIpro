import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, Award, Users, Lightbulb, Sparkles } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const kpiMetrics = [
  { kpi: "Budget Adherence", target: "95%", actual: "98%", achievement: "103%", weight: "20%", score: 20 },
  { kpi: "Project Completion Rate", target: "100%", actual: "100%", achievement: "100%", weight: "20%", score: 20 },
  { kpi: "Stakeholder Satisfaction", target: "4.5/5", actual: "4.7/5", achievement: "104%", weight: "20%", score: 20 },
  { kpi: "Process Efficiency", target: "15%", actual: "18%", achievement: "120%", weight: "20%", score: 20 },
  { kpi: "Innovation Adoption", target: "3 new initiatives", actual: "4 new initiatives", achievement: "133%", weight: "20%", score: 20 },
];

const achievements = [
  {
    icon: Award,
    title: "Budget Management",
    description: "Successfully managed the budget for the fiscal year, resulting in a surplus of 3%.",
  },
  {
    icon: FileText,
    title: "Project Completion",
    description: "Completed all assigned projects within the stipulated deadlines and budget.",
  },
  {
    icon: Users,
    title: "Stakeholder Engagement",
    description: "Received positive feedback from stakeholders for effective communication and collaboration.",
  },
];

export default function PerformanceReport() {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold mb-1">Performance Report</h1>
          <p className="text-sm text-muted-foreground">Review your performance metrics and feedback for the current quarter.</p>
        </div>
      </div>

      {/* Employee Profile */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-6">
            <Avatar className="h-24 w-24">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ethan" />
              <AvatarFallback>EH</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-semibold">Ethan Harper</h2>
              <p className="text-muted-foreground">Senior Analyst</p>
              <p className="text-sm text-muted-foreground">Department of Finance</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* KPI Metrics */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>KPI Metrics</CardTitle>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-2" />
            Download KPI Metrics
          </Button>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>KPI</TableHead>
                <TableHead>Target</TableHead>
                <TableHead>Actual</TableHead>
                <TableHead>Achievement</TableHead>
                <TableHead>Weight</TableHead>
                <TableHead>Score</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {kpiMetrics.map((metric, index) => (
                <TableRow key={index}>
                  <TableCell className="font-medium">{metric.kpi}</TableCell>
                  <TableCell>{metric.target}</TableCell>
                  <TableCell>{metric.actual}</TableCell>
                  <TableCell>
                    <Badge variant={parseInt(metric.achievement) >= 100 ? "default" : "secondary"}>
                      {metric.achievement}
                    </Badge>
                  </TableCell>
                  <TableCell>{metric.weight}</TableCell>
                  <TableCell className="font-semibold">{metric.score}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Achievements */}
      <Card>
        <CardHeader>
          <CardTitle>Achievements</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <div key={index} className="flex gap-4 p-4 rounded-lg bg-primary/5">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            );
          })}
        </CardContent>
      </Card>

      {/* Feedback */}
      <Card>
        <CardHeader>
          <CardTitle>Feedback</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold mb-3">Manager Feedback</h4>
              <p className="text-sm text-muted-foreground mb-4">
                "Ethan consistently exceeds expectations in his role. His analytical skills and attention to detail are commendable. He is a valuable asset to the team."
              </p>
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia" />
                  <AvatarFallback>OC</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Olivia Chen</p>
                  <p className="text-xs text-muted-foreground">Director, Finance</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg border">
              <h4 className="font-semibold mb-3">Peer Feedback</h4>
              <p className="text-sm text-muted-foreground mb-4">
                "Ethan is a great team player and always willing to help. His insights are invaluable, and he contributes significantly to our projects."
              </p>
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=Liam" />
                  <AvatarFallback>LR</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">Liam Rodriguez</p>
                  <p className="text-xs text-muted-foreground">Fellow Analyst</p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Insights */}
      <Card className="bg-primary/5 border-primary/20">
        <CardContent className="pt-6">
          <div className="flex gap-3">
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Sparkles className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h4 className="font-semibold mb-2">AI Insights</h4>
              <p className="text-sm text-muted-foreground">
                Based on your performance data, you have shown exceptional performance in budget management and project completion. Consider focusing on areas such as process efficiency to further enhance your overall performance.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Generate PDF */}
      <div className="flex justify-center pt-4">
        <Button size="lg" className="px-8">
          <FileText className="h-5 w-5 mr-2" />
          Generate PDF Report
        </Button>
      </div>
    </div>
  );
}
