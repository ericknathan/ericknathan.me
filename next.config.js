/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "github.com",
      },
      {
        hostname: "i.scdn.co"
      }
    ],
  }
};

module.exports = nextConfig;