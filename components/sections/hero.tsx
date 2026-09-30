"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Search, Zap, CheckCircle2, ShieldCheck, TrendingUp, Target, BarChart3, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TypewriterHeadline } from "@/components/ui/typewriter-headline";
import { HeroDashboardPreview } from "@/components/ui/hero-dashboard-preview";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] pt-32 pb-16 flex items-center justify-center bg-grid-pattern bg-[#F8FAFC]">
      {/* Subtle Corporate Glow Backdrop */}
      <div className="absolute inset-0 bg-corporate-glow pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Executive Copy & Action CTAs */}
          <div className="lg:col-span-7 text-left space-y-6">
            {/* Brand Promise Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2"
            >
              <Badge variant="blue" className="px-3.5 py-1.5 text-xs sm:text-sm gap-2 font-mono bg-blue-50 text-[#0066FF] border border-blue-200 font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#0066FF]" />
                BRAND PROMISE: Build visibility • Generate demand • Create measurable growth.
              </Badge>
            </motion.div>

            {/* Main Headline */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <TypewriterHeadline />
            </motion.div>

            {/* Subheading Body Copy from PDF */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-slate-700 max-w-2xl leading-relaxed font-normal"
            >
              <span className="font-bold text-slate-900">G2VERTEX</span> helps ambitious businesses grow through performance marketing, lead generation, paid advertising, SEO, and high-impact outreach. We build practical growth systems designed to bring the right people to your business—and move them to act.
            </motion.p>

            {/* Trust / Value Strip from PDF */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="pt-1 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-700"
            >
              <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center gap-1.5 font-semibold">
                <Target className="w-3.5 h-3.5 text-[#0066FF]" /> Strategy-led campaigns
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center gap-1.5 font-semibold">
                <BarChart3 className="w-3.5 h-3.5 text-emerald-600" /> Clear reporting
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 shadow-sm flex items-center gap-1.5 font-semibold">
                <TrendingUp className="w-3.5 h-3.5 text-cyan-600" /> Qualified lead focus
              </span>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <a href="#contact">
                <Button variant="primary" size="lg" className="w-full sm:w-auto font-bold text-base px-8">
                  Book a Growth Call <ArrowUpRight className="w-5 h-5 ml-1" />
                </Button>
              </a>
              <a href="#projects">
                <Button variant="outline" size="lg" className="w-full sm:w-auto font-semibold">
                  View Our Work
                </Button>
              </a>
            </motion.div>
          </div>

          {/* Right Column: Hero Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 w-full"
          >
            <HeroDashboardPreview />
          </motion.div>

        </div>
      </div>
    </section>
  );
};
