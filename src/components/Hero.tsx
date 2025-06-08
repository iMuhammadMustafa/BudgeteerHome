import { Button } from "@/components/ui/button";
import { ArrowRight, DollarSign, TrendingUp, PiggyBank } from "lucide-react";
import heroImage from "@/assets/hero-budget.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm"></div>
      </div>

      {/* Floating Money Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <DollarSign
          className="absolute top-1/4 left-1/4 w-8 h-8 text-primary/30 float-animation"
          style={{ animationDelay: "0s" }}
        />
        <TrendingUp
          className="absolute top-1/3 right-1/4 w-6 h-6 text-primary/20 float-animation"
          style={{ animationDelay: "2s" }}
        />
        <PiggyBank
          className="absolute bottom-1/3 left-1/3 w-10 h-10 text-primary/25 float-animation"
          style={{ animationDelay: "4s" }}
        />
        <DollarSign
          className="absolute bottom-1/4 right-1/3 w-7 h-7 text-primary/30 float-animation"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="text-gradient">Master Your Money</span>
            <br />
            <span className="text-foreground">Track Every Dollar</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Transform your financial future with intelligent budget tracking.
            Visualize spending patterns, set smart goals, and achieve financial
            freedom.
          </p>

          {/* Money Flow Animation */}
          <div className="flex justify-center items-center gap-4 mb-12">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-primary rounded-full money-flow"></div>
              <div
                className="w-6 h-6 bg-primary-glow rounded-full money-flow"
                style={{ animationDelay: "0.5s" }}
              ></div>
              <div
                className="w-4 h-4 bg-primary rounded-full money-flow"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
            <ArrowRight className="w-8 h-8 text-primary pulse-glow" />
            <div className="flex flex-col gap-2">
              <div className="px-4 py-2 bg-primary/20 rounded-lg text-sm font-medium">
                Housing
              </div>
              <div className="px-4 py-2 bg-primary/20 rounded-lg text-sm font-medium">
                Food
              </div>
              <div className="px-4 py-2 bg-primary/20 rounded-lg text-sm font-medium">
                Savings
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              <a href="budgeteer.muhammadmustafa.dev/Login" className="text-lg">
                Start Tracking Now
              </a>
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="glow" size="lg" className="text-lg px-8 py-4">
              <a
                href="https://github.com/iMuhammadMustafa/Budgeteer"
                target="_blank"
                rel="noopener noreferrer"
              >
                Documentation
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
