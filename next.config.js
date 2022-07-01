/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// next.config.js
module.exports = {
  webpack5: true,
  loaders: [
    { test: /\.(png|jpg|jpeg)$/, loader: 'url-loader?limit=998192' }
  ],
  webpack: (config, options) => {

    //Module not found: Can't resolve 'fs'' 
    config.resolve.fallback = { fs: false };
    config.module.rules.push(      {
      test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|jpeg)$/,
      type: 'asset',
      generator: {
        filename: 'static/chunks/[path][name].[hash][ext]'
      },
    });

      return config;
  }
};
  
