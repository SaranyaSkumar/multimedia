const path = require("path");

module.exports = {
  module: {
    rules: [
      // Add this rule for video files
      {
        test: /\.(mp4|webm|ogg|ogv)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "assets/[name].[contenthash].[ext]",
            publicPath: "/",
          },
        },
      },
      // Add any other rules you might have
    ],
  },
};
