import React from 'react';
import { useFormat } from 'helpers/hooks/useFormat';
import useHash from 'helpers/hooks/useHash';
import { Reference } from 'helpers/reference';
import { AddressesSection, GeneralSection, SecuritySection, OrdersHistorySection } from './sections/exporter';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export interface AccountDetailsProps {
  loginLink?: Reference;
}

const AccountDetails: React.FC<AccountDetailsProps> = () => {
  //i18n messages
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });

  //current window hash
  const hash = useHash();

  //tabs
  const tabs = [
    { name: formatAccountMessage({ id: 'general', defaultMessage: 'General' }), href: '#' },
    { name: formatAccountMessage({ id: 'my.addresses', defaultMessage: 'My addresses' }), href: '#addresses' },
    { name: formatAccountMessage({ id: 'orders.history', defaultMessage: 'Order history' }), href: '#orders' },
    { name: formatAccountMessage({ id: 'security', defaultMessage: 'Security' }), href: '#security' },
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
    '#orders': OrdersHistorySection,
  };

  //current rendered content
  const Content = mapping[hash];

  return (
    <>
      <div>
        {/* Content area */}
        <div>
          <div className="w-full pt-10 pb-16">
            <div className="w-full">
              <h1 className="text-center text-3xl font-extrabold text-gray-900 sm:text-left">
                {formatAccountMessage({ id: 'settings', defaultMessage: 'Settings' })}
              </h1>
            </div>
            <div className="w-full">
              <div className="py-6 lg:flex lg:gap-16">
                {/* Tabs */}
                <div className="lg:hidden">
                  <label htmlFor="selected-tab" className="sr-only">
                    Select a tab
                  </label>
                  <select
                    id="selected-tab"
                    name="selected-tab"
                    className="select-accent mt-1 block w-full rounded-sm border-gray-300 stroke-accent-400 py-2 pr-10 pl-3 text-base text-accent-400 focus:border-accent-400 focus:outline-none focus:ring-accent-400 sm:text-sm"
                    value={tabs.find((tab) => tab.href === hash).href}
                    onChange={handleTabChange}
                  >
                    {tabs.map((tab) => (
                      <option key={tab.name} value={tab.href} className="text-gray-600">
                        {tab.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="hidden w-[20%] pt-10 lg:block">
                  <div>
                    <nav className="-mb-px flex flex-col space-y-2">
                      {tabs.map((tab) => (
                        <a
                          key={tab.name}
                          href={tab.href}
                          className={classNames(
                            tab.href === hash ? 'bg-neutral-200 text-accent-400' : 'border-transparent text-gray-500',
                            'whitespace-nowrap rounded-sm py-4 px-3 text-sm',
                          )}
                        >
                          {tab.name}
                        </a>
                      ))}
                    </nav>
                  </div>
                </div>

                {Content && (
                  <div className="grow">
                    <Content />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountDetails;
