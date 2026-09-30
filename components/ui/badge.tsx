import React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "emerald" | "orange" | "purple" | "cyan" | "slate" | "blue";
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "blue",
  className,
}) => {
  const variants = {
    blue: "bg-blue-50 text-[#0066FF] border-blue-200/80 font-semibold",
    emerald: "bg-emerald-50 text-emerald-700 border-emerald-200 font-semibold",
    orange: "bg-orange-50 text-orange-700 border-orange-200 font-semibold",
    purple: "bg-purple-50 text-purple-700 border-purple-200 font-semibold",
    cyan: "bg-sky-50 text-sky-700 border-sky-200 font-semibold",
    slate: "bg-slate-100 text-slate-700 border-slate-200",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-mono rounded-lg border transition-colors duration-200",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
