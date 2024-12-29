/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', 'vercel.app'],
    unoptimized: true
  },
  typescript: {
    ignoreBuildErrors: false
  },
  eslint: {
    ignoreDuringBuilds: false
  },
  experimental: {
    appDir: true
  },
  distDir: '.next',
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/:path*'
      }
    ]
  }
}

module.exports = nextConfig
