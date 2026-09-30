"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Search, Zap, Layers, CheckCircle2, ArrowRight, Target, MessageSquare, Mail, Share2 } from "lucide-react";
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

  const getIcon = (name: string, index: number) => {
    switch (index % 4) {
      case 0:
        return Target;
      case 1:
        return Zap;
      case 2:
        return Code;
      case 3:
        return Search;
      default:
        return Target;
    }
  };

  return (
    <section id="services" className="py-20 relative z-10 bg-[#F8FAFC] border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-12">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono bg-blue-50 text-[#0066FF] border border-blue-200 font-semibold uppercase tracking-wider">
            WHAT WE DO
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Marketing that moves your <span className="text-[#0066FF]">business forward.</span>
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            We combine creative thinking, targeting, data, and consistent optimization to help you reach the people most likely to become long-term customers.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initialServices.map((service, index) => {
            const Icon = getIcon(service.iconName, index);
            const parsedFeatures: string[] = JSON.parse(service.features || "[]");
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                onMouseEnter={() => setHoveredIndex(index)}
              >
                <GlassCard
                  className={`h-full flex flex-col justify-between transition-all duration-300 ${
                    isHovered ? "bg-white border-blue-300 shadow-xl" : "bg-white border-slate-200 shadow-sm"
                  }`}
                >
                  <div className="space-y-4">
                    {/* Icon */}
                    <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-200 text-[#0066FF] flex items-center justify-center">
                      <Icon className="w-6 h-6" />
                    </div>

                    <div>
                      <h3 className="text-lg font-extrabold text-slate-900 tracking-tight">
                        {service.title}
                      </h3>
                      <p className="text-xs text-slate-600 mt-2 leading-relaxed font-normal">
                        {service.description}
                      </p>
                    </div>

                    {/* Features List */}
                    <div className="pt-3 border-t border-slate-100 space-y-2">
                      {parsedFeatures.map((feat) => (
                        <div key={feat} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 mt-4 border-t border-slate-100">
                    <a
                      href="#contact"
                      className="text-xs font-mono font-bold text-[#0066FF] hover:text-[#0044B3] transition-colors flex items-center justify-between group/link"
                    >
                      <span>Book Consultation</span>
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
