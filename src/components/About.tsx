import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Target, Eye, Award } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "Comprehensive Solutions",
      description: "Complete range of technology solutions under one roof"
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "End-to-End Service", 
      description: "From consultation to installation and training"
    },
    {
      icon: <Eye className="h-6 w-6" />,
      title: "Customer-Centric",
      description: "Innovation, reliability, and customer satisfaction focused"
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Proven Expertise",
      description: "Leading UAE provider with years of experience"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-tech-blue/20 to-tech-purple/20 border border-tech-blue/30 mb-6">
              <span className="text-sm font-medium text-tech-blue">About Winmax Gulf</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Transforming Spaces with 
              <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent"> Innovation</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              Winmax Gulf is a leading UAE-based provider of advanced technology solutions, specializing in PDLC smart film, LED display systems, and turnkey DJ club solutions. We transform residential, commercial, and corporate environments through innovative products that enhance privacy, visual communication, and interactive user experiences.
            </p>

            {/* Vision & Mission */}
            <div className="space-y-6 mb-8">
              <div className="p-6 rounded-lg bg-gradient-to-r from-tech-blue/10 to-tech-purple/10 border border-tech-blue/20">
                <h3 className="font-bold text-lg mb-2 text-tech-blue">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the leading provider of smart and innovative technology solutions that transform environments and elevate everyday experiences across the UAE and beyond.
                </p>
              </div>
              
              <div className="p-6 rounded-lg bg-gradient-to-r from-tech-purple/10 to-tech-cyan/10 border border-tech-purple/20">
                <h3 className="font-bold text-lg mb-2 text-tech-purple">Our Mission</h3>
                <p className="text-muted-foreground">
                  To deliver high-quality technology solutions that empower businesses, enhance privacy, and create impactful visual experiences through innovation, reliability, and customer-focused service.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Features */}
          <div className="animate-slide-up">
            <div className="grid gap-6">
              {features.map((feature, index) => (
                <Card 
                  key={index} 
                  className="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-card to-secondary/10 border-border/50 hover:border-tech-blue/50"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-gradient-to-r from-tech-blue to-tech-purple rounded-lg text-primary-foreground flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-2 group-hover:text-tech-blue transition-colors">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 p-8 rounded-lg bg-gradient-to-r from-tech-blue/5 to-tech-purple/5 border border-tech-blue/10">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-tech-blue mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Successful Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tech-purple mb-2">10+</div>
                  <div className="text-sm text-muted-foreground">Years in Business</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tech-cyan mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Quality Assurance</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-tech-orange mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;