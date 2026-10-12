"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { G2VertexLogo } from "@/components/ui/g2-vertex-logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export interface NavbarProps {
  activeTab?: string;
  onTabChange?: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeTab = "home",
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

  // Official PDF Recommended Pages: Home | About | Projects | Contact
  const navLinks = [
    { label: "Home", key: "home" },
    { label: "About", key: "about" },
    { label: "Projects", key: "projects" },
    { label: "Contact", key: "contact" },
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
          ? "py-3 bg-white/90 dark:bg-[#0A0F1D]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo - with white background in dark mode only */}
          <button
            onClick={(e) => handleNavClick(e, "home")}
            className="flex items-center gap-2 group cursor-pointer text-left focus:outline-none dark:bg-white dark:px-3.5 dark:py-1.5 dark:rounded-xl dark:shadow-md transition-all"
          >
            <G2VertexLogo variant="compact" size="md" />
          </button>

          {/* Navigation Links - Clean Minimal Typography matching template */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = activeTab === link.key;
              return (
                <button
                  key={link.key}
                  onClick={(e) => handleNavClick(e, link.key)}
                  className={`text-sm font-semibold transition-colors cursor-pointer relative py-1 ${
                    isActive
                      ? "text-[#0066FF] dark:text-[#38BDF8] font-bold"
                      : "text-slate-700 dark:text-slate-300 hover:text-[#0066FF] dark:hover:text-[#38BDF8]"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#0066FF] dark:bg-[#38BDF8] rounded-full"
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Header Actions: Theme Toggle + CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <button
              type="button"
              onClick={(e) => handleNavClick(e, "contact")}
              className="rounded-full px-6 py-2.5 bg-gradient-to-r from-[#5B21B6] via-[#4338CA] to-[#0066FF] hover:opacity-95 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 cursor-pointer"
            >
              Book a Growth Call <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Actions: Theme Toggle + Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-[#0A0F1D] border-b border-slate-200 dark:border-slate-800 shadow-xl"
          >
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => {
                const isActive = activeTab === link.key;
                return (
                  <button
                    key={link.key}
                    onClick={(e) => handleNavClick(e, link.key)}
                    className={`block w-full text-left px-4 py-2.5 text-sm font-semibold rounded-xl transition-all ${
                      isActive
                        ? "bg-[#0066FF] text-white font-bold"
                        : "text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    {link.label}
                  </button>
                );
              })}
              <div className="pt-2">
                <Button
                  variant="primary"
                  className="w-full font-bold"
                  onClick={(e) => handleNavClick(e, "contact")}
                >
                  Book a Growth Call <ArrowUpRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
