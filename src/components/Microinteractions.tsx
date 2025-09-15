import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface MicroInteractionButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const MicroInteractionButton = ({
  children,
  onClick,
  variant = "primary",
  size = "md",
  className = ""
}: MicroInteractionButtonProps) => {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newRipple = { x, y, id: Date.now() };
    setRipples(prev => [...prev, newRipple]);
    
    setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id));
    }, 600);
    
    onClick?.();
  };

  return (
    <Button
      ref={buttonRef}
      onClick={handleClick}
      className={`
        relative overflow-hidden group
        hover:scale-105 active:scale-95
        transition-all duration-200 ease-out
        ${className}
      `}
      variant={variant as any}
      size={size as any}
    >
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ping"
          style={{
            left: ripple.x - 10,
            top: ripple.y - 10,
            width: 20,
            height: 20,
          }}
        />
      ))}
      <span className="relative z-10 group-hover:scale-105 transition-transform duration-200">
        {children}
      </span>
    </Button>
  );
};

interface InteractiveCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: "lift" | "tilt" | "glow" | "scale";
}

export const InteractiveCard = ({
  children,
  className = "",
  hoverEffect = "lift"
}: InteractiveCardProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
    
    setMousePosition({ x, y });
  };

  const getHoverTransform = () => {
    if (!isHovered) return "";
    
    switch (hoverEffect) {
      case "lift":
        return "translateY(-8px) scale(1.02)";
      case "tilt":
        return `perspective(1000px) rotateX(${mousePosition.y * 10}deg) rotateY(${mousePosition.x * 10}deg) translateZ(20px)`;
      case "glow":
        return "scale(1.05)";
      case "scale":
        return "scale(1.08)";
      default:
        return "";
    }
  };

  const getGlowEffect = () => {
    if (hoverEffect === "glow" && isHovered) {
      return "0 20px 40px hsl(var(--winmax-orange) / 0.3), 0 0 20px hsl(var(--winmax-orange) / 0.2)";
    }
    return "";
  };

  return (
    <Card
      ref={cardRef}
      className={`
        transition-all duration-300 ease-out cursor-pointer
        ${className}
      `}
      style={{
        transform: getHoverTransform(),
        boxShadow: getGlowEffect(),
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setMousePosition({ x: 0, y: 0 });
      }}
    >
      {children}
    </Card>
  );
};