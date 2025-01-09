/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // Turbopack 비활성화
    turboMode: false,
  },
  future: {
    // Webpack 5 사용
    webpack5: true,
  },
};

export default nextConfig;
