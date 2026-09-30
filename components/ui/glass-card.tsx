import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: "emerald" | "orange" | "purple" | "cyan" | "none";
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className,
  glowColor = "none",
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative rounded-2xl bg-white border border-slate-200/90 p-6 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 group overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
