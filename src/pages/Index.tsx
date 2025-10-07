import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { 
  Target, 
  BarChart3, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  Clock,
  Award,
  FileText,
  ArrowRight,
  Lightbulb,
  Shield
} from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  const features = [
    {
      icon: Target,
      title: "Smart KPI Management",
      description: "Role-specific metrics for HQ and field staff with automated tracking"
    },
    {
      icon: BarChart3,
      title: "Real-Time Dashboards",
      description: "Live productivity insights at individual, team, and org levels"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless task assignment and progress tracking across departments"
    },
    {
      icon: TrendingUp,
      title: "AI-Powered Analytics",
      description: "Predictive insights and performance benchmarking with ML"
    },
    {
      icon: Clock,
      title: "Timeline Tracking",
      description: "Gantt charts and visual project timelines for better planning"
    },
    {
      icon: Award,
      title: "Performance Scoring",
      description: "Transparent, weighted scoring system for objective appraisals"
    }
  ];

  const stats = [
    { value: "95%", label: "On-Time Completion", icon: CheckCircle2 },
    { value: "2.5hrs", label: "Avg Response Time", icon: Clock },
    { value: "85+", label: "Productivity Score", icon: Target },
    { value: "1000+", label: "Active Users", icon: Users }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
        
        <div className="container mx-auto px-6 py-20 relative">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-8 animate-fade-in">
              <Shield className="w-4 h-4" />
              <span className="text-sm font-medium">Government of India Initiative</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              GovKPI pro
            </h1>
            
            <p className="text-xl md:text-2xl mb-4 text-primary-foreground/90 animate-fade-in">
              AI-Driven Productivity & Performance Management System
            </p>
            
            <p className="text-lg mb-12 text-primary-foreground/80 max-w-2xl mx-auto animate-fade-in">
              Transforming government efficiency through data-driven insights, transparent KPIs, 
              and real-time performance tracking under the e-Office platform
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
              <Link to="/dashboard">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 shadow-lg">
                  Go to Dashboard
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                Watch Demo
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-card border-y">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-3">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-3xl font-bold mb-1">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful Features for Modern Governance
            </h2>
            <p className="text-lg text-muted-foreground">
              Built on principles from leading IT productivity tools, adapted for government excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="p-6 card-hover animate-slide-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How GovKPI pro Works
            </h2>
            <p className="text-lg text-muted-foreground">
              Simple, transparent, and effective performance management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { step: "1", title: "Define KPIs", desc: "Set role-specific performance indicators for HQ and field staff" },
              { step: "2", title: "Assign Tasks", desc: "Distribute work with clear deadlines and responsibilities" },
              { step: "3", title: "Track Progress", desc: "Monitor real-time updates with Gantt charts and dashboards" },
              { step: "4", title: "AI Analysis", desc: "Get insights, predictions, and performance recommendations" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-secondary to-secondary/80 flex items-center justify-center text-2xl font-bold text-secondary-foreground mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <Card className="p-12 bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10 border-accent/20">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-accent" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Transform Your Office?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join the digital governance revolution with GovKPI pro. 
                Track productivity, improve accountability, and drive organizational excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/dashboard">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Access Dashboard
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8 bg-card">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center">
                <Target className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold">GovKPI pro</p>
                <p className="text-sm text-muted-foreground">e-Office Productivity Suite</p>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">About</a>
              <a href="#" className="hover:text-foreground transition-colors">Documentation</a>
              <a href="#" className="hover:text-foreground transition-colors">Support</a>
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
