import React from "react";
import { prisma } from "@/lib/prisma";
import { PortfolioSPA } from "@/components/portfolio/portfolio-spa";

export const dynamic = "force-dynamic";

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
