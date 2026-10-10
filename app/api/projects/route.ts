import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { FALLBACK_PROJECTS } from "@/lib/fallback-data";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const featured = searchParams.get("featured");

    const whereClause: Record<string, unknown> = {};

    if (category && category !== "All") {
      whereClause.category = category;
    }

    if (featured === "true") {
      whereClause.featured = true;
    }

    let rawProjects = [];
    try {
      rawProjects = await prisma.project.findMany({
        where: whereClause,
        orderBy: { createdAt: "desc" },
      });
    } catch {
      rawProjects = FALLBACK_PROJECTS;
    }

    if (!rawProjects || rawProjects.length === 0) {
      rawProjects = FALLBACK_PROJECTS;
    }

    const projectOrder = [
      "omnichannel-email-nurture-automation",
      "seo-growth-search-domination",
      "linkedin-b2b-outreach-engine",
      "b2c-customer-acquisition-engine",
      "performance-advertising-campaigns",
    ];

    const projects = [...rawProjects].sort((a, b) => {
      const idxA = projectOrder.indexOf(a.slug);
      const idxB = projectOrder.indexOf(b.slug);
      if (idxA === -1 && idxB === -1) return 0;
      if (idxA === -1) return 1;
      if (idxB === -1) return -1;
      return idxA - idxB;
    });

    return NextResponse.json({
      success: true,
      count: projects.length,
      data: projects,
    });
  } catch (error) {
    console.error("❌ Projects API Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch projects database." },
      { status: 500 }
    );
  }
}
