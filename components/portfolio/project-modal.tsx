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
      {/* Header Controls */}
      <div className="flex items-center justify-between bg-slate-100 p-1.5 rounded-xl border border-slate-200">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab("breakdown")}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === "breakdown"
                ? "bg-[#0066FF] text-white font-bold shadow-sm"
                : "text-slate-700 hover:text-slate-900"
            }`}
          >
            <Layers className="w-3.5 h-3.5 inline mr-1.5" /> Breakdown &amp; Metrics
          </button>
          <button
            onClick={() => setActiveTab("embed")}
            className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
              activeTab === "embed"
                ? "bg-[#0066FF] text-white font-bold shadow-sm"
                : "text-slate-700 hover:text-slate-900"
            }`}
          >
            <Monitor className="w-3.5 h-3.5 inline mr-1.5" /> Live Preview
          </button>
        </div>

        <a
          href={project.liveUrl}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-mono text-[#0066FF] font-bold hover:underline flex items-center gap-1 px-3"
        >
          Open Site <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {activeTab === "embed" ? (
        /* Live Iframe Embed Preview */
        <div className="space-y-4">
          <div className="relative w-full h-[500px] rounded-2xl overflow-hidden border border-slate-200 bg-slate-900">
            <div className="absolute top-0 left-0 right-0 h-9 bg-slate-100 border-b border-slate-200 flex items-center px-4 gap-2 z-10">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <div className="ml-4 flex-grow bg-white border border-slate-200 rounded-md text-[11px] font-mono text-slate-600 px-3 py-1 truncate">
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
          <p className="text-xs text-slate-500 font-mono text-center">
            Note: If external site restricts framing, click Open Site above.
          </p>
        </div>
      ) : (
        /* Breakdown Details Tab */
        <div className="space-y-6">
          {/* Hero Thumbnail */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-slate-200">
            <Image
              src={project.thumbnailUrl}
              alt={project.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <Badge variant="blue" className="mb-2 bg-white text-[#0066FF] font-bold">
                {project.category}
              </Badge>
              <h3 className="text-2xl font-black text-white">{project.title}</h3>
              <p className="text-xs font-mono text-blue-200 font-semibold">{project.tagline}</p>
            </div>
          </div>

          {/* Key Metrics Grid */}
          {parsedMetrics.length > 0 && (
            <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
              {parsedMetrics.map((m, idx) => (
                <div key={idx} className="text-center">
                  <div className="text-2xl font-black text-[#0066FF]">{m.value}</div>
                  <div className="text-xs font-mono text-slate-600 mt-0.5 font-semibold">{m.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Meta Details */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-100 text-xs font-mono border border-slate-200">
            <div>
              <span className="text-slate-500 block">CLIENT</span>
              <span className="text-slate-900 font-bold">{project.client || "Enterprise Client"}</span>
            </div>
            <div>
              <span className="text-slate-500 block">DURATION</span>
              <span className="text-slate-900 font-bold">{project.duration || "2 Months"}</span>
            </div>
            <div>
              <span className="text-slate-500 block">CATEGORY</span>
              <span className="text-slate-900 font-bold">{project.category}</span>
            </div>
            <div>
              <span className="text-slate-500 block">STATUS</span>
              <span className="text-emerald-600 font-bold">Production Live</span>
            </div>
          </div>

          {/* Narrative */}
          <div className="space-y-4">
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                Overview &amp; Executive Objective
              </h4>
              <p className="text-xs text-slate-600 mt-1.5 leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-orange-50 border border-orange-200">
              <h4 className="text-xs font-bold text-orange-800 uppercase tracking-wider">
                The Engineering Challenge
              </h4>
              <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                {project.challenges}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-blue-50 border border-blue-200">
              <h4 className="text-xs font-bold text-blue-800 uppercase tracking-wider">
                The Technical Solution
              </h4>
              <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                {project.solution}
              </p>
            </div>

            {project.architecture && (
              <div className="p-4 rounded-xl bg-purple-50 border border-purple-200">
                <h4 className="text-xs font-bold text-purple-900 uppercase tracking-wider flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-purple-600" /> Architecture Breakdown
                </h4>
                <p className="text-xs font-mono text-slate-700 mt-1 leading-relaxed">
                  {project.architecture}
                </p>
              </div>
            )}
          </div>

          {/* Tech Badges */}
          <div>
            <h4 className="text-xs font-mono uppercase text-slate-500 font-bold mb-2">Tech Stack</h4>
            <div className="flex flex-wrap gap-2">
              {parsedTags.map((tag) => (
                <Badge key={tag} variant="blue">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Footer CTAs */}
          <div className="pt-5 border-t border-slate-200 flex items-center justify-between gap-4">
            <Link href={`/projects/${project.slug}`} onClick={onClose}>
              <Button variant="outline" size="sm">
                Full Case Study <ArrowUpRight className="w-4 h-4" />
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
                  Launch Live <ExternalLink className="w-4 h-4 ml-1" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </ModalDrawer>
  );
};
