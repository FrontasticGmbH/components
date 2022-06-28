import { countryOptions } from 'helpers/countryOptions';
import { ShippingMethod } from '@Types/cart/ShippingMethod';

const findDuplicates = (arr) => {
  return arr.filter((item, index) => index !== arr.indexOf(item));
};

export const getTaxedCountries = (shippingMethods?: ShippingMethod[], projectSettingsCountries?: string[]) => {
  //list of countries with taxes information
  const taxedCountries: string[] = [];

  shippingMethods?.forEach((shippingMethod) => {
    shippingMethod?.rates?.forEach((rate) => {
      rate?.locations?.forEach((location) => {
        const listOfCountryOptions = countryOptions.map((country) => country.data);
        if (listOfCountryOptions.includes(location.country) && !taxedCountries.includes(location.country)) {
          taxedCountries.push(location.country);
        }
      });
    });
  });

  // combine countries from both lists without duplicates and sort them
  const availableCountries = findDuplicates([...taxedCountries, ...projectSettingsCountries]).sort();

  //find country options that match available countries
  return countryOptions.filter((country) => availableCountries?.indexOf(country.data) !== -1);
};
