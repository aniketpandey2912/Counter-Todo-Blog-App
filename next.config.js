/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "imageio.forbes.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cdn.fansshare.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
