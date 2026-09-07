"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, FolderCheck, Users, Zap } from "lucide-react";

export const StatsBar = () => {
  const stats = [
    {
      icon: FolderCheck,
      value: "45+",
      label: "Projects Completed",
      subtext: "Full-Stack Apps & SEO Systems",
      color: "text-emerald-400",
    },
    {
      icon: TrendingUp,
      value: "+340%",
      label: "Avg. Organic Growth",
      subtext: "Search Traffic Scaled",
      color: "text-cyan-400",
    },
    {
      icon: Zap,
      value: "99/100",
      label: "Core Web Vitals",
      subtext: "PageSpeed Performance Score",
      color: "text-purple-400",
    },
    {
      icon: Users,
      value: "99.4%",
      label: "Client Satisfaction",
      subtext: "Long-Term Retention Rate",
      color: "text-amber-400",
    },
  ];

  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="rounded-3xl bg-[#121318]/90 backdrop-blur-2xl border border-white/10 p-8 shadow-2xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center gap-5 pt-6 sm:pt-0 sm:pl-8 first:pl-0 first:pt-0"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0">
                  <Icon className={`w-7 h-7 ${stat.color}`} />
                </div>
                <div>
                  <div className={`text-3xl font-extrabold tracking-tight ${stat.color}`}>
                    {stat.value}
                  </div>
                  <div className="text-sm font-semibold text-white mt-0.5">
                    {stat.label}
                  </div>
                  <div className="text-xs text-slate-400 font-mono mt-0.5">
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
