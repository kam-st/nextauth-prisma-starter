'use server';

import bcrypt from 'bcrypt';
import * as z from 'zod';

import { db } from '@/lib/db';

import { RegisterSchema } from '@/lib/validations/auth';
import { getUserbyEmail } from '@/data/user';

export const registerAction = async (
  values: z.infer<typeof RegisterSchema>
) => {
  const validatedFields = RegisterSchema.safeParse(values);
  console.log('registerAction.ts', validatedFields);

  if (!validatedFields.success) {
    return { error: 'Invalidated fields!' };
  }

  const { email, password, firstName, lastName } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserbyEmail(email);

  if (existingUser) {
    return { error: 'Email already in use!' };
  }

  await db.user.create({
    data: {
      firstName,
      lastName,
      email,
      password: hashedPassword,
    },
  });

  //TODO: Send verification token email.

  return { success: 'User account created!' };
};
