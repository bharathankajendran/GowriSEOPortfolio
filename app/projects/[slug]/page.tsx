import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink, Github, ArrowLeft, ArrowRight, CheckCircle2, ShieldAlert, Cpu, Layers } from "lucide-react";
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

  const currentIndex = allProjects.findIndex((p: { slug: any; }) => p.slug === project.slug);
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];
  const prevProject =
    allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];

  const parsedTags: string[] = JSON.parse(project.tags || "[]");
  const parsedMetrics: Array<{ label: string; value: string }> = JSON.parse(
    project.metrics || "[]"
  );

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-slate-100 flex flex-col justify-between">
      <Navbar />

      <main className="pt-32 pb-24 flex-grow max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Back Link */}
        <div>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-xs font-mono text-orange-400 hover:underline"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Portfolio Works
          </Link>
        </div>

        {/* Case Study Hero */}
        <div className="space-y-6">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="orange">{project.category}</Badge>
            {project.featured && <Badge variant="purple">Featured Case Study</Badge>}
          </div>

          <h1 className="text-3xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-xl font-mono text-orange-400 max-w-3xl">
            {project.tagline}
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
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

        {/* Hero Image Showcase */}
        <div className="relative aspect-[16/9] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
          <Image
            src={project.thumbnailUrl}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent opacity-80" />
        </div>

        {/* Key Impact Metrics Banner */}
        {parsedMetrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8 rounded-3xl bg-[#121318] border border-white/10 backdrop-blur-xl">
            {parsedMetrics.map((metric, idx) => (
              <div key={idx} className="text-center sm:text-left space-y-1">
                <div className="text-3xl sm:text-4xl font-extrabold text-orange-400">
                  {metric.value}
                </div>
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Metadata Details Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 rounded-2xl bg-white/[0.02] border border-white/10 font-mono text-xs">
          <div>
            <span className="text-slate-500 block">CLIENT</span>
            <span className="text-white font-semibold">{project.client || "Confidential SaaS Enterprise"}</span>
          </div>
          <div>
            <span className="text-slate-500 block">TIMELINE</span>
            <span className="text-white font-semibold">{project.duration || "3 Months"}</span>
          </div>
          <div>
            <span className="text-slate-500 block">DOMAIN CATEGORY</span>
            <span className="text-white font-semibold">{project.category}</span>
          </div>
          <div>
            <span className="text-slate-500 block">ENGINEERING SCOPE</span>
            <span className="text-orange-400 font-semibold">Full-Stack & Technical SEO</span>
          </div>
        </div>

        {/* Detailed Narrative Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-8 space-y-10">
            {/* Executive Summary */}
            <div className="space-y-3">
              <h2 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                <Layers className="w-6 h-6 text-orange-400" /> Executive Summary
              </h2>
              <p className="text-slate-300 leading-relaxed text-base">
                {project.description}
              </p>
            </div>

            {/* The Challenge */}
            <GlassCard glowColor="purple" className="p-8 space-y-3">
              <h3 className="text-lg font-bold text-purple-300 uppercase tracking-wider flex items-center gap-2">
                <ShieldAlert className="w-5 h-5 text-purple-400" /> The Challenge
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                {project.challenges}
              </p>
            </GlassCard>

            {/* The Solution */}
            <GlassCard glowColor="orange" className="p-8 space-y-3">
              <h3 className="text-lg font-bold text-orange-400 uppercase tracking-wider flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-orange-400" /> The Technical Solution
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm">
                {project.solution}
              </p>
            </GlassCard>

            {/* Architectural Stack Breakdown */}
            {project.architecture && (
              <GlassCard glowColor="cyan" className="p-8 space-y-3">
                <h3 className="text-lg font-bold text-cyan-300 uppercase tracking-wider flex items-center gap-2">
                  <Cpu className="w-5 h-5 text-cyan-400" /> Architecture & Performance Strategy
                </h3>
                <p className="text-slate-300 font-mono leading-relaxed text-xs">
                  {project.architecture}
                </p>
              </GlassCard>
            )}
          </div>

          {/* Sidebar Tech Specs */}
          <div className="md:col-span-4 space-y-6">
            <GlassCard className="p-6 space-y-4">
              <h3 className="text-sm font-mono uppercase text-slate-300 font-bold">
                Tech Stack & Frameworks
              </h3>
              <div className="flex flex-wrap gap-2">
                {parsedTags.map((tag) => (
                  <Badge key={tag} variant="purple">
                    {tag}
                  </Badge>
                ))}
              </div>
            </GlassCard>

            <GlassCard className="p-6 space-y-4 text-xs font-mono">
              <h3 className="text-slate-300 font-bold uppercase">Live Demo Link</h3>
              <p className="text-slate-400 break-all">{project.liveUrl}</p>
              <a href={project.liveUrl} target="_blank" rel="noreferrer" className="block pt-2">
                <Button variant="primary" size="sm" className="w-full">
                  Visit Live Web App <ExternalLink className="w-4 h-4" />
                </Button>
              </a>
            </GlassCard>
          </div>
        </div>

        {/* Previous / Next Case Study Navigation Bar */}
        <div className="pt-12 border-t border-white/10 flex items-center justify-between gap-4">
          {prevProject && (
            <Link href={`/projects/${prevProject.slug}`} className="group">
              <span className="text-xs font-mono text-slate-500 uppercase block">Previous Case Study</span>
              <span className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors flex items-center gap-1">
                &larr; {prevProject.title}
              </span>
            </Link>
          )}
          {nextProject && (
            <Link href={`/projects/${nextProject.slug}`} className="group text-right">
              <span className="text-xs font-mono text-slate-500 uppercase block">Next Case Study</span>
              <span className="text-sm font-bold text-white group-hover:text-orange-400 transition-colors flex items-center gap-1">
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
