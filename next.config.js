/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/portfolio' : '',
  images: {
    unoptimized: true,
  },
  // Disable source maps in production
  productionBrowserSourceMaps: false,
  // Add trailing slash to URLs
  trailingSlash: true,
};

module.exports = nextConfig;
