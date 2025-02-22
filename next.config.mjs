// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {
      allowedOrigins: ['*'], // Or specify your domains
    }
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'server.js'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'shnvgywofaheapxmcxjl.supabase.co',
        port: '',
        pathname: '/storage/v1/object/public/**',
      },
    ],
  },
}

export default nextConfig;