"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, ArrowUpRight, ShieldCheck, Target, HeartHandshake, Lightbulb, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const AboutSection = () => {
  const approachSteps = [
    { step: "01", title: "Understand", text: "We learn your business, market, customer, goals, and current challenges." },
    { step: "02", title: "Build", text: "We create a focused strategy, messaging direction, channel plan, and campaign foundation." },
    { step: "03", title: "Launch", text: "We execute campaigns with attention to targeting, creative, timing, and conversion paths." },
    { step: "04", title: "Optimize", text: "We review performance, test improvements, and invest in what produces the strongest outcome." },
    { step: "05", title: "Report", text: "We share clear updates so decisions are based on evidence—not guesswork." },
  ];

  const values = [
    { name: "Clarity", text: "Simple communication and understandable reporting.", icon: ShieldCheck },
    { name: "Ownership", text: "We take responsibility for quality, momentum, and continuous improvement.", icon: Target },
    { name: "Curiosity", text: "We keep testing, learning, and looking for better answers.", icon: Lightbulb },
    { name: "Impact", text: "We focus on work that supports real business outcomes.", icon: TrendingUp },
  ];

  return (
    <section id="about" className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Hero Header */}
      <div className="text-center space-y-4 mb-16">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono bg-blue-50 text-[#0066FF] border border-blue-200 font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> ABOUT G2VERTEX
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
          Growth partners for businesses <span className="text-[#0066FF]">ready to move.</span>
        </h1>
        <p className="text-slate-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
          G2VERTEX is a modern digital growth agency built for businesses that want more than activity—they want progress. We help brands strengthen their online presence, connect with the right audience, and generate opportunities through smart, measurable marketing.
        </p>
      </div>

      {/* Brand Promise Callout Box from PDF */}
      <div className="rounded-2xl bg-gradient-to-r from-blue-50 via-white to-blue-50 border border-blue-200 p-6 sm:p-8 mb-16 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1.5 text-center md:text-left">
          <span className="text-xs font-mono font-bold text-[#0066FF] uppercase tracking-widest block flex items-center gap-1.5 justify-center md:justify-start">
            <Award className="w-4 h-4 text-[#0066FF]" /> BRAND PROMISE
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            Build visibility. Generate demand. Create measurable growth.
          </h3>
          <p className="text-xs text-slate-600 font-medium">
            Our commitment: every strategy and campaign is engineered to move your business forward.
          </p>
        </div>
        <a href="#contact">
          <Button variant="primary" size="md" className="font-bold whitespace-nowrap px-6">
            Book a Growth Call <ArrowUpRight className="w-4 h-4 ml-1" />
          </Button>
        </a>
      </div>

      {/* Story Section */}
      <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 mb-16">
        <div className="max-w-4xl mx-auto space-y-4 text-center md:text-left">
          <span className="text-xs font-mono font-bold text-[#0066FF] uppercase tracking-widest block">OUR STORY</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Built to turn marketing channels into practical growth engines.
          </h2>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            The digital landscape is crowded. Businesses do not need more random posts, generic ads, or reports filled with numbers that do not lead anywhere. They need a clear strategy, strong execution, and a partner who understands that marketing must contribute to growth.
          </p>
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            That is why G2VERTEX exists: to turn marketing channels into practical engines for visibility, conversations, leads, and long-term momentum.
          </p>
        </div>
      </div>

      {/* Our Approach (5 Steps) */}
      <div className="space-y-8 mb-16">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold text-[#0066FF] uppercase tracking-widest block">OUR PROCESS</span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900">Our 5-Step Growth Approach</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {approachSteps.map((s) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2 hover:border-blue-300 transition-all"
            >
              <div className="text-xl font-black font-mono text-[#0066FF]">{s.step}</div>
              <h4 className="text-sm font-extrabold text-slate-900">{s.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Our Values */}
      <div className="space-y-8 mb-16">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold text-[#0066FF] uppercase tracking-widest block">GUIDING PRINCIPLES</span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900">Our Core Values</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => {
            const Icon = v.icon;
            return (
              <div key={v.name} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-[#0066FF] flex items-center justify-center">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-base font-extrabold text-slate-900">{v.name}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{v.text}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* About CTA Banner */}
      <div className="rounded-3xl bg-[#0B192C] text-white p-8 sm:p-12 text-center space-y-6 shadow-xl">
        <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
          Let’s build the next stage of your growth.
        </h3>
        <a href="#contact">
          <Button variant="primary" size="lg" className="font-bold text-base px-8">
            Book a Growth Call <ArrowUpRight className="w-5 h-5 ml-1" />
          </Button>
        </a>
      </div>
    </section>
  );
};
