import fs from "fs";
import { cwd } from "process";
import path from "path";
import { error } from "console";
import { NextResponse } from "next/server";
import { currentRole } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET() {
  const role = await currentRole();
  //TODO: Update based on granular rbac

  const accessUrls = await db.accessUrl.findMany({});

  const accessUrls_JSON = JSON.stringify(accessUrls);

  const path_accessUrls = path.join(cwd(), "data/access-url-data.json");

  const UserRoles = await db.userRole.findMany({});

  const UserRoles_JSON = JSON.stringify(UserRoles);

  const path_roles = path.join(cwd(), "data/roles-data.json");

  await fs.writeFile(path_accessUrls, accessUrls_JSON, function (err) {
    if (err) throw error;
    return new NextResponse(err, {
      status: 404,
    });
  });

  await fs.writeFile(path_roles, UserRoles_JSON, function (err) {
    if (err) throw error;
    return new NextResponse(err, {
      status: 404,
    });
  });

  return new NextResponse("Access url's and roles successfully updated", {
    status: 200,
  });
}
