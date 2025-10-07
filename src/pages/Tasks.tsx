import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { 
  Search, 
  Plus, 
  Filter,
  Calendar,
  User,
  FileText,
  ArrowLeft,
  Clock,
  CheckCircle2,
  AlertCircle,
  Paperclip
} from "lucide-react";
import { Link } from "react-router-dom";

const Tasks = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const tasks = [
    {
      id: 1,
      title: "Draft DPR for Zone-III Flood Control Project",
      description: "Prepare detailed project report with cost estimates and technical specifications",
      status: "In Progress",
      priority: "High",
      progress: 65,
      deadline: "2025-10-10",
      assignedBy: "Rajesh Kumar",
      department: "Field Engineering",
      attachments: 3
    },
    {
      id: 2,
      title: "Review Survey Report - Brahmaputra Basin Analysis",
      description: "Complete technical review of geological survey data",
      status: "Pending",
      priority: "Medium",
      progress: 0,
      deadline: "2025-10-15",
      assignedBy: "Priya Sharma",
      department: "Survey Division",
      attachments: 5
    },
    {
      id: 3,
      title: "Approve Budget Allocation for Q4 Projects",
      description: "Review and approve quarterly budget distribution",
      status: "Completed",
      priority: "High",
      progress: 100,
      deadline: "2025-10-05",
      assignedBy: "Admin Office",
      department: "Finance",
      attachments: 2
    },
    {
      id: 4,
      title: "Monthly Progress Report - Infrastructure Development",
      description: "Compile and submit monthly infrastructure progress metrics",
      status: "In Progress",
      priority: "Low",
      progress: 45,
      deadline: "2025-10-18",
      assignedBy: "Amit Singh",
      department: "Infrastructure",
      attachments: 1
    },
    {
      id: 5,
      title: "Site Inspection Report - Dam Construction Phase 2",
      description: "Conduct on-site inspection and document findings",
      status: "Delayed",
      priority: "High",
      progress: 30,
      deadline: "2025-10-08",
      assignedBy: "Field Director",
      department: "Field Operations",
      attachments: 0
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-destructive text-destructive-foreground";
      case "Medium": return "bg-secondary text-secondary-foreground";
      case "Low": return "bg-muted text-muted-foreground";
      default: return "bg-muted";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed": return "text-accent";
      case "In Progress": return "text-primary";
      case "Pending": return "text-secondary";
      case "Delayed": return "text-destructive";
      default: return "text-muted-foreground";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed": return <CheckCircle2 className="w-5 h-5" />;
      case "In Progress": return <Clock className="w-5 h-5" />;
      case "Delayed": return <AlertCircle className="w-5 h-5" />;
      default: return <Clock className="w-5 h-5" />;
    }
  };

  const filterTasks = (status?: string) => {
    if (!status) return tasks;
    return tasks.filter(task => task.status === status);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-4">
              <Link to="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
            </div>
            <Button className="bg-primary hover:bg-primary/90">
              <Plus className="w-4 h-4 mr-2" />
              New Task
            </Button>
          </div>
          <div>
            <h1 className="text-3xl font-bold mb-2">Task Management</h1>
            <p className="text-muted-foreground">Manage and track all your assignments</p>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-8">
        {/* Filters and Search */}
        <Card className="p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search tasks by title, description, or department..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Priority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priorities</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="all">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="field">Field Engineering</SelectItem>
                <SelectItem value="survey">Survey Division</SelectItem>
                <SelectItem value="finance">Finance</SelectItem>
                <SelectItem value="infrastructure">Infrastructure</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </Card>

        {/* Task Tabs */}
        <Tabs defaultValue="all" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto">
            <TabsTrigger value="all">All Tasks ({tasks.length})</TabsTrigger>
            <TabsTrigger value="in-progress">In Progress ({filterTasks("In Progress").length})</TabsTrigger>
            <TabsTrigger value="pending">Pending ({filterTasks("Pending").length})</TabsTrigger>
            <TabsTrigger value="completed">Completed ({filterTasks("Completed").length})</TabsTrigger>
            <TabsTrigger value="delayed">Delayed ({filterTasks("Delayed").length})</TabsTrigger>
          </TabsList>

          <TabsContent value="all" className="space-y-4">
            {tasks.map((task) => (
              <Card key={task.id} className="p-6 card-hover">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4 flex-1">
                    <div className={`mt-1 ${getStatusColor(task.status)}`}>
                      {getStatusIcon(task.status)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-semibold pr-4">{task.title}</h3>
                        <Badge className={getPriorityColor(task.priority)}>{task.priority}</Badge>
                      </div>
                      <p className="text-muted-foreground mb-4">{task.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Deadline:</span>
                          <span className="font-medium">{new Date(task.deadline).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <User className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Assigned by:</span>
                          <span className="font-medium">{task.assignedBy}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                          <FileText className="w-4 h-4 text-muted-foreground" />
                          <span className="text-muted-foreground">Department:</span>
                          <span className="font-medium">{task.department}</span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Progress</span>
                          <span className="font-semibold">{task.progress}%</span>
                        </div>
                        <Progress value={task.progress} className="h-2" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Paperclip className="w-4 h-4" />
                    <span>{task.attachments} attachments</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm">View Details</Button>
                    <Button variant="default" size="sm">Update Progress</Button>
                  </div>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="in-progress" className="space-y-4">
            {filterTasks("In Progress").map((task) => (
              <Card key={task.id} className="p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className={`mt-1 ${getStatusColor(task.status)}`}>
                    {getStatusIcon(task.status)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
                    <p className="text-muted-foreground mb-4">{task.description}</p>
                    <Progress value={task.progress} className="h-2 mb-2" />
                    <p className="text-sm text-muted-foreground">{task.progress}% complete</p>
                  </div>
                  <Badge className={getPriorityColor(task.priority)}>{task.priority}</Badge>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="pending" className="space-y-4">
            {filterTasks("Pending").map((task) => (
              <Card key={task.id} className="p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className={`mt-1 ${getStatusColor(task.status)}`}>
                    {getStatusIcon(task.status)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
                    <p className="text-muted-foreground">{task.description}</p>
                  </div>
                  <Badge className={getPriorityColor(task.priority)}>{task.priority}</Badge>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="completed" className="space-y-4">
            {filterTasks("Completed").map((task) => (
              <Card key={task.id} className="p-6 card-hover opacity-75">
                <div className="flex items-start gap-4">
                  <div className={`mt-1 ${getStatusColor(task.status)}`}>
                    {getStatusIcon(task.status)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2 line-through">{task.title}</h3>
                    <p className="text-muted-foreground">{task.description}</p>
                  </div>
                  <Badge className={getPriorityColor(task.priority)}>{task.priority}</Badge>
                </div>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="delayed" className="space-y-4">
            {filterTasks("Delayed").map((task) => (
              <Card key={task.id} className="p-6 card-hover border-destructive/50">
                <div className="flex items-start gap-4">
                  <div className={`mt-1 ${getStatusColor(task.status)}`}>
                    {getStatusIcon(task.status)}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
                    <p className="text-muted-foreground mb-4">{task.description}</p>
                    <p className="text-sm text-destructive">Overdue since {new Date(task.deadline).toLocaleDateString()}</p>
                  </div>
                  <Badge className={getPriorityColor(task.priority)}>{task.priority}</Badge>
                </div>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Tasks;