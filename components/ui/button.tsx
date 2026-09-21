import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

  const variants = {
    primary: "bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 text-slate-950 font-bold shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 hover:brightness-110",
    secondary: "bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 text-white font-semibold shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:brightness-110",
    outline: "bg-white/[0.04] text-white border border-white/15 hover:border-orange-500/50 hover:text-orange-400 hover:bg-white/[0.08] backdrop-blur-md",
    ghost: "bg-transparent text-slate-300 hover:text-white hover:bg-white/[0.06]",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};
