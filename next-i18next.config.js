const path = require('path');

module.exports = {
  // Frontend locales
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
  },

  // Backend locales, they will be send to our backend endpoints on every api call, must correspond to frontend locales!!
  i18nForBackend: {
    'de': 'de_CH',
    'en': 'en_GB'
  },
  localePath: path.resolve('./public/locales'),
};
