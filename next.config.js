const isProd = process.env.NODE_ENV === "production";

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd
    ? "https://cdn.statically.io/gh/wannngkee/wannngkee.github.io/gh-pages/"
    : "",
};

module.exports = {
  assetPrefix: !debug ? "/my-blog" : "",
  webpack: (config) => {
    return {
      ...config,
      node: {
        fs: "empty",
      },
    };
  },
};
