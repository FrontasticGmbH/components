const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'de_CH',
    locales: ['de_CH', 'fr_CH', 'it_CH', 'de_LI', 'en_GB'],
  },
  localePath: path.resolve('./public/locales'),
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
};
