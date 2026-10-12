"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, Sparkles, ArrowUpRight } from "lucide-react";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";

export interface ProjectData {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  category: string;
  description: string;
  client?: string | null;
  duration?: string | null;
  thumbnailUrl: string;
  liveUrl: string;
  githubUrl?: string | null;
  featured?: boolean;
  tags: string; // JSON string
  challenges: string;
  solution: string;
  metrics: string; // JSON string
  architecture?: string | null;
}

interface ProjectCardProps {
  project: ProjectData;
  onQuickView: (project: ProjectData) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  onQuickView,
}) => {
  const parsedTags: string[] = JSON.parse(project.tags || "[]");
  const parsedMetrics: Array<{ label: string; value: string }> = JSON.parse(
    project.metrics || "[]"
  );

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.25 }}
    >
      <GlassCard className="flex flex-col h-full group p-0 overflow-hidden border-slate-200 bg-white hover:border-blue-300 hover:shadow-xl">
        {/* Thumbnail Image Header */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 border-b border-slate-200">
          <img
            src={project.thumbnailUrl}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-60" />

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-3.5 left-3.5 z-10">
              <Badge variant="blue" className="gap-1 shadow-md bg-white/95 text-[#0066FF] border-blue-200 font-bold">
                <Sparkles className="w-3 h-3 text-[#0066FF]" /> Featured Work
              </Badge>
            </div>
          )}

          {/* Category Tag */}
          <div className="absolute bottom-3.5 left-3.5 z-10">
            <span className="px-2.5 py-1 rounded-md text-[11px] bg-white/95 text-slate-800 border border-slate-200 font-semibold shadow-sm">
              {project.category}
            </span>
          </div>

          {/* Quick Action Overlay Buttons */}
          <div className="absolute top-3.5 right-3.5 z-10 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
            <button
              onClick={() => onQuickView(project)}
              className="px-3 py-1.5 rounded-lg bg-white/95 text-slate-800 hover:text-white hover:bg-[#0066FF] transition-all cursor-pointer shadow-md text-xs font-bold flex items-center gap-1.5"
              title="View Case Study"
            >
              <Eye className="w-3.5 h-3.5" /> View Case Study
            </button>
          </div>
        </div>

        {/* Card Body Details */}
        <div className="p-5 flex flex-col flex-grow justify-between space-y-4">
          <div>
            <h3
              onClick={() => onQuickView(project)}
              className="text-lg font-extrabold text-slate-900 dark:text-white group-hover:text-[#0066FF] dark:group-hover:text-[#38BDF8] transition-colors cursor-pointer"
            >
              {project.title}
            </h3>
            <p className="text-xs text-[#0066FF] dark:text-blue-400 font-semibold mt-1 line-clamp-1">
              {project.tagline}
            </p>
            <p className="text-xs text-slate-600 dark:text-slate-400 mt-2.5 line-clamp-2 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          {/* Key Metric Tags */}
          {parsedMetrics.length > 0 && (
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800">
              {parsedMetrics.slice(0, 2).map((m, idx) => (
                <div key={idx} className="bg-blue-50/60 dark:bg-slate-800/60 p-2 rounded-lg text-center border border-blue-100 dark:border-slate-700">
                  <div className="text-[10px] text-slate-500 dark:text-slate-400 font-semibold">{m.label}</div>
                  <div className="text-xs font-black text-[#0066FF] dark:text-blue-400 mt-0.5">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1 pt-1">
            {parsedTags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="slate" className="text-[10px] py-0.5 px-2">
                {tag}
              </Badge>
            ))}
            {parsedTags.length > 4 && (
              <span className="text-[10px] text-slate-400 self-center font-semibold">
                +{parsedTags.length - 4}
              </span>
            )}
          </div>

          {/* Card Footer Links */}
          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-end">
            <button
              type="button"
              onClick={() => onQuickView(project)}
              className="text-xs text-[#0066FF] dark:text-blue-400 hover:underline font-bold flex items-center gap-1 cursor-pointer"
            >
              Read Case Study <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};
