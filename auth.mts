import NextAuth from "next-auth"
import { authConfig } from './auth.config.mjs';
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { drizzledb } from "@/lib/drizzledb.js"

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: DrizzleAdapter(drizzledb), 
  ...authConfig,
});