import React from "react";
import { prisma } from "@/lib/prisma";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/sections/hero";
import { StatsBar } from "@/components/sections/stats-bar";
import { PortfolioGrid } from "@/components/sections/portfolio-grid";
import { ServicesSection } from "@/components/sections/services";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact";

export const revalidate = 60; // Revalidate dynamic data every 60s

export default async function HomePage() {
  // Server-side fetching via Prisma
  const [projects, services, experiences, testimonials] = await Promise.all([
    prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    }),
    prisma.service.findMany({
      orderBy: { order: "asc" },
    }),
    prisma.experience.findMany({
      orderBy: { order: "asc" },
    }),
    prisma.testimonial.findMany({
      where: { featured: true },
      orderBy: { createdAt: "desc" },
    }),
  ]);

  return (
    <div className="min-h-screen bg-[#0A0A0C] text-slate-100 selection:bg-emerald-500/30 selection:text-emerald-400 flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow space-y-16 sm:space-y-24">
        {/* Hero Section */}
        <HeroSection />

        {/* Metric Counters Stats Bar */}
        <StatsBar />

        {/* Portfolio Grid Showcase & Filter */}
        <PortfolioGrid initialProjects={projects} />

        {/* Services & Capabilities */}
        <ServicesSection initialServices={services} />

        {/* Experience Timeline */}
        <ExperienceTimeline initialExperiences={experiences} />

        {/* Client Reviews & Testimonials Carousel */}
        <TestimonialsSection initialTestimonials={testimonials} />

        {/* Contact & Lead Capture Form */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}
