import useSWR, { mutate } from 'swr';
import { fetchApiHub, revalidateOptions } from 'frontastic';

export const getWishlist = () => {
  return useSWR('/action/wishlist/getWishlist', fetchApiHub, revalidateOptions);
};

export const addToWishlist = async (sku: string, count = 1) => {
  const res = await fetchApiHub('/action/wishlist/addToWishlist', { method: 'POST' }, { variant: { sku }, count });
  mutate('/action/wishlist/getWishlist', res, { revalidate: false });
};

export const removeLineItem = async (lineItemId: string) => {
  const res = await fetchApiHub(
    '/action/wishlist/removeLineItem',
    { method: 'POST' },
    { lineItem: { id: lineItemId } },
  );
  mutate('/action/wishlist/getWishlist', res, { revalidate: false });
};

export const updateLineItem = async (lineItemId: string, count = 1) => {
  const res = await fetchApiHub(
    '/action/wishlist/updateLineItemCount',
    { method: 'POST' },
    { lineItem: { id: lineItemId }, count },
  );
  mutate('/action/wishlist/getWishlist', res, { revalidate: false });
};
