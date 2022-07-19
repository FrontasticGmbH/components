const path = require('path');

module.exports = {
  // Frontend locales
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },
  localePath: path.resolve('./public/locales'),
};
