import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Power, Eye, EyeOff } from "lucide-react";

const PDLCDemo = () => {
  const [isTransparent, setIsTransparent] = useState(false);
  const [isAutoDemo, setIsAutoDemo] = useState(true);

  // Auto-demo effect
  useEffect(() => {
    if (isAutoDemo) {
      const interval = setInterval(() => {
        setIsTransparent(prev => !prev);
      }, 3000);
      
      return () => clearInterval(interval);
    }
  }, [isAutoDemo]);

  const toggleGlass = () => {
    setIsAutoDemo(false);
    setIsTransparent(!isTransparent);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Demo Container */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-background/20 to-background/40 backdrop-blur-sm border border-winmax-orange/20 p-8">
        
        {/* Title */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            PDLC Smart Glass Demo
          </h3>
          <p className="text-muted-foreground">
            Watch the privacy glass switch from opaque to transparent
          </p>
        </div>

        {/* Glass Demo Area */}
        <div className="relative h-80 md:h-96 rounded-xl overflow-hidden border-4 border-gray-300 bg-gray-100">
          
          {/* Background Scene */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-white text-4xl md:text-6xl font-bold opacity-80">
                PRIVATE ROOM
              </div>
            </div>
            
            {/* Decorative elements in the background */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-white/20 rounded-full"></div>
            <div className="absolute bottom-8 right-8 w-12 h-12 bg-white/30 rounded-full"></div>
            <div className="absolute top-1/2 right-12 w-8 h-8 bg-white/25 rounded-full"></div>
          </div>

          {/* PDLC Glass Overlay */}
          <div 
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              isTransparent 
                ? 'bg-transparent backdrop-blur-none' 
                : 'bg-white/90 backdrop-blur-md'
            }`}
          >
            {/* Frosted pattern when opaque */}
            {!isTransparent && (
              <div className="absolute inset-0 opacity-30">
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-gray-200/40"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
              </div>
            )}
            
            {/* Glass reflection effect */}
            <div className={`absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent transition-opacity duration-1000 ${
              isTransparent ? 'opacity-30' : 'opacity-60'
            }`}></div>
          </div>

          {/* Status Indicator */}
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-background/80 backdrop-blur-sm rounded-full px-4 py-2 border border-winmax-orange/20">
            <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              isTransparent ? 'bg-green-500' : 'bg-red-500'
            }`}></div>
            <span className="text-sm font-medium">
              {isTransparent ? 'Transparent' : 'Opaque'}
            </span>
          </div>

          {/* Power Ripple Effect */}
          {!isAutoDemo && (
            <div className="absolute top-4 right-4">
              <div className="relative">
                <div className="w-4 h-4 bg-winmax-orange rounded-full animate-ping"></div>
                <div className="absolute inset-0 w-4 h-4 bg-winmax-orange rounded-full"></div>
              </div>
            </div>
          )}
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button
            onClick={toggleGlass}
            size="lg"
            className="bg-gradient-to-r from-winmax-orange to-winmax-orange-light hover:opacity-90 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            <Power className="mr-2 h-5 w-5" />
            {isTransparent ? 'Turn OFF' : 'Turn ON'}
          </Button>
          
          <Button
            onClick={() => setIsAutoDemo(!isAutoDemo)}
            variant="outline"
            size="lg"
            className="border-2 border-winmax-orange text-winmax-orange hover:bg-winmax-orange/10 px-8 py-4 text-lg font-semibold rounded-full"
          >
            {isAutoDemo ? <EyeOff className="mr-2 h-5 w-5" /> : <Eye className="mr-2 h-5 w-5" />}
            {isAutoDemo ? 'Stop Auto Demo' : 'Start Auto Demo'}
          </Button>
        </div>

        {/* Technical Info */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          <div className="p-4 bg-background/40 backdrop-blur-sm rounded-lg border border-winmax-orange/10">
            <div className="text-sm font-medium text-muted-foreground">Switch Time</div>
            <div className="text-xl font-bold text-winmax-orange">0.1s</div>
          </div>
          <div className="p-4 bg-background/40 backdrop-blur-sm rounded-lg border border-winmax-orange/10">
            <div className="text-sm font-medium text-muted-foreground">Power Usage</div>
            <div className="text-xl font-bold text-tech-blue">5W/m²</div>
          </div>
          <div className="p-4 bg-background/40 backdrop-blur-sm rounded-lg border border-winmax-orange/10">
            <div className="text-sm font-medium text-muted-foreground">Transparency</div>
            <div className="text-xl font-bold text-tech-purple">85%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PDLCDemo;