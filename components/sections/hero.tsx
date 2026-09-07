"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Search, Zap, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-grid-pattern">
      {/* Glow Mesh backgrounds */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-choicy-glow blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 mb-6"
        >
          <Badge variant="emerald" className="px-4 py-1.5 text-sm gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
            Available for Select Client Projects & Full-Stack Contracts
          </Badge>
        </motion.div>

        {/* Main Hero Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.1] max-w-5xl mx-auto"
        >
          Architecting High-Scale <br />
          <span className="text-gradient-emerald">Next.js Web Apps</span> &{" "}
          <span className="text-gradient-purple">SEO Dominance</span>
        </motion.h1>

        {/* Tagline / Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
        >
          Combining senior full-stack engineering with deep technical SEO auditing. We craft sub-second digital experiences that captivate users and conquer search rankings.
        </motion.p>

        {/* Tech Pill Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-mono text-slate-400"
        >
          <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 flex items-center gap-1.5">
            <Code2 className="w-4 h-4 text-emerald-400" /> Next.js 14 App Router
          </span>
          <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 flex items-center gap-1.5">
            <Search className="w-4 h-4 text-cyan-400" /> Technical SEO & Schema
          </span>
          <span className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-purple-400" /> Core Web Vitals 99+
          </span>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#projects">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Explore Works <ArrowUpRight className="w-5 h-5" />
            </Button>
          </a>
          <a href="#contact">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              Contact Me
            </Button>
          </a>
        </motion.div>

        {/* Floating Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-14 flex items-center justify-center gap-4 text-slate-400"
        >
          <span className="text-xs font-mono uppercase tracking-widest text-slate-500 mr-2">Connect:</span>
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white/[0.03] border border-white/10 hover:border-emerald-500/50 hover:bg-white/10 hover:text-emerald-400 transition-all hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white/[0.03] border border-white/10 hover:border-emerald-500/50 hover:bg-white/10 hover:text-emerald-400 transition-all hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            className="p-3 rounded-full bg-white/[0.03] border border-white/10 hover:border-emerald-500/50 hover:bg-white/10 hover:text-emerald-400 transition-all hover:scale-110"
            aria-label="Twitter"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href="mailto:contact@gowriseo.com"
            className="p-3 rounded-full bg-white/[0.03] border border-white/10 hover:border-emerald-500/50 hover:bg-white/10 hover:text-emerald-400 transition-all hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
