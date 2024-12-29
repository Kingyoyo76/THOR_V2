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
  output: 'standalone',
  distDir: 'out',  // Changed to 'out' to match Next.js defaults
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
