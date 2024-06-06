import { UserTable } from '@/drizzle/schema';
import { db } from '@/lib/db';
import { eq } from 'drizzle-orm';

export const getAccountByUserId = async (userId: string) => {
  try {
    const account = await db.query.UserTable.findFirst({
      where: eq(UserTable.id, userId),
    });
    // const account = await db.account.findFirst({
    //   where: { userId },
    // });

    return account;
  } catch {
    return null;
  }
};
