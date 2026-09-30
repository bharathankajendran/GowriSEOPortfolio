"use client";

import React from "react";

interface G2VertexLogoProps {
  variant?: "full" | "compact" | "icon";
  className?: string;
  size?: "sm" | "md" | "lg";
  isDarkBackground?: boolean;
}

export const G2VertexLogo: React.FC<G2VertexLogoProps> = ({
  variant = "compact",
  className = "",
  size = "md",
  isDarkBackground = false,
}) => {
  const iconSizes = {
    sm: "w-8 h-8",
    md: "w-9 h-9",
    lg: "w-12 h-12",
  };

  const textSizes = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-xl",
  };

  const textColorMain = isDarkBackground ? "text-white" : "text-slate-900";
  const textColorSub = isDarkBackground ? "text-slate-400" : "text-slate-500";

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Emblem Icon */}
      <div className={`relative ${iconSizes[size]} flex-shrink-0 group`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-sm group-hover:scale-105 transition-transform duration-300"
        >
          <defs>
            <linearGradient id="g2v-blue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0066FF" />
              <stop offset="100%" stopColor="#0044B3" />
            </linearGradient>

            <linearGradient id="g2v-orange" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF5500" />
              <stop offset="100%" stopColor="#E64A00" />
            </linearGradient>
          </defs>

          {/* Background Container */}
          <rect
            x="4"
            y="4"
            width="92"
            height="92"
            rx="22"
            fill={isDarkBackground ? "#0B192C" : "#F8FAFC"}
            stroke={isDarkBackground ? "rgba(255, 255, 255, 0.15)" : "#CBD5E1"}
            strokeWidth="2"
          />

          {/* Emblem G */}
          <path
            d="M 46 26 C 30 26 22 34 22 50 C 22 66 30 74 46 74 L 56 74 L 56 58 L 42 58 L 42 48 L 66 48 L 66 74 C 66 74 54 74 46 74 Z"
            fill={isDarkBackground ? "#1E293B" : "#E2E8F0"}
            stroke="#94A3B8"
            strokeWidth="1.5"
          />

          {/* Emblem 2 Arrow */}
          <path
            d="M 44 26 L 68 26 C 76 26 80 32 80 40 C 80 48 72 54 58 64 L 78 64 L 78 74 L 38 74 L 56 58 C 66 48 66 40 58 36 C 54 34 48 34 44 36 Z"
            fill="url(#g2v-blue)"
          />

          {/* Vertex Growth Arrow ↗ */}
          <path
            d="M 62 44 L 84 18 M 84 18 L 68 18 M 84 18 L 84 34"
            stroke="url(#g2v-orange)"
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
            className={`${textSizes[size]} font-black tracking-tight ${textColorMain} flex items-center gap-1 leading-none`}
          >
            <span className="text-[#0066FF] font-black">
              G2
            </span>
            <span className="tracking-wider font-extrabold">VERTEX</span>
          </div>

          <span className={`text-[10px] ${textColorSub} font-mono tracking-widest uppercase mt-1 flex items-center gap-1 font-semibold`}>
            DIGITAL CONSULTING <span className="text-[#0066FF]">•</span> IT &amp; SEO
          </span>
        </div>
      )}
    </div>
  );
};
