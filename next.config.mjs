/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // 빌드 중 ESLint 검사 무시
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'th.bing.com',
      },
      {
        protocol: 'https',
        hostname: 'my-favorite-photo.onrender.com',
        pathname: '/upload/**',
      },
    ],
  },
};

export default nextConfig;
