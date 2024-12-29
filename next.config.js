/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ['localhost', 'vercel.app']
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
