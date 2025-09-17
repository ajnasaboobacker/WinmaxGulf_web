import { useState, useEffect } from 'react';

const LoadingIndicator = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="w-16 h-16 border-4 border-winmax-orange/20 border-t-winmax-orange rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-foreground font-medium">Loading...</p>
        <div className="w-64 h-2 bg-muted rounded-full mt-4 overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-winmax-orange to-tech-blue transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingIndicator;