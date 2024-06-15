"use server";

import { db } from "@/lib/db";

// import userRolesJson from "@/data/roles-data.json";

export const getUserRoles = async () => {
  try {
    const userRoles = await db.userRole.findMany();

    return userRoles;
  } catch {
    return null;
  }
};
