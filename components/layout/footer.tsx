import React from "react";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Twitter, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="relative bg-[#070709] border-t border-white/10 pt-20 pb-12 overflow-hidden">
      {/* Glow Mesh background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-emerald-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-emerald-950/40 via-[#121318] to-purple-950/40 border border-white/10 p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 backdrop-blur-xl">
          <div className="space-y-3 text-center md:text-left">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <Sparkles className="w-3.5 h-3.5" /> Ready to scale your visibility & app latency?
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-white tracking-tight">
              Have a Project in Mind? <br className="hidden md:inline" /> Let&apos;s Build Something Extraordinary.
            </h2>
          </div>
          <a href="#contact">
            <Button variant="primary" size="lg" className="whitespace-nowrap">
              Start a Conversation <ArrowUpRight className="w-5 h-5" />
            </Button>
          </a>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center font-bold text-slate-950">
                G
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                GOWRI <span className="text-emerald-400 font-mono text-sm">.SEO</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Senior Full-Stack Next.js Architect & Technical SEO Strategist. Specializing in high-performance web applications, sub-second latency, and explosive search visibility.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:bg-white/10 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:bg-white/10 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@gowriseo.com"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-emerald-400 hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">Navigation</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#projects" className="hover:text-emerald-400 transition-colors">Featured Works</a></li>
              <li><a href="#services" className="hover:text-emerald-400 transition-colors">Core Expertise</a></li>
              <li><a href="#experience" className="hover:text-emerald-400 transition-colors">Milestones</a></li>
              <li><a href="#testimonials" className="hover:text-emerald-400 transition-colors">Client Reviews</a></li>
              <li><a href="#contact" className="hover:text-emerald-400 transition-colors">Get in Touch</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">Specialization</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Full-Stack Next.js 14</li>
              <li>Technical SEO Audits</li>
              <li>PageSpeed & Core Web Vitals</li>
              <li>Prisma & PostgreSQL Architectures</li>
              <li>Dark Glassmorphism Design Systems</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} GowriSEOPortfolio. Inspired by Choicy Digital Agency.</p>
          <p className="font-mono text-slate-400">Built with Next.js 14, Tailwind CSS, Prisma & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
};
