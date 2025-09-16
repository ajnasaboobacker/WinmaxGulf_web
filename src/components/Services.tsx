import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Monitor, Music } from "lucide-react";
import pdlcBanner from "@/assets/pdlc-banner.jpg";
import ledBanner from "@/assets/led-banner.jpg";
import djBanner from "@/assets/dj-banner.jpg";
import ScrollAnimation from "./ScrollAnimations";
import AnimatedIcon from "./AnimatedIcon";
import { InteractiveCard, MicroInteractionButton } from "./Microinteractions";
import EnhancedScrollAnimation from "./EnhancedScrollAnimations";
import GlassmorphismCard from "./GlassmorphismCard";
import Interactive3DCard from "./Interactive3DCard";
import AnimatedGradientBackground from "./AnimatedGradientBackground";

const Services = () => {
  const services = [
    {
      icon: Eye,
      title: "PDLC Smart Film",
      description: "Switchable glass film for privacy on demand. Suitable for homes, offices, hospitals, and commercial interiors.",
      image: pdlcBanner,
      features: ["Instant Privacy Control", "Energy Efficient", "Easy Installation", "Durable & Long-lasting"],
      link: "https://wa.me/+97142713101?text=Hello%20I%20want%20to%20know%20about%20your%20PDLC%20services"
    },
    {
      icon: Monitor,
      title: "LED Display Systems",
      description: "High-quality indoor and outdoor LED displays for events, advertising, and architectural applications.",
      image: ledBanner,
      features: ["Ultra HD Resolution", "Weather Resistant", "Custom Configurations", "Professional Installation"],
      link: "https://wa.me/+97142713101?text=Hello%20I%20want%20to%20know%20about%20your%20LED%20DISPLAY%20services"
    },
    {
      icon: Music,
      title: "DJ Club Solutions",
      description: "Complete turnkey DJ club setups with immersive audio-visual experiences and interactive installations.",
      image: djBanner,
      features: ["Professional Sound Systems", "Interactive Lighting", "Turnkey Solutions", "Custom Design"],
      link: "https://wa.me/+97142713101?text=Hello%20I%20want%20to%20know%20about%20your%20DJSOLUTION%20services"
    }
  ];

  return (
    <section id="services" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <AnimatedGradientBackground variant="section" className="z-0" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <EnhancedScrollAnimation animation="bounceIn" className="text-center mb-16">
          <GlassmorphismCard intensity="medium" glow className="inline-flex items-center px-6 py-3 rounded-full mb-6">
            <span className="text-sm font-medium text-winmax-orange">🚀 Our Services</span>
          </GlassmorphismCard>
          
          <EnhancedScrollAnimation animation="slideInRotate" delay={200}>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Complete Technology 
              <span className="bg-gradient-to-r from-winmax-orange via-tech-blue to-winmax-orange-light bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]"> Solutions</span>
            </h2>
          </EnhancedScrollAnimation>
          
          <EnhancedScrollAnimation animation="fadeInUp" delay={400}>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              We deliver complete product and project services, covering design, project assistance, training, ongoing maintenance, and 
              <span className="text-winmax-orange font-semibold"> expert technical support to ensure customer success.</span>
            </p>
          </EnhancedScrollAnimation>
        </EnhancedScrollAnimation>

        {/* Enhanced Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <EnhancedScrollAnimation 
              key={index}
              animation="zoomIn"
              delay={index * 200}
            >
              <Interactive3DCard intensity={20} glowEffect>
                <GlassmorphismCard 
                  intensity="medium" 
                  glow 
                  className="overflow-hidden group hover:scale-105 transition-all duration-700"
                >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-winmax-orange/10 via-transparent to-tech-blue/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute top-4 left-4">
                  <AnimatedIcon 
                    icon={service.icon}
                    className="p-3 bg-gradient-to-r from-winmax-orange to-winmax-orange-light rounded-lg text-white shadow-neon"
                    hoverEffect="glow"
                    delay={index * 100}
                  />
                </div>
              </div>
              
              <CardContent className="p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-winmax-orange/5 via-transparent to-tech-blue/5 rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-winmax-orange transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm group/feature hover:text-winmax-orange transition-colors">
                        <div className="w-2 h-2 bg-gradient-to-r from-winmax-orange to-tech-blue rounded-full mr-3 group-hover/feature:scale-125 transition-transform"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Interactive3DCard intensity={10}>
                    <MicroInteractionButton 
                      className="w-full bg-gradient-to-r from-winmax-orange to-winmax-orange-light shadow-glow hover:shadow-neon transition-all duration-500"
                      onClick={() => window.open(service.link, '_blank')}
                    >
                      Enquire Now
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-2 transition-transform animate-bounce-gentle" />
                    </MicroInteractionButton>
                  </Interactive3DCard>
                </div>
              </CardContent>
                </GlassmorphismCard>
              </Interactive3DCard>
            </EnhancedScrollAnimation>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <EnhancedScrollAnimation animation="bounceIn" delay={600}>
          <div className="text-center mt-16">
            <GlassmorphismCard intensity="light" className="inline-block p-8 mx-auto">
              <p className="text-lg text-muted-foreground mb-6">
                Need a <span className="text-winmax-orange font-semibold">custom solution</span>? We're here to help.
              </p>
              <Interactive3DCard intensity={15} glowEffect>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-2 border-winmax-orange text-winmax-orange hover:bg-winmax-orange/20 transition-all duration-500 px-8 py-3 font-semibold hover:scale-105 hover:shadow-glow"
                  onClick={() => window.open('https://wa.me/+97142713101?text=Hello%20I%20want%20to%20know%20about%20your%20custom%20solutions', '_blank')}
                >
                  Get Custom Quote ✨
                </Button>
              </Interactive3DCard>
            </GlassmorphismCard>
          </div>
        </EnhancedScrollAnimation>
      </div>
    </section>
  );
};

export default Services;