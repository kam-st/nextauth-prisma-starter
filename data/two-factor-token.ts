import {
  TwoFactorConfirmationTable,
  TwoFactorTokenTable,
} from '@/drizzle/schema';
import { db } from '@/lib/db';
import { and, eq } from 'drizzle-orm';

export const getTwoFactorTokenByTokenEmail = async (
  token: string,
  email: string
) => {
  try {
    const twoFactorToken = await db.query.TwoFactorTokenTable.findFirst({
      where: and(
        eq(TwoFactorTokenTable.email, email),
        eq(TwoFactorTokenTable.token, token)
      ),
    });

    // const twoFactorToken = await db.twoFactorToken.findUnique({
    //   where: {
    //     email_token: {
    //       email,
    //       token,
    //     },
    //   },
    // });
  } catch {
    return null;
  }
};

export const getTwoFactorTokenByEmail = async (email: string) => {
  try {
    const twoFactorToken = await db.query.TwoFactorTokenTable.findFirst({
      where: eq(TwoFactorTokenTable.email, email),
    });

    // const twoFactorToken = await db.twoFactorToken.findFirst({
    //   where: { email },
    // });
    return twoFactorToken;
  } catch {
    return null;
  }
};
