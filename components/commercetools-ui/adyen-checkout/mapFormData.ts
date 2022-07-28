import { Cart } from '@Types/cart/Cart';
import { CartDetails } from 'frontastic/actions/cart';
import { FormData } from '.';

export const mapToCartStructure = (data: FormData, billingIsSameAsShipping: boolean): CartDetails => {
  const commonData = {
    firstName: data.firstName,
    lastName: data.lastName,
  };

  const mappedData: CartDetails = {
    account: {
      email: data.email,
    },
    shipping: {
      ...commonData,
      addressId: '1st-shipping-address',
      streetName: data.shippingStreetName,
      postalCode: data.shippingPostalCode,
      city: data.shippingCity,
      country: data.shippingCountry,
    },
  };

  if (!billingIsSameAsShipping) {
    mappedData.billing = {
      ...commonData,
      streetName: data.billingStreetName,
      postalCode: data.billingPostalCode,
      city: data.billingCity,
      country: data.billingCountry,
    };
  }

  return mappedData;
};

export const mapToFormStructure = (data: Cart): FormData => {
  if (!data?.shippingAddress) return;

  const mappedData: FormData = {
    firstName: data.shippingAddress.firstName,
    lastName: data.shippingAddress.lastName,
    email: data.email,

    shippingStreetName: data.shippingAddress.streetName,
    shippingCity: data.shippingAddress.city,
    shippingPostalCode: data.shippingAddress.postalCode,
    shippingCountry: data.shippingAddress.country,

    billingStreetName: data.billingAddress.streetName,
    billingCity: data.billingAddress.city,
    billingPostalCode: data.billingAddress.postalCode,
    billingCountry: data.billingAddress.country,
  };

  return mappedData;
};
