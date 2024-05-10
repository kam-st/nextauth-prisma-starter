import { v4 as uuidV4 } from 'uuid';

import { getVerificationTokenByEmail } from '@/data/verification-token';
import { db } from './db';
import { getPasswordResetTokenByEmail } from '@/data/password-reset-token';

export const generatePasswordResetToken = async (email: string) => {
  const token = uuidV4();
  const expires = new Date(new Date().getTime() + 5 * 60 * 1000);

  const exisitingToken = await getPasswordResetTokenByEmail(email);

  if (exisitingToken) {
    await db.passwordResetToken.deleteMany({
      where: {
        email: exisitingToken.email,
      },
    });
  }

  const PasswordResetToken = await db.passwordResetToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return PasswordResetToken;
};

export const generateVerificationToken = async (email: string) => {
  const token = uuidV4();
  const expires = new Date(new Date().getTime() + 5 * 60 * 1000);

  const exisitingToken = await getVerificationTokenByEmail(email);

  if (exisitingToken) {
    await db.verificationToken.deleteMany({
      where: {
        email: exisitingToken.email,
      },
    });
  }

  const verificationToken = await db.verificationToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return verificationToken;
};
