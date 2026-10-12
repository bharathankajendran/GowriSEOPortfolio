"use client";

import React from "react";

export const HeroDashboardPreview: React.FC = () => {
  return (
    <div className="w-full max-w-xl mx-auto lg:max-w-none">
      {/* Clean High-Impact Corporate Photo (All Overlays & Fields Removed) */}
      <div className="relative aspect-[4/3] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
        <img
          src="/images/g2vertex-hero-team.png"
          alt="G2VERTEX Digital Growth Team"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="eager"
        />
      </div>
    </div>
  );
};
