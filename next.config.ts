// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   /* config options here */
  
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ["three", "react-markdown", "remark-gfm", "rehype-highlight"],
   
  // Next.js 16의 새로운 캐시 기능을 사용한다면 관련 설정 확인
  // experimental: {
  //   cacheComponents: true,
  // },

  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  
  reactStrictMode: true,
  allowedDevOrigins: ["*"],
  serverExternalPackages: ["better-sqlite3"],
  async headers() {
    if (process.env.NODE_ENV === "production") return [];
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Cache-Control", value: "no-store, must-revalidate" },
        ],
      },
    ];
  },
};

export default nextConfig;
