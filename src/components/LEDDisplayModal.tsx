import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

interface LEDDisplayModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LEDDisplayModal = ({ isOpen, onClose }: LEDDisplayModalProps) => {
  const ledDisplayOptions = [
    {
      title: "INDOOR LED DISPLAYS",
      description: "High-resolution displays perfect for indoor events, retail spaces, and corporate environments.",
      features: ["Ultra HD Resolution", "Energy Efficient", "Easy Installation", "Seamless Modules"]
    },
    {
      title: "OUTDOOR LED DISPLAYS", 
      description: "Weather-resistant displays designed for outdoor advertising and large-scale installations.",
      features: ["IP65 Waterproof", "High Brightness", "Weather Resistant", "Anti-UV Coating"]
    },
    {
      title: "TRANSPARENT LED DISPLAY",
      description: "See-through LED technology for modern storefronts and architectural applications.",
      features: ["90% Transparency", "Lightweight Design", "Easy Maintenance", "Modern Aesthetic"]
    },
    {
      title: "LED FLOOR TILE SCREEN",
      description: "Interactive floor displays for events, exhibitions, and entertainment venues.",
      features: ["Load Bearing", "Anti-Slip Surface", "Interactive Touch", "Durable Construction"]
    },
    {
      title: "SHELF LED SCREEN",
      description: "Compact displays perfect for retail shelving and point-of-sale applications.",
      features: ["Compact Design", "Easy Integration", "Bright Display", "Low Power Consumption"]
    },
    {
      title: "SPECIAL SHAPED LED SCREEN",
      description: "Custom-shaped displays for unique architectural and creative installations.",
      features: ["Custom Shapes", "Flexible Design", "Creative Solutions", "Architectural Integration"]
    },
    {
      title: "SMALL PITCH LED SCREEN",
      description: "Ultra-fine pixel pitch for close viewing distances and premium image quality.",
      features: ["Ultra Fine Pitch", "4K+ Resolution", "Close Viewing", "Premium Quality"]
    },
    {
      title: "FLEXIBLE LED SCREEN",
      description: "Bendable LED displays for curved surfaces and innovative installations.",
      features: ["Bendable Design", "Curved Surfaces", "Innovative Install", "Creative Applications"]
    },
    {
      title: "NAKED EYE 3D DISPLAY",
      description: "Advanced 3D technology without glasses for immersive visual experiences.",
      features: ["3D Without Glasses", "Immersive Experience", "Eye-Catching", "Advanced Technology"]
    }
  ];

  const handleEnquire = (displayType: string) => {
    const message = `Hello, I want to know about your ${displayType} services`;
    window.open(`https://wa.me/+971527200466?text=${encodeURIComponent(message)}`, '_blank');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-md border border-winmax-orange/20">
        <DialogHeader className="sticky top-0 bg-background/95 backdrop-blur-md pb-4 border-b border-winmax-orange/10">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-winmax-orange to-winmax-orange-light bg-clip-text text-transparent">
            LED Display Systems
          </DialogTitle>
          <p className="text-center text-muted-foreground mt-2">
            Choose from our comprehensive range of LED display solutions
          </p>
        </DialogHeader>
        
        <div className="p-6 pt-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ledDisplayOptions.map((option, index) => (
              <div 
                key={index}
                className="group p-6 rounded-xl bg-gradient-to-br from-background/50 to-background/30 border border-winmax-orange/20 hover:border-winmax-orange/40 transition-all duration-300 hover:shadow-lg hover:shadow-winmax-orange/10"
              >
                {/* Display Type Header */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-winmax-orange mb-2 group-hover:text-winmax-orange-light transition-colors">
                    {option.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {option.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {option.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-xs">
                      <div className="w-1.5 h-1.5 bg-winmax-orange rounded-full mr-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Enquire Button */}
                <Button
                  onClick={() => handleEnquire(option.title)}
                  className="w-full bg-gradient-to-r from-winmax-orange to-winmax-orange-light hover:shadow-lg hover:shadow-winmax-orange/20 transition-all duration-300 text-sm font-medium"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Enquire Now
                </Button>
              </div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-8 text-center p-6 rounded-xl bg-gradient-to-r from-winmax-orange/5 to-winmax-orange-light/5 border border-winmax-orange/20">
            <p className="text-muted-foreground mb-4">
              Need a custom LED display solution or technical consultation?
            </p>
            <Button
              onClick={() => handleEnquire("custom LED display solution")}
              variant="outline"
              className="border-winmax-orange text-winmax-orange hover:bg-winmax-orange/10"
            >
              Get Custom Quote
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LEDDisplayModal;