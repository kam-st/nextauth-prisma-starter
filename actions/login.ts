'use server';

import * as z from 'zod';
import { signIn } from '@/auth';

import { LoginSchema } from '@/lib/validations/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { AuthError } from 'next-auth';
import { getUserbyEmail } from '@/data/user';
import { generateVerificationToken } from '@/lib/tokens';
import { sendVerificationEmail } from '@/lib/mail';

export const loginAction = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalidated fields!' };
  }

  const { email, password } = validatedFields.data;

  const existingUser = await getUserbyEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: 'Email and pasword combination does not exist' };
  }

  if (!existingUser.emailVerified) {
    //TODO: check here if the token alread exist and if it is valid. Then return you have not verified email, please verify email to complete registration. If token expired then genrate new token.
    const verificationToken = await generateVerificationToken(
      existingUser.email
    );

    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );

    return { success: 'Confirmation email sent!' };
  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });

    return { success: 'Sucessfully Logged In' };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials' };
        default:
          return { error: 'Something went wrong!' };
      }
    }
    throw error;
  }
};
