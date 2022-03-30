import React, { Fragment, useState } from 'react';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react';
import { MenuIcon, ShoppingCartIcon, UserIcon, XIcon } from '@heroicons/react/outline';
import { Reference, ReferenceLink } from '../../../helpers/Reference';
import { Link } from './index';
import classNames from 'classnames';

interface HeaderMenuProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  navigation: any;
  links: Link[];
}

const HeaderMenu: React.FC<HeaderMenuProps> = ({ open, setOpen, navigation, links }) => {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog className="fixed inset-0 z-40 flex lg:hidden" onClose={setOpen}>
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
          <div className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
            <div className="flex px-4 pt-5 pb-2">
              <button
                type="button"
                className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                onClick={() => setOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>

            {/* Links */}
            <Tab.Group>
              <div className="mt-2 border-b border-gray-200">
                <Tab.List className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className={({ selected }) =>
                        classNames(
                          selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900',
                          'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium',
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
                  <Tab.Panel key={category.name} className="space-y-12 px-4 pt-10 pb-6">
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

            <div className="space-y-6 border-t border-gray-200 py-6 px-4">
              {links.map((link) => (
                <div key={link.name} className="flow-root">
                  <ReferenceLink target={link.reference} className="-m-2 block p-2 font-medium text-gray-900">
                    {link.name}
                  </ReferenceLink>
                </div>
              ))}
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition.Root>
  );
};

export default HeaderMenu;
