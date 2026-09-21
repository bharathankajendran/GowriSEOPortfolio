"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Search, Zap, Layers, CheckCircle2, ArrowRight } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";

export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  description: string;
  iconName: string;
  features: string; // JSON string
  order: number;
}

interface ServicesProps {
  initialServices?: ServiceData[];
}

export const ServicesSection: React.FC<ServicesProps> = ({
  initialServices = [],
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);

  const getIcon = (name: string) => {
    switch (name) {
      case "Search":
        return Search;
      case "Code":
        return Code;
      case "Zap":
        return Zap;
      case "Layers":
        return Layers;
      default:
        return Code;
    }
  };

  return (
    <section id="services" className="py-24 relative z-10 bg-[#070709] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono bg-purple-500/10 text-purple-300 border border-purple-500/20">
            Specialized Services & Capabilities
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Comprehensive Digital <span className="text-gradient-purple">Engineering</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            From technical SEO audits to full-stack Next.js production deployments, delivering end-to-end solutions tailored for high-growth businesses.
          </p>
        </div>

        {/* Services Grid / Interactive Accordion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {initialServices.map((service, index) => {
            const Icon = getIcon(service.iconName);
            const parsedFeatures: string[] = JSON.parse(service.features || "[]");
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <GlassCard
                  glowColor={isHovered ? "purple" : "none"}
                  className={`h-full flex flex-col justify-between transition-all duration-500 ${
                    isHovered ? "bg-[#161822] border-purple-500/40 scale-[1.02]" : "bg-[#101116]"
                  }`}
                >
                  <div className="space-y-5">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ${
                        isHovered
                          ? "bg-purple-500 text-slate-950 shadow-lg shadow-purple-500/30"
                          : "bg-white/[0.04] text-purple-400 border border-white/10"
                      }`}
                    >
                      <Icon className="w-7 h-7" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="pt-4 border-t border-white/5 space-y-2">
                      {parsedFeatures.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-6 mt-6 border-t border-white/5">
                    <a
                      href="#contact"
                      className="text-xs font-mono font-semibold text-purple-400 hover:text-white transition-colors flex items-center justify-between group/link"
                    >
                      <span>Inquire Service</span>
                      <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
