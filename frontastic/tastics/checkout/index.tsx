import React from 'react';
import Checkout from 'components/frontastic-ui/checkout';
import { countryOptions } from 'components/frontastic-ui/checkout/countryOptions';

const CheckoutTastic = (data) => {
  const shippingCountryOptions = countryOptions
    .filter((country) => data.data[country.data])
    .sort((a, b) => (a.display < b.display ? -1 : 1));

  return <Checkout shippingCountryOptions={shippingCountryOptions} loginLink={data.loginLink} />;
};

export default CheckoutTastic;
