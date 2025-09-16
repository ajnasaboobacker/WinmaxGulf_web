import { useEffect, useRef, useState } from "react";

interface EnhancedScrollAnimationProps {
  children: React.ReactNode;
  animation?: "fadeInUp" | "fadeInLeft" | "fadeInRight" | "scaleIn" | "slideInRotate" | "flipIn" | "bounceIn" | "zoomIn";
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
  triggerOnce?: boolean;
}

const EnhancedScrollAnimation = ({
  children,
  animation = "fadeInUp",
  delay = 0,
  duration = 600,
  threshold = 0.1,
  className = "",
  triggerOnce = true
}: EnhancedScrollAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          if (triggerOnce) observer.disconnect();
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold, triggerOnce]);

  const getAnimationClass = () => {
    const baseClass = "transition-all";
    const durationClass = `duration-[${duration}ms]`;
    
    if (!isVisible) {
      switch (animation) {
        case "fadeInUp":
          return `${baseClass} ${durationClass} opacity-0 translate-y-12`;
        case "fadeInLeft":
          return `${baseClass} ${durationClass} opacity-0 -translate-x-12`;
        case "fadeInRight":
          return `${baseClass} ${durationClass} opacity-0 translate-x-12`;
        case "scaleIn":
          return `${baseClass} ${durationClass} opacity-0 scale-75`;
        case "slideInRotate":
          return `${baseClass} ${durationClass} opacity-0 translate-y-12 rotate-12`;
        case "flipIn":
          return `${baseClass} ${durationClass} opacity-0 perspective-1000 rotate-y-90`;
        case "bounceIn":
          return `${baseClass} ${durationClass} opacity-0 scale-50`;
        case "zoomIn":
          return `${baseClass} ${durationClass} opacity-0 scale-110`;
        default:
          return `${baseClass} ${durationClass} opacity-0 translate-y-12`;
      }
    } else {
      switch (animation) {
        case "bounceIn":
          return `${baseClass} ${durationClass} opacity-100 scale-100 animate-elastic-bounce`;
        default:
          return `${baseClass} ${durationClass} opacity-100 translate-y-0 translate-x-0 scale-100 rotate-0`;
      }
    }
  };

  return (
    <div
      ref={elementRef}
      className={`${getAnimationClass()} ${className}`}
    >
      {children}
    </div>
  );
};

export default EnhancedScrollAnimation;