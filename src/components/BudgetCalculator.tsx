import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Calculator, TrendingUp, Target, RefreshCw } from "lucide-react";

const BudgetCalculator = () => {
  const [income, setIncome] = useState<string>("");
  const [expenses, setExpenses] = useState<string>("");
  const [goal, setGoal] = useState<string>("");
  const [currentSavings, setCurrentSavings] = useState<number>(0);
  const [potentialSavings, setPotentialSavings] = useState<number>(0);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  useEffect(() => {
    if (income && expenses) {
      const monthlyIncome = parseFloat(income) || 0;
      const monthlyExpenses = parseFloat(expenses) || 0;
      const savingsGoal = parseFloat(goal) || 0;

      const current = Math.max(0, monthlyIncome - monthlyExpenses);
      setCurrentSavings(current);

      // Calculate potential savings with 10-20% expense reduction
      const optimizedExpenses = monthlyExpenses * 0.85; // 15% reduction
      const potential = Math.max(0, monthlyIncome - optimizedExpenses);
      setPotentialSavings(potential);

      // Generate suggestions
      const newSuggestions = [];
      if (monthlyExpenses > monthlyIncome * 0.7) {
        newSuggestions.push(
          "Consider reducing dining out by 30% to save $" +
            Math.round(monthlyExpenses * 0.15 * 0.3)
        );
      }
      if (current < savingsGoal) {
        const needed = savingsGoal - current;
        newSuggestions.push(
          "Cut subscription services to reach your goal faster (+$" +
            Math.round(needed * 0.4) +
            "/month)"
        );
      }
      if (monthlyIncome > 0) {
        newSuggestions.push(
          "Automate transfers to save " +
            Math.round((potential / monthlyIncome) * 100) +
            "% of your income"
        );
      }
      setSuggestions(newSuggestions);
    }
  }, [income, expenses, goal]);

  const resetCalculator = () => {
    setIncome("");
    setExpenses("");
    setGoal("");
    setCurrentSavings(0);
    setPotentialSavings(0);
    setSuggestions([]);
  };

  const savingsRate = income ? (currentSavings / parseFloat(income)) * 100 : 0;
  const potentialRate = income
    ? (potentialSavings / parseFloat(income)) * 100
    : 0;
  const goalProgress = goal ? (currentSavings / parseFloat(goal)) * 100 : 0;

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-4">
            <Calculator className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">Interactive Tool</span>
          </div>
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Budget Calculator Preview
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            See how much you could save with smarter budgeting. Get personalized
            insights in seconds.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Input Section */}
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  Your Financial Details
                </CardTitle>
                <CardDescription>
                  Enter your monthly figures to see potential savings
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <TooltipProvider>
                  <div className="space-y-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Label htmlFor="income" className="cursor-help">
                          Monthly Income
                        </Label>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Your total after-tax monthly income from all sources
                        </p>
                      </TooltipContent>
                    </Tooltip>
                    <Input
                      id="income"
                      type="number"
                      placeholder="e.g., 5000"
                      value={income}
                      onChange={(e) => setIncome(e.target.value)}
                      className="text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Label htmlFor="expenses" className="cursor-help">
                          Monthly Expenses
                        </Label>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          Total monthly spending including rent, food,
                          utilities, and entertainment
                        </p>
                      </TooltipContent>
                    </Tooltip>
                    <Input
                      id="expenses"
                      type="number"
                      placeholder="e.g., 3500"
                      value={expenses}
                      onChange={(e) => setExpenses(e.target.value)}
                      className="text-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Label htmlFor="goal" className="cursor-help">
                          Savings Goal
                        </Label>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>How much you'd like to save each month</p>
                      </TooltipContent>
                    </Tooltip>
                    <Input
                      id="goal"
                      type="number"
                      placeholder="e.g., 1000"
                      value={goal}
                      onChange={(e) => setGoal(e.target.value)}
                      className="text-lg"
                    />
                  </div>
                </TooltipProvider>

                <Button
                  onClick={resetCalculator}
                  variant="outline"
                  className="w-full"
                >
                  <RefreshCw className="h-4 w-4 mr-2" />
                  Reset Calculator
                </Button>
              </CardContent>
            </Card>

            {/* Results Section */}
            <Card className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent pointer-events-none" />
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  Your Savings Potential
                </CardTitle>
                <CardDescription>
                  Personalized insights based on your input
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {income && expenses ? (
                  <>
                    {/* Current Savings */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">
                          Current Savings
                        </span>
                        <span className="text-2xl font-bold text-primary">
                          ${currentSavings.toLocaleString()}
                        </span>
                      </div>
                      <Progress
                        value={Math.min(goalProgress, 100)}
                        className="h-3"
                      />
                      <p className="text-sm text-muted-foreground">
                        {savingsRate.toFixed(1)}% of income •{" "}
                        {goalProgress.toFixed(0)}% of goal
                      </div>

                    {/* Potential Savings */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">
                          Potential Savings
                        </span>
                        <span className="text-2xl font-bold text-primary-glow">
                          ${potentialSavings.toLocaleString()}
                        </span>
                      </div>
                      <Progress
                        value={Math.min(potentialRate * 2, 100)}
                        className="h-3"
                      />
                      <p className="text-sm text-muted-foreground">
                        {potentialRate.toFixed(1)}% of income with optimization
                      </p>
                    </div>

                    {/* Suggestions */}
                    {suggestions.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="font-medium text-sm">
                          💡 Smart Suggestions
                        </h4>
                        <div className="space-y-2">
                          {suggestions.map((suggestion, index) => (
                            <div
                              key={index}
                              className="text-sm p-3 bg-primary/5 rounded-lg border border-primary/10"
                            >
                              {suggestion}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* CTA */}
                    <div className="pt-4 border-t">
                      <Button className="w-full" variant="hero">
                        Get Full Analysis & Start Saving
                      </Button>
                      <p className="text-xs text-muted-foreground text-center mt-2">
                        See detailed breakdowns and get personalized budgeting
                        tips
                      </p>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>
                      Enter your financial details to see your savings potential
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BudgetCalculator;
