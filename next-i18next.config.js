const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'de_CH',
    locales: ['de_CH', 'fr_CH', 'it_CH', 'de_LI', 'en_GB'],
  },
  localePath: path.resolve('./public/locales'),
};
