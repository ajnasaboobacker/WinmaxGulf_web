import { useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface Interactive3DCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glowEffect?: boolean;
  rotateOnHover?: boolean;
}

const Interactive3DCard = ({
  children,
  className = "",
  intensity = 20,
  glowEffect = true,
  rotateOnHover = true
}: Interactive3DCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !rotateOnHover) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    
    const rotateX = (mouseY / rect.height) * intensity;
    const rotateY = (mouseX / rect.width) * intensity;
    
    setMousePosition({ x: rotateY, y: -rotateX });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      className={cn(
        "transition-all duration-300 ease-out transform-gpu",
        "hover:scale-105",
        glowEffect && isHovered && "shadow-2xl shadow-winmax-orange/20",
        className
      )}
      style={{
        transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg)`,
        transformStyle: "preserve-3d"
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="relative transform-gpu"
        style={{
          transform: "translateZ(50px)"
        }}
      >
        {children}
        
        {/* Glow overlay */}
        {glowEffect && isHovered && (
          <div 
            className="absolute inset-0 rounded-lg opacity-20 pointer-events-none"
            style={{
              background: "linear-gradient(45deg, hsl(25 95% 53%), hsl(217 91% 60%))",
              filter: "blur(20px)",
              transform: "translateZ(-10px)"
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Interactive3DCard;