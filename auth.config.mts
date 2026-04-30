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
      console.log('authorized callback');
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
    async signIn({ user, account, profile }) {
      console.log('signIn callback');
      // Example: Only allow login if email is verified (if provided by Kakao)
      return true; 
    },
    async jwt({ token, account, user }) {
      console.log('jwt callback');
      // If it's the initial sign-in, add the provider's access_token to the JWT
      if (account) {
        token.accessToken = account.access_token;
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      console.log('session callback');
      // Send the custom fields to the client-side session object
      session.user.id = token.id as string;
      session.accessToken = token.accessToken as string;
      return session;
    },
  },
} satisfies NextAuthConfig;