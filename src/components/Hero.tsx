import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-smart-glass.jpg";
import ParallaxSection from "./ParallaxSection";
import ScrollAnimation from "./ScrollAnimations";
import { MicroInteractionButton } from "./Microinteractions";
import ParticleBackground from "./ParticleBackground";
import FloatingElements from "./FloatingElements";
import AnimatedGradientBackground from "./AnimatedGradientBackground";
import EnhancedScrollAnimation from "./EnhancedScrollAnimations";
import GlassmorphismCard from "./GlassmorphismCard";
import Interactive3DCard from "./Interactive3DCard";

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-10">
        <img 
          src={heroImage}
          alt="Smart glass technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 to-background/30"></div>
      </div>

      {/* Subtle Particle Background */}
      <ParticleBackground className="z-20" density={40} />
      
      {/* Minimal Floating Elements */}
      <div className="absolute inset-0 pointer-events-none z-30">
        <div className="absolute top-20 right-20 w-12 h-12 bg-winmax-orange/20 rounded-full animate-pulse hidden lg:block"></div>
        <div className="absolute bottom-40 right-40 w-8 h-8 bg-tech-blue/20 rounded-full animate-bounce [animation-delay:2s] hidden lg:block"></div>
        <div className="absolute top-1/2 right-10 w-6 h-6 bg-tech-cyan/20 rounded-full animate-pulse [animation-delay:1s] hidden lg:block"></div>
        <div className="absolute top-40 left-20 w-10 h-10 bg-winmax-orange/15 rounded-full animate-bounce hidden lg:block"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-40">
        <EnhancedScrollAnimation animation="bounceIn" delay={200}>
          <div className="max-w-3xl">
           {/* Badge */}
           <div className="inline-flex items-center px-6 py-3 rounded-full mb-6 bg-background/60 backdrop-blur border border-winmax-orange/20">
             <span className="text-sm font-medium text-winmax-orange">✨ Innovative Technology Solutions</span>
           </div>

          {/* Enhanced Main Heading */}
           <EnhancedScrollAnimation animation="slideInRotate" delay={400}>
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
               Transform Your Space with 
               <span className="bg-gradient-to-r from-winmax-orange via-tech-blue to-winmax-orange-light bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]"> Smart Technology</span>
             </h1>
           </EnhancedScrollAnimation>

          {/* Enhanced Subheading */}
          <EnhancedScrollAnimation animation="fadeInUp" delay={600}>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Leading UAE provider of PDLC smart film, LED display systems, and turnkey DJ club solutions. 
              <span className="text-winmax-orange font-semibold"> Enhance privacy, visual communication, and create immersive experiences.</span>
            </p>
          </EnhancedScrollAnimation>

           {/* CTA Buttons */}
           <EnhancedScrollAnimation animation="fadeInUp" delay={800}>
             <div className="flex flex-col sm:flex-row gap-6 mb-12">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-winmax-orange to-winmax-orange-light hover:opacity-90 px-10 py-5 text-lg font-semibold transition-opacity"
                  onClick={() => window.open('https://wa.me/+97142713101?text=Hello%20I%20want%20to%20know%20about%20your%20services', '_blank')}
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-winmax-orange text-winmax-orange hover:bg-winmax-orange/10 backdrop-blur-sm px-10 py-5 text-lg font-semibold"
                >
                 <Play className="mr-2 h-5 w-5" />
                 Watch Demo
               </Button>
             </div>
           </EnhancedScrollAnimation>

           {/* Stats */}
           <EnhancedScrollAnimation animation="fadeInUp" delay={1000}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
                <div className="text-center p-6 bg-background/40 backdrop-blur-sm border border-winmax-orange/20 rounded-lg hover:border-winmax-orange/40 transition-colors">
                  <div className="text-3xl md:text-4xl font-bold text-winmax-orange mb-2">500+</div>
                  <div className="text-sm font-medium text-muted-foreground">Projects Completed</div>
                  <div className="w-full h-1 bg-gradient-to-r from-winmax-orange to-winmax-orange-light rounded-full mt-3 opacity-60"></div>
                </div>
                
                <div className="text-center p-6 bg-background/40 backdrop-blur-sm border border-tech-blue/20 rounded-lg hover:border-tech-blue/40 transition-colors">
                  <div className="text-3xl md:text-4xl font-bold text-tech-blue mb-2">15+</div>
                  <div className="text-sm font-medium text-muted-foreground">Years Experience</div>
                  <div className="w-full h-1 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full mt-3 opacity-60"></div>
                </div>
                
                <div className="text-center p-6 bg-background/40 backdrop-blur-sm border border-tech-purple/20 rounded-lg hover:border-tech-purple/40 transition-colors">
                  <div className="text-3xl md:text-4xl font-bold text-tech-purple mb-2">100%</div>
                  <div className="text-sm font-medium text-muted-foreground">Client Satisfaction</div>
                  <div className="w-full h-1 bg-gradient-to-r from-tech-purple to-tech-cyan rounded-full mt-3 opacity-60"></div>
                </div>
              </div>
           </EnhancedScrollAnimation>
        </div>
      </EnhancedScrollAnimation>
      </div>

      {/* Scroll Indicator */}
       <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40 animate-bounce cursor-pointer">
         <div className="w-6 h-10 border-2 border-winmax-orange rounded-full flex justify-center bg-winmax-orange/10 hover:bg-winmax-orange/20 transition-colors">
           <div className="w-1 h-3 bg-winmax-orange rounded-full mt-2"></div>
         </div>
       </div>
    </section>
  );
};

export default Hero;