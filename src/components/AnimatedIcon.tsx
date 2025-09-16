import { useState, useRef, useEffect } from "react";
import { LucideIcon } from "lucide-react";

interface AnimatedIconProps {
  icon: LucideIcon;
  className?: string;
  hoverEffect?: "bounce" | "rotate" | "scale" | "wiggle" | "glow" | "morph";
  delay?: number;
}

const AnimatedIcon = ({ 
  icon: IconComponent, 
  className = "", 
  hoverEffect = "scale",
  delay = 0
}: AnimatedIconProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const iconRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsInView(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (iconRef.current) {
      observer.observe(iconRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const getHoverClass = () => {
    switch (hoverEffect) {
      case "bounce":
        return "hover:animate-bounce";
      case "rotate":
        return "hover:animate-spin";
      case "scale":
        return "hover:scale-125";
      case "wiggle":
        return "hover:animate-wiggle";
      case "glow":
        return "hover:animate-glow-pulse";
      case "morph":
        return "hover:animate-morph";
      default:
        return "hover:scale-110";
    }
  };

  return (
    <div
      ref={iconRef}
      className={`
        inline-flex items-center justify-center
        transition-all duration-500 ease-out
        ${isInView ? 'animate-elastic-bounce opacity-100' : 'opacity-0 scale-50'}
        ${getHoverClass()}
        ${isHovered ? 'drop-shadow-lg' : ''}
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ animationDelay: `${delay}ms` }}
    >
      <IconComponent className="w-full h-full" />
    </div>
  );
};

export default AnimatedIcon;