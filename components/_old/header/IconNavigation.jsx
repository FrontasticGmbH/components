import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import IconButton from 'components/button/IconButton';
import Badge from 'components/badge';

import CartIcon from 'public/icons/tailwind-icons/icon-cart.svg';
import WishlistIcon from 'public/icons/tailwind-icons/icon-heart.svg';
import SearchIcon from 'public/icons/tailwind-icons/icon-search.svg';
import MyProfile from 'public/icons/tailwind-icons/icon-user.svg';

import SearchForm from './SearchForm';

const IconNavigation = ({
  variant = '',
  cartItemsCount,
  goToCartPage,
  wishListLineItemsCount,
  goToWishlistPage,
  goToProfilePage,
  onSearchToggle,
  showSearch = false,
}) => {
  return (
    <div
      className={classnames({
        'flex justify-end text-2xl items-center': true,
        [variant]: true,
      })}
    >
      {showSearch ? (
        <SearchForm inputClassName="text-base" onCancelSearch={onSearchToggle} />
      ) : (
        <IconButton
          name="Search"
          variant="outline-none focus:outline-none"
          icon={<SearchIcon />}
          onClick={onSearchToggle}
        />
      )}

      <IconButton
        name="My Account"
        variant="hidden lg:block ml-6 outline-none focus:outline-none"
        icon={<MyProfile />}
        onClick={goToProfilePage}
      />

      <Badge count={wishListLineItemsCount} onClick={goToWishlistPage}>
        <IconButton name="Wishlist" variant="ml-6 outline-none focus:outline-none" icon={<WishlistIcon />} />
      </Badge>

      <Badge count={cartItemsCount} onClick={goToCartPage}>
        <IconButton name="Cart" variant="ml-6 outline-none focus:outline-none" icon={<CartIcon />} />
      </Badge>
    </div>
  );
};

export default IconNavigation;
