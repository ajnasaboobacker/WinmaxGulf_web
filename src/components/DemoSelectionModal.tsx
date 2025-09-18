import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Play, Film, Zap, Music } from "lucide-react";
import PDLCDemoModal from "./PDLCDemoModal";
import LEDDisplayDemoModal from "./LEDDisplayDemoModal";
import DJClubDemoModal from "./DJClubDemoModal";

interface DemoSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DemoSelectionModal = ({ isOpen, onClose }: DemoSelectionModalProps) => {
  const [selectedDemo, setSelectedDemo] = useState<string | null>(null);

  const handleDemoSelect = (demoType: string) => {
    setSelectedDemo(demoType);
  };

  const handleCloseDemo = () => {
    setSelectedDemo(null);
    onClose();
  };

  const demoOptions = [
    {
      id: "pdlc",
      title: "PDLC Smart Film Demo",
      description: "See our privacy glass technology in action",
      icon: Film,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: "led",
      title: "LED Display Systems",
      description: "High-resolution LED displays for any space",
      icon: Zap,
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: "dj",
      title: "TurnKey DJ Solutions",
      description: "Complete club and entertainment systems",
      icon: Music,
      gradient: "from-green-500 to-blue-600"
    }
  ];

  return (
    <>
      {/* Demo Selection Modal */}
      <Dialog open={isOpen && !selectedDemo} onOpenChange={onClose}>
        <DialogContent className="max-w-4xl w-full p-0 bg-background/95 backdrop-blur-md border border-winmax-orange/20">
          <DialogHeader className="p-6 pb-4">
            <DialogTitle className="text-2xl md:text-3xl font-bold text-center">
              Choose a Demo to Watch
            </DialogTitle>
          </DialogHeader>
          
          <div className="p-6 pt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {demoOptions.map((option) => {
                const IconComponent = option.icon;
                return (
                  <Button
                    key={option.id}
                    variant="outline"
                    className="h-auto p-6 flex flex-col items-center space-y-4 hover:scale-105 transition-all duration-300 border-2 hover:border-winmax-orange"
                    onClick={() => handleDemoSelect(option.id)}
                  >
                    <div className={`p-4 rounded-full bg-gradient-to-r ${option.gradient} text-white`}>
                      <IconComponent size={32} />
                    </div>
                    <div className="text-center">
                      <h3 className="font-semibold text-lg mb-2">{option.title}</h3>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                    </div>
                    <Play className="h-5 w-5 text-winmax-orange" />
                  </Button>
                );
              })}
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Individual Demo Modals */}
      <PDLCDemoModal 
        isOpen={selectedDemo === "pdlc"} 
        onClose={handleCloseDemo} 
      />
      
      <LEDDisplayDemoModal 
        isOpen={selectedDemo === "led"} 
        onClose={handleCloseDemo} 
      />
      
      <DJClubDemoModal 
        isOpen={selectedDemo === "dj"} 
        onClose={handleCloseDemo} 
      />
    </>
  );
};

export default DemoSelectionModal;