import { NextResponse } from "next/server";
import { FALLBACK_PROJECTS } from "@/lib/fallback-data";

export const dynamic = "force-static";

export async function GET() {
  return NextResponse.json({
    success: true,
    count: FALLBACK_PROJECTS.length,
    data: FALLBACK_PROJECTS,
  });
}
