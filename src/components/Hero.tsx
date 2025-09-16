import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-smart-technology.jpg";
import ScrollAnimation from "./ScrollAnimations";
import { MicroInteractionButton } from "./Microinteractions";
import ParticleBackground from "./ParticleBackground";
import FloatingElements from "./FloatingElements";
import AnimatedGradientBackground from "./AnimatedGradientBackground";
import EnhancedScrollAnimation from "./EnhancedScrollAnimations";
import GlassmorphismCard from "./GlassmorphismCard";
import Interactive3DCard from "./Interactive3DCard";
import PDLCDemoModal from "./PDLCDemoModal";

const Hero = () => {
  const [showDemoModal, setShowDemoModal] = useState(false);
  return (
    <section id="home" className="relative h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-10">
        <img 
          src={heroImage}
          alt="Smart technology and LED display solutions"
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

      <div className="w-full px-6 lg:px-12 relative z-40">
        <EnhancedScrollAnimation animation="bounceIn" delay={200}>
          <div className="max-w-7xl mx-auto py-20 lg:py-32 overflow-visible">
           {/* Badge */}
           <div className="inline-flex items-center px-8 py-4 rounded-full mb-8 bg-background/70 backdrop-blur-md border border-winmax-orange/30 shadow-lg">
             <span className="text-base font-medium text-winmax-orange">✨ Innovative Technology Solutions</span>
           </div>

           {/* Main Heading */}
           <EnhancedScrollAnimation animation="slideInRotate" delay={400}>
             <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-12 leading-[1.2] tracking-tight pb-4">
               Transform Your Space with 
               <span className="block bg-gradient-to-r from-winmax-orange via-tech-blue to-winmax-orange-light bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%] mt-4 pb-2"> Smart Technology</span>
             </h1>
           </EnhancedScrollAnimation>

           {/* Subheading */}
           <EnhancedScrollAnimation animation="fadeInUp" delay={600}>
             <div className="max-w-4xl">
               <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-4 leading-relaxed font-light">
                 Leading UAE provider of PDLC smart film, LED display systems, and turnkey DJ club solutions.
               </p>
               <p className="text-lg md:text-xl text-winmax-orange font-medium mb-12">
                 Enhance privacy, visual communication, and create immersive experiences.
               </p>
             </div>
           </EnhancedScrollAnimation>

           {/* CTA Buttons */}
           <EnhancedScrollAnimation animation="fadeInUp" delay={800}>
             <div className="flex flex-col sm:flex-row gap-6 mb-16">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-winmax-orange to-winmax-orange-light hover:opacity-90 px-12 py-6 text-xl font-semibold transition-all duration-300 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105"
                  onClick={() => window.open('https://wa.me/+97142713101?text=Hello%20I%20want%20to%20know%20about%20your%20services', '_blank')}
                >
                  Get Started Today
                  <ArrowRight className="ml-3 h-6 w-6" />
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-winmax-orange text-winmax-orange hover:bg-winmax-orange/10 backdrop-blur-sm px-12 py-6 text-xl font-semibold rounded-full transition-all duration-300 hover:border-winmax-orange/60"
                  onClick={() => setShowDemoModal(true)}
                >
                 <Play className="mr-3 h-6 w-6" />
                 Watch Demo
               </Button>
             </div>
           </EnhancedScrollAnimation>
         </div>
       </EnhancedScrollAnimation>
      </div>

      {/* PDLC Demo Modal */}
      <PDLCDemoModal 
        isOpen={showDemoModal} 
        onClose={() => setShowDemoModal(false)} 
      />

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