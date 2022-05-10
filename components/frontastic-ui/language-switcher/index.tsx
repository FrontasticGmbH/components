import React, { Fragment } from 'react';
import NextLink from 'next/link';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import useMediaQuery from 'helpers/hooks/useMediaQuery';
import { mobile } from 'helpers/utils/screensizes';
import { i18n } from 'next-i18next.config';

const LanguageSwitcher: React.FC = () => {
  const [isLargerThanMobile] = useMediaQuery(mobile);

  const { locales } = i18n;

  if (!isLargerThanMobile) {
    return null;
  }

  return (
    <Menu as="div" className="inline-block relative text-left">
      <div>
        <Menu.Button className="inline-flex z-50 justify-center py-2 px-4 w-full text-sm font-medium text-gray-700 bg-white hover:bg-gray-100 rounded-md focus:outline-none">
          Language
          <ChevronDownIcon className="-mr-1 ml-2 w-5 h-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-50 mt-2 w-full bg-white rounded-md focus:outline-none ring-1 ring-black ring-opacity-5 shadow-lg origin-top-right">
          <div className="py-1">
            {locales.map((locale, index) => (
              <Menu.Item key={index}>
                <NextLink href="/" locale={locale}>
                  <a className="block py-2 px-4 text-sm text-center hover:bg-gray-100">{locale}</a>
                </NextLink>
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LanguageSwitcher;
