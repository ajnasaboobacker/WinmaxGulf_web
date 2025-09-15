import { useEffect, useRef, useState } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale" | "tilt3d";
  delay?: number;
  duration?: number;
  threshold?: number;
  className?: string;
}

const ScrollAnimation = ({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 600,
  threshold = 0.1,
  className = ""
}: ScrollAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  const getAnimationClass = () => {
    if (!isVisible) {
      switch (animation) {
        case "fadeIn":
          return "opacity-0 translate-y-8";
        case "slideUp":
          return "opacity-0 translate-y-16";
        case "slideLeft":
          return "opacity-0 translate-x-16";
        case "slideRight":
          return "opacity-0 -translate-x-16";
        case "scale":
          return "opacity-0 scale-75";
        case "tilt3d":
          return "opacity-0 perspective-1000 rotate-x-12 rotate-y-12";
        default:
          return "opacity-0";
      }
    }
    
    switch (animation) {
      case "fadeIn":
        return "opacity-100 translate-y-0";
      case "slideUp":
        return "opacity-100 translate-y-0";
      case "slideLeft":
        return "opacity-100 translate-x-0";
      case "slideRight":
        return "opacity-100 translate-x-0";
      case "scale":
        return "opacity-100 scale-100";
      case "tilt3d":
        return "opacity-100 perspective-1000 rotate-x-0 rotate-y-0";
      default:
        return "opacity-100";
    }
  };

  return (
    <div
      ref={elementRef}
      className={`
        transition-all ease-out
        ${getAnimationClass()}
        ${className}
      `}
      style={{ 
        transitionDuration: `${duration}ms`,
        transform: animation === "tilt3d" ? "perspective(1000px)" : undefined
      }}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation;