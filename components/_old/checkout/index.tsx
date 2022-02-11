import React from 'react';
import { useCart } from 'frontastic';
import { EmptyState, DefaultLoader } from 'components';

import CheckoutLayout from './layout';
import { paymentMethods } from './mock';
import { ShippingMethod } from '../../../types/cart/ShippingMethod'

export const Checkout: React.FC = () => {
  const { data, shippingMethods } = useCart();

  const getShippingCountries = (shippingMethods: ShippingMethod[]) => {
    //TODO: get from locale? Or return corrrently on backend and remove function
    const countries = [];

    shippingMethods?.forEach((sm) => {
      sm.rates?.forEach((rate) => {
        rate.locations?.forEach((location) => {
          if (!countries.includes(location.country)) {
            countries.push(location.country);
          }
        });
      });
    });

    return ['de'];
  };

  if (data && shippingMethods) {
    const cart = data;
    const shippingM = shippingMethods?.data?.shippingMethods;

    if (shippingM && shippingM.length === 0) {
      return <EmptyState icon={'😿😿😿'} title={'Shipping methods are missing'} />;
    }

    const countries = getShippingCountries(shippingM);
    if (countries && countries.length === 0) {
      return <EmptyState icon={'😿😿😿'} title={'Shipping methods for your location are missing'} />;
    }

    if (cart.lineItems.length === 0) {
      return <EmptyState icon={'😿😿😿'} title={'Empty cart'} />;
    }

    const outOfStock = cart.lineItems.some((product) => product.variant.isOnStock === false);
    if (outOfStock) {
      return <EmptyState icon={'😿😿😿'} title={'Some products are out of stock'} />;
    }

    return (
      <CheckoutLayout
        data={{
          ...cart,
          shippingMethods: shippingM,
          paymentMethods: paymentMethods,
        }}
        countries={countries}
        policy={
          'By clicking on "Continue and pay" I agree to the Terms and conditions. I have taken note of the Cancellation policy and the Privacy policy'
        }
        isLoading={false}
      />
    );
  } else {
    return <DefaultLoader />;
  }
};
