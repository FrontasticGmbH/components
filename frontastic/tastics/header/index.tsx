import React from 'react';
import Header from 'components/frontastic-ui/header';
import { useCart } from '../../lib/provider';

const HeaderTastic = ({ data }) => {
  const { data: cart } = useCart();

  return (
    <Header
      tagline={data.tagline}
      links={data.links}
      cartItemCount={cart?.lineItems?.length || 0}
      logo={data.logo}
      logoLink={data.logoLink}
      searchLink={data.searchLink}
      accountLink={data.accountLink}
      cartLink={data.cartLink}
    />
  );
};

export default HeaderTastic;
