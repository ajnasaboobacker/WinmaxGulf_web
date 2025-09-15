import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Monitor, Music } from "lucide-react";
import pdlcBanner from "@/assets/pdlc-banner.jpg";
import ledBanner from "@/assets/led-banner.jpg";
import djBanner from "@/assets/dj-banner.jpg";
import ScrollAnimation from "./ScrollAnimations";
import AnimatedIcon from "./AnimatedIcon";
import { InteractiveCard, MicroInteractionButton } from "./Microinteractions";

const Services = () => {
  const services = [
    {
      icon: <Eye className="h-8 w-8" />,
      title: "PDLC Smart Film",
      description: "Switchable glass film for privacy on demand. Suitable for homes, offices, hospitals, and commercial interiors.",
      image: pdlcBanner,
      features: ["Instant Privacy Control", "Energy Efficient", "Easy Installation", "Durable & Long-lasting"],
      link: "https://wa.me/+97142713101?text=Hello%20I%20want%20to%20know%20about%20your%20PDLC%20services"
    },
    {
      icon: <Monitor className="h-8 w-8" />,
      title: "LED Display Systems",
      description: "High-quality indoor and outdoor LED displays for events, advertising, and architectural applications.",
      image: ledBanner,
      features: ["Ultra HD Resolution", "Weather Resistant", "Custom Configurations", "Professional Installation"],
      link: "https://wa.me/+97142713101?text=Hello%20I%20want%20to%20know%20about%20your%20LED%20DISPLAY%20services"
    },
    {
      icon: <Music className="h-8 w-8" />,
      title: "DJ Club Solutions",
      description: "Complete turnkey DJ club setups with immersive audio-visual experiences and interactive installations.",
      image: djBanner,
      features: ["Professional Sound Systems", "Interactive Lighting", "Turnkey Solutions", "Custom Design"],
      link: "https://wa.me/+97142713101?text=Hello%20I%20want%20to%20know%20about%20your%20DJSOLUTION%20services"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <ScrollAnimation animation="fadeIn" className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-winmax-orange/20 to-winmax-orange-light/20 border border-winmax-orange/30 mb-6">
            <span className="text-sm font-medium text-winmax-orange">Our Services</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Complete Technology 
            <span className="bg-gradient-to-r from-winmax-orange to-winmax-orange-light bg-clip-text text-transparent"> Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We deliver complete product and project services, covering design, project assistance, training, ongoing maintenance, and expert technical support to ensure customer success.
          </p>
        </ScrollAnimation>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollAnimation 
              key={index}
              animation="slideUp"
              delay={index * 200}
            >
              <InteractiveCard 
                hoverEffect="tilt"
                className="bg-gradient-to-br from-card to-secondary/10 border-border/50 hover:border-winmax-orange/50 overflow-hidden"
              >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <AnimatedIcon 
                    icon={service.icon as any}
                    className="p-3 bg-gradient-to-r from-winmax-orange to-winmax-orange-light rounded-lg text-white"
                    hoverEffect="glow"
                    delay={index * 100}
                  />
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-winmax-orange transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {service.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-1.5 h-1.5 bg-winmax-orange rounded-full mr-3"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <MicroInteractionButton 
                  className="w-full bg-gradient-to-r from-winmax-orange to-winmax-orange-light"
                  onClick={() => window.open(service.link, '_blank')}
                >
                  Enquire Now
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </MicroInteractionButton>
              </CardContent>
              </InteractiveCard>
            </ScrollAnimation>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-lg text-muted-foreground mb-6">
            Need a custom solution? We're here to help.
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="border-winmax-orange text-winmax-orange hover:bg-winmax-orange/10 transition-colors"
            onClick={() => window.open('https://wa.me/+97142713101?text=Hello%20I%20want%20to%20know%20about%20your%20custom%20solutions', '_blank')}
          >
            Get Custom Quote
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;