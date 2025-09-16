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
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Animated Gradient Background */}
      <AnimatedGradientBackground variant="hero" className="z-0" />
      
      {/* Background */}
      <div className="absolute inset-0 z-10">
        <img 
          src={heroImage}
          alt="Smart glass technology"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 to-background/20"></div>
      </div>

      {/* Particle Background */}
      <ParticleBackground className="z-20" density={120} />
      
      {/* Floating Elements */}
      <FloatingElements />

      {/* Enhanced Interactive Floating Elements */}
      <div className="absolute inset-0 pointer-events-none z-30">
        <div className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-r from-winmax-orange/30 to-winmax-orange-light/30 rounded-full animate-glow-pulse shadow-neon hidden lg:block backdrop-blur-sm"></div>
        <div className="absolute bottom-40 right-40 w-12 h-12 bg-gradient-to-r from-tech-blue/30 to-tech-purple/30 rounded-full animate-float-up [animation-delay:2s] shadow-lg hidden lg:block backdrop-blur-sm"></div>
        <div className="absolute top-1/2 right-10 w-8 h-8 bg-tech-cyan/40 rounded-full animate-glow-spin [animation-delay:1s] hidden lg:block backdrop-blur-sm"></div>
        <div className="absolute top-40 left-20 w-16 h-16 bg-winmax-orange/20 rounded-full animate-bounce-in hidden lg:block backdrop-blur-sm"></div>
        <div className="absolute bottom-20 left-10 w-10 h-10 bg-gradient-to-r from-tech-purple/25 to-winmax-orange/25 rounded-full animate-wiggle [animation-delay:3s] hidden lg:block backdrop-blur-sm"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-40">
        <EnhancedScrollAnimation animation="bounceIn" delay={200}>
          <div className="max-w-3xl">
           {/* Enhanced Badge */}
           <GlassmorphismCard intensity="medium" glow className="inline-flex items-center px-6 py-3 rounded-full mb-6">
             <span className="text-sm font-medium text-winmax-orange">✨ Innovative Technology Solutions</span>
           </GlassmorphismCard>

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

          {/* Enhanced Interactive CTA Buttons */}
          <EnhancedScrollAnimation animation="zoomIn" delay={800}>
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
               <Interactive3DCard intensity={15} glowEffect>
                 <GlassmorphismCard intensity="light" glow>
                   <MicroInteractionButton 
                     size="lg"
                     className="bg-gradient-to-r from-winmax-orange to-winmax-orange-light shadow-neon hover:shadow-depth px-10 py-5 text-lg font-semibold"
                     onClick={() => window.open('https://wa.me/+97142713101?text=Hello%20I%20want%20to%20know%20about%20your%20services', '_blank')}
                   >
                     Get Started Today
                     <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300 animate-bounce-gentle" />
                   </MicroInteractionButton>
                 </GlassmorphismCard>
               </Interactive3DCard>
               
               <Interactive3DCard intensity={15}>
                 <GlassmorphismCard intensity="light">
                   <MicroInteractionButton 
                     variant="outline" 
                     size="lg"
                     className="border-2 border-winmax-orange text-winmax-orange hover:bg-winmax-orange/20 backdrop-blur-md px-10 py-5 text-lg font-semibold hover:shadow-glow"
                   >
                    <Play className="mr-2 h-5 w-5 group-hover:scale-125 transition-transform duration-300 animate-pulse" />
                    Watch Demo
                  </MicroInteractionButton>
                 </GlassmorphismCard>
               </Interactive3DCard>
            </div>
          </EnhancedScrollAnimation>

          {/* Enhanced Stats */}
          <EnhancedScrollAnimation animation="fadeInUp" delay={1000}>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
               <Interactive3DCard>
                 <GlassmorphismCard intensity="medium" glow className="text-center p-6 group hover:scale-105 transition-all duration-500">
                   <div className="text-3xl md:text-4xl font-bold text-winmax-orange mb-2 animate-glow-pulse">500+</div>
                   <div className="text-sm font-medium text-muted-foreground">Projects Completed</div>
                   <div className="w-full h-1 bg-gradient-to-r from-winmax-orange to-winmax-orange-light rounded-full mt-3 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                 </GlassmorphismCard>
               </Interactive3DCard>
               
               <Interactive3DCard>
                 <GlassmorphismCard intensity="medium" glow className="text-center p-6 group hover:scale-105 transition-all duration-500">
                   <div className="text-3xl md:text-4xl font-bold text-tech-blue mb-2 animate-glow-pulse">15+</div>
                   <div className="text-sm font-medium text-muted-foreground">Years Experience</div>
                   <div className="w-full h-1 bg-gradient-to-r from-tech-blue to-tech-purple rounded-full mt-3 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                 </GlassmorphismCard>
               </Interactive3DCard>
               
               <Interactive3DCard>
                 <GlassmorphismCard intensity="medium" glow className="text-center p-6 group hover:scale-105 transition-all duration-500">
                   <div className="text-3xl md:text-4xl font-bold text-tech-purple mb-2 animate-glow-pulse">100%</div>
                   <div className="text-sm font-medium text-muted-foreground">Client Satisfaction</div>
                   <div className="w-full h-1 bg-gradient-to-r from-tech-purple to-tech-cyan rounded-full mt-3 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                 </GlassmorphismCard>
               </Interactive3DCard>
             </div>
          </EnhancedScrollAnimation>
        </div>
      </EnhancedScrollAnimation>
      </div>

      {/* Enhanced Scroll Indicator */}
       <ParallaxSection speed={0.3} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
         <GlassmorphismCard intensity="light" className="animate-bounce cursor-pointer group">
           <div className="w-6 h-10 border-2 border-winmax-orange rounded-full flex justify-center bg-winmax-orange/10 group-hover:bg-winmax-orange/20 transition-all duration-300">
             <div className="w-1 h-3 bg-winmax-orange rounded-full mt-2 animate-glow-pulse group-hover:animate-bounce-gentle"></div>
           </div>
         </GlassmorphismCard>
       </ParallaxSection>
    </section>
  );
};

export default Hero;