import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, Github, ArrowLeft, CheckCircle2, ShieldAlert, Cpu, Layers } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps) {
  const project = await prisma.project.findUnique({
    where: { slug: params.slug },
  });

  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} - GowriSEOPortfolio Case Study`,
    description: project.tagline,
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const project = await prisma.project.findUnique({
    where: { slug: params.slug },
  });

  if (!project) {
    notFound();
  }

  // Fetch adjacent projects for navigation
  const allProjects = await prisma.project.findMany({
    select: { slug: true, title: true },
    orderBy: { createdAt: "desc" },
  });

  const currentIndex = allProjects.findIndex((p: { slug: string }) => p.slug === project.slug);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const prevProject =
    allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];

  const parsedTags: string[] = JSON.parse(project.tags || "[]");
  const parsedMetrics: Array<{ label: string; value: string }> = JSON.parse(
    project.metrics || "[]"
  );

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col justify-between">
      <Navbar />

      <main className="pt-32 pb-24 flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Link */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-[#0066FF] font-bold hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Portfolio Works
          </Link>
        </div>

        {/* Case Study Hero */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="blue">{project.category}</Badge>
            {project.featured && <Badge variant="orange">Featured Corporate Case Study</Badge>}
          </div>

          <h1 className="text-3xl sm:text-6xl font-black text-slate-900 tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-xl font-mono text-[#0066FF] font-bold max-w-3xl">
            {project.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              <Button variant="primary" size="lg">
                Launch Live Site <ExternalLink className="w-5 h-5 ml-1" />
              </Button>
            </a>
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <Button variant="outline" size="lg">
                  <Github className="w-5 h-5 mr-1" /> Source Code Repo
                </Button>
              </a>
            )}
          </div>
        </div>

        {/* Showcase Image */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-100">
          <Image
            src={project.thumbnailUrl}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Key Impact Metrics Banner */}
        {parsedMetrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
            {parsedMetrics.map((metric, idx) => (
              <div key={idx} className="text-center sm:text-left space-y-1">
                <div className="text-3xl sm:text-4xl font-black text-[#0066FF]">
                  {metric.value}
                </div>
                <div className="text-xs font-mono text-slate-600 font-bold uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl bg-slate-100 border border-slate-200 font-mono text-xs">
          <div>
            <span className="text-slate-500 block">CLIENT</span>
            <span className="text-slate-900 font-bold">{project.client || "Confidential Enterprise Client"}</span>
          </div>
          <div>
            <span className="text-slate-500 block">TIMELINE</span>
            <span className="text-slate-900 font-bold">{project.duration || "3 Months"}</span>
          </div>
          <div>
            <span className="text-slate-500 block">DOMAIN CATEGORY</span>
            <span className="text-slate-900 font-bold">{project.category}</span>
          </div>
          <div>
            <span className="text-slate-500 block">ENGINEERING SCOPE</span>
            <span className="text-[#0066FF] font-bold">Full-Stack &amp; Technical SEO</span>
          </div>
        </div>

        {/* Detailed Narrative */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-8 space-y-8">
            {/* Executive Summary */}
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight flex items-center gap-2">
                <Layers className="w-6 h-6 text-[#0066FF]" /> Executive Summary
              </h2>
              <p className="text-slate-700 leading-relaxed text-base font-normal">
                {project.description}
              </p>
            </div>

            {/* The Challenge */}
            <GlassCard className="p-8 space-y-3 bg-orange-50/60 border-orange-200">
              <h3 className="text-sm font-bold text-orange-800 uppercase tracking-wider flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-orange-600" /> The Challenge
              </h3>
              <p className="text-slate-800 leading-relaxed text-sm">
                {project.challenges}
              </p>
            </GlassCard>

            {/* The Solution */}
            <GlassCard className="p-8 space-y-3 bg-blue-50/60 border-blue-200">
              <h3 className="text-sm font-bold text-[#0066FF] uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#0066FF]" /> The Technical Solution
              </h3>
              <p className="text-slate-800 leading-relaxed text-sm">
                {project.solution}
              </p>
            </GlassCard>

            {/* Architectural Notes */}
            {project.architecture && (
              <GlassCard className="p-8 space-y-3 bg-purple-50/60 border-purple-200">
                <h3 className="text-sm font-bold text-purple-900 uppercase tracking-wider flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-purple-600" /> Architecture &amp; Performance Strategy
                </h3>
                <p className="text-slate-800 font-mono leading-relaxed text-xs">
                  {project.architecture}
                </p>
              </GlassCard>
            )}
          </div>

          {/* Sidebar Tech Specs */}
          <div className="md:col-span-4 space-y-6">
            <GlassCard className="p-6 space-y-4 bg-white border-slate-200">
              <h3 className="text-xs font-mono uppercase text-slate-600 font-bold">
                Tech Stack &amp; Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {parsedTags.map((tag) => (
                  <Badge key={tag} variant="blue">
                    {tag}
                  </Badge>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6 space-y-4 text-xs font-mono bg-white border-slate-200">
              <h3 className="text-slate-700 font-bold uppercase">Live Site Link</h3>
              <p className="text-slate-500 break-all">{project.liveUrl}</p>
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="block pt-2">
                <Button variant="primary" size="sm" className="w-full">
                  Visit Live Web App <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </GlassCard>
          </div>
        </div>

        {/* Case Study Navigation */}
        <div className="pt-10 border-t border-slate-200 flex items-center justify-between gap-4">
          {prevProject && (
            <Link href={`/projects/${prevProject.slug}`} className="group">
              <span className="text-xs font-mono text-slate-500 uppercase block font-semibold">Previous Case Study</span>
              <span className="text-sm font-bold text-slate-900 group-hover:text-[#0066FF] transition-colors flex items-center gap-1">
                &larr; {prevProject.title}
              </span>
            </Link>
          )}
          {nextProject && (
            <Link href={`/projects/${nextProject.slug}`} className="group text-right">
              <span className="text-xs font-mono text-slate-500 uppercase block font-semibold">Next Case Study</span>
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
