/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  // Enable trailing slashes for consistent URLs
  trailingSlash: false,
  
  // Optimize images
  images: {
    domains: ['i.imgur.com', 'discover-milwaukee.com', 'www.discover-milwaukee.com'],
    formats: ['image/avif', 'image/webp'],
  },
  
  // Security headers for SEO and security
  async headers() {
    return [
      {
        // Self-hosted font files never change under the same name: let browsers keep them for a year.
        source: '/fonts/:file*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
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
      // Old addresses that still appear in Google's index (seen in Search Console, Nov 2026).
      // Each now points at the guide that replaced it instead of returning "not found".
      { source: '/bay-view-milwaukee-neighborhood-guide-2026-restaurants-bars-things-to-do', destination: '/bay-view-milwaukee', permanent: true },
      { source: '/riverwest-milwaukee-bohemian-artsy-authentic', destination: '/riverwest-milwaukee', permanent: true },
      { source: '/sherman-park-milwaukee-guide-2026-historic-homes-soul', destination: '/sherman-park-milwaukee', permanent: true },
      { source: '/50-best-date-ideas-in-milwaukee-romantic-things-to-do', destination: '/milwaukee-date-ideas', permanent: true },
      { source: '/day-trip-guide/milwaukee-day-trip-guide', destination: '/day-trips-milwaukee', permanent: true },
      { source: '/day-trips-milunker', destination: '/day-trips-milwaukee', permanent: true },
    ];
  },
  
  // Compression
  compress: true,
  
  // PoweredBy header removal
  poweredByHeader: false,
}

module.exports = nextConfig
