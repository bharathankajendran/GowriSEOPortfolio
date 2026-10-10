"use client";

import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  X,
  CheckCircle2,
  AlertCircle,
  Layers,
  Target,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ProjectData } from "./project-card";
import { getCaseStudyBySlug } from "@/lib/case-studies-data";

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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll and handle Escape key while full-screen case study is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") onClose();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "unset";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isOpen, onClose]);

  if (!mounted || !project) return null;

  const caseStudy = getCaseStudyBySlug(project.slug);
  const parsedTags: string[] = JSON.parse(project.tags || "[]");

  const title = caseStudy?.title || project.title;
  const subtitle = caseStudy?.subtitle || project.tagline;
  const industry = caseStudy?.industry || project.client || "B2B & Digital Services";
  const service = caseStudy?.service || project.category;
  const ctaText = caseStudy?.ctaText || "Book a Growth Call";

  const handleCtaClick = () => {
    onClose();
    if (typeof window !== "undefined") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = "/?tab=contact";
      }
    }
  };

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="case-study-fullscreen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] bg-white overflow-y-auto text-slate-900 flex flex-col"
          role="dialog"
          aria-modal="true"
        >
          {/* Top Sticky Bar - Clean White with Quick Navigation & Actions */}
          <header className="sticky top-0 z-30 bg-white border-b border-slate-200 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-xs">
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-xs font-bold text-slate-700 hover:text-slate-900 transition-colors cursor-pointer shadow-xs"
              title="Return to projects list"
            >
              <ArrowLeft className="w-4 h-4 text-[#0066FF]" /> Back to Projects
            </button>

            <div className="hidden md:flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#0066FF]" />
              <span>Full Case Study Breakdown</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-900 font-extrabold">G2 VERTEX</span>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <Button
                variant="primary"
                size="sm"
                onClick={handleCtaClick}
                className="font-bold text-xs px-4 shadow-sm cursor-pointer"
              >
                {ctaText} <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
              </Button>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
                aria-label="Close Case Study"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </header>

          {/* Main Case Study Content - Topic and Contents Only (No pictures) */}
          <main className="max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-14 space-y-10 flex-grow">
            {/* TOPIC SECTION: Title, Subtitle, Badges & Meta Strip */}
            <div className="space-y-4 pb-8 border-b border-slate-200">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-[#0066FF] border border-blue-200 uppercase tracking-wider">
                  {service}
                </span>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                  {industry}
                </span>
                {caseStudy?.market && (
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                    Market: {caseStudy.market}
                  </span>
                )}
              </div>

              <h1 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {title}
              </h1>

              {subtitle && (
                <p className="text-base sm:text-lg text-[#0066FF] font-bold leading-relaxed">
                  {subtitle}
                </p>
              )}

              {/* Metadata Summary Box */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs mt-4">
                <div>
                  <span className="text-slate-400 uppercase font-bold text-[10px] block">INDUSTRY</span>
                  <span className="font-bold text-slate-900 block mt-0.5">{industry}</span>
                </div>
                <div>
                  <span className="text-slate-400 uppercase font-bold text-[10px] block">SERVICE</span>
                  <span className="font-bold text-slate-900 block mt-0.5">{service}</span>
                </div>
                <div>
                  <span className="text-slate-400 uppercase font-bold text-[10px] block">PROVIDER</span>
                  <span className="font-bold text-[#0066FF] block mt-0.5">G2 VERTEX</span>
                </div>
                <div>
                  <span className="text-slate-400 uppercase font-bold text-[10px] block">ENGAGEMENT</span>
                  <span className="font-bold text-slate-900 block mt-0.5">Custom Strategy</span>
                </div>
                {caseStudy?.focusAreas && (
                  <div className="col-span-2 sm:col-span-4 pt-3 mt-1 border-t border-slate-200">
                    <span className="text-slate-400 uppercase font-bold text-[10px] block">FOCUS AREAS</span>
                    <span className="font-semibold text-slate-800 block mt-0.5">{caseStudy.focusAreas}</span>
                  </div>
                )}
              </div>
            </div>

            {/* CONTENTS SECTION */}

            {/* 1. Project Overview (if present) */}
            {caseStudy?.overview && (
              <section className="space-y-3">
                <h2 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#0066FF]" /> Project Overview
                </h2>
                <div className="text-sm sm:text-base text-slate-800 leading-relaxed space-y-3 whitespace-pre-line font-normal">
                  {caseStudy.overview}
                </div>
              </section>
            )}

            {/* 2. The Challenge */}
            <section className="p-5 sm:p-7 rounded-2xl bg-amber-50/70 border border-amber-200/90 space-y-3">
              <h2 className="text-sm font-black text-amber-900 uppercase tracking-wider flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-amber-600" /> The Challenge
              </h2>
              <div className="text-sm sm:text-base text-slate-900 leading-relaxed whitespace-pre-line font-normal">
                {caseStudy?.challenge || project.challenges}
              </div>
            </section>

            {/* 3. Our Strategy */}
            {caseStudy?.strategy && (
              <section className="p-5 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h2 className="text-sm font-black text-slate-900 uppercase tracking-wider flex items-center gap-2">
                  <Target className="w-4 h-4 text-[#0066FF]" /> Our Strategy
                </h2>
                <div className="text-sm sm:text-base text-slate-900 leading-relaxed whitespace-pre-line font-normal">
                  {caseStudy.strategy}
                </div>
              </section>
            )}

            {/* 4. Our Goal */}
            {caseStudy?.goal && (
              <section className="p-5 sm:p-6 rounded-2xl bg-sky-50/70 border border-sky-200 space-y-2">
                <h2 className="text-xs font-black text-sky-900 uppercase tracking-wider">Our Goal</h2>
                <p className="text-sm sm:text-base text-slate-900 leading-relaxed font-medium">
                  {caseStudy.goal}
                </p>
              </section>
            )}

            {/* 5. The Solution */}
            <section className="p-5 sm:p-7 rounded-2xl bg-blue-50/70 border border-blue-200/90 space-y-3">
              <h2 className="text-sm font-black text-blue-900 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#0066FF]" /> The Solution
              </h2>
              <div className="text-sm sm:text-base text-slate-900 leading-relaxed whitespace-pre-line font-normal">
                {caseStudy?.solution || project.solution}
              </div>
            </section>

            {/* 6. Key Modules & Capabilities (e.g. UPVC ERP/CRM) */}
            {caseStudy?.modules && caseStudy.modules.length > 0 && (
              <section className="space-y-4">
                <h2 className="text-base sm:text-lg font-black text-slate-900 uppercase tracking-wide">
                  Key Modules &amp; Capabilities
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {caseStudy.modules.map((m, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1.5 hover:border-blue-300 transition-colors"
                    >
                      <span className="text-sm font-black text-slate-900 block">{m.title}</span>
                      <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">{m.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* 7. The Expected Outcome */}
            {caseStudy?.expectedOutcome && (
              <section className="p-5 sm:p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 space-y-2">
                <h2 className="text-xs font-black text-emerald-900 uppercase tracking-wider">
                  The Expected Outcome
                </h2>
                <p className="text-sm sm:text-base text-slate-900 leading-relaxed font-normal">
                  {caseStudy.expectedOutcome}
                </p>
              </section>
            )}

            {/* 8. Expected Business Impact */}
            {caseStudy?.expectedImpact && caseStudy.expectedImpact.length > 0 && (
              <section className="space-y-3">
                <h2 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                  Expected Business Impact
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {caseStudy.expectedImpact.map((impact, idx) => (
                    <li
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex items-start gap-2.5 text-xs sm:text-sm text-slate-900 font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{impact}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* 9. Performance Indicators & Measurement (SEO & Performance Ads) */}
            {caseStudy?.kpiTable && caseStudy.kpiTable.length > 0 && (
              <section className="space-y-3">
                <h2 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                  Performance Indicators &amp; Measurement
                </h2>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs bg-white">
                  <table className="w-full text-xs sm:text-sm text-left">
                    <thead className="bg-slate-100 text-slate-900 font-black uppercase text-[11px]">
                      <tr>
                        <th className="py-3 px-4 border-b border-slate-200">Performance Area / Metric</th>
                        <th className="py-3 px-4 border-b border-slate-200">What We Measure / Purpose</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {caseStudy.kpiTable.map((row, idx) => (
                        <tr key={idx} className="hover:bg-slate-50 transition-colors">
                          <td className="py-3 px-4 font-bold text-slate-900">{row.metric}</td>
                          <td className="py-3 px-4 text-slate-700 font-medium">{row.purpose}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>
            )}

            {/* 10. The Business Value */}
            {caseStudy?.businessValue && (
              <section className="space-y-2">
                <h2 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                  The Business Value
                </h2>
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                  {caseStudy.businessValue}
                </p>
              </section>
            )}

            {/* 11. Why Choose G2 VERTEX? */}
            {caseStudy?.whyChooseUs && (
              <section className="p-5 sm:p-7 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                <h2 className="text-sm font-black text-slate-900 uppercase tracking-wider">
                  Why Choose G2 VERTEX?
                </h2>
                <div className="text-sm sm:text-base text-slate-800 leading-relaxed whitespace-pre-line font-normal">
                  {caseStudy.whyChooseUs}
                </div>
              </section>
            )}

            {/* 12. Conclusion */}
            {caseStudy?.conclusion && (
              <section className="space-y-2">
                <h2 className="text-sm font-black text-slate-900 uppercase tracking-wider">Conclusion</h2>
                <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                  {caseStudy.conclusion}
                </p>
              </section>
            )}

            {/* Core Competencies / Tags */}
            <div className="pt-2">
              <span className="text-[10px] font-bold uppercase text-slate-400 block mb-2 tracking-wider">
                CORE COMPETENCIES &amp; TAGS
              </span>
              <div className="flex flex-wrap gap-2">
                {(caseStudy?.tags || parsedTags).map((tag) => (
                  <Badge key={tag} variant="blue" className="text-xs font-semibold py-1 px-3">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Bottom Call-To-Action Banner */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-50 via-indigo-50 to-sky-50 border border-blue-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-sm">
              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-black text-slate-900">
                  {caseStudy?.closingNote || "Ready to build your next growth engine?"}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600">
                  Let&apos;s build a tailored strategy based on your target audience, market, and business goals.
                </p>
              </div>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handleCtaClick}
                  className="w-full sm:w-auto whitespace-nowrap font-bold text-sm px-7 shadow-sm cursor-pointer"
                >
                  {ctaText} <ArrowUpRight className="w-4 h-4 ml-1.5" />
                </Button>
              </div>
            </div>

            {/* Bottom Return Button */}
            <div className="text-center pt-4 pb-8">
              <button
                type="button"
                onClick={onClose}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0066FF] hover:underline cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" /> Back to All Projects
              </button>
            </div>
          </main>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};
