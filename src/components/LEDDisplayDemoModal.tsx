import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface LEDDisplayDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LEDDisplayDemoModal = ({ isOpen, onClose }: LEDDisplayDemoModalProps) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-5xl w-full p-0 bg-background/95 backdrop-blur-md border border-winmax-orange/20">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center">
            LED Display Systems Demo
          </DialogTitle>
        </DialogHeader>
        
        <div className="p-6 pt-0">
          {/* YouTube Video Embed */}
          <div className="relative rounded-xl overflow-hidden border-4 border-gray-300 bg-black shadow-2xl">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/BCo2hqvb_vg?autoplay=1&rel=0"
                title="LED Display Systems Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LEDDisplayDemoModal;