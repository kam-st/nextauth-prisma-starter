// import { PrismaClient } from '@prisma/client';

// declare global {
//   // eslint-disable-next-line no-var
//   var cachedPrisma: PrismaClient;
// }

// let prisma: PrismaClient;
// if (process.env.NODE_ENV === 'production') {
//   prisma = new PrismaClient();
// } else {
//   if (!global.cachedPrisma) {
//     global.cachedPrisma = new PrismaClient();
//   }
//   prisma = global.cachedPrisma;
// }

// export const db = prisma;

// import 'dotenv/config';
// import { drizzle } from 'drizzle-orm/node-postgres';
// import * as schema from '@/drizzle/schema';

// import { Client } from 'pg';

// export const client = new Client({
//   connectionString: process.env.DATABASE_DRIZZLE_URL as string,
// });

// export const db = drizzle(client, { schema, logger: true });

import 'dotenv/config';
import { drizzle } from 'drizzle-orm/postgres-js';
import * as schema from '@/drizzle/schema';

import postgres from 'postgres';


const client = postgres(process.env.DATABASE_DRIZZLE_URL as string);
export const db = drizzle(client, { schema, logger: true });


