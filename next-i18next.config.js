const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en_GB',
    locales: ['en_GB', 'de_CH'],
  },
  localePath: path.resolve('./public/locales'),
};
