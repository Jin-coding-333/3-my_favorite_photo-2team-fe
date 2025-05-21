/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
}

module.exports = nextConfig
