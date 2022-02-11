import useSWR from 'swr';
import { fetchApiHub } from '..';

export const shippingMethods = () => {
  return useSWR('/action/cart/getShippingMethods', fetchApiHub);
};
