const withPWA = require('next-pwa');
const { i18n, localePath } = require('./next-i18next.config');

module.exports = withPWA({
  productionBrowserSourceMaps: true,
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
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
  webpack(config, { webpack, buildId }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    if (buildId !== 'development') {
      config.plugins.push(
        new webpack.DefinePlugin({
          'process.env': {
            NEXT_PUBLIC_EXT_BUILD_ID: JSON.stringify(process.env.NEXT_PUBLIC_EXT_BUILD_ID),
          },
        }),
      );
    }

    return config;
  },
});
