/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true
  },
  output: 'export',  // Changed from 'standalone' to 'export' for static site generation
  distDir: 'dist',   // Explicitly set the build output directory
}

module.exports = nextConfig
