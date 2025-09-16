import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowRight, X } from "lucide-react";
import { MicroInteractionButton } from "./Microinteractions";

interface ServiceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  service: {
    title: string;
    fullTitle: string;
    description: string;
    whatIs: string;
    features: string[];
    perfectFor: {
      category: string;
      details: string;
    }[];
    image: string;
    link: string;
  };
}

const ServiceDetailModal = ({ isOpen, onClose, service }: ServiceDetailModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-background/95 backdrop-blur-lg border border-border/50">
        <DialogHeader className="relative">
          <button
            onClick={onClose}
            className="absolute -top-2 -right-2 p-2 rounded-full bg-background/80 hover:bg-muted transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
          <DialogTitle className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-winmax-orange to-winmax-orange-light bg-clip-text text-transparent">
            {service.fullTitle}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Hero Image */}
          <div className="relative h-48 md:h-64 overflow-hidden rounded-lg">
            <img 
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
          </div>

          {/* What is section */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-winmax-orange">
              What is {service.title}?
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {service.whatIs}
            </p>
          </div>

          {/* Features */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-winmax-orange">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-3">
              {service.features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                  <div className="w-2 h-2 bg-gradient-to-r from-winmax-orange to-tech-blue rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Perfect For */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-winmax-orange">Perfect For:</h3>
            <div className="space-y-4">
              {service.perfectFor.map((item, index) => (
                <div key={index} className="p-4 rounded-lg bg-gradient-to-r from-muted/30 to-muted/10 border border-border/50">
                  <h4 className="font-semibold text-foreground mb-2">{item.category}</h4>
                  <p className="text-sm text-muted-foreground">{item.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-6 border-t border-border/50">
            <MicroInteractionButton 
              className="w-full py-4 px-6 bg-gradient-to-r from-winmax-orange to-winmax-orange-light shadow-glow hover:shadow-neon transition-all duration-500 font-semibold text-base tracking-wide rounded-lg flex items-center justify-center"
              onClick={() => {
                window.open(service.link, '_blank');
                onClose();
              }}
            >
              <span className="flex items-center gap-3">
                Get Quote Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
              </span>
            </MicroInteractionButton>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ServiceDetailModal;