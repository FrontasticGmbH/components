import React, { useState, useRef } from 'react';

import MediaImage from 'frontastic/lib/image';
import FullBleedWrapper from 'components/layout/full-bleed-wrapper';

import Modal from './Modal';
import IconNavigation from '../IconNavigation';

import { ReactComponent as MenuOpen } from 'public/icons/tailwind-icons/icon-menu.svg';

import { useLevel } from '../mainMenuState';
import SearchForm from '../SearchForm';

const Mobile = ({
  topCategories,
  logo,
  currentTopCategory,
  handleSelectTopCategory,
  navPath,
  setNavPath,
  cartItemsCount,
  goToCartPage,
  wishListLineItemsCount,
  goToWishlistPage,
  goToProfilePage,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [level, setLevel] = useLevel(0);

  const ref = useRef(null);

  /* eslint-disable arrow-body-style */
  const handleSearchToggle = () => setIsSearch(!isSearch);

  if (!topCategories) {
    return null;
  }

  return (
    <>
      <FullBleedWrapper className="shadow-md">
        <div className="grid grid-cols-2 h-12 max-w-1240px m-center px-5">
          <div className="flex h-12">
            {/* extra h-12 is dirty but for some reason it wouldn't budge */}
            <MenuOpen
              className="self-center cursor-pointer text-2xl"
              onClick={() => {
                setIsOpen(true);
              }}
            />
            <a className="self-center max-w-124px w-full ml-3" ref={ref} href={window.location.origin}>
              <MediaImage media={logo} />
            </a>
          </div>
          <IconNavigation
            cartItemsCount={cartItemsCount}
            goToCartPage={goToCartPage}
            wishListLineItemsCount={wishListLineItemsCount}
            goToWishlistPage={goToWishlistPage}
            goToProfilePage={goToProfilePage}
            onSearchToggle={handleSearchToggle}
          />
        </div>
        {isSearch && (
          <div className="px-5 py-2">
            <SearchForm onCancelSearch={handleSearchToggle} />
          </div>
        )}
      </FullBleedWrapper>

      <Modal
        isOpen={isOpen}
        level={level}
        navPath={navPath}
        topCategories={topCategories}
        currentTopCategory={currentTopCategory}
        handleSelectTopCategory={(categoryId) => {
          setLevel(0);
          handleSelectTopCategory(categoryId);
        }}
        handleSelectNavItem={(item, toLevel) => {
          setLevel(toLevel + 1);
          setNavPath([...navPath, item]);
        }}
        handleGoBack={() => {
          setLevel(level - 1);
          setNavPath(navPath.slice(0, -1));
        }}
        onClose={() => {
          setIsOpen(false);
        }}
      />
    </>
  );
};

export default Mobile;
