import React, { Fragment, useState } from 'react';
import { Popover, Transition } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';
import LanguageSwitcher from 'components/frontastic-ui/language-switcher';
import Typography from 'components/frontastic-ui/typography';
import { headerNavigation } from 'components/mockData';
import { Reference, ReferenceLink } from 'helpers/reference';
import Image from 'frontastic/lib/image';
import AccountButton from './account-button';
import CartButton from './cart-button';
import HeaderMenu from './header-menu';
import MegaMenuContent from './mega-menu-content';
import SearchButton from './search-button';
import WishListButton from './wishlist-button';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export interface Link {
  name: string;
  reference: Reference;
}

export interface HeaderProps {
  tagline?: string;
  links: Link[];
  cartItemCount: number;
  wishlistItemCount?: number;
  logo: { media: any } | any;
  logoLink: Reference;
  searchLink: Reference;
  accountLink: Reference;
  wishlistLink?: Reference;
  cartLink: Reference;
}

const Header: React.FC<HeaderProps> = ({
  tagline,
  links,
  cartItemCount,
  wishlistItemCount,
  logo,
  logoLink,
  searchLink,
  accountLink,
  wishlistLink,
  cartLink,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white fixed-screen-width lg:relative-width">
      {/* Mobile menu */}
      <HeaderMenu open={open} setOpen={setOpen} links={links} navigation={headerNavigation} />

      <header className="relative bg-white">
        {tagline && (
          <p className="flex justify-center items-center px-4 text-sm font-medium text-white bg-primary-400 sm:px-6 lg:px-8">
            <Typography>{tagline}</Typography>
          </p>
        )}

        <nav aria-label="Top" className="px-6 mx-auto max-w-full border-b border-gray-200 lg:px-8">
          {/* Secondary navigation */}
          <div>
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <ReferenceLink target={logoLink} className="flex">
                <span className="sr-only">Catwalk</span>
                <div className="pr-3 w-[60px] sm:pr-7 sm:w-[100px]">
                  <Image
                    media={logo.media ? logo.media : { media: '' }}
                    src={!logo.media ? logo : ''}
                    width={100}
                    height={45}
                    className="w-auto h-7 sm:h-10"
                    alt="Logo"
                  />
                </div>
              </ReferenceLink>

              <div className="flex flex-1 items-center lg:hidden">
                <button
                  type="button"
                  className="p-2 -ml-2 text-primary-400 bg-white rounded-md"
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="w-6 h-6" aria-hidden="true" />
                </button>
              </div>

              {/* Mega menus */}
              <Popover.Group className="hidden lg:block lg:flex-1 lg:self-stretch">
                <div className="flex space-x-8 h-full">
                  {headerNavigation.categories.map((category, categoryIdx) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="flex relative">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-indigo-600 text-indigo-600'
                                  : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out',
                              )}
                            >
                              <Typography>{category.name}</Typography>
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full z-10 text-gray-500 sm:text-sm">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <MegaMenuContent category={category} categoryIdx={categoryIdx} />
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {links.map((link, id) => (
                    <ReferenceLink
                      key={id}
                      target={link.reference}
                      className="flex items-center font-medium text-primary-400 hover:text-primary-500 text-md"
                    >
                      <Typography>{link.name}</Typography>
                    </ReferenceLink>
                  ))}
                </div>
              </Popover.Group>

              <div className="flex flex-1 justify-end items-center">
                <div className="flex items-center">
                  <SearchButton />

                  <AccountButton accountLink={accountLink} />

                  <span className="mx-4 w-px h-6 bg-gray-200 lg:mx-4" aria-hidden="true" />

                  <WishListButton wishlistItemCount={wishlistItemCount} wishlistLink={wishlistLink} />

                  <CartButton cartItemCount={cartItemCount} cartLink={cartLink} />

                  <span className="mx-1 w-px h-6 bg-gray-200 lg:mx-6" aria-hidden="true" />

                  <LanguageSwitcher />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
