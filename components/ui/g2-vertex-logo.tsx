"use client";

import React from "react";
import Image from "next/image";

interface G2VertexLogoProps {
  variant?: "full" | "compact" | "icon" | "horizontal";
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  isDarkBackground?: boolean;
  priority?: boolean;
}

export const G2VertexLogo: React.FC<G2VertexLogoProps> = ({
  variant = "compact",
  className = "",
  size = "md",
  isDarkBackground = false,
  priority = true,
}) => {
  // Height presets for different sizes
  const heightClasses = {
    sm: "h-9",
    md: "h-12 sm:h-14",
    lg: "h-16 sm:h-20",
    xl: "h-24 sm:h-28",
  };

  const iconHeightClasses = {
    sm: "h-7 w-auto",
    md: "h-9 w-auto",
    lg: "h-12 w-auto",
    xl: "h-16 w-auto",
  };

  const heightStyles = {
    sm: { maxHeight: "36px", width: "auto" },
    md: { maxHeight: "48px", width: "auto" },
    lg: { maxHeight: "72px", width: "auto" },
    xl: { maxHeight: "96px", width: "auto" },
  };

  const iconStyles = {
    sm: { maxHeight: "28px", width: "auto" },
    md: { maxHeight: "36px", width: "auto" },
    lg: { maxHeight: "48px", width: "auto" },
    xl: { maxHeight: "64px", width: "auto" },
  };

  // If icon-only variant requested
  if (variant === "icon") {
    const iconSrc = isDarkBackground
      ? "/images/g2-vertex-emblem-dark.png"
      : "/images/g2-vertex-emblem.png";

    return (
      <div className={`inline-flex items-center select-none group ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={iconSrc}
          alt="G2 VERTEX Emblem"
          style={iconStyles[size]}
          className={`${iconHeightClasses[size]} object-contain drop-shadow-sm group-hover:scale-105 transition-transform duration-200`}
          loading={priority ? "eager" : "lazy"}
        />
      </div>
    );
  }

  // If horizontal lockup variant requested (emblem + styled text)
  if (variant === "horizontal") {
    const emblemSrc = isDarkBackground
      ? "/images/g2-vertex-emblem-dark.png"
      : "/images/g2-vertex-emblem.png";
    const textMain = isDarkBackground ? "text-white" : "text-slate-950";
    const textSub = isDarkBackground ? "text-slate-400" : "text-slate-600";

    return (
      <div className={`inline-flex items-center gap-3 select-none group ${className}`}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={emblemSrc}
          alt="G2V Emblem"
          style={iconStyles[size]}
          className={`${iconHeightClasses[size]} object-contain group-hover:scale-105 transition-transform duration-200`}
          loading={priority ? "eager" : "lazy"}
        />
        <div className="flex flex-col justify-center">
          <div className={`font-black tracking-wider text-base sm:text-lg leading-none ${textMain} flex items-center`}>
            <span>G</span>
            <span className="text-[#0066FF]">2</span>
            <span className="ml-1 tracking-widest font-extrabold">VERTEX</span>
          </div>
          <span className={`text-[9px] sm:text-[10px] ${textSub} font-medium tracking-widest uppercase mt-1 flex items-center gap-1.5`}>
            DIGITAL MARKETING <span className="text-[#0066FF] font-bold">|</span> IT &amp; SERVICES CONSULTING
          </span>
        </div>
      </div>
    );
  }

  // Full / Compact official stacked logo as provided in user reference
  const logoSrc = isDarkBackground
    ? "/images/g2-vertex-logo-dark.png"
    : "/images/g2-vertex-logo-transparent.png";

  return (
    <div className={`inline-flex items-center select-none group ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoSrc}
        alt="G2 VERTEX - Digital Marketing | IT & Services Consulting"
        style={heightStyles[size]}
        className={`${heightClasses[size]} w-auto object-contain drop-shadow-sm group-hover:opacity-95 group-hover:scale-[1.02] transition-all duration-200`}
        loading={priority ? "eager" : "lazy"}
      />
    </div>
  );
};

