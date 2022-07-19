//Default backend locale
export const defaultLocale = 'en_GB';

//Mapping locales from frontend to backend
export const localeMap = { en: 'en_GB', de: 'de_CH' };

//Function to map given locale
export default (locale) => {
  return localeMap[locale] ?? defaultLocale;
};
