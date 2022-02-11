import useSWR from 'swr';
import { fetchApiHub } from '..';

export const cartItems = () => {
  return useSWR('/action/cart/getCart', fetchApiHub);
};
