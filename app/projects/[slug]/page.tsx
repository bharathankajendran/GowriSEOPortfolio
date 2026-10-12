import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, AlertCircle, Layers, Target, ShieldCheck, ArrowUpRight } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { getCaseStudyBySlug } from "@/lib/case-studies-data";
import { FALLBACK_PROJECTS } from "@/lib/fallback-data";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const caseStudy = getCaseStudyBySlug(params.slug);
  let project = null;
  try {
    project = await prisma.project.findUnique({
      where: { slug: params.slug },
    });
  } catch {
    project = FALLBACK_PROJECTS.find((p) => p.slug === params.slug) || null;
  }
  if (!project) {
    project = FALLBACK_PROJECTS.find((p) => p.slug === params.slug) || null;
  }

  const title = caseStudy?.title || project?.title || "Case Study";
  const description = caseStudy?.subtitle || project?.tagline || "G2VERTEX Client Case Study";

  return {
    title: `${title} | G2VERTEX Case Study`,
    description,
  };
}

export function generateStaticParams() {
  return FALLBACK_PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  let project = null;
  let allProjects: Array<{ slug: string; title: string }> = [];

  try {
    project = await prisma.project.findUnique({
      where: { slug: params.slug },
    });
    allProjects = await prisma.project.findMany({
      select: { slug: true, title: true },
      orderBy: { createdAt: "desc" },
    });
  } catch {
    project = FALLBACK_PROJECTS.find((p) => p.slug === params.slug) || null;
    allProjects = FALLBACK_PROJECTS.map((p) => ({ slug: p.slug, title: p.title }));
  }

  if (!project) {
    project = FALLBACK_PROJECTS.find((p) => p.slug === params.slug) || null;
  }
  if (allProjects.length === 0) {
    allProjects = FALLBACK_PROJECTS.map((p) => ({ slug: p.slug, title: p.title }));
  }

  const caseStudy = getCaseStudyBySlug(params.slug);

  if (!project && !caseStudy) {
    notFound();
  }

  const currentSlug = project?.slug || params.slug;
  const currentIndex = allProjects.findIndex((p: { slug: string }) => p.slug === currentSlug);
  const nextProject = allProjects.length > 0 && currentIndex !== -1 ? allProjects[(currentIndex + 1) % allProjects.length] : null;
  const prevProject =
    allProjects.length > 0 && currentIndex !== -1 ? allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length] : null;

  const parsedTags: string[] = caseStudy?.tags || JSON.parse(project?.tags || "[]");

  const title = caseStudy?.title || project?.title || "Case Study";
  const subtitle = caseStudy?.subtitle || project?.tagline || "";
  const industry = caseStudy?.industry || project?.client || "B2B & Digital Services";
  const service = caseStudy?.service || project?.category || "Digital Marketing";
  const category = caseStudy?.category || project?.category || "Featured Work";

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between">
      <Navbar />

      <main className="pt-32 pb-24 flex-grow max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Back Link */}
        <div>
          <Link
            href="/?tab=projects"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#0066FF] hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Case Studies &amp; Projects
          </Link>
        </div>

        {/* Hero Banner */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2.5">
            <Badge variant="blue" className="font-bold">{category}</Badge>
            <span className="text-xs font-semibold text-slate-500 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
              {industry}
            </span>
            {caseStudy?.market && (
              <span className="text-xs font-semibold text-slate-500 bg-slate-100 border border-slate-200 px-3 py-1 rounded-full">
                {caseStudy.market}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-lg sm:text-xl text-[#0066FF] font-bold max-w-3xl leading-relaxed">
              {subtitle}
            </p>
          )}

          {/* CTA Action */}
          <div className="pt-2">
            <Link href="/?tab=contact">
              <Button variant="primary" size="lg" className="font-bold text-sm px-7 shadow-sm">
                {caseStudy?.ctaText || "Book a Growth Call"} <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </div>



        {/* Details Meta Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
          <div>
            <span className="text-slate-400 uppercase font-bold text-[10px] block">INDUSTRY</span>
            <span className="font-bold text-slate-900">{industry}</span>
          </div>
          <div>
            <span className="text-slate-400 uppercase font-bold text-[10px] block">SERVICE</span>
            <span className="font-bold text-slate-900">{service}</span>
          </div>
          <div>
            <span className="text-slate-400 uppercase font-bold text-[10px] block">SERVICE PROVIDER</span>
            <span className="font-bold text-[#0066FF]">G2 VERTEX</span>
          </div>
          <div>
            <span className="text-slate-400 uppercase font-bold text-[10px] block">STATUS</span>
            <span className="font-bold text-emerald-600">Active Campaign</span>
          </div>
        </div>

        {/* Focus Areas Strip */}
        {caseStudy?.focusAreas && (
          <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 text-xs">
            <span className="text-blue-900 font-bold block mb-1">FOCUS AREAS</span>
            <p className="text-slate-800">{caseStudy.focusAreas}</p>
          </div>
        )}

        {/* Main Content Narrative */}
        <div className="space-y-8">
          {/* Overview */}
          {caseStudy?.overview && (
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#0066FF]" /> Project Overview
              </h2>
              <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                {caseStudy.overview}
              </div>
            </div>
          )}

          {/* The Challenge */}
          <GlassCard className="p-6 sm:p-8 space-y-3 bg-amber-50/70 border-amber-200">
            <h2 className="text-base font-bold text-amber-900 uppercase tracking-wider flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600" /> The Challenge
            </h2>
            <div className="text-sm text-slate-800 leading-relaxed whitespace-pre-line">
              {caseStudy?.challenge || project?.challenges}
            </div>
          </GlassCard>

          {/* Strategy */}
          {caseStudy?.strategy && (
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <Target className="w-5 h-5 text-[#0066FF]" /> Our Strategy
              </h2>
              <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                {caseStudy.strategy}
              </div>
            </div>
          )}

          {/* Goal */}
          {caseStudy?.goal && (
            <div className="p-5 rounded-2xl bg-sky-50 border border-sky-200 space-y-2">
              <h3 className="text-xs font-bold text-sky-900 uppercase tracking-wider">Our Goal</h3>
              <p className="text-sm text-slate-800 leading-relaxed">{caseStudy.goal}</p>
            </div>
          )}

          {/* The Solution */}
          <GlassCard className="p-6 sm:p-8 space-y-3 bg-blue-50/70 border-blue-200">
            <h2 className="text-base font-bold text-blue-900 uppercase tracking-wider flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-[#0066FF]" /> The Solution
            </h2>
            <div className="text-sm text-slate-800 leading-relaxed whitespace-pre-line">
              {caseStudy?.solution || project?.solution}
            </div>
          </GlassCard>

          {/* Key Modules for UPVC ERP/CRM */}
          {caseStudy?.modules && caseStudy.modules.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                Key Modules and Capabilities
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {caseStudy.modules.map((m, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-1.5">
                    <h3 className="text-sm font-bold text-slate-900">{m.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Expected Outcome */}
          {caseStudy?.expectedOutcome && (
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-200 space-y-2">
              <h3 className="text-xs font-bold text-emerald-900 uppercase tracking-wider">The Expected Outcome</h3>
              <p className="text-sm text-slate-800 leading-relaxed">{caseStudy.expectedOutcome}</p>
            </div>
          )}

          {/* Expected Impact List */}
          {caseStudy?.expectedImpact && caseStudy.expectedImpact.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">Expected Business Impact</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {caseStudy.expectedImpact.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* KPI Table for SEO & Performance Ads */}
          {caseStudy?.kpiTable && caseStudy.kpiTable.length > 0 && (
            <div className="space-y-3">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">
                Measuring Campaign Success
              </h2>
              <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-xs">
                <table className="w-full text-xs sm:text-sm text-left">
                  <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-[11px]">
                    <tr>
                      <th className="py-3 px-4 border-b border-slate-200">Performance Area / Metric</th>
                      <th className="py-3 px-4 border-b border-slate-200">What We Measure / Purpose</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {caseStudy.kpiTable.map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="py-2.5 px-4 font-bold text-slate-900">{row.metric}</td>
                        <td className="py-2.5 px-4 text-slate-600">{row.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Business Value */}
          {caseStudy?.businessValue && (
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">The Business Value</h2>
              <p className="text-sm text-slate-700 leading-relaxed">{caseStudy.businessValue}</p>
            </div>
          )}

          {/* Why Choose Us */}
          {caseStudy?.whyChooseUs && (
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider">Why Choose G2 VERTEX?</h2>
              <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-line">
                {caseStudy.whyChooseUs}
              </div>
            </div>
          )}

          {/* Conclusion */}
          {caseStudy?.conclusion && (
            <div className="space-y-2">
              <h2 className="text-xl font-bold text-slate-900 tracking-tight">Conclusion</h2>
              <p className="text-sm text-slate-700 leading-relaxed">{caseStudy.conclusion}</p>
            </div>
          )}

          {/* Core Competencies Badges */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Core Competencies</h3>
            <div className="flex flex-wrap gap-2">
              {parsedTags.map((tag) => (
                <Badge key={tag} variant="blue" className="font-semibold text-xs py-1 px-3">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* Bottom Call to Action Card */}
          <div className="p-8 rounded-3xl bg-gradient-to-r from-blue-50 via-slate-50 to-indigo-50 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-lg font-black text-slate-900">
                {caseStudy?.closingNote || "Ready to build your next growth engine?"}
              </h3>
              <p className="text-xs text-slate-600">
                Partner with G2 VERTEX to build a tailored strategy aligned with your business goals.
              </p>
            </div>
            <Link
              href="/?tab=contact"
              className="whitespace-nowrap font-bold text-sm px-8 py-3.5 rounded-xl bg-[#0066FF] hover:bg-[#0052CC] text-white shadow-md shadow-blue-500/15 border border-blue-600/30 inline-flex items-center justify-center transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              {caseStudy?.ctaText || "Book a Growth Call"} <ArrowUpRight className="w-5 h-5 ml-1" />
            </Link>
          </div>
        </div>

        {/* Case Study Adjacent Navigation */}
        <div className="pt-10 border-t border-slate-200 flex items-center justify-between gap-4">
          {prevProject && (
            <Link href={`/projects/${prevProject.slug}`} className="group">
              <span className="text-xs font-semibold text-slate-400 uppercase block">Previous Case Study</span>
              <span className="text-sm font-bold text-slate-900 group-hover:text-[#0066FF] transition-colors flex items-center gap-1">
                &larr; {prevProject.title}
              </span>
            </Link>
          )}
          {nextProject && (
            <Link href={`/projects/${nextProject.slug}`} className="group text-right">
              <span className="text-xs font-semibold text-slate-400 uppercase block">Next Case Study</span>
              <span className="text-sm font-bold text-slate-900 group-hover:text-[#0066FF] transition-colors flex items-center gap-1">
                {nextProject.title} &rarr;
              </span>
            </Link>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
