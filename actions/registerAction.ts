'use server';

import * as z from 'zod';

import { RegisterSchema } from '@/lib/validations/auth';

export const registerAction = async (
  values: z.infer<typeof RegisterSchema>
) => {
  const validatedFields = RegisterSchema.safeParse(values);
  console.log('registerAction.ts', validatedFields);

  if (!validatedFields.success) {
    return { error: 'Invalidated fields!' };
  }
  return { success: 'Email sent!' };
};
