'use server';

import { NewPasswordSchema } from '@/lib/validations/auth';
import { getUserbyEmail } from '@/data/user';
import { string, z } from 'zod';
import { error } from 'console';
import { generatePasswordResetToken } from '@/lib/tokens';
import { sendPasswordResetEmail } from '@/lib/mail';
import { getPasswordResetTokenByTokenEmail } from '@/data/password-reset-token';
import bcrypt from 'bcryptjs';
import { db } from '@/lib/db';

export const newPasswordAction = async (
  values: z.infer<typeof NewPasswordSchema>,
  email: string | null,
  token: string | null
) => {
  const validatedFields = NewPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
  }

  const { password } = validatedFields.data;

  if (!token || !email) {
    return { error: 'Link is not valid!' };
  }

  const existingToken = await getPasswordResetTokenByTokenEmail(token, email);

  if (!existingToken) {
    return { error: 'Invalid Token!' };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: 'Token has expired!' };
  }

  const existingUser = await getUserbyEmail(existingToken.email);

  if (!existingUser) {
    return { error: 'Email does not exist!' };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.update({
    where: { id: existingUser.id },
    data: { password: hashedPassword },
  });

  await db.passwordResetToken.delete({
    where: { id: existingToken.id },
  });

  return { success: 'Password updated!' };
};
