import { Wishlist } from '@Types/wishlist/Wishlist';

export interface UseWishlist {
  data?: Wishlist;
  addToWishlist: (sku: string, count?: number) => Promise<void>;
  removeLineItem: (lineItemId: string) => Promise<void>;
  updateLineItem: (lineItemId: string, count?: number) => Promise<void>;
}
