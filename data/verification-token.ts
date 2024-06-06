import { VerificationTokenTable } from '@/drizzle/schema';
import { db } from '@/lib/db';
import { eq } from 'drizzle-orm';

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificationToken = await db
      .selectDistinct()
      .from(VerificationTokenTable)
      .where(eq(VerificationTokenTable.token, token));

    // const verificationToken = await db.verificationToken.findUnique({
    //   where: { token },
    // });
    return verificationToken[0];
  } catch {
    return null;
  }
};

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await db
      .select()
      .from(VerificationTokenTable)
      .where(eq(VerificationTokenTable.email, email))
      .limit(1);

    // const verificationToken = await db.verificationToken.findFirst({
    //   where: { email },
    // });
    return verificationToken[0];
  } catch {
    return null;
  }
};
