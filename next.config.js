/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Enable trailing slashes for consistent URLs
  trailingSlash: false,
  
  // Optimize images
  images: {
    domains: ['i.imgur.com', 'discover-milwaukee.com'],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Security headers for SEO and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self)'
          }
        ],
      },
    ];
  },
  
  // Redirects for SEO (www to non-www, etc.)
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
    ];
  },
  
  // Compression
  compress: true,
  
  // PoweredBy header removal
  poweredByHeader: false,
}

module.exports = nextConfig
