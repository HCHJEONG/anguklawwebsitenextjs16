// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
//   /* config options here */
  
// };

// export default nextConfig;
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  transpilePackages: ["three"],
};

export default nextConfig;
