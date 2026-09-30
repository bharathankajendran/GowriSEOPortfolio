"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Layers, Search, Code2, LayoutGrid, Target, MessageSquare } from "lucide-react";
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
    { label: "Paid Ads & PPC", icon: Target },
    { label: "B2B Outreach", icon: MessageSquare },
    { label: "Technical SEO", icon: Search },
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
    <section id="projects" className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center space-y-4 mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono bg-blue-50 text-[#0066FF] border border-blue-200 font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" /> FEATURED PROJECTS &amp; CAMPAIGNS
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
          Work built around <span className="text-[#0066FF]">growth goals.</span>
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
          Every business has a different starting point. Our projects combine strategy, creative execution, targeting, optimization, and reporting to solve the marketing challenges that matter most.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = selectedCategory === cat.label;
          return (
            <button
              key={cat.label}
              onClick={() => setSelectedCategory(cat.label)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                isActive
                  ? "bg-[#0066FF] text-white shadow-md font-bold"
                  : "bg-white text-slate-700 hover:text-slate-900 border border-slate-200 hover:bg-slate-50"
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
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
          <p className="text-slate-500 font-mono text-sm">No projects found in this category.</p>
        </div>
      )}

      {/* Project Drawer / Modal */}
      <ProjectModal
        project={activeProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
