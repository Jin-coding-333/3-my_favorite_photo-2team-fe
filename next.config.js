/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // ESLint 검사 건너뛰기
  eslint: {
    // 배포 시 ESLint 검사를 건너뛰도록 설정
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'my-favorite-photo.onrender.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'my-favorite-photo.onrender.com',
        port: '',
        pathname: '/**',
      },
    ],
    domains: ['my-favorite-photo.onrender.com'], // 이전 방식도 함께 유지
  },
};

module.exports = nextConfig;
