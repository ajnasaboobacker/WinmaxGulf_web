import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Shield, Award, Users, Clock, Star, CheckCircle } from "lucide-react";
import EnhancedScrollAnimation from "./EnhancedScrollAnimations";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      title: "ISO Certified",
      description: "Quality Management System",
      color: "bg-green-500"
    },
    {
      icon: Award,
      title: "5+ Years",
      description: "Industry Experience",
      color: "bg-blue-500"
    },
    {
      icon: Users,
      title: "500+ Projects",
      description: "Successfully Completed",
      color: "bg-purple-500"
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description: "Technical Assistance",
      color: "bg-orange-500"
    },
    {
      icon: Star,
      title: "Premium Quality",
      description: "International Standards",
      color: "bg-yellow-500"
    },
    {
      icon: CheckCircle,
      title: "Warranty",
      description: "2-Year Coverage",
      color: "bg-teal-500"
    }
  ];

  return (
    <section className="py-12 bg-gradient-to-r from-winmax-orange/5 to-tech-blue/5">
      <div className="container mx-auto px-6 lg:px-8">
        <EnhancedScrollAnimation animation="fadeInUp">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Why Choose WinmaxGulf?
            </h3>
            <p className="text-foreground/80">
              Trusted by businesses across the UAE for quality and reliability
            </p>
          </div>
        </EnhancedScrollAnimation>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {badges.map((badge, index) => (
            <EnhancedScrollAnimation 
              key={index} 
              animation="scaleIn" 
              delay={index * 100}
            >
              <Card className="p-4 text-center hover:shadow-lg transition-all duration-300 border-winmax-orange/20 group">
                <div className={`w-12 h-12 ${badge.color} rounded-full flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-200`}>
                  <badge.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold text-sm text-foreground mb-1">
                  {badge.title}
                </h4>
                <p className="text-xs text-foreground/70">
                  {badge.description}
                </p>
              </Card>
            </EnhancedScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;