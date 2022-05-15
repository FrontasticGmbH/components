import React from 'react';
import { LineItem } from '@Types/wishlist/LineItem';
import WishList from 'components/frontastic-ui/wishlist';
import { useWishlist } from 'frontastic/provider';

const WishlistTastic = () => {
  const { data } = useWishlist();
  const { removeLineItem } = useWishlist();

  const removeLineItems = async (item: LineItem) => {
    let itemsToRemove = data.lineItems.filter((lineItem) => lineItem.name === item.name);
    for await (const lineItem of itemsToRemove) {
      await removeLineItem(lineItem.lineItemId);
    }
  };

  return <WishList items={data} removeLineItems={removeLineItems} />;
};

export default WishlistTastic;
