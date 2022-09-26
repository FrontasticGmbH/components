import React from 'react';
import { LineItem } from '@Types/wishlist/LineItem';
import WishList from 'components/commercetools-ui/wishlist';
import { useCart, useWishlist } from 'frontastic/provider';
import { Variant } from '@Types/wishlist/Variant';

const WishlistTastic = ({ data }) => {
  const { data: wishlist, removeLineItem } = useWishlist();
  const { addItem } = useCart();

  const handleAddToCart = (variant: Variant): Promise<void> => {
    return addItem(variant, 1);
  };

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
      addToCart={handleAddToCart}
    />
  );
};

export default WishlistTastic;
