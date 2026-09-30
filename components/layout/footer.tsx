import React from "react";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Twitter, Mail, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { G2VertexLogo } from "@/components/ui/g2-vertex-logo";

export const Footer = () => {
  return (
    <footer className="relative bg-[#0B192C] text-slate-300 border-t border-slate-800 pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top CTA Banner from PDF */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 text-center md:text-left">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> FINAL CTA
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
              Ready to create your next growth opportunity?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-normal">
              Let&apos;s build a smarter marketing engine for your business.
            </p>
          </div>
          <a href="#contact">
            <Button variant="primary" size="lg" className="whitespace-nowrap font-bold text-base px-8">
              Start a Conversation <ArrowUpRight className="w-5 h-5 ml-1" />
            </Button>
          </a>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          <div className="space-y-4 md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <G2VertexLogo variant="full" size="lg" isDarkBackground={true} />
            </Link>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-normal">
              G2VERTEX helps ambitious businesses create visibility, generate qualified leads, and grow with confidence through performance marketing, SEO, PPC, and outreach.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#0066FF] hover:border-[#0066FF] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#0066FF] hover:border-[#0066FF] transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@g2vertex.com"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#0066FF] hover:border-[#0066FF] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li><a href="#hero" className="hover:text-[#0066FF] transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-[#0066FF] transition-colors">What We Do</a></li>
              <li><a href="#experience" className="hover:text-[#0066FF] transition-colors">Why G2VERTEX</a></li>
              <li><a href="#projects" className="hover:text-[#0066FF] transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-[#0066FF] transition-colors">Contact</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Growth Services</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>Digital Marketing Strategy</li>
              <li>Lead Generation Systems</li>
              <li>Paid Advertising (PPC)</li>
              <li>SEO &amp; Performance</li>
              <li>LinkedIn Growth &amp; Outreach</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} G2VERTEX Modern Digital Growth Agency. All rights reserved.</p>
          <p className="font-mono text-slate-400">Build visibility. Generate demand. Create measurable growth.</p>
        </div>
      </div>
    </footer>
  );
};
