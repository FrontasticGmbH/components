import useSWR from 'swr';

export const cartItems = () => {
  return useSWR('/action/cart/getCart');
};
