import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, Shield, Smartphone, Zap, Target, Bell } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description: "AI-powered insights that reveal spending patterns and suggest optimizations for your budget.",
  },
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Your financial data is protected with enterprise-grade encryption and security protocols.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description: "Track expenses on-the-go with our intuitive mobile app that syncs across all devices.",
  },
  {
    icon: Zap,
    title: "Real-Time Sync",
    description: "Automatic transaction categorization and instant updates across all connected accounts.",
  },
  {
    icon: Target,
    title: "Goal Setting",
    description: "Set and achieve financial goals with personalized milestones and progress tracking.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description: "Get notified about unusual spending, bill due dates, and budget limit warnings.",
  },
];

export const Features = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-gradient">Why Choose</span> BudgetFlow?
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Experience the power of intelligent budget management with features designed to simplify your financial life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <Card 
              key={index} 
              className="hover-lift card-gradient border-primary/10 hover:border-primary/30 smooth-transition group"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 smooth-transition">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary smooth-transition">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};