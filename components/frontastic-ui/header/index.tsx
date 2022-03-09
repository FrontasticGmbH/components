import React, { Fragment, useState } from 'react';
import Image from 'frontastic/lib/image';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react';
import { MenuIcon, ShoppingCartIcon, UserIcon, XIcon } from '@heroicons/react/outline';
import { Reference, ReferenceLink } from 'helpers/Reference';

const navigation = {
  categories: [
    /*{
      name: 'Women',
      featured: [
        { name: 'Sleep', href: '#' },
        { name: 'Swimwear', href: '#' },
        { name: 'Underwear', href: '#' },
      ],
      collection: [
        { name: 'Everything', href: '#' },
        { name: 'Core', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Sale', href: '#' },
      ],
      categories: [
        { name: 'Basic Tees', href: '#' },
        { name: 'Artwork Tees', href: '#' },
        { name: 'Bottoms', href: '#' },
        { name: 'Underwear', href: '#' },
        { name: 'Accessories', href: '#' },
      ],
      brands: [
        { name: 'Full Nelson', href: '#' },
        { name: 'My Way', href: '#' },
        { name: 'Re-Arranged', href: '#' },
        { name: 'Counterfeit', href: '#' },
        { name: 'Significant Other', href: '#' },
      ],
    },
    {
      name: 'Men',
      featured: [
        { name: 'Casual', href: '#' },
        { name: 'Boxers', href: '#' },
        { name: 'Outdoor', href: '#' },
      ],
      collection: [
        { name: 'Everything', href: '#' },
        { name: 'Core', href: '#' },
        { name: 'New Arrivals', href: '#' },
        { name: 'Sale', href: '#' },
      ],
      categories: [
        { name: 'Artwork Tees', href: '#' },
        { name: 'Pants', href: '#' },
        { name: 'Accessories', href: '#' },
        { name: 'Boxers', href: '#' },
        { name: 'Basic Tees', href: '#' },
      ],
      brands: [
        { name: 'Significant Other', href: '#' },
        { name: 'My Way', href: '#' },
        { name: 'Counterfeit', href: '#' },
        { name: 'Re-Arranged', href: '#' },
        { name: 'Full Nelson', href: '#' },
      ],
    },*/
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

interface Link {
  name: string;
  reference: Reference;
}

interface Props {
  tagline?: string;
  links: Link[];
  cartItemCount: number;
  logo: {
    media: any;
  };
  logoLink: Reference;
  searchLink: Reference;
  accountLink: Reference;
  cartLink: Reference;
}

const Header: React.FC<Props> = ({
  tagline,
  links,
  cartItemCount,
  logo,
  logoLink,
  searchLink,
  accountLink,
  cartLink,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white fixed-screen-width lg:relative-width">
      {/* Mobile menu */}
      <Transition.Root show={open} as={Fragment}>
        <Dialog className="fixed inset-0 flex z-40 lg:hidden" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
              <div className="px-4 pt-5 pb-2 flex">
                <button
                  type="button"
                  className="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400"
                  onClick={() => setOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              {/* Links */}
              <Tab.Group>
                <div className="mt-2 border-b border-gray-200">
                  <Tab.List className="-mb-px flex px-4 space-x-8">
                    {navigation.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent',
                            'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium',
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  {navigation.categories.map((category, categoryIdx) => (
                    <Tab.Panel key={category.name} className="px-4 pt-10 pb-6 space-y-12">
                      <div className="grid grid-cols-1 items-start gap-y-10 gap-x-6">
                        <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                          <div>
                            <p id={`mobile-featured-heading-${categoryIdx}`} className="font-medium text-gray-900">
                              Featured
                            </p>
                            <ul
                              role="list"
                              aria-labelledby={`mobile-featured-heading-${categoryIdx}`}
                              className="mt-6 space-y-6"
                            >
                              {category.featured.map((item) => (
                                <li key={item.name} className="flex">
                                  <a href={item.href} className="text-gray-500">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <p id="mobile-categories-heading" className="font-medium text-gray-900">
                              Categories
                            </p>
                            <ul role="list" aria-labelledby="mobile-categories-heading" className="mt-6 space-y-6">
                              {category.categories.map((item) => (
                                <li key={item.name} className="flex">
                                  <a href={item.href} className="text-gray-500">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 gap-y-10 gap-x-6">
                          <div>
                            <p id="mobile-collection-heading" className="font-medium text-gray-900">
                              Collection
                            </p>
                            <ul role="list" aria-labelledby="mobile-collection-heading" className="mt-6 space-y-6">
                              {category.collection.map((item) => (
                                <li key={item.name} className="flex">
                                  <a href={item.href} className="text-gray-500">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <p id="mobile-brand-heading" className="font-medium text-gray-900">
                              Brands
                            </p>
                            <ul role="list" aria-labelledby="mobile-brand-heading" className="mt-6 space-y-6">
                              {category.brands.map((item) => (
                                <li key={item.name} className="flex">
                                  <a href={item.href} className="text-gray-500">
                                    {item.name}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>

              <div className="border-t border-gray-200 py-6 px-4 space-y-6">
                {links.map((link) => (
                  <div key={link.name} className="flow-root">
                    <ReferenceLink target={link.reference} className="-m-2 p-2 block font-medium text-gray-900">
                      {link.name}
                    </ReferenceLink>
                  </div>
                ))}
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>

      <header className="relative bg-white">
        {tagline && (
          <p className="bg-[#25304D] h-[4px] flex items-center justify-center text-sm font-medium text-white px-4 sm:px-6 lg:px-8">
            {tagline}
          </p>
        )}

        <nav aria-label="Top" className="max-w-full border-b border-gray-200 mx-auto px-4 sm:px-6 lg:px-8">

          {/* Secondary navigation */}
          <div>
            <div className="h-16 flex items-center justify-between">
              {/* Logo */}
              <ReferenceLink target={logoLink} className="flex">
                <span className="sr-only">Catwalk</span>
                <div className="w-[60px] sm:w-[100px] pr-3 sm:pr-7">
                  <Image media={logo.media} width={100} height={45} className="h-7 sm:h-10 w-auto" alt="Logo" />
                </div>
              </ReferenceLink>
              <div className="flex-1 flex items-center lg:hidden">
                <button
                  type="button"
                  className="-ml-2 bg-white p-2 rounded-md text-[#25304D]"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </button>


              </div>


              {/* Mega menus */}
              <Popover.Group className="hidden lg:flex-1 lg:block lg:self-stretch">
                <div className="h-full flex space-x-8">
                  {navigation.categories.map((category, categoryIdx) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? 'border-indigo-600 text-indigo-600'
                                  : 'border-transparent text-gray-700 hover:text-gray-800',
                                'relative z-10 flex items-center transition-colors ease-out duration-200 text-sm font-medium border-b-2 -mb-px pt-px',
                              )}
                            >
                              {category.name}
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
                            <Popover.Panel className="absolute top-full inset-x-0 text-gray-500 sm:text-sm z-10">
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div className="absolute inset-0 top-1/2 bg-white shadow" aria-hidden="true" />

                              <div className="relative bg-white">
                                <div className="max-w-7xl mx-auto px-8">
                                  <div className="grid grid-cols-2 items-start gap-y-10 gap-x-8 pt-10 pb-12">
                                    <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                                      <div>
                                        <p
                                          id={`desktop-featured-heading-${categoryIdx}`}
                                          className="font-medium text-gray-900"
                                        >
                                          Featured
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby={`desktop-featured-heading-${categoryIdx}`}
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {category.featured.map((item) => (
                                            <li key={item.name} className="flex">
                                              <a href={item.href} className="hover:text-gray-800">
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                      <div>
                                        <p id="desktop-categories-heading" className="font-medium text-gray-900">
                                          Categories
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby="desktop-categories-heading"
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {category.categories.map((item) => (
                                            <li key={item.name} className="flex">
                                              <a href={item.href} className="hover:text-gray-800">
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-y-10 gap-x-8">
                                      <div>
                                        <p id="desktop-collection-heading" className="font-medium text-gray-900">
                                          Collection
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby="desktop-collection-heading"
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {category.collection.map((item) => (
                                            <li key={item.name} className="flex">
                                              <a href={item.href} className="hover:text-gray-800">
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>

                                      <div>
                                        <p id="desktop-brand-heading" className="font-medium text-gray-900">
                                          Brands
                                        </p>
                                        <ul
                                          role="list"
                                          aria-labelledby="desktop-brand-heading"
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {category.brands.map((item) => (
                                            <li key={item.name} className="flex">
                                              <a href={item.href} className="hover:text-gray-800">
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {links.map((link) => (
                    <ReferenceLink
                      key={link.name}
                      target={link.reference}
                      className="flex items-center text-md font-medium text-[#25304D] hover:text-[#192038]"
                    >
                      {link.name}
                    </ReferenceLink>
                  ))}
                </div>
              </Popover.Group>

              <div className="flex-1 flex items-center justify-end">
                <div className="flex items-center lg:ml-8">
                  <div className="flex space-x-8">
                    <div className="flex">
                      <ReferenceLink target={accountLink} className="-m-2 p-2 text-[#25304D] hover:text-[#192038]">
                        <span className="sr-only">Account</span>
                        <UserIcon className="w-6 h-6" aria-hidden="true" />
                      </ReferenceLink>
                    </div>
                  </div>

                  <span className="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true" />

                  <div className="flow-root">
                    <ReferenceLink target={cartLink} className="relative group -m-2 p-2 flex items-center">
                      <ShoppingCartIcon
                        className="flex-shrink-0 h-6 w-6 text-[#25304D] group-hover:text-[#192038]"
                        aria-hidden="true"
                      />
                      {cartItemCount > 0 && (
                        <>
                          <span className="absolute top-0 -right-[5px] w-4 h-4 rounded-full bg-[#CE3E72] hover:bg-[#B22C5D]">
                            <span className="w-full h-full flex items-center justify-center text-[12px] font-small text-white group-hover:text-white">
                              {cartItemCount}
                            </span>
                          </span>
                          <span className="sr-only">items in cart, view bag</span>
                        </>
                      )}
                    </ReferenceLink>
                  </div>
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
