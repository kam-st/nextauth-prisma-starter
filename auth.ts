import NextAuth from 'next-auth';
import google from 'next-auth/providers/google';
import { PrismaAdapter } from '@auth/prisma-adapter';
import { db } from './lib/db';
import Credentials from 'next-auth/providers/credentials';
import { LoginSchema } from './lib/validations/auth';
import { getUserbyEmail, getUserbyId } from './data/user';
import bcrypt from 'bcryptjs';
import { UserRole } from '@prisma/client';

export const {
  handlers,
  signIn,
  signOut,
  auth,
  unstable_update: update,
} = NextAuth({
  adapter: PrismaAdapter(db),
  session: { strategy: 'jwt' },
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);

        if (validatedFields.success) {
          const { email, password } = validatedFields.data;

          const user = await getUserbyEmail(email);
          if (!user || !user.password) {
            return null;
          }
          const passwordsMatch = await bcrypt.compare(password, user.password);

          if (passwordsMatch) return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;
      const existingUser = await getUserbyId(token.sub);
      if (!existingUser) return token;

      token.role = existingUser.role;
      return token;
    },
  },
});
