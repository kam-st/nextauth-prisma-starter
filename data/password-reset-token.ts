import { PasswordResetTokenTable } from '@/drizzle/schema';
import { db } from '@/lib/db';
import { and, eq } from 'drizzle-orm';

export const getPasswordResetTokenByTokenEmail = async (
  token: string,
  email: string
) => {
  try {
    const passwordResetToken = await db.query.PasswordResetTokenTable.findFirst(
      {
        where: and(
          eq(PasswordResetTokenTable.email, email),
          eq(PasswordResetTokenTable.token, token)
        ),
      }
    );

    // const passwordResetToken = await db.passwordResetToken.findUnique({
    //   where: {
    //     email_token: {
    //       email,
    //       token,
    //     },
    //   },
    // });

    return passwordResetToken;
  } catch {
    return null;
  }
};

export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const passwordResetToken = await db.query.PasswordResetTokenTable.findFirst(
      { where: eq(PasswordResetTokenTable.email, email) }
    );

    // const passwordResetToken = await db.passwordResetToken.findFirst({
    //   where: {
    //     email,
    //   },
    // });

    return passwordResetToken;
  } catch {
    return null;
  }
};
