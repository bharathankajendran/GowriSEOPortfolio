import React from "react";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { G2VertexLogo } from "@/components/ui/g2-vertex-logo";

export interface FooterProps {
  onTabChange?: (tab: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onTabChange }) => {
  return (
    <footer className="relative bg-[#0B192C] text-slate-300 border-t border-slate-800 pt-20 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top CTA Banner from PDF */}
        <div className="rounded-3xl bg-slate-900 border border-slate-800 p-8 md:p-12 mb-16 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="space-y-3 text-center md:text-left">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs bg-blue-500/10 text-blue-400 border border-blue-500/20 font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" /> FINAL CTA
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
              Ready to create your next growth opportunity?
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-normal">
              Let&apos;s build a smarter marketing engine for your business.
            </p>
          </div>
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              if (onTabChange) {
                onTabChange("contact");
              } else {
                window.location.href = "/?tab=contact";
              }
            }}
            className="whitespace-nowrap font-bold text-base px-8 cursor-pointer"
          >
            Start a Conversation <ArrowUpRight className="w-5 h-5 ml-1" />
          </Button>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <G2VertexLogo variant="full" size="lg" isDarkBackground={true} />
            </Link>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-normal">
              G2VERTEX helps ambitious businesses create visibility, generate qualified leads, and grow with confidence through performance marketing, SEO, PPC, and outreach.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="tel:+919385219979"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#0066FF] hover:border-[#0066FF] transition-colors"
                aria-label="Call +91 93852 19979"
                title="+91 93852 19979"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="mailto:contact@g2vertex.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#0066FF] hover:border-[#0066FF] transition-colors"
                aria-label="Email contact@g2vertex.com"
                title="contact@g2vertex.com"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/g2-vertex/"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-[#0066FF] hover:border-[#0066FF] transition-colors"
                aria-label="LinkedIn"
                title="LinkedIn - G2 VERTEX"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>
                <button
                  type="button"
                  onClick={() => onTabChange ? onTabChange("home") : (window.location.href = "/")}
                  className="hover:text-[#0066FF] transition-colors cursor-pointer text-left"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onTabChange ? onTabChange("about") : (window.location.href = "/?tab=about")}
                  className="hover:text-[#0066FF] transition-colors cursor-pointer text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onTabChange ? onTabChange("projects") : (window.location.href = "/?tab=projects")}
                  className="hover:text-[#0066FF] transition-colors cursor-pointer text-left"
                >
                  Projects
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onTabChange ? onTabChange("contact") : (window.location.href = "/?tab=contact")}
                  className="hover:text-[#0066FF] transition-colors cursor-pointer text-left"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Growth Services</h4>
            <ul className="space-y-2 text-xs text-slate-400 font-medium">
              <li>Digital Marketing Strategy</li>
              <li>Lead Generation Systems</li>
              <li>Paid Advertising (PPC)</li>
              <li>SEO &amp; Performance</li>
              <li>LinkedIn Growth &amp; Outreach</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Direct Contact</h4>
            <ul className="space-y-3 text-xs text-slate-400 font-medium">
              <li>
                <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-bold">Mobile / Phone</span>
                <a
                  href="tel:+919385219979"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-200 hover:text-[#0066FF] transition-colors font-semibold flex items-center gap-1.5 mt-0.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0066FF]" /> +91 93852 19979
                </a>
              </li>
              <li>
                <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-bold">Email</span>
                <a
                  href="mailto:contact@g2vertex.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-200 hover:text-[#0066FF] transition-colors font-semibold flex items-center gap-1.5 mt-0.5"
                >
                  <Mail className="w-3.5 h-3.5 text-[#0066FF]" /> contact@g2vertex.com
                </a>
              </li>
              <li>
                <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-bold">LinkedIn</span>
                <a href="https://www.linkedin.com/company/g2-vertex/" target="_blank" rel="noreferrer" className="text-slate-200 hover:text-[#0066FF] transition-colors font-semibold flex items-center gap-1.5 mt-0.5">
                  <Linkedin className="w-3.5 h-3.5 text-[#0066FF]" /> G2 VERTEX
                </a>
              </li>
              <li>
                <span className="block text-[10px] text-slate-500 uppercase tracking-wider font-bold">Inquiries</span>
                <span className="text-slate-300">Under 24h Response Time</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} G2VERTEX Modern Digital Growth Agency. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
