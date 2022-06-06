import React, { useState } from 'react';
import classNames from 'classnames';
import { orders } from 'components/mockData';
import { useFormat } from 'helpers/hooks/useFormat';
import Addresses from '../addresses';
import General from '../general';
import OrdersHistory from '../orders';
import Security from '../security';

const Sections = () => {
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });
  const [selectedTab, setSelectedTab] = useState('#');

  const tabs = [
    { name: formatAccountMessage({ id: 'general', defaultMessage: 'General' }), href: '#' },
    { name: formatAccountMessage({ id: 'addresses', defaultMessage: 'Addresses' }), href: '#addresses' },
    { name: formatAccountMessage({ id: 'orders', defaultMessage: 'Orders' }), href: '#orders' },
    { name: formatAccountMessage({ id: 'security', defaultMessage: 'Security' }), href: '#security' },
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
              className="mt-1 block w-full rounded-md border-gray-300 py-2 pr-10 pl-3 text-base focus:border-accent-400 focus:outline-none focus:ring-accent-400 sm:text-sm"
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
                        ? 'border-accent-400 text-accent-400'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 dark:text-light-100',
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
