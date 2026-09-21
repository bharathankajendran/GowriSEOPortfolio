"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye, Sparkles } from "lucide-react";
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
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <GlassCard className="flex flex-col h-full group p-0 overflow-hidden">
        {/* Card Header Thumbnail */}
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
          <Image
            src={project.thumbnailUrl}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#121318] via-[#121318]/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

          {/* Featured Badge */}
          {project.featured && (
            <div className="absolute top-4 left-4 z-10">
              <Badge variant="emerald" className="gap-1 shadow-lg backdrop-blur-xl">
                <Sparkles className="w-3 h-3" /> Featured Work
              </Badge>
            </div>
          )}

          {/* Quick Action Overlay Buttons */}
          <div className="absolute top-4 right-4 z-10 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={() => onQuickView(project)}
              className="p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-orange-500 hover:text-slate-950 backdrop-blur-md transition-all shadow-lg cursor-pointer"
              title="Quick Breakdown Drawer"
            >
              <Eye className="w-4 h-4" />
            </button>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-orange-500 hover:text-slate-950 backdrop-blur-md transition-all shadow-lg"
              title="Live Demo Link"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Category Chip */}
          <div className="absolute bottom-4 left-4 z-10">
            <span className="px-3 py-1 rounded-full text-xs font-mono bg-black/60 text-slate-300 border border-white/10 backdrop-blur-md">
              {project.category}
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
          <div>
            <h3
              onClick={() => onQuickView(project)}
              className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors cursor-pointer"
            >
              {project.title}
            </h3>
            <p className="text-xs font-mono text-orange-400 mt-1 line-clamp-1">
              {project.tagline}
            </p>
            <p className="text-sm text-slate-300 mt-2 line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Highlight Stat Pills */}
          {parsedMetrics.length > 0 && (
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-white/5">
              {parsedMetrics.slice(0, 2).map((m, idx) => (
                <div key={idx} className="bg-white/[0.03] p-2 rounded-lg text-center">
                  <div className="text-xs font-mono text-slate-400">{m.label}</div>
                  <div className="text-sm font-bold text-orange-400">{m.value}</div>
                </div>
              ))}
            </div>
          )}

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {parsedTags.slice(0, 4).map((tag) => (
              <Badge key={tag} variant="slate" className="text-[11px] py-0.5">
                {tag}
              </Badge>
            ))}
            {parsedTags.length > 4 && (
              <span className="text-[11px] font-mono text-slate-500 self-center">
                +{parsedTags.length - 4} more
              </span>
            )}
          </div>

          {/* Bottom Actions */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <button
              onClick={() => onQuickView(project)}
              className="text-xs font-semibold text-slate-300 hover:text-orange-400 transition-colors flex items-center gap-1 cursor-pointer"
            >
              Quick Breakdown &rarr;
            </button>
            <div className="flex items-center gap-2">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                  aria-label="GitHub Repo"
                >
                  <Github className="w-4 h-4" />
                </a>
              )}
              <Link
                href={`/projects/${project.slug}`}
                className="text-xs font-mono text-orange-400 hover:underline"
              >
                Case Study
              </Link>
            </div>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
};
