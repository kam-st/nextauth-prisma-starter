'use server';

import * as z from 'zod';

import { LoginSchema } from '@/lib/validations/auth';

export const loginAction = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalidated fields!' };
  }
  return { success: 'Email sent!' };
};
