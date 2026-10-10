"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  TrendingUp,
  Target,
  BarChart3,
  Sparkles,
} from "lucide-react";
import { TypewriterHeadline } from "@/components/ui/typewriter-headline";

export interface HeroSectionProps {
  onTabChange?: (tab: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onTabChange }) => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 sm:pt-36 pb-16 lg:pb-24 flex items-center justify-center bg-white overflow-hidden"
    >
      {/* Soft Ambient Background Elements matching template */}
      <div className="absolute top-0 right-0 w-[55vw] h-[55vw] max-w-[800px] max-h-[800px] rounded-full bg-gradient-to-br from-blue-100/50 via-sky-50/40 to-transparent blur-3xl pointer-events-none -z-10 transform translate-x-1/4 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] max-w-[600px] max-h-[600px] rounded-full bg-gradient-to-tr from-indigo-50/40 via-blue-50/30 to-transparent blur-3xl pointer-events-none -z-10 transform -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Description & Template Pill Action Buttons */}
          <div className="lg:col-span-6 text-left space-y-6 sm:space-y-7">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold bg-blue-50 text-[#0066FF] border border-blue-200/80 shadow-xs uppercase tracking-wider"
            >
              <Sparkles className="w-3.5 h-3.5" /> Performance Digital Marketing
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <TypewriterHeadline />
            </motion.div>

            {/* Subheading Body Copy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed font-normal"
            >
              <span className="font-bold text-slate-900">G2VERTEX</span> drives business growth through digital marketing and lead generation. We build qualified pipeline engines, high-intent SEO systems, and scalable paid media campaigns. Zero vanity metrics, only verifiable business outcomes.
            </motion.p>

            {/* Trust / Value Strip from Content */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center gap-2.5 text-xs font-semibold text-slate-700"
            >
              <span className="px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-xs flex items-center gap-1.5">
                <Target className="w-3.5 h-3.5 text-[#0066FF]" /> Strategy-led campaigns
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-xs flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5 text-emerald-600" /> Clear reporting
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 shadow-xs flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-cyan-600" /> Qualified lead focus
              </span>
            </motion.div>

            {/* Template Pill Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5"
            >
              <button
                type="button"
                onClick={() =>
                  onTabChange
                    ? onTabChange("contact")
                    : (window.location.href = "/?tab=contact")
                }
                className="rounded-full px-8 py-3.5 bg-gradient-to-r from-[#0088FF] to-[#0055FF] hover:from-[#0077EE] hover:to-[#0044EE] text-white font-bold text-sm shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Book a Growth Call <ArrowUpRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() =>
                  onTabChange
                    ? onTabChange("projects")
                    : (window.location.href = "/?tab=projects")
                }
                className="rounded-full px-8 py-3.5 bg-white border border-slate-200 text-slate-700 hover:text-[#0066FF] hover:border-blue-300 font-bold text-sm shadow-xs hover:bg-slate-50 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                View Our Work
              </button>
            </motion.div>
          </div>

          {/* Right Column: Teamwork Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 w-full relative flex items-center justify-center"
          >
            <div className="relative w-full aspect-[16/10] max-w-xl lg:max-w-none">
              <Image
                src="/images/LandingPage.gif"

                alt="G2 VERTEX Collaborative Digital Growth & Teamwork Strategy"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-contain object-center select-none"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
