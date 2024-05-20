/** @type {import('next').NextConfig} */

const { DOCS_URL } = process.env;

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
        destination: `${DOCS_URL}/blogs`,
      },
      {
        source: "/blogs/:path*",
        destination: `${DOCS_URL}/blogs/:path*`,
      },
    ];
  },
};
