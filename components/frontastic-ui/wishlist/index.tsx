import React from 'react';
import { LineItem } from '@Types/wishlist/LineItem';
import { Wishlist } from '@Types/wishlist/Wishlist';
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
    <div className="mt-10 bg-white px-4 sm:px-6 lg:px-8">
      {items?.lineItems && <List items={items.lineItems} removeLineItems={removeLineItems} />}
    </div>
  );
};

export default WishList;
