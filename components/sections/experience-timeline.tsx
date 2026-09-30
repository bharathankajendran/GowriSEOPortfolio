"use client";

import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Sparkles, Target, BarChart3, RefreshCw, Eye, ShieldCheck, HeartHandshake } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface ExperienceData {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string;
  technologies: string;
  isCurrent: boolean;
  order: number;
}

interface ExperienceTimelineProps {
  initialExperiences?: ExperienceData[];
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = () => {
  const whyPillars = [
    {
      title: "Growth-first thinking",
      description: "Every campaign activity and optimization is directly tied to a tangible business objective and revenue goal.",
      icon: Target,
      color: "text-[#0066FF]",
      bg: "bg-blue-50 border-blue-200",
    },
    {
      title: "Channel expertise",
      description: "We deploy the optimal mix of paid advertising, organic search, targeted email, and direct B2B outreach.",
      icon: BarChart3,
      color: "text-emerald-700",
      bg: "bg-emerald-50 border-emerald-200",
    },
    {
      title: "Transparent execution",
      description: "You know exactly what is happening, why it matters, and what actionable milestones come next.",
      icon: Eye,
      color: "text-cyan-700",
      bg: "bg-cyan-50 border-cyan-200",
    },
    {
      title: "Continuous optimization",
      description: "We test, learn, and refine in real-time as campaigns run to maximize return on marketing spend.",
      icon: RefreshCw,
      color: "text-purple-700",
      bg: "bg-purple-50 border-purple-200",
    },
  ];

  const approachSteps = [
    { step: "01", title: "Understand", text: "We learn your business model, target market, ideal customer profile, revenue goals, and current acquisition challenges." },
    { step: "02", title: "Build", text: "We create a focused strategy, messaging direction, channel distribution plan, and campaign conversion foundation." },
    { step: "03", title: "Launch", text: "We execute campaigns with meticulous attention to audience targeting, creative assets, timing, and conversion paths." },
    { step: "04", title: "Optimize", text: "We analyze performance data, test copy/creative variations, and double down on what produces the strongest outcomes." },
    { step: "05", title: "Report", text: "We share clear, transparent performance updates so strategic decisions are always based on evidence—not guesswork." },
  ];

  const values = [
    { name: "Clarity", text: "Simple communication and understandable, jargon-free reporting." },
    { name: "Ownership", text: "We take full responsibility for campaign quality, momentum, and growth." },
    { name: "Curiosity", text: "We keep testing, learning, and seeking better answers for your market." },
    { name: "Impact", text: "We focus strictly on work that drives real, measurable business outcomes." },
  ];

  return (
    <section id="experience" className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section 1: Why G2VERTEX */}
      <div className="text-center space-y-4 mb-12">
        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono bg-blue-50 text-[#0066FF] border border-blue-200 font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> WHY G2VERTEX
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          No vanity metrics. <span className="text-[#0066FF]">Just meaningful momentum.</span>
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          The digital landscape is crowded with numbers that lead nowhere. We turn marketing channels into practical engines for qualified leads, sales conversations, and long-term business growth.
        </p>
      </div>

      {/* Why Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {whyPillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all"
            >
              <div className={`w-12 h-12 rounded-xl ${pillar.bg} border flex items-center justify-center mb-4`}>
                <Icon className={`w-6 h-6 ${pillar.color}`} />
              </div>
              <h3 className="text-base font-extrabold text-slate-900 mb-2">{pillar.title}</h3>
              <p className="text-xs text-slate-600 leading-relaxed">{pillar.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* Section 2: 5-Step Growth Approach */}
      <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 sm:p-12 mb-20">
        <div className="text-center space-y-3 mb-10">
          <span className="text-xs font-mono font-bold text-[#0066FF] uppercase tracking-widest block">HOW WE WORK</span>
          <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900">Our 5-Step Growth Approach</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {approachSteps.map((s, idx) => (
            <div key={s.step} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="text-xl font-black font-mono text-[#0066FF]">{s.step}</div>
              <h4 className="text-sm font-extrabold text-slate-900">{s.title}</h4>
              <p className="text-[11px] text-slate-600 leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section 3: Core Agency Values */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-lg">
        <div className="lg:col-span-4 space-y-3">
          <span className="text-xs font-mono font-bold text-[#0066FF] uppercase tracking-widest block">OUR VALUES</span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">Built on Trust, Ownership &amp; Impact</h3>
          <p className="text-xs text-slate-600 leading-relaxed">
            We operate as an extension of your growth team, taking full responsibility for momentum and continuous improvement.
          </p>
        </div>

        <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {values.map((val) => (
            <div key={val.name} className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
              <h4 className="text-sm font-bold text-[#0066FF] flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#0066FF]" /> {val.name}
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed">{val.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
