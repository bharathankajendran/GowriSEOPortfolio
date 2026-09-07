"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export interface ExperienceData {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string; // JSON string
  technologies: string; // JSON string
  isCurrent: boolean;
  order: number;
}

interface ExperienceTimelineProps {
  initialExperiences?: ExperienceData[];
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  initialExperiences = [],
}) => {
  return (
    <section id="experience" className="py-24 relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center space-y-4 mb-16">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
          <Sparkles className="w-3.5 h-3.5" /> Career Milestones & History
        </span>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Track Record of <span className="text-gradient-cyan">Impact</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Proven history leading full-stack engineering initiatives and technical SEO transformations across enterprise SaaS agencies.
        </p>
      </div>

      {/* Vertical Timeline */}
      <div className="relative border-l-2 border-white/10 ml-4 md:ml-32 space-y-12 pl-6 md:pl-10">
        {initialExperiences.map((exp, index) => {
          const achievements: string[] = JSON.parse(exp.achievements || "[]");
          const technologies: string[] = JSON.parse(exp.technologies || "[]");

          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Glowing Timeline Node Dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-[#0A0A0C] border-2 border-emerald-400 flex items-center justify-center group-hover:scale-125 group-hover:border-cyan-400 transition-all shadow-[0_0_15px_rgba(16,185,129,0.5)]">
                <div className="w-2 h-2 rounded-full bg-emerald-400 group-hover:bg-cyan-400" />
              </div>

              {/* Period Tag on Desktop Left */}
              <div className="hidden md:block absolute -left-48 top-1 text-right w-36">
                <span className="text-xs font-mono text-emerald-400 flex items-center justify-end gap-1">
                  <Calendar className="w-3.5 h-3.5" /> {exp.period}
                </span>
                {exp.isCurrent && (
                  <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-300 border border-emerald-500/20">
                    CURRENT
                  </span>
                )}
              </div>

              {/* Card Container */}
              <div className="rounded-2xl bg-[#121318]/80 backdrop-blur-xl border border-white/10 p-6 md:p-8 hover:border-cyan-500/40 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                      <Briefcase className="w-5 h-5 text-cyan-400" />
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-emerald-400">{exp.company}</p>
                  </div>
                  {/* Period Tag on Mobile */}
                  <div className="md:hidden flex items-center gap-2 text-xs font-mono text-slate-400">
                    <Calendar className="w-3.5 h-3.5 text-emerald-400" /> {exp.period}
                  </div>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {exp.description}
                </p>

                {/* Accomplishments Bullet Points */}
                {achievements.length > 0 && (
                  <div className="space-y-2 mb-4">
                    {achievements.map((ach, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{ach}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {technologies.map((tech) => (
                    <Badge key={tech} variant="slate" className="text-[11px]">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
