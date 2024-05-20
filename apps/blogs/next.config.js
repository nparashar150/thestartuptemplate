/** @type {import('next').NextConfig} */
module.exports = {
  basePath: "/blogs",
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
        destination: "/blogs",
        permanent: false,
        basePath: false,
      },
    ];
  },
};
