/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/3D-Zeta-Transformation' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/3D-Zeta-Transformation/' : '',
  images: {
    unoptimized: true
  },
  experimental: {
    appDir: false
  }
}

module.exports = nextConfig