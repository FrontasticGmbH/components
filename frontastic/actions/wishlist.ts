import { fetchApiHub } from 'frontastic';
import useSWR, { mutate } from 'swr';

export const getWishlist = async () => {
    return useSWR('/action/wishlist/getWishlist', fetchApiHub);
}

export const addToWishlist = async ({ sku, count = 1 }: { sku: string; count?: number }) => {
    const res = await fetchApiHub('/action/wishlist/addToWishlist', { method: 'POST' }, { variant: sku, count });
    mutate('/action/wishlist/getWishlist', res);
}

export const removeLineItem = async (lineItemId: string) => {
    const res = await fetchApiHub('/action/wishlist/removeLineItem', { method: 'POST' }, { lineItem: { id: lineItemId } });
    mutate('/action/wishlist/getWishlist', res);
}

export const updateLineItem = async ({ lineItemId, count = 1 }: { lineItemId: string; count?: number }) => {
    const res = await fetchApiHub('/action/wishlist/updateLineItemCount', { method: 'POST' }, { lineItem: { id: lineItemId }, count });
    mutate('/action/wishlist/getWishlist', res);
}
