"use client";

import React, { useState, useEffect, useCallback, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { ServicesSection } from "@/components/sections/services";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
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

const TAB_KEYS = ["home", "works", "services", "experience", "reviews", "contact"] as const;
type TabKey = typeof TAB_KEYS[number];

function PortfolioSPAContent({
  projects,
  services,
  experiences,
  testimonials,
}: PortfolioSPAProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // 1. Hydration Safety Guard
  const [isMounted, setIsMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<TabKey>("home");

  // Mount effect to prevent SSR vs Client hydration mismatch
  useEffect(() => {
    setIsMounted(true);
    const queryTab = searchParams.get("tab")?.toLowerCase();
    if (queryTab && (TAB_KEYS as readonly string[]).includes(queryTab)) {
      setActiveTab(queryTab as TabKey);
    }
  }, [searchParams]);

  // 4. Update Tab & Sync Browser URL without full page reloads, auto-scroll to top
  const handleTabChange = useCallback(
    (newTab: string) => {
      const formattedTab = newTab.toLowerCase() as TabKey;
      if (TAB_KEYS.includes(formattedTab)) {
        setActiveTab(formattedTab);

        // Smooth scroll to top of content
        if (typeof window !== "undefined") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }

        // Update URL query parameter seamlessly
        const newUrl = formattedTab === "home" ? "/" : `/?tab=${formattedTab}`;
        window.history.pushState({ ...window.history.state, as: newUrl, url: newUrl }, "", newUrl);
      }
    },
    []
  );

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-slate-100 selection:bg-orange-500/30 selection:text-orange-400 flex flex-col justify-between">
      {/* 2. Dynamic Navbar highlighting active tab */}
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />

      <main className="flex-grow">
        {/* 3. Dynamic Animated Content Switcher wrapped in AnimatePresence */}
        <div className="min-h-[600px] relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full"
            >
              {/* Home Tab: Displays 3D Flower Hero Section + Featured Works Showcase */}
              {activeTab === "home" && (
                <div className="space-y-12 sm:space-y-16">
                  <HeroSection />
                  <PortfolioGrid initialProjects={projects} />
                </div>
              )}

              {/* Works Tab: Top-aligned Projects Showcase */}
              {activeTab === "works" && (
                <div className="pt-20 sm:pt-24">
                  <PortfolioGrid initialProjects={projects} />
                </div>
              )}

              {/* Services Tab: Top-aligned Services Section */}
              {activeTab === "services" && (
                <div className="pt-20 sm:pt-24">
                  <ServicesSection initialServices={services} />
                </div>
              )}

              {/* Experience Tab: Top-aligned Experience Timeline */}
              {activeTab === "experience" && (
                <div className="pt-20 sm:pt-24">
                  <ExperienceTimeline initialExperiences={experiences} />
                </div>
              )}

              {/* Reviews Tab: Top-aligned Testimonials Section */}
              {activeTab === "reviews" && (
                <div className="pt-20 sm:pt-24">
                  <TestimonialsSection initialTestimonials={testimonials} />
                </div>
              )}

              {/* Contact Tab: Top-aligned Contact Form & Details */}
              {activeTab === "contact" && (
                <div className="pt-20 sm:pt-24">
                  <ContactSection />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export const PortfolioSPA: React.FC<PortfolioSPAProps> = (props) => {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#0A0A0C]" />}>
      <PortfolioSPAContent {...props} />
    </Suspense>
  );
};
