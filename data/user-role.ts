"use server";

import { db } from "@/lib/db";

export const getUserRoles = async () => {
  const userRoles = await db.userRole.findMany();

  return { userRoles };
};
