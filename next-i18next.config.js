const path = require('path');

module.exports = {
  // Frontend locales
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'de'],
  },

  // Backend locales, they will be send to our backend endpoints on every api call, must correspond to frontend locales!!
  i18nForBackend: {
    'en': 'en_GB',
    'de': 'de_CH'    
  },
  localePath: path.resolve('./public/locales'),
};
