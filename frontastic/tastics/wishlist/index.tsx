import React from 'react';
import { LineItem } from '@Types/wishlist/LineItem';
import WishList from 'components/commercetools-ui/wishlist';
import { useWishlist } from 'frontastic/provider';

const WishlistTastic = ({ data }) => {
  const { data: wishlist, removeLineItem } = useWishlist();

  const removeLineItems = async (item: LineItem) => {
    await removeLineItem(item.lineItemId);
  };

  return (
    <WishList
      pageTitle={data.pageTitle}
      emptyStateImage={data.emptyStateImage}
      emptyStateTitle={data.emptyStateTitle}
      emptyStateSubtitle={data.emptyStateSubtitle}
      emptyStateCTALabel={data.emptyStateCTALabel}
      emptyStateCTALink={data.emptyStateCTALink}
      items={wishlist}
      removeLineItems={removeLineItems}
    />
  );
};

export default WishlistTastic;
