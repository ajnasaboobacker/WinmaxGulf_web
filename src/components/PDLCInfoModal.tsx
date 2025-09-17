import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface PDLCInfoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PDLCInfoModal = ({ isOpen, onClose }: PDLCInfoModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-full bg-background/95 backdrop-blur-md border border-winmax-orange/20">
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center bg-gradient-to-r from-winmax-orange to-winmax-orange-light bg-clip-text text-transparent">
            Perfect Privacy Solution
          </DialogTitle>
        </DialogHeader>
        
        <div className="p-6 pt-0 space-y-6">
          {/* Main Features */}
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-green-600/10 border border-green-500/20">
              <div className="w-3 h-3 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-green-400">Power ON</p>
                <p className="text-sm text-muted-foreground">Glass becomes fully transparent – people can see through clearly.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-blue-600/10 border border-blue-500/20">
              <div className="w-3 h-3 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
              <div>
                <p className="font-semibold text-blue-400">Power OFF</p>
                <p className="text-sm text-muted-foreground">Glass becomes milky white opaque – visibility is completely blocked.</p>
              </div>
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-gradient-to-br from-winmax-orange/5 to-winmax-orange/10 border border-winmax-orange/20">
              <h4 className="font-semibold text-winmax-orange mb-2">⚡ Effortless Transition</h4>
              <p className="text-sm text-muted-foreground">Switch modes instantly.</p>
            </div>
            
            <div className="p-4 rounded-lg bg-gradient-to-br from-winmax-orange/5 to-winmax-orange/10 border border-winmax-orange/20">
              <h4 className="font-semibold text-winmax-orange mb-2">💡 Light Diffusion</h4>
              <p className="text-sm text-muted-foreground">Opaque mode still allows light into the space without compromising privacy.</p>
            </div>
            
            <div className="p-4 rounded-lg bg-gradient-to-br from-winmax-orange/5 to-winmax-orange/10 border border-winmax-orange/20">
              <h4 className="font-semibold text-winmax-orange mb-2">✨ Visual Appeal</h4>
              <p className="text-sm text-muted-foreground">Creates a modern and elegant look for interiors.</p>
            </div>
          </div>

          {/* Additional Advantages */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-winmax-orange">Additional Advantages:</h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-winmax-orange rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Blocks UV & IR</p>
                  <p className="text-sm text-muted-foreground">Protects interiors from harmful rays, reducing fading and heat buildup.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-winmax-orange rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <p className="font-medium">Sound Insulation</p>
                  <p className="text-sm text-muted-foreground">Improves soundproofing for a quieter environment.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PDLCInfoModal;