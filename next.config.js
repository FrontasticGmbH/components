const { i18n, localePath } = require('./next-i18next.config');
const withPWA = require('next-pwa');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    disable: true,
    register: false,
  },
  i18n,
  localePath,
  images: {
    // loader: 'cloudinary',
    loader: 'custom',
    domains: ['res.cloudinary.com', 's3-eu-west-1.amazonaws.com'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    // path: `https://res.cloudinary.com/dlwdq84ig/image/upload/`,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
});
