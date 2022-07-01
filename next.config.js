/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withImages = require('next-images')
// next.config.js
module.exports = withImages({
  env:{
    FIREBASE_KEY: process.env.REACT_APP_FIREBASE_AUTH_KEY
  },
  webpack5: true,
  loaders: [
    { test: /\.(png|jpg|jpeg)$/, loader: 'url-loader?limit=998192' }
  ],
  images: {
    disableStaticImages: true
  },
  webpack: (config, options) => {

    //Module not found: Can't resolve 'fs'' 
    config.resolve.fallback = { fs: false };
    config.module.rules.push(      {
      test: /\.(jpe?g|png|svg|gif|ico|eot|ttf|woff|woff2|mp4|pdf|webm|jpeg)$/,
      use: [{
        loader: 'file-loader'
      }],
      type: 'asset',
      generator: {
        filename: 'static/chunks/[path][name].[hash][ext]'
      },
    });

      return config;
  }
});
  
