import { useState, useEffect } from "react";
import { Bot, Zap, Eye, Monitor, Music, Star } from "lucide-react";

const CharacterAnimations = () => {
  const [activeCharacter, setActiveCharacter] = useState(0);
  
  const characters = [
    {
      icon: Bot,
      name: "Smart Assistant",
      message: "Let me help you choose the perfect solution!",
      color: "from-tech-blue to-tech-cyan",
      position: "left"
    },
    {
      icon: Eye,
      name: "Privacy Expert",
      message: "PDLC smart film provides instant privacy control",
      color: "from-winmax-orange to-winmax-orange-light",
      position: "right"
    },
    {
      icon: Monitor,
      name: "Display Specialist",
      message: "High-quality LED displays for any application",
      color: "from-tech-purple to-tech-blue",
      position: "left"
    },
    {
      icon: Music,
      name: "Entertainment Pro",
      message: "Complete DJ club solutions with immersive experiences",
      color: "from-tech-orange to-winmax-orange",
      position: "right"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCharacter((prev) => (prev + 1) % characters.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-8 left-8 right-8 z-40 pointer-events-none">
      {characters.map((character, index) => {
        const Character = character.icon;
        const isActive = index === activeCharacter;
        
        return (
          <div
            key={index}
            className={`
              absolute transition-all duration-700 ease-out
              ${character.position === 'left' ? 'left-0' : 'right-0'}
              ${isActive ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
              pointer-events-auto
            `}
          >
            <div className="flex items-end space-x-3 max-w-sm">
              {character.position === 'left' && (
                <>
                  {/* Character Avatar */}
                  <div className={`
                    relative p-4 rounded-full bg-gradient-to-r ${character.color} 
                    animate-bounce-gentle shadow-lg
                    before:absolute before:inset-0 before:rounded-full 
                    before:bg-gradient-to-r before:${character.color} before:opacity-50 
                    before:animate-pulse before:-z-10 before:scale-110
                  `}>
                    <Character className="h-8 w-8 text-white animate-wiggle" />
                  </div>
                  
                  {/* Speech Bubble */}
                  <div className="relative bg-card border border-border/50 rounded-lg p-3 shadow-lg backdrop-blur-sm animate-scale-up">
                    <p className="text-sm font-medium">{character.message}</p>
                    <div className="absolute left-0 top-1/2 transform -translate-x-2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-r-[8px] border-transparent border-r-card"></div>
                  </div>
                </>
              )}
              
              {character.position === 'right' && (
                <>
                  {/* Speech Bubble */}
                  <div className="relative bg-card border border-border/50 rounded-lg p-3 shadow-lg backdrop-blur-sm animate-scale-up">
                    <p className="text-sm font-medium">{character.message}</p>
                    <div className="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2 w-0 h-0 border-t-[6px] border-b-[6px] border-l-[8px] border-transparent border-l-card"></div>
                  </div>
                  
                  {/* Character Avatar */}
                  <div className={`
                    relative p-4 rounded-full bg-gradient-to-r ${character.color} 
                    animate-bounce-gentle shadow-lg
                    before:absolute before:inset-0 before:rounded-full 
                    before:bg-gradient-to-r before:${character.color} before:opacity-50 
                    before:animate-pulse before:-z-10 before:scale-110
                  `}>
                    <Character className="h-8 w-8 text-white animate-wiggle" />
                  </div>
                </>
              )}
            </div>
          </div>
        );
      })}
      
      {/* Character Indicator */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {characters.map((_, index) => (
          <div
            key={index}
            className={`
              w-2 h-2 rounded-full transition-all duration-300
              ${index === activeCharacter 
                ? 'bg-winmax-orange scale-125' 
                : 'bg-muted-foreground/30 scale-100'
              }
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default CharacterAnimations;