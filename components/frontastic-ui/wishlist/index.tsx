import { useWishlist } from 'frontastic';
import useMediaQuery from 'helpers/hooks/useMediaQuery';
import React from 'react';
import { Wishlist } from '../../../../types/wishlist/Wishlist';
import EmptyWishlist from './empty_wishlist';
import List from './list';

const WishList: React.FC = ({ }) => {

  const { data } = useWishlist();

  return data?.lineItems?.length > 0 ? (
    <div className="mt-10 bg-white px-4 sm:px-6 lg:px-8">{data?.lineItems && <List items={data.lineItems} />}</div>
  ) : (
    <EmptyWishlist />
  );
}

export default WishList
