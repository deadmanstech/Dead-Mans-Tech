/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // This allows any HTTPS domain
      },
      {
        protocol: 'http',
        hostname: '**', // This allows any HTTP domain
      },
    ],
  },
}

export default nextConfig
