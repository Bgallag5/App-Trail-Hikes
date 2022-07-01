/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

// next.config.js
module.exports = {
  webpack5: true,
  webpack: (config, options) => {

    //Module not found: Can't resolve 'fs'' 
    config.resolve.fallback = { fs: false };

    config.module.rules.push(      {
      test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm)$/,
      type: 'asset',
      generator: {
        filename: 'static/chunks/[path][name].[hash][ext]'
      },
    });

      return config;
  }
};
  
