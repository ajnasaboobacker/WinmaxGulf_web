import { useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface PDLCDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PDLCDemoModal = ({ isOpen, onClose }: PDLCDemoModalProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.play();
    }
  }, [isOpen]);

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-4xl w-full p-0 bg-background/95 backdrop-blur-md border border-winmax-orange/20">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center">
            PDLC Smart Film Demo
          </DialogTitle>
        </DialogHeader>
        
        <div className="p-6 pt-0">
          {/* Video Demo Area */}
          <div className="relative rounded-xl overflow-hidden border-4 border-gray-300 bg-black shadow-2xl">
            
            {/* Video Player */}
            <video
              ref={videoRef}
              className="w-full h-auto max-h-[600px] object-cover"
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            >
              <source src="/assets/pdlc-demo-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PDLCDemoModal;