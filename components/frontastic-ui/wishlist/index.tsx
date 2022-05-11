import React from 'react';
import useMediaQuery from 'helpers/hooks/useMediaQuery';
import { mobile } from 'helpers/utils/screensizes';
import { LineItem } from '../../../../types/wishlist/LineItem';
import { Wishlist } from '../../../../types/wishlist/Wishlist';
import EmptyWishlist from './empty_wishlist';
import List from './list';

export interface Props {
  items?: Wishlist;
  removeLineItems: (item: LineItem) => Promise<void>;
}

const WishList: React.FC<Props> = ({ items, removeLineItems }) => {
  const [isLargerThanMobile] = useMediaQuery(mobile);

  if (items?.lineItems?.length <= 0) return <EmptyWishlist />;

  return (
    <div className="px-4 mt-10 bg-white sm:px-6 lg:px-8">
      {items?.lineItems && <List items={items.lineItems} removeLineItems={removeLineItems} />}
    </div>
  );
};

export default WishList;
