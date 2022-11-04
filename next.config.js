const executeProcess = require('child_process');
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
    if (!buildId || buildId === 'development') {
      buildId = process.env.BUILD_ID ? process.env.BUILD_ID : undefined;
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env': {
          BUILD_ID: JSON.stringify(buildId),
        },
      }),
    );
    return config;
  },
  generateBuildId: () => {
    var buildId = 'dev';
    try {
      buildId = executeProcess.execSync('git rev-parse HEAD 2>&1').toString();
    } catch (e) {
      console.error('Cannot define build id: ', e);
    }

    return buildId;
  },
});
