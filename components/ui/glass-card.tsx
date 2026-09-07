import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: "emerald" | "purple" | "cyan" | "none";
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  glowColor = "emerald",
  ...props
}) => {
  const glowStyles = {
    emerald: "hover:border-emerald-500/40 hover:shadow-[0_0_30px_rgba(16,185,129,0.15)]",
    purple: "hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(139,92,246,0.15)]",
    cyan: "hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]",
    none: "",
  };

  return (
    <div
      className={cn(
        "relative rounded-2xl bg-[#121318]/70 backdrop-blur-xl border border-white/10 p-6 transition-all duration-300 group overflow-hidden",
        glowStyles[glowColor],
        className
      )}
      {...props}
    >
      {/* Background Subtle Gradient Mesh */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-gradient-radial from-white/5 to-transparent rounded-full pointer-events-none group-hover:scale-150 transition-transform duration-500" />
      {children}
    </div>
  );
};
