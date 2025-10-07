import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Download, Settings } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const productivityData = [
  { month: "Jan", value: 62 },
  { month: "Feb", value: 65 },
  { month: "Mar", value: 68 },
  { month: "Apr", value: 70 },
  { month: "May", value: 75 },
  { month: "Jun", value: 78 },
  { month: "Jul", value: 74 },
];

const divisions = [
  { name: "Division A", productivity: 85 },
  { name: "Division B", productivity: 72 },
  { name: "Division C", productivity: 60 },
  { name: "Division D", productivity: 92 },
];

const projects = [
  { name: "Project Alpha", status: "In Progress", completion: 60, deadline: "2024-08-15" },
  { name: "Project Beta", status: "Completed", completion: 100, deadline: "2024-07-20" },
  { name: "Project Gamma", status: "Delayed", completion: 30, deadline: "2024-09-01" },
  { name: "Project Delta", status: "In Progress", completion: 85, deadline: "2024-08-25" },
];

export default function OrganizationDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold mb-1">Organization Dashboard</h1>
          <p className="text-sm text-muted-foreground">Director's View</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
          <Button>
            <Settings className="h-4 w-4 mr-2" />
            Customize
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Productivity Index */}
        <Card>
          <CardHeader>
            <CardTitle>Productivity Index</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center justify-center py-8">
              <div className="relative w-40 h-40">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="10"
                    fill="transparent"
                    className="text-muted"
                  />
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    stroke="currentColor"
                    strokeWidth="10"
                    fill="transparent"
                    strokeDasharray={`${70 * 2 * Math.PI * 0.75} ${70 * 2 * Math.PI}`}
                    className="text-primary"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold">75%</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4">Overall productivity score</p>
            </div>
          </CardContent>
        </Card>

        {/* Division Productivity Comparison */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Division Productivity Comparison</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {divisions.map((division) => (
              <div key={division.name} className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">{division.name}</span>
                  <span className="text-muted-foreground">{division.productivity}%</span>
                </div>
                <Progress value={division.productivity} className="h-2" />
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Project Completion Matrix */}
      <Card>
        <CardHeader>
          <CardTitle>Project Completion Matrix</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="grid grid-cols-4 gap-4 text-sm font-medium text-muted-foreground pb-2 border-b">
              <div>Project</div>
              <div>Status</div>
              <div>Completion Rate</div>
              <div>Deadline</div>
            </div>
            {projects.map((project) => (
              <div key={project.name} className="grid grid-cols-4 gap-4 items-center">
                <div className="font-medium">{project.name}</div>
                <div>
                  <Badge
                    variant={
                      project.status === "Completed"
                        ? "default"
                        : project.status === "Delayed"
                        ? "destructive"
                        : "secondary"
                    }
                  >
                    {project.status}
                  </Badge>
                </div>
                <div className="flex items-center gap-2">
                  <Progress value={project.completion} className="h-2 flex-1" />
                  <span className="text-sm text-muted-foreground">{project.completion}%</span>
                </div>
                <div className="text-sm">{project.deadline}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Employee Engagement Over Time & AI Summary */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Employee Engagement Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={productivityData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="hsl(var(--primary))"
                  strokeWidth={2}
                  dot={{ fill: "hsl(var(--primary))" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI Summary Feed</CardTitle>
            <CardDescription>AI-generated insights on organizational performance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500 mt-2"></div>
                <div>
                  <p className="text-sm"><span className="font-semibold text-green-600">Positive Trend:</span> Division D shows a significant 15% productivity increase over the last quarter.</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-yellow-500 mt-2"></div>
                <div>
                  <p className="text-sm"><span className="font-semibold text-yellow-600">Area for Review:</span> Project Gamma is currently delayed by 2 weeks. Recommend reallocating resources.</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500 mt-2"></div>
                <div>
                  <p className="text-sm"><span className="font-semibold text-blue-600">Key Insight:</span> Employee engagement correlates strongly with project completion rates, with a peak in Q2.</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Filter Options */}
      <Card>
        <CardHeader>
          <CardTitle>Filter Options</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Division" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Divisions</SelectItem>
                <SelectItem value="a">Division A</SelectItem>
                <SelectItem value="b">Division B</SelectItem>
                <SelectItem value="c">Division C</SelectItem>
                <SelectItem value="d">Division D</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="Month" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Months</SelectItem>
                <SelectItem value="jan">January</SelectItem>
                <SelectItem value="feb">February</SelectItem>
                <SelectItem value="mar">March</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="2024">
              <SelectTrigger>
                <SelectValue placeholder="Year" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="2024">2024</SelectItem>
                <SelectItem value="2023">2023</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger>
                <SelectValue placeholder="KPI Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="productivity">Productivity</SelectItem>
                <SelectItem value="quality">Quality</SelectItem>
                <SelectItem value="engagement">Engagement</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
