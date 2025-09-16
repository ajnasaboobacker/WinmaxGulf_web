import { useEffect, useState } from "react";

interface AnimatedGradientBackgroundProps {
  className?: string;
  variant?: "hero" | "section" | "card" | "subtle";
  animated?: boolean;
}

const AnimatedGradientBackground = ({
  className = "",
  variant = "hero",
  animated = true
}: AnimatedGradientBackgroundProps) => {
  const [gradientPosition, setGradientPosition] = useState(0);

  useEffect(() => {
    if (!animated) return;

    const interval = setInterval(() => {
      setGradientPosition(prev => (prev + 1) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, [animated]);

  const getGradientStyles = () => {
    const baseStyle = {
      transition: animated ? "background 0.3s ease" : "none"
    };

    switch (variant) {
      case "hero":
        return {
          ...baseStyle,
          background: animated 
            ? `conic-gradient(from ${gradientPosition}deg, 
               hsl(240 10% 3.9%), 
               hsl(25 95% 53% / 0.1), 
               hsl(217 91% 60% / 0.1), 
               hsl(262 83% 58% / 0.1), 
               hsl(240 10% 3.9%))`
            : "linear-gradient(135deg, hsl(240 10% 3.9%), hsl(25 95% 53% / 0.05))"
        };
      
      case "section":
        return {
          ...baseStyle,
          background: animated
            ? `linear-gradient(${gradientPosition}deg, 
               hsl(240 10% 3.9%), 
               hsl(240 3.7% 15.9%), 
               hsl(25 95% 53% / 0.05))`
            : "linear-gradient(135deg, hsl(240 10% 3.9%), hsl(240 3.7% 15.9%))"
        };

      case "card":
        return {
          ...baseStyle,
          background: animated
            ? `radial-gradient(circle at ${gradientPosition % 100}% 50%, 
               hsl(25 95% 53% / 0.1), 
               transparent 70%)`
            : "radial-gradient(circle, hsl(25 95% 53% / 0.05), transparent 70%)"
        };

      case "subtle":
        return {
          ...baseStyle,
          background: animated
            ? `linear-gradient(${gradientPosition * 2}deg, 
               transparent, 
               hsl(25 95% 53% / 0.03), 
               transparent)`
            : "linear-gradient(45deg, transparent, hsl(25 95% 53% / 0.02), transparent)"
        };

      default:
        return baseStyle;
    }
  };

  return (
    <div 
      className={`absolute inset-0 ${className}`}
      style={getGradientStyles()}
    />
  );
};

export default AnimatedGradientBackground;