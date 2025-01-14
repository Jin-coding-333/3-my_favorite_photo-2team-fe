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
  images: {
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
