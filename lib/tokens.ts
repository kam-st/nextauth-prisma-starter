import crypto from "crypto";
import { v4 as uuidV4 } from "uuid";

import { getVerificationTokenByEmail } from "@/data/verification-token";
import { getPasswordResetTokenByEmail } from "@/data/password-reset-token";
import { getTwoFactorTokenByEmail } from "@/data/two-factor-token";
import { db } from "./db";

export const generateTwoFactorToken = async (email: string) => {
  const token = crypto.randomInt(100_000, 1_000_000).toString();

  const expires = new Date(new Date().getTime() + 5 * 60 * 1000);

  const exisitingToken = await getTwoFactorTokenByEmail(email);

  if (exisitingToken) {
    await db.twoFactorToken.deleteMany({
      where: {
        email: exisitingToken.email,
      },
    });
  }

  const twoFactorToken = await db.twoFactorToken.create({
    data: {
      email,
      token,
      expires,
    },
  });

  return twoFactorToken;
};

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
