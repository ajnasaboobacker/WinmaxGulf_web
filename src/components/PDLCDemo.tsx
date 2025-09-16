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
            PDLC Smart Glass Windows - {currentRoom.title}
          </h3>
          <p className="text-muted-foreground">
            {currentRoom.description} - Watch only the window glasses switch
          </p>
        </div>

        {/* Glass Demo Area */}
        <div className="relative h-80 md:h-96 rounded-xl overflow-hidden border-4 border-gray-300 bg-gray-100 shadow-2xl">
          
          {/* Real Room Background - Always Visible */}
          <div className="absolute inset-0">
            <img 
              src={currentRoom.image}
              alt={`${currentRoom.title} interior`}
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay for better contrast */}
            <div className="absolute inset-0 bg-black/5"></div>
          </div>

          {/* PDLC Glass Windows - Only on specific window areas */}
          {roomType === 'conference' && (
            <>
              {/* Left Window */}
              <div 
                className={`absolute top-8 left-8 w-24 h-32 md:w-32 md:h-40 transition-all duration-1000 ease-in-out rounded-lg ${
                  isTransparent 
                    ? 'bg-transparent backdrop-blur-none border-2 border-white/30' 
                    : 'bg-white/90 backdrop-blur-md border-2 border-gray-300'
                }`}
              >
                {!isTransparent && (
                  <div className="absolute inset-0 rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-gray-100/70 rounded-lg"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.9)_1px,transparent_1px)] bg-[length:15px_15px] opacity-50 rounded-lg"></div>
                  </div>
                )}
              </div>
              
              {/* Right Window */}
              <div 
                className={`absolute top-12 right-12 w-20 h-28 md:w-28 md:h-36 transition-all duration-1000 ease-in-out rounded-lg ${
                  isTransparent 
                    ? 'bg-transparent backdrop-blur-none border-2 border-white/30' 
                    : 'bg-white/90 backdrop-blur-md border-2 border-gray-300'
                }`}
              >
                {!isTransparent && (
                  <div className="absolute inset-0 rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-gray-100/70 rounded-lg"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.9)_1px,transparent_1px)] bg-[length:15px_15px] opacity-50 rounded-lg"></div>
                  </div>
                )}
              </div>
            </>
          )}

          {roomType === 'bedroom' && (
            <>
              {/* Main Window */}
              <div 
                className={`absolute top-6 right-8 w-32 h-40 md:w-40 md:h-48 transition-all duration-1000 ease-in-out rounded-lg ${
                  isTransparent 
                    ? 'bg-transparent backdrop-blur-none border-2 border-white/30' 
                    : 'bg-white/90 backdrop-blur-md border-2 border-gray-300'
                }`}
              >
                {!isTransparent && (
                  <div className="absolute inset-0 rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-gray-100/70 rounded-lg"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.9)_1px,transparent_1px)] bg-[length:15px_15px] opacity-50 rounded-lg"></div>
                  </div>
                )}
              </div>
              
              {/* Side Window */}
              <div 
                className={`absolute top-16 left-6 w-16 h-24 md:w-20 md:h-28 transition-all duration-1000 ease-in-out rounded-lg ${
                  isTransparent 
                    ? 'bg-transparent backdrop-blur-none border-2 border-white/30' 
                    : 'bg-white/90 backdrop-blur-md border-2 border-gray-300'
                }`}
              >
                {!isTransparent && (
                  <div className="absolute inset-0 rounded-lg">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/70 to-gray-100/70 rounded-lg"></div>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.9)_1px,transparent_1px)] bg-[length:15px_15px] opacity-50 rounded-lg"></div>
                  </div>
                )}
              </div>
            </>
          )}

          {/* Status Indicator */}
          <div className="absolute top-4 left-4 flex items-center gap-2 bg-background/90 backdrop-blur-sm rounded-full px-4 py-2 border border-winmax-orange/20">
            <div className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              isTransparent ? 'bg-green-500' : 'bg-red-500'
            }`}></div>
            <span className="text-sm font-medium">
              Windows: {isTransparent ? 'Clear' : 'Private'}
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