/** @type {import('next').NextConfig} */

const { BLOGS_URL } = process.env;
const LOCAL_BLOGS_URL = "http://localhost:3001";

module.exports = {
  transpilePackages: ["@repo/ui"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        port: "",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: `/:path*`,
      },
      {
        source: "/blogs",
        destination: `${BLOGS_URL || LOCAL_BLOGS_URL}/blogs`,
      },
      {
        source: "/blogs/:path*",
        destination: `${BLOGS_URL || LOCAL_BLOGS_URL}/blogs/:path*`,
      },
    ];
  },
};
