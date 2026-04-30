import NextAuth from "next-auth"
import { authConfig } from './auth.config.mjs';
// import { DrizzleAdapter } from "@auth/drizzle-adapter";
// import { drizzle } from "drizzle-orm/better-sqlite3";
// import { usersdb } from "@/lib/userdb.js";
 
// const drizzleDb = drizzle(usersdb);

export const { handlers, auth, signIn, signOut } = NextAuth({
  // adapter: DrizzleAdapter(drizzleDb), 
  ...authConfig,
});