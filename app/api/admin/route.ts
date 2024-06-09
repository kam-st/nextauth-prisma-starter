import { UserRole } from "@/drizzle/schema";
import { currentRole } from "@/lib/auth";

import { NextResponse } from "next/server";

export async function GET() {
  const role = await currentRole();

  if (role === UserRole.enumValues[0]) {
    return new NextResponse(null, { status: 200 });
  }
  return new NextResponse(null, { status: 403 });
}
