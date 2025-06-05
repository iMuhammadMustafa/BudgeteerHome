import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Smartphone } from "lucide-react";

export const CTA = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="hero-gradient rounded-3xl p-12 md:p-16 relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-40 h-40 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary-glow/10 rounded-full translate-x-1/2 translate-y-1/2"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Take Control of Your 
              <span className="text-gradient block">Financial Future?</span>
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of users who have already transformed their financial lives. 
              Start your journey to financial freedom today.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                <Download className="w-5 h-5" />
                Download Free App
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="glow" size="lg" className="text-lg px-8 py-4">
                <Smartphone className="w-5 h-5" />
                Try Web Version
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">
              <p>✓ No credit card required • ✓ 30-day free trial • ✓ Cancel anytime</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};