// import NextAuth from 'next-auth';
// import { authConfig } from './auth.config.mjs';
 
// export default NextAuth(authConfig).auth;
 
// export const config = {
//   // https://nextjs.org/docs/app/api-reference/file-conventions/proxy#matcher
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// };
// Next.js 16에서는 middleware.ts 대신 proxy.ts 사용이 권장될 수 있습니다.
export { auth as proxy } from "@/auth.mjs"
