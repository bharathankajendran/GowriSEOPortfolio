"use client";

import React from "react";
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
      className="relative min-h-[92vh] pt-28 sm:pt-36 pb-16 lg:pb-24 flex items-center justify-center bg-white dark:bg-[#0A0F1D] overflow-hidden transition-colors duration-200"
    >

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 xl:gap-14 items-center">
          {/* Left Column: Headline, Description & Template Pill Action Buttons */}
          <div className="lg:col-span-7 xl:col-span-6 text-left space-y-6 sm:space-y-7 z-10">
            {/* Top Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950/40 text-[#0066FF] dark:text-blue-400 border border-blue-100 dark:border-blue-900/50 uppercase tracking-wider"
            >
              Performance Digital Marketing
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
              className="text-base sm:text-lg text-slate-600 dark:text-slate-400 max-w-xl leading-relaxed font-normal"
            >
              <span className="font-bold text-slate-900 dark:text-white">G2VERTEX</span> drives business growth through digital marketing and lead generation. We build qualified pipeline engines, high-intent SEO systems, and scalable paid media campaigns. Zero vanity metrics, only verifiable business outcomes.
            </motion.p>

            {/* Trust / Value Strip from Content */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="flex flex-wrap items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-slate-300"
            >
              <span className="px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-blue-200/90 dark:border-slate-800 shadow-xs flex items-center gap-1.5 text-slate-800 dark:text-slate-200 hover:border-blue-400 transition-all">
                <Target className="w-3.5 h-3.5 text-[#0066FF] dark:text-blue-400" /> Strategy-led campaigns
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-emerald-200/90 dark:border-slate-800 shadow-xs flex items-center gap-1.5 text-slate-800 dark:text-slate-200 hover:border-emerald-400 transition-all">
                <BarChart3 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" /> Clear reporting
              </span>
              <span className="px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-cyan-200/90 dark:border-slate-800 shadow-xs flex items-center gap-1.5 text-slate-800 dark:text-slate-200 hover:border-cyan-400 transition-all">
                <TrendingUp className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" /> Qualified lead focus
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
                className="rounded-full px-8 py-3.5 bg-[#0066FF] hover:bg-blue-700 text-white font-bold text-sm shadow-sm hover:shadow transition-all flex items-center justify-center gap-2 cursor-pointer"
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
                className="rounded-full px-8 py-3.5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 hover:text-[#0066FF] dark:hover:text-[#38BDF8] hover:border-blue-300 font-bold text-sm shadow-xs hover:bg-slate-50 dark:hover:bg-slate-800 transition-all flex items-center justify-center gap-2 cursor-pointer"
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
            className="lg:col-span-5 xl:col-span-6 w-full relative flex items-center justify-center lg:justify-end"
          >
            <div className="relative w-full aspect-[16/10] max-w-md lg:max-w-lg xl:max-w-xl">
              <img
                src="/images/LandingPage-clean.gif"
                alt="G2 VERTEX Collaborative Digital Growth & Teamwork Strategy"
                className="w-full h-full object-contain object-center lg:object-right select-none"
                loading="eager"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
