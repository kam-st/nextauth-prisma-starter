"use server";

import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const accessUrls = await db.accessUrl.findMany({});

    const Json_Data = JSON.stringify(accessUrls);

    return new NextResponse(Json_Data, { status: 200 });
  } catch (e) {
    const error = JSON.stringify(e);
    return new NextResponse(error, { status: 403 });
  }
}
