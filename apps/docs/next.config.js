/** @type {import('next').NextConfig} */
module.exports = {
  basePath: "/docs",
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
  async redirects() {
    return [
      {
        source: "/",
        destination: "/docs",
        permanent: false,
        basePath: false,
      },
    ];
  },
};
