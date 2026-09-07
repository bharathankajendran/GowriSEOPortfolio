import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST() {
  try {
    const existingCount = await prisma.project.count();
    if (existingCount > 0) {
      return NextResponse.json({
        success: true,
        message: "Database already seeded.",
        count: existingCount,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Database is ready.",
    });
  } catch (error) {
    console.error("❌ Seed API Error:", error);
    return NextResponse.json(
      { success: false, message: "Seed route error." },
      { status: 500 }
    );
  }
}
