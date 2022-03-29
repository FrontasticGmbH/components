export const mapLocaleToMeaningfulFormat = (locale: string) => {
  switch (locale) {
    case 'de_DE':
    case 'de_CH':
      return { name: 'German' };
    case 'en_EU':
    case 'en_GB':
      return { name: 'English' };
    case 'nl_NL':
    case 'nl_BE':
      return { name: 'Dutch' };
    case 'fr_CH':
      return { name: 'French' };
    default:
      return { name: 'English' };
  }
};
