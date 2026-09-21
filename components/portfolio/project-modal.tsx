"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Monitor, Layers, ArrowUpRight, Cpu } from "lucide-react";
import { ModalDrawer } from "@/components/ui/modal-drawer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectData } from "./project-card";

interface ProjectModalProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<"breakdown" | "embed">("breakdown");

  if (!project) return null;

  const parsedTags: string[] = JSON.parse(project.tags || "[]");
  const parsedMetrics: Array<{ label: string; value: string }> = JSON.parse(
    project.metrics || "[]"
  );

  return (
    <ModalDrawer isOpen={isOpen} onClose={onClose} title={project.title}>
      {/* Header Controls / Tabs */}
      <div className="flex items-center justify-between bg-white/[0.04] p-1.5 rounded-xl border border-white/10">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab("breakdown")}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === "breakdown"
                ? "bg-orange-500 text-slate-950 font-bold shadow-md"
                : "text-slate-300 hover:text-white"
            }`}
          >
            <Layers className="w-3.5 h-3.5 inline mr-1.5" /> Breakdown & Metrics
          </button>
          <button
            onClick={() => setActiveTab("embed")}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === "embed"
                ? "bg-orange-500 text-slate-950 font-bold shadow-md"
                : "text-slate-300 hover:text-white"
            }`}
          >
            <Monitor className="w-3.5 h-3.5 inline mr-1.5" /> Live Site Preview
          </button>
        </div>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-mono text-orange-400 hover:underline flex items-center gap-1 px-3"
        >
          Open External Tab <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {activeTab === "embed" ? (
        /* Live Iframe Embed Preview */
        <div className="space-y-4">
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-white/10 bg-slate-950">
            <div className="absolute top-0 left-0 right-0 h-9 bg-[#181A22] border-b border-white/10 flex items-center px-4 gap-2 z-10">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
              <div className="ml-4 flex-grow bg-black/40 rounded-md text-[11px] font-mono text-slate-400 px-3 py-1 truncate">
                {project.liveUrl}
              </div>
            </div>
            <iframe
              src={project.liveUrl}
              title={`${project.title} Live Preview`}
              className="w-full h-full pt-9 border-0 bg-white"
              sandbox="allow-scripts allow-same-origin allow-popups"
              loading="lazy"
            />
          </div>
          <p className="text-xs text-slate-400 font-mono text-center">
            Note: Some external sites enforce X-Frame-Options headers. Use the external link button above to open directly.
          </p>
        </div>
      ) : (
        /* Breakdown Details Tab */
        <div className="space-y-6">
          {/* Main Thumbnail Hero */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10">
            <Image
              src={project.thumbnailUrl}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0F14] via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <Badge variant="emerald" className="mb-2">
                {project.category}
              </Badge>
              <h3 className="text-2xl font-extrabold text-white">{project.title}</h3>
              <p className="text-sm font-mono text-orange-400">{project.tagline}</p>
            </div>
          </div>

          {/* Key Metrics Grid */}
          {parsedMetrics.length > 0 && (
            <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/10">
              {parsedMetrics.map((m, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl font-extrabold text-orange-400">{m.value}</div>
                  <div className="text-xs font-mono text-slate-400 mt-0.5">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Meta Info */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-900/50 text-xs font-mono">
            <div>
              <span className="text-slate-500 block">CLIENT</span>
              <span className="text-slate-200 font-medium">{project.client || "Confidential SaaS"}</span>
            </div>
            <div>
              <span className="text-slate-500 block">DURATION</span>
              <span className="text-slate-200 font-medium">{project.duration || "2 Months"}</span>
            </div>
            <div>
              <span className="text-slate-500 block">CATEGORY</span>
              <span className="text-slate-200 font-medium">{project.category}</span>
            </div>
            <div>
              <span className="text-slate-500 block">STATUS</span>
              <span className="text-orange-400 font-medium">Production Live</span>
            </div>
          </div>

          {/* Detailed Narrative */}
          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-bold text-white uppercase tracking-wider text-slate-300">
                Overview & Objective
              </h4>
              <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-red-950/20 border border-red-500/20">
              <h4 className="text-xs font-bold text-red-400 uppercase tracking-wider">
                The Engineering Challenge
              </h4>
              <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                {project.challenges}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-orange-950/20 border border-orange-500/20">
              <h4 className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                The Architecture Solution
              </h4>
              <p className="text-sm text-slate-300 mt-1 leading-relaxed">
                {project.solution}
              </p>
            </div>

            {project.architecture && (
              <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/20">
                <h4 className="text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-purple-400" /> Stack Architecture Notes
                </h4>
                <p className="text-xs font-mono text-slate-300 mt-1 leading-relaxed">
                  {project.architecture}
                </p>
              </div>
            )}
          </div>

          {/* Tech Stack Badges */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-400 mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {parsedTags.map((tag) => (
                <Badge key={tag} variant="purple">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Action CTAs Footer */}
          <div className="pt-6 border-t border-white/10 flex items-center justify-between gap-4">
            <Link href={`/projects/${project.slug}`} onClick={onClose}>
              <Button variant="outline" size="sm">
                Full Case Study Page <ArrowUpRight className="w-4 h-4" />
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noreferrer">
                  <Button variant="ghost" size="sm">
                    <Github className="w-4 h-4 mr-1" /> Source Code
                  </Button>
                </a>
              )}
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                <Button variant="primary" size="sm">
                  Launch Site <ExternalLink className="w-4 h-4 ml-1" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </ModalDrawer>
  );
};
