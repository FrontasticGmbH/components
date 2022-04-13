import React from 'react';
import { LineItem } from '../../../../types/wishlist/LineItem';
import { Wishlist } from '../../../../types/wishlist/Wishlist';
import EmptyWishlist from './empty_wishlist';
import List from './list';

export interface Props {
  items?: Wishlist;
  removeLineItems: (item: LineItem) => Promise<void>;
}

const WishList: React.FC<Props> = ({ items, removeLineItems }) => {
  return items?.lineItems?.length > 0 ? (
    <div className="mt-10 bg-white px-4 sm:px-6 lg:px-8">
      {items?.lineItems && <List items={items.lineItems} removeLineItems={removeLineItems} />}
    </div>
  ) : (
    <EmptyWishlist />
  );
};

export default WishList;
