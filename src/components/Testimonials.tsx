import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Manager",
    content:
      "Budgeteer completely transformed how I manage my finances. I've saved over $3,000 in just 6 months! Unfortunately, it’s all in unused gift cards I found while decluttering my wallet.",
    rating: 5,
    avatar: "SJ",
  },
  {
    name: "Michael Chen",
    role: "Software Developer",
    content:
      "The automated categorization is incredible. It saves me hours every month and the insights are spot-on.",
    rating: 5,
    avatar: "MC",
  },
  {
    name: "Emily Rodriguez",
    role: "Teacher",
    content:
      "Finally, a budget app that actually makes sense. The visual reports help me understand my spending patterns.",
    rating: 5,
    avatar: "ER",
  },
  {
    name: "David Thompson",
    role: "Small Business Owner",
    content:
      "The goal-setting feature motivated me to pay off my credit card debt 6 months ahead of schedule.",
    rating: 5,
    avatar: "DT",
  },
  {
    name: "Lisa Wang",
    role: "Freelance Designer",
    content:
      "As someone with irregular income, Budgeteer helps me stay on track even during lean months.",
    rating: 5,
    avatar: "LW",
  },
  {
    name: "James Miller",
    role: "Financial Advisor",
    content:
      "I recommend Budgeteer to all my clients. It's the most intuitive financial tracking tool I've seen.",
    rating: 5,
    avatar: "JM",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-gradient">Trusted by</span> Thousands
          <small className="text-muted-foreground text-xs opacity-70 mx-2">
            (Not Really)
          </small>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Join users who have transformed their financial lives with Budgeteer.
        </p>
        <small className="text-muted-foreground text-xs opacity-70 mx-2">
          (Placeholder Fake Testimonials Below)
        </small>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <Card
            key={index}
            className="hover-lift card-gradient border-primary/10 hover:border-primary/30 smooth-transition group"
          >
            <CardContent className="pt-6">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              <div className="flex items-center gap-3">
                <Avatar className="w-10 h-10">
                  <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                    {testimonial.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
