import { ShippingMethod } from '@Types/cart/ShippingMethod';

export const getTaxedCountries = (shippingMethods?: ShippingMethod[], projectSettingsCountries?: string[]) => {
  const taxedCountries: string[] = [];

  shippingMethods?.forEach((shippingMethod) => {
    shippingMethod?.rates?.forEach((rate) => {
      rate?.locations?.forEach((location) => {
        if (projectSettingsCountries.includes(location.country) && !taxedCountries.includes(location.country)) {
          taxedCountries.push(location.country);
        }
      });
    });
  });

  return taxedCountries.sort();
};
