import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassmorphismCardProps {
  children: ReactNode;
  className?: string;
  intensity?: "light" | "medium" | "strong";
  rounded?: "sm" | "md" | "lg" | "xl";
  border?: boolean;
  glow?: boolean;
}

const GlassmorphismCard = ({
  children,
  className = "",
  intensity = "medium",
  rounded = "lg",
  border = true,
  glow = false
}: GlassmorphismCardProps) => {
  const intensityClasses = {
    light: "bg-white/5 backdrop-blur-sm",
    medium: "bg-white/10 backdrop-blur-md",
    strong: "bg-white/20 backdrop-blur-lg"
  };

  const roundedClasses = {
    sm: "rounded-sm",
    md: "rounded-md", 
    lg: "rounded-lg",
    xl: "rounded-xl"
  };

  return (
    <div
      className={cn(
        intensityClasses[intensity],
        roundedClasses[rounded],
        border && "border border-white/20",
        glow && "shadow-[0_0_40px_rgba(255,255,255,0.1)]",
        "transition-all duration-300 hover:bg-white/15 hover:border-white/30",
        glow && "hover:shadow-[0_0_60px_rgba(255,255,255,0.2)]",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassmorphismCard;