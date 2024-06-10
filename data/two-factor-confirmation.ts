import { TwoFactorConfirmationTable } from "@/drizzle/schema";
import { db } from "@/lib/db";
import { eq } from "drizzle-orm";

export const getTwoFactorConfirmationByUserId = async (userId: string) => {
  try {
    const twoFactorConfirmation =
      await db.query.TwoFactorConfirmationTable.findFirst({
        where: eq(TwoFactorConfirmationTable.userId, userId),
      });

    return twoFactorConfirmation;
  } catch {
    return null;
  }
};
