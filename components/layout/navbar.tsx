"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { G2VertexLogo } from "@/components/ui/g2-vertex-logo";

export interface NavbarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab = "works",
  onTabChange,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", key: "home", href: "/" },
    { label: "Works", key: "works", href: "#projects" },
    { label: "Services", key: "services", href: "#services" },
    { label: "Experience", key: "experience", href: "#experience" },
    { label: "Reviews", key: "reviews", href: "#testimonials" },
    { label: "Contact", key: "contact", href: "#contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    key: string
  ) => {
    if (onTabChange) {
      e.preventDefault();
      onTabChange(key);
      setMobileMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "py-3 bg-[#0A0A0C]/80 backdrop-blur-xl border-b border-white/10 shadow-2xl"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none"
          >
            <G2VertexLogo variant="compact" size="md" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 bg-white/[0.04] border border-white/10 rounded-full p-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeTab === link.key;
              return (
                <button
                  key={link.key}
                  onClick={(e) => handleNavClick(e, link.key)}
                  className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-bold shadow-md shadow-orange-500/25 scale-105"
                      : "text-slate-300 hover:text-orange-400 hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={(e) => handleNavClick(e, "contact")}
            >
              Let&apos;s Talk <ArrowUpRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/5 text-slate-300 hover:text-white"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0D0F14]/95 border-b border-white/10 backdrop-blur-2xl"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => {
                const isActive = activeTab === link.key;
                return (
                  <button
                    key={link.key}
                    onClick={(e) => handleNavClick(e, link.key)}
                    className={`block w-full text-left px-4 py-2.5 text-base font-semibold rounded-xl transition-all ${
                      isActive
                        ? "bg-gradient-to-r from-orange-500 to-amber-500 text-slate-950 font-bold"
                        : "text-slate-200 hover:text-orange-400 hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              <div className="pt-2">
                <Button
                  variant="primary"
                  className="w-full"
                  onClick={(e) => handleNavClick(e, "contact")}
                >
                  Let&apos;s Talk <ArrowUpRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
