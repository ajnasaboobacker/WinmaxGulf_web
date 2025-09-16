import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-smart-glass.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-background">
      {/* Simple Background */}
      <div className="absolute inset-0">
        <img 
          src={heroImage}
          alt="Smart glass technology"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/80"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Simple Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-muted/50 border border-border mb-6">
            <span className="text-sm font-medium text-winmax-orange">✨ Innovative Technology Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Transform Your Space with 
            <span className="text-winmax-orange"> Smart Technology</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl">
            Leading UAE provider of PDLC smart film, LED display systems, and turnkey DJ club solutions. 
            <span className="text-winmax-orange font-semibold"> Enhance privacy, visual communication, and create immersive experiences.</span>
          </p>

          {/* Simple CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <Button 
              size="lg"
              className="bg-winmax-orange hover:bg-winmax-orange/90 text-white px-8 py-3 text-lg font-semibold"
              onClick={() => window.open('https://wa.me/+97142713101?text=Hello%20I%20want%20to%20know%20about%20your%20services', '_blank')}
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-winmax-orange text-winmax-orange hover:bg-winmax-orange/10 px-8 py-3 text-lg font-semibold"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          {/* Simple Stats - Fixed alignment */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
            <div className="bg-card/50 border border-border rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-winmax-orange mb-2">500+</div>
              <div className="text-sm font-medium text-muted-foreground">Projects Completed</div>
            </div>
            
            <div className="bg-card/50 border border-border rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-winmax-orange mb-2">15+</div>
              <div className="text-sm font-medium text-muted-foreground">Years Experience</div>
            </div>
            
            <div className="bg-card/50 border border-border rounded-lg p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold text-winmax-orange mb-2">100%</div>
              <div className="text-sm font-medium text-muted-foreground">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-winmax-orange/50 rounded-full flex justify-center bg-background/50">
          <div className="w-1 h-3 bg-winmax-orange rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;