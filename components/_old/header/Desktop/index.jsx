import React, { useState, useRef } from 'react';

import Image from 'frontastic/lib/image';
import FullBleedWrapper from 'components/layout/full-bleed-wrapper';
import TopCategories from './TopCategories';
import DesktopMenu from './Navigation';
import NavigationExpansionPanel from './NavigationExpansionPanel';
import IconNavigation from '../IconNavigation';
// import LanguageSelector from 'components/language-switcher';

const Desktop = ({
  topCategories,
  logo,
  currentTopCategory,
  handleSelectTopCategory,
  navPath,
  onSelectNavItem,
  cartItemsCount,
  wishListLineItemsCount,
  goToCartPage,
  goToWishlistPage,
  goToProfilePage,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [hoveredMenuItem, setHoveredMenuItem] = useState(undefined);

  const ref = useRef(null);

  const currentTree = topCategories[currentTopCategory].tree;

  const handleClick = (e, item) => {
    if (item && item.length > 0) {
      e.preventDefault();
      return onSelectNavItem(item);
    }
  };

  /* eslint-disable arrow-body-style */
  const handleSearchToggle = () => setIsSearch(!isSearch);

  console.log('LOGO', logo);

  return (
    <FullBleedWrapper className="lg:block">
      <div className="px-4 sm:px-8 lg:px-auto flex justify-between h-16 o-wrapper">
        <div className="inline-flex">
          {logo && (
            <a className="self-center w-32 mr-3" ref={ref} href={`/`}>
              <Image media={logo.media} width={117} height={28} alt="Logo" />
            </a>
          )}
          <TopCategories
            topCategories={topCategories}
            currentTopCategory={currentTopCategory}
            handleClick={(e, i) => {
              // e.preventDefault()
              handleSelectTopCategory(i);
            }}
          />
        </div>
        <div className="flex">
          {/* <LanguageSelector className="mr-4 bg-background-primary" /> */}
          <IconNavigation
            cartItemsCount={cartItemsCount}
            goToCartPage={goToCartPage}
            wishListLineItemsCount={wishListLineItemsCount}
            goToWishlistPage={goToWishlistPage}
            goToProfilePage={goToProfilePage}
            showSearch={isSearch}
            onSearchToggle={handleSearchToggle}
          />
        </div>
      </div>

      <div className="px-4 sm:px-8 lg:px-auto border-t border-solid border-neutral-200">
        <div className="o-wrapper">
          <div
            className="relative col-span-2"
            onMouseLeave={() => {
              setIsExpanded(false);
            }}
          >
            <DesktopMenu
              currentTree={currentTree}
              handleClick={handleClick}
              onHoverItem={(item) => {
                setHoveredMenuItem(item);
                setIsExpanded(item.children && item.children.length > 0);
              }}
            />

            <NavigationExpansionPanel
              expanded={isExpanded}
              item={hoveredMenuItem}
              navPath={navPath}
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>
    </FullBleedWrapper>
  );
};

export default Desktop;
