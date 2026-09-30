"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, FolderCheck, Users, Zap } from "lucide-react";

export const StatsBar = () => {
  const stats = [
    {
      icon: FolderCheck,
      value: "45+",
      label: "Enterprise Projects",
      subtext: "Full-Stack Web & SEO Audits",
      color: "text-[#0066FF]",
      bg: "bg-blue-50 border-blue-100",
    },
    {
      icon: TrendingUp,
      value: "+340%",
      label: "Organic Traffic Growth",
      subtext: "90-Day Search Performance Scaling",
      color: "text-cyan-700",
      bg: "bg-cyan-50 border-cyan-100",
    },
    {
      icon: Zap,
      value: "99/100",
      label: "Core Web Vitals",
      subtext: "Sub-Second LCP Performance",
      color: "text-emerald-700",
      bg: "bg-emerald-50 border-emerald-100",
    },
    {
      icon: Users,
      value: "99.4%",
      label: "Client Retention Rate",
      subtext: "Long-Term Corporate Contracts",
      color: "text-amber-700",
      bg: "bg-amber-50 border-amber-100",
    },
  ];

  return (
    <section className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-200">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-4 pt-6 sm:pt-0 sm:pl-6 first:pl-0 first:pt-0"
              >
                <div className={`w-12 h-12 rounded-xl ${stat.bg} border flex items-center justify-center shrink-0`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div>
                  <div className={`text-2xl sm:text-3xl font-black tracking-tight ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold text-slate-900 mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-slate-500 font-mono mt-0.5">
                    {stat.subtext}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
