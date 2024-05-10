import { db } from '@/lib/db';

export const getTwoFactorTokenByTokenEmail = async (
  token: string,
  email: string
) => {
  try {
    const twoFactorToken = await db.twoFactorToken.findUnique({
      where: {
        email_token: {
          email,
          token,
        },
      },
    });
  } catch {
    return null;
  }
};

export const getTwoFactorTokenByEmail = async (email: string) => {
  try {
    const twoFactorToken = await db.twoFactorToken.findFirst({
      where: { email },
    });
    return twoFactorToken;
  } catch {
    return null;
  }
};
