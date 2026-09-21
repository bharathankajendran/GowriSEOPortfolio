import React from "react";
import { prisma } from "@/lib/prisma";
import { PortfolioSPA } from "@/components/portfolio/portfolio-spa";

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
    <PortfolioSPA
      projects={projects}
      services={services}
      experiences={experiences}
      testimonials={testimonials}
    />
  );
}
