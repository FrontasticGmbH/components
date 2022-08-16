import React from 'react';
import { LineItem } from '@Types/wishlist/LineItem';
import { Variant } from '@Types/wishlist/Variant';
import { Wishlist } from '@Types/wishlist/Wishlist';
import { useFormat } from 'helpers/hooks/useFormat';
import { Reference } from 'helpers/reference';
import EmptyWishlist from './empty_wishlist';
import List from './list';

export interface Props {
  pageTitle?: string;
  emptyStateImage?: { media: any } | any;
  emptyStateTitle?: string;
  emptyStateSubtitle?: string;
  emptyStateCTALabel?: string;
  emptyStateCTALink?: Reference;
  items?: Wishlist;
  removeLineItems: (item: LineItem) => Promise<void>;
  addToCart: (variant: Variant) => Promise<void>;
}

const WishList: React.FC<Props> = ({
  pageTitle,
  emptyStateImage,
  emptyStateTitle,
  emptyStateSubtitle,
  emptyStateCTALabel,
  emptyStateCTALink,
  items,
  removeLineItems,
  addToCart,
}) => {
  const { formatMessage: formatWishlistMessage } = useFormat({ name: 'wishlist' });

  if (!items?.lineItems?.length)
    return (
      <EmptyWishlist
        pageTitle={pageTitle}
        title={emptyStateTitle}
        subtitle={emptyStateSubtitle}
        ctaLabel={emptyStateCTALabel}
        ctaLink={emptyStateCTALink}
        image={emptyStateImage}
      />
    );

  return (
    <main className="mx-auto w-full pb-12">
      <h1 className="py-6 text-center text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        {formatWishlistMessage({ id: 'wishlist', defaultMessage: 'Wishlist' })}
      </h1>
      {items?.lineItems && <List items={items.lineItems} removeLineItems={removeLineItems} addToCart={addToCart} />}
    </main>
  );
};

export default WishList;
