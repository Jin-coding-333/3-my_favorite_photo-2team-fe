/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['th.bing.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '8000', // 포트 번호 지정
        pathname: '/upload/**', // 업로드 경로 패턴
      },
    ],
  },
};

export default nextConfig;
