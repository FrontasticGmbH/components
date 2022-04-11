import React, { useCallback, useEffect, useState } from 'react';
import { useAccount } from 'frontastic';
import Redirect from 'helpers/Redirect';
import { Reference } from 'helpers/Reference';
import { AddressesSection, GeneralSection, SecuritySection } from './sections';
import useHash from 'helpers/hooks/useHash';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export interface AccountDetailsProps {
  loginLink?: Reference;
}

const AccountDetails: React.FC<AccountDetailsProps> = ({ loginLink }) => {
  //account data
  const { loggedIn } = useAccount();

  //current window hash
  const hash = useHash();

  //user not logged in
  if (!loggedIn) return <Redirect target={loginLink} />;

  //tabs
  const tabs = [
    { name: 'General', href: '#' },
    { name: 'Addresses', href: '#addresses' },
    { name: 'Orders', href: '#orders' },
    { name: 'Security', href: '#security' },
  ];

  //tabs change (mobile only)
  const handleTabChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    window.location.hash = e.target.value;
  };

  //tabs-content mapping
  const mapping = {
    '#': GeneralSection,
    '#addresses': AddressesSection,
    '#security': SecuritySection,
  };

  //current rendered content
  const Content = mapping[hash];

  return (
    <>
      <div>
        {/* Content area */}
        <div>
          <div className="mx-auto flex max-w-4xl flex-col md:px-8 xl:px-0">
            <main className="flex-1">
              <div className="relative mx-auto max-w-4xl md:px-8 xl:px-0">
                <div className="pt-10 pb-16">
                  <div className="px-4 sm:px-6 md:px-0">
                    <h1 className="text-3xl font-extrabold text-gray-900">Settings</h1>
                  </div>
                  <div className="px-4 sm:px-6 md:px-0">
                    <div className="py-6">
                      {/* Tabs */}
                      <div className="lg:hidden">
                        <label htmlFor="selected-tab" className="sr-only">
                          Select a tab
                        </label>
                        <select
                          id="selected-tab"
                          name="selected-tab"
                          className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-pink-400 focus:outline-none focus:ring-pink-400 sm:text-sm"
                          defaultValue={tabs.find((tab) => tab.href === hash).name}
                          onChange={handleTabChange}
                        >
                          {tabs.map((tab) => (
                            <option key={tab.name} value={tab.href}>
                              {tab.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="hidden lg:block">
                        <div className="border-b border-gray-200">
                          <nav className="-mb-px flex space-x-8">
                            {tabs.map((tab) => (
                              <a
                                key={tab.name}
                                href={tab.href}
                                className={classNames(
                                  tab.href === hash
                                    ? 'border-pink-400 text-pink-400'
                                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                  'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium',
                                )}
                              >
                                {tab.name}
                              </a>
                            ))}
                          </nav>
                        </div>
                      </div>
                      {Content && <Content />}
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
