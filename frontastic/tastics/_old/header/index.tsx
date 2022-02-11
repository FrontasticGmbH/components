import React from 'react';

import Header from 'components/header';

const HeaderTastic = ({ data }) => {
  console.log('data HeaderTastic', data);

  return (
    <Header
      topCategories={data.topCategories}
      logo={data.logo}
      goToCartPage={() => {
        console.log('go to cart');
      }}
      goToWishlistPage={() => {
        console.log('go to wishlist');
      }}
      goToProfilePage={() => {
        console.log('go to profile');
      }}
    />
  );
};

export default HeaderTastic;
