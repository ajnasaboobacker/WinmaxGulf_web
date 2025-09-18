import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface DJClubDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DJClubDemoModal = ({ isOpen, onClose }: DJClubDemoModalProps) => {
  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-5xl w-full p-0 bg-background/95 backdrop-blur-md border border-winmax-orange/20">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="text-2xl md:text-3xl font-bold text-center">
            TurnKey DJ Solutions Demo
          </DialogTitle>
        </DialogHeader>
        
        <div className="p-6 pt-0">
          {/* YouTube Video Embed */}
          <div className="relative rounded-xl overflow-hidden border-4 border-gray-300 bg-black shadow-2xl">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/9L3QFnza5qU?autoplay=1&rel=0"
                title="TurnKey DJ Solutions Demo"
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

export default DJClubDemoModal;