"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Search,
  LayoutGrid,
  Target,
  Users,
  Mail,
  Building2,
} from "lucide-react";
import { ProjectCard, ProjectData } from "@/components/portfolio/project-card";
import { ProjectModal } from "@/components/portfolio/project-modal";
import { B2CLeadGenShowcase } from "@/components/sections/b2c-lead-gen-showcase";

interface PortfolioGridProps {
  initialProjects?: ProjectData[];
}

export const PortfolioGrid: React.FC<PortfolioGridProps> = ({
  initialProjects = [],
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeProject, setActiveProject] = useState<ProjectData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  // Exact categories requested: ALL, Email Nature & Lead Engine, Technical SEO, B2B, B2C, Performance Advertising Scale
  const categories = [
    { label: "ALL", icon: LayoutGrid },
    { label: "Email Nurture & Lead Engine", icon: Mail },
    { label: "Technical SEO", icon: Search },
    { label: "B2B", icon: Building2 },
    { label: "B2C", icon: Users },
    { label: "Performance Advertising Scale", icon: Target },
  ];

  const projectOrder = [
    "omnichannel-email-nurture-automation",
    "seo-growth-search-domination",
    "linkedin-b2b-outreach-engine",
    "b2c-customer-acquisition-engine",
    "performance-advertising-campaigns",
  ];

  const sortedInitialProjects = [...initialProjects].sort((a, b) => {
    const idxA = projectOrder.indexOf(a.slug);
    const idxB = projectOrder.indexOf(b.slug);
    if (idxA === -1 && idxB === -1) return 0;
    if (idxA === -1) return 1;
    if (idxB === -1) return -1;
    return idxA - idxB;
  });

  const matchesCategory = (p: ProjectData, catLabel: string) => {
    if (catLabel === "ALL" || catLabel === "All") return true;

    if (
      catLabel === "Email Nurture & Lead Engine" ||
      catLabel === "Email Nature & Lead Engine"
    ) {
      return (
        p.category === "Email Nurture & Lead Engine" ||
        p.category === "Email Marketing" ||
        p.slug.includes("email") ||
        p.title.toLowerCase().includes("email")
      );
    }

    if (catLabel === "Technical SEO") {
      return (
        p.category === "Technical SEO" ||
        p.slug.includes("seo") ||
        p.title.toLowerCase().includes("seo")
      );
    }

    if (catLabel === "B2B") {
      return (
        p.category === "B2B" ||
        p.category === "B2B Outreach" ||
        p.slug.includes("b2b") ||
        p.slug.includes("linkedin") ||
        p.title.toLowerCase().includes("b2b") ||
        p.title.toLowerCase().includes("upvc")
      );
    }

    if (catLabel === "B2C") {
      return (
        p.category === "B2C" ||
        p.category === "B2C Lead Gen" ||
        p.slug.includes("b2c") ||
        p.title.toLowerCase().includes("b2c") ||
        p.title.toLowerCase().includes("home services")
      );
    }

    if (catLabel === "Performance Advertising Scale") {
      return (
        p.category === "Performance Advertising Scale" ||
        p.category === "Paid Ads & PPC" ||
        p.slug.includes("performance") ||
        p.slug.includes("ads") ||
        p.title.toLowerCase().includes("performance")
      );
    }

    return p.category === catLabel;
  };

  const filteredProjects =
    selectedCategory === "ALL" || selectedCategory === "All"
      ? sortedInitialProjects
      : sortedInitialProjects.filter((p) => matchesCategory(p, selectedCategory));

  const handleQuickView = (project: ProjectData) => {
    setActiveProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-20 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center space-y-4 mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-blue-50 text-[#0066FF] border border-blue-200 uppercase tracking-wider">
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
          const count = sortedInitialProjects.filter((p) => matchesCategory(p, cat.label)).length;
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
              {cat.label !== "ALL" && (
                <span className="text-[10px] font-semibold opacity-80">
                  ({count})
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Projects Grid - Always immediately below the filter tabs */}
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

      {/* Empty State */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
          <p className="text-slate-500 font-medium text-sm">No projects found in this category.</p>
        </div>
      )}

      {/* B2C Lead Generation Detailed Services (placed below the project card) */}
      {(selectedCategory === "B2C" || selectedCategory === "B2C Lead Gen") && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="mt-16 pt-12 border-t border-slate-200"
        >
          <B2CLeadGenShowcase />
        </motion.div>
      )}

      {/* Project Full-Tab Modal */}
      <ProjectModal
        project={activeProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
