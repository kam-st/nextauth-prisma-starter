"use server";

import { getUserbyEmail } from "@/data/user";
import { getVerificationTokenByToken } from "@/data/verification-token";
import { UserTable, VerificationTokenTable } from "@/drizzle/schema";
import { db } from "@/lib/db";
import { eq } from "drizzle-orm";

export const newVerification = async (token: string) => {
  const exisitingToken = await getVerificationTokenByToken(token);

  if (!exisitingToken) {
    return { error: "Token does not exist!" };
  }

  const hasExpired = new Date(exisitingToken.expires) < new Date();

  if (hasExpired) {
    return { error: "Token has expired!" };
  }

  const existingUser = await getUserbyEmail(exisitingToken.email);

  if (!existingUser) {
    return { error: "Email does not exist!" };
  }

  await db
    .update(UserTable)
    .set({ emailVerified: new Date(), email: exisitingToken.email })
    .where(eq(UserTable.id, existingUser.id));

  await db
    .delete(VerificationTokenTable)
    .where(eq(VerificationTokenTable.id, exisitingToken.id));

  return { success: "Email verified!" };
};
