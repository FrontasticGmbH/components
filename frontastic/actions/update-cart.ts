import { mutate } from 'swr';
import { fetchApiHub } from '..';
import { Address } from '../../../types/account/Address';

export type CartDetails = {
  account?: { email: string };
  shipping?: Address;
  billing?: Address;
};

export const updateCart = async (payload: CartDetails) => {
  const res = await fetchApiHub(
    '/action/cart/updateCart',
    {
      headers: {
        accept: 'application/json',
      },
      credentials: 'include',
      method: 'POST',
    },
    payload,
  );
  console.log('cart updated, ', payload, res);
  mutate('/action/cart/getCart', res);
};

export const setShippingMethod = async (shippingMethodId: string) => {
  const payload = {
    shippingMethod: {
      id: shippingMethodId,
    },
  };
  const res = await fetchApiHub(
    '/action/cart/setShippingMethod',
    {
      headers: {
        accept: 'application/json',
      },
      credentials: 'include',
      method: 'POST',
    },
    payload,
  );
  console.log('shipping method set, ', payload, res);
  mutate('/action/cart/getCart', res);
};
