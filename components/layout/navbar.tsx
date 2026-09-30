"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { G2VertexLogo } from "@/components/ui/g2-vertex-logo";

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
          ? "py-3 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm"
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

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-1.5 bg-slate-100/90 border border-slate-200/90 rounded-full p-1.5 backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeTab === link.key;
              return (
                <button
                  key={link.key}
                  onClick={(e) => handleNavClick(e, link.key)}
                  className={`px-5 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 cursor-pointer ${
                    isActive
                      ? "bg-[#0066FF] text-white font-bold shadow-sm"
                      : "text-slate-700 hover:text-slate-900 hover:bg-slate-200/60"
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Header CTA Button from PDF: Book a Growth Call */}
          <div className="hidden md:flex items-center gap-3">
            <Button
              variant="primary"
              size="sm"
              onClick={(e) => handleNavClick(e, "contact")}
              className="font-bold px-5"
            >
              Book a Growth Call <ArrowUpRight className="w-4 h-4 ml-0.5" />
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-200 shadow-xl"
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
                        : "text-slate-700 hover:text-slate-900 hover:bg-slate-100"
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
