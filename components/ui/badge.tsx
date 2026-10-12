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
    blue: "bg-blue-50 dark:bg-blue-950/40 text-[#0066FF] dark:text-blue-400 border-blue-200/90 dark:border-blue-900/50 font-bold",
    emerald: "bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-400 border-emerald-200 dark:border-emerald-900/50 font-bold",
    orange: "bg-orange-50 dark:bg-orange-950/40 text-orange-800 dark:text-orange-400 border-orange-200 dark:border-orange-900/50 font-bold",
    purple: "bg-purple-50 dark:bg-purple-950/40 text-purple-800 dark:text-purple-400 border-purple-200 dark:border-purple-900/50 font-bold",
    cyan: "bg-sky-50 dark:bg-sky-950/40 text-sky-800 dark:text-sky-400 border-sky-200 dark:border-sky-900/50 font-bold",
    slate: "bg-blue-50/60 dark:bg-slate-800/60 text-slate-900 dark:text-slate-200 border-blue-200/80 dark:border-slate-700 font-bold",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 text-xs font-medium rounded-lg border transition-colors duration-200",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
};
