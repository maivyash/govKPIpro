import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Calendar, FileText, Users, GraduationCap } from "lucide-react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const chartData = [
  { name: "Alpha", value: 80 },
  { name: "Beta", value: 20 },
];

const COLORS = ["hsl(217 91% 60%)", "hsl(210 40% 96%)"];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-semibold mb-1">Welcome back, Sarah!</h1>
        <p className="text-muted-foreground">Today is Monday, July 15th</p>
      </div>

      {/* KPI Summary */}
      <div>
        <h2 className="text-xl font-semibold mb-4">KPI Summary</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Tasks Completed</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">12</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Projects On Track</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">8</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardDescription>Meetings Attended</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">5</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Task Timeline & Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Task Timeline */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Task Timeline</h2>
          <Card>
            <CardContent className="pt-6 space-y-4">
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Project Alpha - Phase 1</p>
                  <p className="text-sm text-muted-foreground">Due: July 18th</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Team Meeting - Project Beta</p>
                  <p className="text-sm text-muted-foreground">Scheduled: July 16th, 2 PM</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Report Submission - Quarterly</p>
                  <p className="text-sm text-muted-foreground">Due: July 20th</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <GraduationCap className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="font-medium">Training Session - New Tools</p>
                  <p className="text-sm text-muted-foreground">Scheduled: July 25th, 9 AM</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Charts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Project Timeline</CardTitle>
                <p className="text-2xl font-bold mt-2">80%</p>
                <p className="text-sm text-green-600">Current +10%</p>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Daily Progress</CardTitle>
                <p className="text-2xl font-bold mt-2">60%</p>
                <p className="text-sm text-green-600">Today +5%</p>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={120}>
                  <PieChart>
                    <Pie
                      data={chartData}
                      cx="50%"
                      cy="50%"
                      innerRadius={40}
                      outerRadius={60}
                      paddingAngle={2}
                      dataKey="value"
                    >
                      {chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Next Deadlines</CardTitle>
              <CardDescription className="mt-2">Project Alpha - Phase 1 due on July 18th</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">View Details</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Pending Approvals</CardTitle>
              <CardDescription className="mt-2">3 documents awaiting your approval</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Review Now</Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-base">My Suggestions</CardTitle>
              <CardDescription className="mt-2">Share your ideas for process improvements</CardDescription>
            </CardHeader>
            <CardContent>
              <Button className="w-full">Add Suggestion</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
