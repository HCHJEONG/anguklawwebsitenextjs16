import type { NextAuthConfig } from 'next-auth';
import Kakao from "next-auth/providers/kakao";
 
export const authConfig = {
  providers: [Kakao({
      clientId: process.env.AUTH_KAKAO_ID,
      clientSecret: process.env.AUTH_KAKAO_SECRET,
    })],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnNewArticles = nextUrl.pathname.startsWith('/articles/new');
      if (isOnNewArticles) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        return Response.redirect(new URL('/articles/new', nextUrl));
      }
      const isOnEditArticles = nextUrl.pathname.endsWith('edit');
      if (isOnEditArticles) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        // return Response.redirect(new URL(nextUrl.pathname, nextUrl));
        return true;
      }
      return true;
    },   
    async session({ session, token }) {
      return session;
    },
  },
} satisfies NextAuthConfig;