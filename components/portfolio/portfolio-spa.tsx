"use client";

import React, { useState, useEffect, useCallback, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact";

import { ProjectData } from "@/components/portfolio/project-card";
import { ServiceData } from "@/components/sections/services";
import { ExperienceData } from "@/components/sections/experience-timeline";
import { TestimonialData } from "@/components/sections/testimonials";

interface PortfolioSPAProps {
  projects: ProjectData[];
  services: ServiceData[];
  experiences: ExperienceData[];
  testimonials: TestimonialData[];
}

// PDF Recommended Pages: Home • About • Projects • Contact
const TAB_KEYS = ["home", "about", "projects", "contact"] as const;
type TabKey = typeof TAB_KEYS[number];

function PortfolioSPAContent({
  projects,
  services,
  experiences,
  testimonials,
}: PortfolioSPAProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("home");

  useEffect(() => {
    setIsMounted(true);
    const queryTab = searchParams.get("tab")?.toLowerCase();
    if (queryTab && (TAB_KEYS as readonly string[]).includes(queryTab)) {
      setActiveTab(queryTab as TabKey);
    }
  }, [searchParams]);

  const handleTabChange = useCallback(
    (newTab: string) => {
      const formattedTab = newTab.toLowerCase() as TabKey;
      if (TAB_KEYS.includes(formattedTab)) {
        setActiveTab(formattedTab);

        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }

        const newUrl = formattedTab === "home" ? "/" : `/?tab=${formattedTab}`;
        window.history.pushState({ ...window.history.state, as: newUrl, url: newUrl }, "", newUrl);
      }
    },
    []
  );

  useEffect(() => {
    const handleGlobalAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href) return;

      if (href === "#contact") {
        e.preventDefault();
        handleTabChange("contact");
      } else if (href === "#projects") {
        e.preventDefault();
        handleTabChange("projects");
      } else if (href === "#about") {
        e.preventDefault();
        handleTabChange("about");
      } else if (href === "#home" || href === "#hero") {
        e.preventDefault();
        handleTabChange("home");
      }
    };

    window.addEventListener("click", handleGlobalAnchorClick, true);
    return () => window.removeEventListener("click", handleGlobalAnchorClick, true);
  }, [handleTabChange]);

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0f62fe] selection:text-white flex flex-col justify-between">
      {/* Dynamic Navbar */}
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />

      <main className="flex-grow">
        {/* Dynamic Animated Page Switcher */}
        <div className="min-h-[600px] relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full"
            >
              {/* Home Page: Hero + What We Do + Why G2VERTEX + Projects + Testimonials */}
              {activeTab === "home" && (
                <div className="space-y-12 sm:space-y-16">
                  <HeroSection onTabChange={handleTabChange} />
                  <ServicesSection initialServices={services} />
                  <ExperienceTimeline initialExperiences={experiences} />
                  <PortfolioGrid initialProjects={projects} />
                  <TestimonialsSection initialTestimonials={testimonials} />
                  <ContactSection />
                </div>
              )}

              {/* About Page: Story + Approach + Values */}
              {activeTab === "about" && (
                <div className="pt-20 sm:pt-24">
                  <AboutSection />
                </div>
              )}

              {/* Projects Page: Work Built Around Growth Goals + Grid */}
              {activeTab === "projects" && (
                <div className="pt-20 sm:pt-24">
                  <PortfolioGrid initialProjects={projects} />
                </div>
              )}

              {/* Contact Page: Form + Reassurance + Direct Info */}
              {activeTab === "contact" && (
                <div className="pt-20 sm:pt-24">
                  <ContactSection />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <Footer onTabChange={handleTabChange} />
    </div>
  );
}

export const PortfolioSPA: React.FC<PortfolioSPAProps> = (props) => {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <PortfolioSPAContent {...props} />
    </Suspense>
  );
};
