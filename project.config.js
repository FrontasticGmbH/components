export const mapLanguage = (lang) => {
  if (!languageMapper[lang]) {
    console.error(`Language mapper is missing language ${locale}`);
  }

  //If language is not defined in localeMapper then select first locale
  return languageMapper[lang] || languageMapper[Object.keys(languageMapper)[0]];
}

export default {
  languageMapper: {
    en: 'en_GB',
    de: 'de_CH'
  }
};