import { Card, CardContent } from "@/components/ui/card";
import { Search, Wrench, GraduationCap, ArrowRight } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: <Search className="h-8 w-8" />,
      title: "On-site Consultation",
      description: "We visit your location to understand your requirements and provide expert recommendations.",
      details: ["Site assessment", "Requirement analysis", "Custom solution design", "Cost estimation"]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Execution & Installation", 
      description: "Professional installation by our certified technicians with minimal disruption to your operations.",
      details: ["Professional installation", "Quality assurance", "System testing", "Performance validation"]
    },
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Training & Handover",
      description: "Comprehensive training and ongoing support to ensure you get the most out of your investment.",
      details: ["User training", "System handover", "Documentation", "Ongoing support"]
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-tech-blue/20 to-tech-purple/20 border border-tech-blue/30 mb-6">
            <span className="text-sm font-medium text-tech-blue">Our Process</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Simple & 
            <span className="bg-gradient-to-r from-tech-blue to-tech-purple bg-clip-text text-transparent"> Efficient</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our streamlined process ensures smooth project delivery from initial consultation to final handover.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
            <div className="flex justify-between items-center">
              <div className="w-1/3 h-0.5 bg-gradient-to-r from-tech-blue to-tech-purple"></div>
              <div className="w-1/3 h-0.5 bg-gradient-to-r from-tech-purple to-tech-cyan"></div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative animate-slide-up" style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm z-10">
                  {index + 1}
                </div>

                <Card className="group hover:scale-105 transition-all duration-300 bg-gradient-to-br from-card to-secondary/10 border-border/50 hover:border-tech-blue/50 pt-8">
                  <CardContent className="p-6 text-center">
                    {/* Icon */}
                    <div className="inline-flex p-4 bg-gradient-to-r from-tech-blue/20 to-tech-purple/20 rounded-lg mb-6 group-hover:scale-110 transition-transform">
                      <div className="text-tech-blue">
                        {step.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-4 group-hover:text-tech-blue transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center justify-center text-sm">
                          <div className="w-1.5 h-1.5 bg-tech-blue rounded-full mr-3"></div>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Arrow - Mobile */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center mt-6">
                    <ArrowRight className="h-6 w-6 text-tech-blue" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="p-8 rounded-lg bg-gradient-to-r from-tech-blue/10 to-tech-purple/10 border border-tech-blue/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6">
              Let's discuss your project requirements and find the perfect solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-6 py-3 bg-gradient-to-r from-tech-blue to-tech-purple text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                onClick={() => window.open('https://wa.me/+97142713101?text=Hello%20I%20want%20to%20schedule%20a%20consultation', '_blank')}
              >
                Schedule Consultation
              </button>
              <button 
                className="px-6 py-3 border border-tech-blue text-tech-blue rounded-lg hover:bg-tech-blue/10 transition-colors"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;