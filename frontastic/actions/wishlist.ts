import { fetchApiHub } from 'frontastic';
import useSWR, { mutate } from 'swr';

export const getWishlist = async () => {
    return useSWR('/action/wishlist/getWishlist', fetchApiHub);
}

export const addToWishlist = async ({ sku, count = 1 }: { sku: string; count?: number }) => {
    fetchApiHub('/action/wishlist/addToWishlist', { method: 'POST' }, { variant: sku, count });
    mutate('/action/wishlist/getWishlist');
}

export const removeLineItem = async (lineItemId: string) => {
    fetchApiHub('/action/wishlist/removeLineItem', { method: 'DELETE' }, { lineItem: { id: lineItemId } });
    mutate('/action/wishlist/getWishlist');
}

export const updateLineItem = async ({ lineItemId, count = 1 }: { lineItemId: string; count?: number }) => {
    fetchApiHub('/action/wishlist/updateLineItemCount', { method: 'PUT' }, { lineItem: { id: lineItemId }, count });
    mutate('/action/wishlist/getWishlist');
}
