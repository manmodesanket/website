const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */

const config = {
  reactStrictMode: true,
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
};
module.exports = withContentlayer(config);
