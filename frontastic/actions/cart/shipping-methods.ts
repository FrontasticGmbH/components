import useSWR from 'swr';
import { fetchApiHub } from 'frontastic';

export const shippingMethods = () => {
  return useSWR('/action/cart/getShippingMethods', fetchApiHub);
};
