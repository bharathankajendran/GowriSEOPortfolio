"use client";

import React from "react";

interface G2VertexLogoProps {
  variant?: "full" | "compact" | "icon";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const G2VertexLogo: React.FC<G2VertexLogoProps> = ({
  variant = "compact",
  className = "",
  size = "md",
}) => {
  // Scaling factors
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  const textSizes = {
    sm: "text-base",
    md: "text-lg",
    lg: "text-2xl",
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Dynamic Emblem G2V Icon */}
      <div className={`relative ${iconSizes[size]} flex-shrink-0 group`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-[0_0_12px_rgba(255,107,0,0.35)] group-hover:scale-105 transition-transform duration-300"
        >
          <defs>
            <linearGradient id="g2v-orange" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF5500" />
              <stop offset="60%" stopColor="#FF7700" />
              <stop offset="100%" stopColor="#F97316" />
            </linearGradient>

            <linearGradient id="g2v-dark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#334155" />
              <stop offset="100%" stop-color="#1E293B" />
            </linearGradient>

            <linearGradient id="g2v-glow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFAA00" />
              <stop offset="100%" stopColor="#FF5500" />
            </linearGradient>
          </defs>

          {/* Background Badge container */}
          <rect
            x="4"
            y="4"
            width="92"
            height="92"
            rx="22"
            fill="#0D0F14"
            stroke="rgba(255, 255, 255, 0.12)"
            strokeWidth="2"
          />

          {/* Emblem G */}
          <path
            d="M 46 26 C 30 26 22 34 22 50 C 22 66 30 74 46 74 L 56 74 L 56 58 L 42 58 L 42 48 L 66 48 L 66 74 C 66 74 54 74 46 74 Z"
            fill="url(#g2v-dark)"
            stroke="#475569"
            strokeWidth="1.5"
          />

          {/* Emblem 2 & V Arrow */}
          <path
            d="M 44 26 L 68 26 C 76 26 80 32 80 40 C 80 48 72 54 58 64 L 78 64 L 78 74 L 38 74 L 56 58 C 66 48 66 40 58 36 C 54 34 48 34 44 36 Z"
            fill="url(#g2v-orange)"
          />

          {/* Growth Upward Arrow (Vertex Arrow ↗) */}
          <path
            d="M 62 44 L 84 18 M 84 18 L 68 18 M 84 18 L 84 34"
            stroke="url(#g2v-glow)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Brand Typography */}
      {variant !== "icon" && (
        <div className="flex flex-col justify-center">
          <div
            className={`${textSizes[size]} font-black tracking-wider text-white flex items-center gap-1.5 leading-none`}
          >
            <span className="bg-gradient-to-r from-[#FF5500] via-[#FF7700] to-[#F97316] bg-clip-text text-transparent font-extrabold">
              G2
            </span>
            <span className="tracking-widest text-slate-100 font-extrabold">VERTEX</span>
          </div>

          {variant === "full" ? (
            <>
              <span className="text-[10px] font-bold text-slate-400 tracking-widest uppercase mt-1">
                DIGITAL MARKETING <span className="text-orange-500 font-bold">|</span> IT & SERVICES
              </span>
              <span className="text-[9px] font-mono text-slate-500 tracking-wider uppercase mt-0.5">
                STRATEGY <span className="text-orange-500">•</span> TECHNOLOGY <span className="text-orange-500">•</span> GROWTH
              </span>
            </>
          ) : (
            <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase mt-0.5 flex items-center gap-1">
              DIGITAL MARKETING <span className="text-orange-500">•</span> IT & SERVICES
            </span>
          )}
        </div>
      )}
    </div>
  );
};
