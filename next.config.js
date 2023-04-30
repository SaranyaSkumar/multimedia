/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 10000, // Inline files smaller than 10kB
            name: 'static/media/[name].[hash:8].[ext]',
          },
        },
      ],
    });
    return config;
  },

}

module.exports = nextConfig
