import useHash from 'helpers/hooks/useHash';
import React, { useState } from 'react';
import Addresses from '../addresses';
import General from '../general';
import Security from '../security';
import classNames from 'classnames';
import OrdersHistory from '../orders';
import { orders } from '../../../../../mockData';

const Sections = () => {
  const [selectedTab, setSelectedTab] = useState('#');

  const tabs = [
    { name: 'General', href: '#' },
    { name: 'Addresses', href: '#addresses' },
    { name: 'Orders', href: '#orders' },
    { name: 'Security', href: '#security' },
  ];

  return (
    <div className="px-8">
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
                  <button
                    key={tab.name}
                    onClick={() => setSelectedTab(tab.href)}
                    className={classNames(
                      tab.href === selectedTab
                        ? 'border-pink-400 text-pink-400'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                      'whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium',
                    )}
                  >
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>
          </div>
          {selectedTab === tabs[0].href ? (
            <General />
          ) : selectedTab === tabs[1].href ? (
            <Addresses />
          ) : selectedTab === tabs[2].href ? (
            <OrdersHistory />
          ) : (
            <Security />
          )}
        </div>
      </div>
    </div>
  );
};

export default Sections;
