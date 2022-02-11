import { mutate } from 'swr';
import { fetchApiHub } from '..';

type CartDetails = {
  account?: object;
  shipping?: object;
  billing?: object;
  shippingMethodName?: object;
  custom?: object;
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
