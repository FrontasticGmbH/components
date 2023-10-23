const languageMapper = {
  en: 'en_US',
  de: 'de_CH',
};

const currencyMapper = {
  en: 'USD',
  de: 'EUR',
};

const mapLanguage = (lang) => {
  if (!languageMapper[lang]) {
    console.error(`Language mapper is missing language ${lang}`);
  }

  //If language is not defined in languageMapper then select first locale
  return languageMapper[lang] || languageMapper[Object.keys(languageMapper)[0]];
};

const mapCurrency = (lang) => {
  if (!currencyMapper[lang]) {
    console.error(`Currency mapper is missing language ${lang}`);
  }

  //If language is not defined in currency then select first currency
  return currencyMapper[lang] || currencyMapper[Object.keys(currencyMapper)[0]];
};

module.exports = { languageMapper, mapLanguage, mapCurrency };
