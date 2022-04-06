import { mutate } from 'swr';
import { fetchApiHub } from 'frontastic';

export const orderCart = async () => {
  const res = await fetchApiHub('/action/cart/checkout', {
    method: 'POST',
  });
  mutate('/action/cart/getCart', res);
};
