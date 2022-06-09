import React from 'react';
import { LineItem } from '@Types/wishlist/LineItem';
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
}) => {
  const { formatMessage: formatWishlistMessage } = useFormat({ name: 'wishlist' });

  if (items?.lineItems?.length <= 0)
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
    <main className="mx-auto max-w-2xl px-2 pt-20 pb-24 sm:px-4 lg:max-w-7xl lg:px-8">
      <h1 className="pb-12 text-center text-3xl font-extrabold tracking-tight text-gray-900 dark:text-light-100 sm:text-4xl">
        {formatWishlistMessage({ id: 'wishlist.items', defaultMessage: 'Wishlist Items' })}
      </h1>
      {items?.lineItems && <List items={items.lineItems} removeLineItems={removeLineItems} />}
    </main>
  );
};

export default WishList;
