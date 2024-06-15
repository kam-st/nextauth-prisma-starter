"use server";

import userRolesJson from "@/data/roles-data.json";

export const getUserRoles = () => {
  try {
    // const userRoles = await db.userRole.findMany();

    return userRolesJson;
  } catch {
    return null;
  }
};
