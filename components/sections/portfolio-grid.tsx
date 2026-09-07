"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Layers, Search, Code2, LayoutGrid } from "lucide-react";
import { ProjectCard, ProjectData } from "@/components/portfolio/project-card";
import { ProjectModal } from "@/components/portfolio/project-modal";

interface PortfolioGridProps {
  initialProjects?: ProjectData[];
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  initialProjects = [],
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const categories = [
    { label: "All", icon: LayoutGrid },
    { label: "SEO Tools", icon: Search },
    { label: "Full-Stack Apps", icon: Code2 },
    { label: "Design Systems", icon: Layers },
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? initialProjects
      : initialProjects.filter((p) => p.category === selectedCategory);

  const handleQuickView = (project: ProjectData) => {
    setActiveProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <Sparkles className="w-3.5 h-3.5" /> Featured Works & Case Studies
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
          Engineered for <span className="text-gradient-emerald">Performance</span> &{" "}
          <span className="text-gradient-purple">Rankings</span>
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
          Explore recent SaaS platforms, custom technical SEO toolkits, and accessible design systems built with Next.js 14 and cutting-edge web technologies.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = selectedCategory === cat.label;
          return (
            <button
              key={cat.label}
              onClick={() => setSelectedCategory(cat.label)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                isActive
                  ? "bg-gradient-to-r from-emerald-500 to-teal-500 text-slate-950 shadow-lg shadow-emerald-500/20 scale-105"
                  : "bg-white/[0.04] text-slate-400 hover:text-white border border-white/10 hover:bg-white/[0.08]"
              }`}
            >
              <Icon className="w-4 h-4" />
              {cat.label}
              {cat.label !== "All" && (
                <span className="text-[10px] font-mono opacity-80">
                  ({initialProjects.filter((p) => p.category === cat.label).length})
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onQuickView={handleQuickView}
            />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 bg-white/[0.02] rounded-3xl border border-white/10">
          <p className="text-slate-400 font-mono">No projects found in this category.</p>
        </div>
      )}

      {/* Project Drawer / Modal Popup */}
      <ProjectModal
        project={activeProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
