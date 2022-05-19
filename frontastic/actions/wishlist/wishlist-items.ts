import { fetchApiHub } from 'frontastic';
import useSWR from 'swr';

export const getWishlist = () => {
  return useSWR('/action/wishlist/getWishlist', fetchApiHub);
};
