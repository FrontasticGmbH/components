import useSWR from 'swr';
import { fetchApiHub } from 'frontastic';

export const cartItems = () => {
  return useSWR('/action/cart/getCart', fetchApiHub);
};
