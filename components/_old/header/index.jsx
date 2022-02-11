import React, { useState } from 'react';
// import Mobile from './Mobile';
import Desktop from './Desktop';
import { topCategoryType } from './types';
import { useCurrentTopCategory, useNavPath } from './mainMenuState';

const findChildren = (children, currentNodeId) => {
  return children.find((category) => {
    return category.nodeId === currentNodeId || (category.children && findChildren(category.children, currentNodeId));
  });
};

const getCurrentTopCategory = (topCategories, currentNodeId) => {
  let index = topCategories.findIndex((category, i) => {
    return (
      category.tree.nodeId === currentNodeId ||
      (category.tree.children && findChildren(category.tree.children, currentNodeId))
    );
  });

  if (index === -1) {
    return 0;
  } else {
    return index;
  }
};

const MainMenu = ({ topCategories, logo, goToCartPage, goToWishlistPage, goToProfilePage }) => {
  const currentNodeId = '';
  // const currentNodeId = useSelector((state) => {
  //   return state.app && state.app.route && state.app.route.parameters && state.app.route.parameters.nodeId;
  // });

  const [currentTopCategory, setCurrentTopCategory] = useCurrentTopCategory(
    getCurrentTopCategory(topCategories, currentNodeId),
  );
  const [navPath, setNavPath] = useNavPath([]);
  const deviceType = 'desktop';

  const handleSelectTopCategory = (categoryId) => {
    setNavPath([]);
    setCurrentTopCategory(categoryId);
  };

  const handleSelectNavItem = (item) => {
    setNavPath([...navPath, item]);
  };

  const { cartItemsCount, wishListLineItemsCount } = { cartItemsCount: 0, wishListLineItemsCount: 0 };
  // const { cartItemsCount, wishListLineItemsCount } = useSelector((state) => {
  //   const cartLineItems = state.cart?.cart?.data?.lineItems || [];
  //   const wishListLineItems = state.wishlist?.wishlist?.data?.lineItems || [];
  //   return {
  //     cartItemsCount: cartLineItems.reduce((accumulator, currentValue) => {
  //       return accumulator + currentValue.count;
  //     }, 0),
  //     wishListLineItemsCount: wishListLineItems.reduce((accumulator, currentValue) => {
  //       return accumulator + currentValue.count;
  //     }, 0),
  //   };
  // });

  if (!topCategories) {
    return null;
  }

  // For performance reasons we hide the mobile navigation on desktop and vice versa.
  if (deviceType === 'mobile') {
    return (
      <Mobile
        topCategories={topCategories}
        logo={logo}
        currentTopCategory={currentTopCategory}
        handleSelectTopCategory={handleSelectTopCategory}
        navPath={navPath}
        setNavPath={setNavPath}
        cartItemsCount={cartItemsCount}
        wishListLineItemsCount={wishListLineItemsCount}
        goToCartPage={goToCartPage}
        goToWishlistPage={goToWishlistPage}
        goToProfilePage={goToProfilePage}
      />
    );
  }

  return (
    <Desktop
      topCategories={topCategories}
      logo={logo}
      currentTopCategory={currentTopCategory}
      handleSelectTopCategory={handleSelectTopCategory}
      navPath={navPath}
      onSelectNavItem={handleSelectNavItem}
      cartItemsCount={cartItemsCount}
      wishListLineItemsCount={wishListLineItemsCount}
      goToCartPage={goToCartPage}
      goToWishlistPage={goToWishlistPage}
      goToProfilePage={goToProfilePage}
    />
  );
};

export default MainMenu;
