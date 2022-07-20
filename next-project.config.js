//Mapping locales from frontend to backend
export const localeMap = {
  en: 'en_GB', 
  de: 'de_CH',
};

//Function to map given locale
export default (locale) => {
  if (!localeMap[locale]) {
    console.error(`Locale mapper is missing locale ${locale}`);
  }

  //If locale is not defined then select first locale
  return localeMap[locale] || localeMap[Object.keys(localeMap)[0]];
};
