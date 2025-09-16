import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Power, Eye, EyeOff, Building, Home } from "lucide-react";
import conferenceRoom from "@/assets/conference-room.jpg";
import bedroomRoom from "@/assets/bedroom-room.jpg";

const PDLCDemo = () => {
  const [isTransparent, setIsTransparent] = useState(false);
  const [isAutoDemo, setIsAutoDemo] = useState(true);
  const [roomType, setRoomType] = useState<'conference' | 'bedroom'>('conference');

  const rooms = {
    conference: {
      image: conferenceRoom,
      title: "Conference Room",
      description: "Private business meetings"
    },
    bedroom: {
      image: bedroomRoom,
      title: "Bedroom",
      description: "Personal privacy space"
    }
  };

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

  const switchRoom = () => {
    setRoomType(roomType === 'conference' ? 'bedroom' : 'conference');
  };

  const currentRoom = rooms[roomType];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Demo Container */}
      <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-background/20 to-background/40 backdrop-blur-sm border border-winmax-orange/20 p-8">
        
        {/* Title */}
        <div className="text-center mb-6">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            PDLC Smart Glass Demo - {currentRoom.title}
          </h3>
          <p className="text-muted-foreground">
            {currentRoom.description} - Watch the privacy glass switch
          </p>
        </div>

        {/* Glass Demo Area */}
        <div className="relative h-80 md:h-96 rounded-xl overflow-hidden border-4 border-gray-300 bg-gray-100 shadow-2xl">
          
          {/* Real Room Background */}
          <div className="absolute inset-0">
            <img 
              src={currentRoom.image}
              alt={`${currentRoom.title} interior`}
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay for better contrast */}
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          {/* PDLC Glass Overlay */}
          <div 
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              isTransparent 
                ? 'bg-transparent backdrop-blur-none opacity-0' 
                : 'bg-white/95 backdrop-blur-md opacity-100'
            }`}
          >
            {/* Frosted glass texture when opaque */}
            {!isTransparent && (
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-gray-100/60"></div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[length:25px_25px] opacity-40"></div>
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.1)_75%)] bg-[length:20px_20px] opacity-30"></div>
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <Button
            onClick={toggleGlass}
            size="lg"
            className="bg-gradient-to-r from-winmax-orange to-winmax-orange-light hover:opacity-90 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105"
          >
            <Power className="mr-2 h-5 w-5" />
            {isTransparent ? 'Turn OFF (Private)' : 'Turn ON (Transparent)'}
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

          <Button
            onClick={switchRoom}
            variant="outline"
            size="lg"
            className="border-2 border-tech-blue text-tech-blue hover:bg-tech-blue/10 px-8 py-4 text-lg font-semibold rounded-full"
          >
            {roomType === 'conference' ? <Home className="mr-2 h-5 w-5" /> : <Building className="mr-2 h-5 w-5" />}
            Switch to {roomType === 'conference' ? 'Bedroom' : 'Conference'}
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