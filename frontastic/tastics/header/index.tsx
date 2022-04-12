import React from 'react';
import Header from 'components/frontastic-ui/header';
import { useCart, useWishlist } from '../../provider';
import { calculateCartCount } from '../../../helpers/utils/calculateCartCount';

const HeaderTastic = ({ data }) => {
  const { data: cart } = useCart();
  const { data: wishlist } = useWishlist();

  return (
    <Header
      tagline={data.tagline}
      links={data.links}
      cartItemCount={calculateCartCount(cart?.lineItems) || 0}
      wishlistItemCount={wishlist?.lineItems?.length || 0}
      logo={data.logo}
      logoLink={data.logoLink}
      searchLink={data.searchLink}
      accountLink={data.accountLink}
      wishlistLink={data.wishlistLink}
      cartLink={data.cartLink}
    />
  );
};

export default HeaderTastic;
