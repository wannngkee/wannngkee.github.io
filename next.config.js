const debug = process.env.NODE_ENV !== "production";

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
