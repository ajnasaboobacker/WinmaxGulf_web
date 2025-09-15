import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Zap, Shield, Star, ArrowRight, TrendingUp, Users, Award } from "lucide-react";

const InteractiveElements = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Smart Privacy Control",
      description: "Instant switchable privacy with PDLC technology",
      color: "from-winmax-orange to-winmax-orange-light"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Energy Efficient",
      description: "Reduce energy costs with smart glass solutions",
      color: "from-tech-blue to-tech-cyan"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Professional Installation",
      description: "Expert installation with lifetime support",
      color: "from-tech-purple to-tech-blue"
    },
    {
      icon: <Star className="h-6 w-6" />,
      title: "Premium Quality",
      description: "Industry-leading materials and components",
      color: "from-winmax-orange-light to-tech-orange"
    }
  ];

  const stats = [
    { icon: <TrendingUp className="h-8 w-8" />, number: "500+", label: "Projects Delivered", color: "text-winmax-orange" },
    { icon: <Users className="h-8 w-8" />, number: "200+", label: "Happy Clients", color: "text-tech-blue" },
    { icon: <Award className="h-8 w-8" />, number: "10+", label: "Years Excellence", color: "text-tech-purple" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-winmax-orange rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-tech-blue rounded-full blur-3xl animate-pulse [animation-delay:1s]"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Interactive Features Showcase */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-gradient-to-r from-winmax-orange/20 to-winmax-orange-light/20 text-winmax-orange border-winmax-orange/30">
            Why Choose Winmax Gulf
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Experience the 
            <span className="bg-gradient-to-r from-winmax-orange to-winmax-orange-light bg-clip-text text-transparent"> Difference</span>
          </h2>
        </div>

        {/* Interactive Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className={`group cursor-pointer transition-all duration-500 hover:scale-105 ${
                activeFeature === index 
                  ? 'shadow-xl bg-gradient-to-br from-card to-secondary/20 border-winmax-orange/50' 
                  : 'hover:shadow-lg'
              }`}
              onClick={() => setActiveFeature(index)}
              onMouseEnter={() => setActiveFeature(index)}
            >
              <CardContent className="p-6 text-center">
                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4 text-white transform transition-transform duration-300 ${
                  activeFeature === index ? 'scale-110 rotate-3' : 'group-hover:scale-105'
                }`}>
                  {feature.icon}
                </div>
                <h3 className="font-bold mb-2 group-hover:text-winmax-orange transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Animated Stats Counter */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 bg-gradient-to-br from-card to-secondary/10 rounded-lg border border-border/50 hover:scale-105 transition-all duration-300 group"
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r from-winmax-orange/20 to-winmax-orange-light/20 mb-4 ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                {stat.icon}
              </div>
              <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-winmax-orange to-winmax-orange-light bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Call to Action with Hover Effects */}
        <div className="text-center">
          <div className="relative inline-block group">
            <div className="absolute -inset-1 bg-gradient-to-r from-winmax-orange to-winmax-orange-light rounded-lg blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
            <Button 
              size="lg"
              className="relative bg-gradient-to-r from-winmax-orange to-winmax-orange-light hover:scale-105 transition-all duration-300 group shadow-lg"
              onClick={() => window.open('https://wa.me/+97142713101?text=Hello%20I%20want%20to%20explore%20your%20innovative%20solutions', '_blank')}
            >
              Explore Our Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveElements;