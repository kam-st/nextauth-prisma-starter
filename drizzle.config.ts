import 'dotenv/config'; // make sure to install dotenv package
import { defineConfig } from 'drizzle-kit';
export default defineConfig({
  dialect: 'postgresql',
  out: './drizzle/migrations',
  schema: './drizzle/schema.ts',
  dbCredentials: {
    url: process.env.DATABASE_DRIZZLE_URL as string,
  },
  // Print all statements
  verbose: true,
  // Always ask for confirmation
  strict: true,
});
