import { UserRole } from "@prisma/client";
import { NextResponse } from "next/server";
import { currentRole } from "@/lib/auth";

export async function GET() {
  const role = await currentRole();
  //TODO: Update based on granular rbac

  if (role === "ADMIN") {
    return new NextResponse(null, { status: 200 });
  }
  return new NextResponse(null, { status: 403 });
}
