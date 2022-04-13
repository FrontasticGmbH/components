const path = require('path');

module.exports = {
  stories: ['../components/**/*.stories.mdx', '../components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          // When using postCSS 8
          implementation: require('postcss'),
          postcssOptions: {
            plugins: {
              tailwindcss: {},
              autoprefixer: {},
            },
          },
        },
      },
    },
  ],
  typescript: { reactDocgen: false },
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
  },
  webpackFinal: async (config) => {
    config.resolve.modules.push(path.resolve(__dirname, '..'));
    config.resolve.fallback = {
      fs: false,
      tls: false,
      net: false,
      module: false,
      http: false,
      crypto: false,
      path: require.resolve('path-browserify'),
    };

    return config;
  },
};
