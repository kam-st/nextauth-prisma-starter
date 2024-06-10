"use server";

import { currentRole } from "@/lib/auth";
import { UserRole } from "@/drizzle/schema";

export const admin = async () => {
  const role = await currentRole();

  if (role === UserRole.enumValues[0]) {
    return { success: "Allowed!" };
  }

  return { error: "Forbidden!" };
};
