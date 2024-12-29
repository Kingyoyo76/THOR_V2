/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  output: 'export',
  distDir: 'out',  // Changed to 'out' to match Next.js defaults
  trailingSlash: true
}

module.exports = nextConfig
