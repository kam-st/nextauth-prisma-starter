import { db } from '@/lib/db';

export const getPasswordResetTokenByTokenEmail = async (
  token: string,
  email: string
) => {
  try {
    const passwordResetToken = await db.passwordResetToken.findUnique({
      where: {
        email_token: {
          email,
          token,
        },
      },
    });

    return passwordResetToken;
  } catch {
    return null;
  }
};

export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const passwordResetToken = await db.passwordResetToken.findFirst({
      where: {
        email,
      },
    });

    return passwordResetToken;
  } catch {
    return null;
  }
};
