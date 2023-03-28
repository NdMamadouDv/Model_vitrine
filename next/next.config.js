/** @type {import('next').NextConfig} */
// webpack-disable-next-line import/no-webpack-loader-syntax
const nextTranslate = require("next-translate-plugin");

const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
  },
  experimental: {
    appDir: true,
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "http://localhost:3000",
          },
        ],
      },
    ];
  },
};

module.exports = nextTranslate(nextConfig);
