import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BarChart3, Shield, Smartphone, Zap, Target, Bell } from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Smart Analytics",
    description:
      "AI-powered insights that reveal spending patterns and suggest optimizations for your budget.",
    tooltip:
      "Automatically analyzes your spending habits to identify savings opportunities. Provides personalized recommendations to optimize your budget.",
  },
  {
    icon: Shield,
    title: "Multi Tenant ",
    description:
      "Your financial data is shared with people you trust and invite to your tenancy.",
    tooltip:
      "Easily manage shared budgets and expenses with customizable permissions. Collaborate with family or friends while keeping your data secure.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First Design",
    description:
      "Track expenses on-the-go with our intuitive mobile app that syncs across all devices.",
    tooltip:
      "Responsive design that works perfectly on phones, tablets, and desktop. Access your budget anywhere, anytime.",
  },
  {
    icon: Zap,
    title: "Real-Time Sync",
    description:
      "Automatic transaction categorization and instant updates across all connected accounts.",
    tooltip:
      "Connects to your bank accounts and credit cards for instant transaction updates. Smart categorization saves time on manual entry.",
  },
  {
    icon: Target,
    title: "Goal Setting",
    description:
      "Set and achieve financial goals with personalized milestones and progress tracking.",
    tooltip:
      "Create custom savings goals and debt payoff plans with visual progress tracking. Receive milestone celebrations to stay motivated.",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description:
      "Get notified about unusual spending, bill due dates, and budget limit warnings.",
    tooltip:
      "Proactive notifications help you stay on budget and never miss payments. Customizable alerts for spending limits and unusual activity.",
  },
];

export const Features = () => {
  return (
    <TooltipProvider>
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Features of</span> Budgeteer?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the power of intelligent budget management with features
            designed to simplify your financial life.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Tooltip key={index} delayDuration={0}>
                <TooltipTrigger asChild>
                  <Card className="hover-lift card-gradient border-primary/10 hover:border-primary/30 smooth-transition group cursor-pointer">
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
                </TooltipTrigger>
                <TooltipContent
                  side="top"
                  className="max-w-xs p-3 bg-popover/95 backdrop-blur-sm border border-primary/20 shadow-lg"
                >
                  <p className="text-sm text-popover-foreground leading-relaxed">
                    {feature.tooltip}
                  </p>
                </TooltipContent>
              </Tooltip>
            );
          })}
        </div>
      </section>
    </TooltipProvider>
  );
};
