import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-smart-glass.jpg";
import ParallaxSection from "./ParallaxSection";
import ScrollAnimation from "./ScrollAnimations";
import { MicroInteractionButton } from "./Microinteractions";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage}
          alt="Smart glass technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/20"></div>
      </div>

      {/* Interactive Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-r from-winmax.orange/30 to-winmax.orange-light/30 rounded-full animate-float shadow-lg hidden lg:block"></div>
      <div className="absolute bottom-40 right-40 w-12 h-12 bg-gradient-to-r from-tech.blue/30 to-tech.purple/30 rounded-full animate-float [animation-delay:2s] shadow-lg hidden lg:block"></div>
      <div className="absolute top-1/2 right-10 w-8 h-8 bg-tech.cyan/40 rounded-full animate-bounce-gentle [animation-delay:1s] hidden lg:block"></div>
      <div className="absolute top-40 left-20 w-16 h-16 bg-winmax.orange/20 rounded-full animate-pulse hidden lg:block"></div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <ScrollAnimation animation="fadeIn" duration={800}>
          <div className="max-w-3xl">
           {/* Badge */}
           <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-winmax.orange/20 to-winmax.orange-light/20 border border-winmax.orange/30 mb-6">
             <span className="text-sm font-medium text-winmax.orange">Innovative Technology Solutions</span>
           </div>

          {/* Main Heading */}
           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
             Transform Your Space with 
             <span className="bg-gradient-to-r from-winmax.orange to-winmax.orange-light bg-clip-text text-transparent"> Smart Technology</span>
           </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Leading UAE provider of PDLC smart film, LED display systems, and turnkey DJ club solutions. 
            Enhance privacy, visual communication, and create immersive experiences.
          </p>

          {/* Interactive CTA Buttons */}
          <ScrollAnimation animation="slideUp" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
               <MicroInteractionButton 
                 size="lg"
                 className="bg-gradient-to-r from-winmax.orange to-winmax.orange-light shadow-lg"
                 onClick={() => window.open('https://wa.me/+97142713101?text=Hello%20I%20want%20to%20know%20about%20your%20services', '_blank')}
               >
                 Get Started Today
                 <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
               </MicroInteractionButton>
               <MicroInteractionButton 
                 variant="outline" 
                 size="lg"
                 className="border-2 border-winmax.orange text-winmax.orange hover:bg-winmax.orange hover:text-white"
               >
                <Play className="mr-2 h-5 w-5 group-hover:scale-125 transition-transform duration-300" />
                Watch Demo
              </MicroInteractionButton>
            </div>
          </ScrollAnimation>

          {/* Stats */}
          <ScrollAnimation animation="slideUp" delay={600}>
             <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border/50">
               <div className="text-center">
                 <div className="text-2xl md:text-3xl font-bold text-winmax.orange mb-2">500+</div>
                 <div className="text-sm text-muted-foreground">Projects Completed</div>
               </div>
               <div className="text-center">
                 <div className="text-2xl md:text-3xl font-bold text-winmax.orange-light mb-2">10+</div>
                 <div className="text-sm text-muted-foreground">Years Experience</div>
               </div>
               <div className="text-center">
                 <div className="text-2xl md:text-3xl font-bold text-winmax.orange mb-2">100%</div>
                 <div className="text-sm text-muted-foreground">Client Satisfaction</div>
               </div>
             </div>
          </ScrollAnimation>
        </div>
      </ScrollAnimation>
      </div>

      {/* Enhanced Scroll Indicator */}
       <ParallaxSection speed={0.3} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
         <div className="animate-bounce cursor-pointer group">
           <div className="w-6 h-10 border-2 border-winmax.orange rounded-full flex justify-center bg-winmax.orange/10 backdrop-blur-sm group-hover:bg-winmax.orange/20 transition-all duration-300">
             <div className="w-1 h-3 bg-winmax.orange rounded-full mt-2 animate-pulse group-hover:animate-bounce-gentle"></div>
           </div>
         </div>
       </ParallaxSection>
    </section>
  );
};

export default Hero;