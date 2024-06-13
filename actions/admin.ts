"use server";

import { error } from "console";
import { UserRole } from "@prisma/client";
import { currentRole } from "@/lib/auth";

export const admin = async () => {
  const role = await currentRole();
  //TODO: Update this code to work with role policies defined in database. Based on role and access policies of that role.

  if (role === "ADMIN") {
    return { success: "Allowed!" };
  }

  return { error: "Forbidden!" };
};
