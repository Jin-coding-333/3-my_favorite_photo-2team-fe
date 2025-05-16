/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true, // 빌드 중 ESLint 검사 무시
  },
  images: {
    domains: ['th.bing.com'],
    remotePatterns: [
      {
        protocol: 'http',
        // hostname: 'localhost',
        hostname: 'https://my-favorite-photo.onrender.com',
        port: '8000', // 포트 번호 지정
        pathname: '/upload/**', // 업로드 경로 패턴
      },
    ],
  },
};

export default nextConfig;
