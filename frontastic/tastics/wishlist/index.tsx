import React from 'react';
import { LineItem } from '@Types/wishlist/LineItem';
import WishList from 'components/frontastic-ui/wishlist';
import { useWishlist } from 'frontastic/provider';

const WishlistTastic = () => {
  const { data } = useWishlist();
  const { removeLineItem } = useWishlist();

  const removeLineItems = async (item: LineItem) => {
    await removeLineItem(item.lineItemId);
  };

  return <WishList items={data} removeLineItems={removeLineItems} />;
};

export default WishlistTastic;
