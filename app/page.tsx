import React from "react";
import { prisma } from "@/lib/prisma";
import { PortfolioSPA } from "@/components/portfolio/portfolio-spa";
import {
  FALLBACK_PROJECTS,
  FALLBACK_SERVICES,
  FALLBACK_EXPERIENCES,
  FALLBACK_TESTIMONIALS,
} from "@/lib/fallback-data";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  let projects = [];
  let services = [];
  let experiences = [];
  let testimonials = [];

  try {
    const [dbProjects, dbServices, dbExperiences, dbTestimonials] = await Promise.all([
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

    projects = dbProjects.length > 0 ? dbProjects : FALLBACK_PROJECTS;
    services = dbServices.length > 0 ? dbServices : FALLBACK_SERVICES;
    experiences = dbExperiences.length > 0 ? dbExperiences : FALLBACK_EXPERIENCES;
    testimonials = dbTestimonials.length > 0 ? dbTestimonials : FALLBACK_TESTIMONIALS;
  } catch (error) {
    console.warn("⚠️ Database query failed or SQLite unavailable on serverless. Using fallback data:", error);
    projects = FALLBACK_PROJECTS;
    services = FALLBACK_SERVICES;
    experiences = FALLBACK_EXPERIENCES;
    testimonials = FALLBACK_TESTIMONIALS;
  }

  // Exact project order requested by user:
  // 1. Email Nurture & Lead Engine
  // 2. SEO Growth & Keyword Domination
  // 3. LinkedIn B2B Outreach Engine
  // 4. B2C Consumer Acquisition Engine
  // 5. Performance Advertising Scale
  const projectOrder = [
    "omnichannel-email-nurture-automation",
    "seo-growth-search-domination",
    "linkedin-b2b-outreach-engine",
    "b2c-customer-acquisition-engine",
    "performance-advertising-campaigns",
  ];

  const sortedProjects = [...projects].sort((a, b) => {
    const idxA = projectOrder.indexOf(a.slug);
    const idxB = projectOrder.indexOf(b.slug);
    if (idxA === -1 && idxB === -1) return 0;
    if (idxA === -1) return 1;
    if (idxB === -1) return -1;
    return idxA - idxB;
  });

  return (
    <PortfolioSPA
      projects={sortedProjects}
      services={services}
      experiences={experiences}
      testimonials={testimonials}
    />
  );
}
