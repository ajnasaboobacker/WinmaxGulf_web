import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ExternalLink, Music, Zap, Video, Wrench, Sparkles, Users } from "lucide-react";

interface DJClubModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DJClubModal = ({ isOpen, onClose }: DJClubModalProps) => {
  const services = [
    {
      icon: Music,
      title: "Professional Sound Systems",
      description: "Crystal-clear audio with professional-grade speakers and mixing equipment for the ultimate sound experience."
    },
    {
      icon: Zap,
      title: "Dynamic Lighting Solutions",
      description: "Interactive lighting systems synchronized with music for immersive visual experiences."
    },
    {
      icon: Video,
      title: "Video & Visual Effects",
      description: "LED displays, projections, and visual effects systems for stunning nightclub atmospheres."
    },
    {
      icon: Wrench,
      title: "Rigging & Installation",
      description: "Professional rigging systems and complete installation services for safe and optimal equipment placement."
    },
    {
      icon: Sparkles,
      title: "Special Effects Systems",
      description: "Fog machines, lasers, pyrotechnics, and other special effects for unforgettable experiences."
    },
    {
      icon: Users,
      title: "Turnkey Solutions",
      description: "Complete end-to-end solutions from conceptual design to final handover and ongoing support."
    }
  ];

  const handleEnquire = () => {
    const message = "Hello, I want to know about your DJ Club Solutions and turnkey nightclub services";
    window.open(`https://wa.me/+971527200466?text=${encodeURIComponent(message)}`, '_blank');
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-md border border-winmax-orange/20">
        <DialogHeader className="sticky top-0 bg-background/95 backdrop-blur-md pb-4 border-b border-winmax-orange/10">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-winmax-orange to-winmax-orange-light bg-clip-text text-transparent">
            Winmax Gulf
          </DialogTitle>
          <p className="text-lg font-semibold text-center text-winmax-orange">
            Complete DJ Nightclub Solutions Provider
          </p>
        </DialogHeader>
        
        <div className="p-6 pt-4 space-y-8">
          {/* Main Description */}
          <div className="bg-gradient-to-br from-winmax-orange/5 to-winmax-orange-light/5 rounded-xl p-6 border border-winmax-orange/20">
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              WinmaxGulf is a premier provider of turnkey solutions for DJ nightclubs and entertainment venues. We specialize in the supply, installation, and integration of state-of-the-art sound, lighting, video, rigging, and special effects systems.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              From conceptual design and 3D visualization to final execution and handover, we create immersive nightlife experiences that match international standards.
            </p>
            <p className="text-base leading-relaxed text-muted-foreground">
              With a team of expert engineers, designers, and technicians, and partnerships with leading global brands, WinmaxGulf ensures every nightclub we deliver is optimized for sound quality, lighting brilliance, and visual impact, creating unforgettable moments for your guests.
            </p>
          </div>

          {/* Services Grid */}
          <div>
            <h3 className="text-xl font-bold text-winmax-orange mb-6 text-center">Our Complete Solutions Include:</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="group p-5 rounded-xl bg-gradient-to-br from-background/50 to-background/30 border border-winmax-orange/20 hover:border-winmax-orange/40 transition-all duration-300 hover:shadow-lg hover:shadow-winmax-orange/10"
                >
                  <div className="flex items-center mb-3">
                    <service.icon className="h-6 w-6 text-winmax-orange mr-3" />
                    <h4 className="font-semibold text-sm">{service.title}</h4>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Features */}
          <div className="bg-gradient-to-r from-winmax-orange/10 to-winmax-orange-light/10 rounded-xl p-6 border border-winmax-orange/30">
            <h3 className="text-lg font-bold text-winmax-orange mb-4">Why Choose WinmaxGulf?</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-winmax-orange rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-sm">International Standards</p>
                  <p className="text-xs text-muted-foreground">World-class quality matching global nightclub standards</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-winmax-orange rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-sm">Expert Team</p>
                  <p className="text-xs text-muted-foreground">Professional engineers, designers, and technicians</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-winmax-orange rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-sm">3D Visualization</p>
                  <p className="text-xs text-muted-foreground">Complete conceptual design and visualization</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-winmax-orange rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium text-sm">Global Partnerships</p>
                  <p className="text-xs text-muted-foreground">Partnerships with leading global brands</p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Ready to transform your venue into an unforgettable nightlife experience?
            </p>
            <Button
              onClick={handleEnquire}
              className="bg-gradient-to-r from-winmax-orange to-winmax-orange-light hover:shadow-lg hover:shadow-winmax-orange/20 transition-all duration-300 font-medium px-8 py-3"
            >
              <ExternalLink className="h-4 w-4 mr-2" />
              Get Your Custom DJ Club Solution
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DJClubModal;