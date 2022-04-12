import React, { Fragment, useState } from 'react';
import Image from '../../../frontastic/lib/image';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react';
import { MenuIcon } from '@heroicons/react/outline';
import { Reference, ReferenceLink } from '../../../helpers/Reference';
import { headerNavigation } from '../../../components/mockData';
import HeaderMenu from './header-menu';
import WishListButton from './wishlist-button';
import CartButton from './cart-button';
import AccountButton from './account-button';
import SearchButton from './search-button';
import MegaMenuContent from './mega-menu-content';
import Typography from 'components/typography';

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
    <div className="fixed-screen-width lg:relative-width bg-white">
      {/* Mobile menu */}
      <HeaderMenu open={open} setOpen={setOpen} links={links} navigation={headerNavigation} />

      <header className="relative bg-white">
        {tagline && (
          <p className="flex items-center justify-center bg-[#25304D] px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
            <Typography>{tagline}</Typography>
          </p>
        )}

        <nav aria-label="Top" className="mx-auto max-w-full border-b border-gray-200 px-4 sm:px-6 lg:px-8">
          {/* Secondary navigation */}
          <div>
            <div className="flex h-16 items-center justify-between">
              {/* Logo */}
              <ReferenceLink target={logoLink} className="flex">
                <span className="sr-only">Catwalk</span>
                <div className="w-[60px] pr-3 sm:w-[100px] sm:pr-7">
                  <Image
                    media={logo.media ? logo.media : { media: '' }}
                    src={!logo.media ? logo : ''}
                    width={100}
                    height={45}
                    className="h-7 w-auto sm:h-10"
                    alt="Logo"
                  />
                </div>
              </ReferenceLink>

              <div className="flex flex-1 items-center lg:hidden">
                <button
                  type="button"
                  className="-ml-2 rounded-md bg-white p-2 text-[#25304D]"
                  onClick={() => setOpen(!open)}
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Mega menus */}
              <Popover.Group className="hidden lg:block lg:flex-1 lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {headerNavigation.categories.map((category, categoryIdx) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
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
                      className="text-md flex items-center font-medium text-[#25304D] hover:text-[#192038]"
                    >
                      <Typography>{link.name}</Typography>
                    </ReferenceLink>
                  ))}
                </div>
              </Popover.Group>

              <div className="flex flex-1 items-center justify-end">
                <div className="flex items-center">
                  <SearchButton />

                  <AccountButton accountLink={accountLink} />

                  <span className="mx-4 h-6 w-px bg-gray-200 lg:mx-4" aria-hidden="true" />

                  <WishListButton wishlistItemCount={wishlistItemCount} wishlistLink={wishlistLink} />

                  <CartButton cartItemCount={cartItemCount} cartLink={cartLink} />
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
