import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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

    const projects = await prisma.project.findMany({
      where: whereClause,
      orderBy: { createdAt: "desc" },
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
