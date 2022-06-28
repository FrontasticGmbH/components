import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { UserIcon } from '@heroicons/react/outline';
import { Account } from '@Types/account/Account';
import { useFormat } from 'helpers/hooks/useFormat';
import { Reference, ReferenceLink } from 'helpers/reference';
import { logout } from 'frontastic/actions/account';

interface AccountButtonProps {
  accountLink: Reference;
  account: Account;
}

const AccountButton: React.FC<AccountButtonProps> = ({ accountLink, account }) => {
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="relative ml-4 flex items-center">
      {account ? (
        <Menu>
          <div className="relative flex space-x-8">
            <Menu.Button className="flex">
              <span className="sr-only">Account</span>
              <UserIcon className="h-6 w-6 dark:text-light-100" aria-hidden="true" />
            </Menu.Button>
            <div className="absolute -right-[1px] -bottom-[2px] h-[9px] w-[9px] rounded-md bg-green-700"></div>
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
            <Menu.Items className="absolute right-0 top-6 z-50 mt-2 w-fit origin-top-right rounded-md bg-white shadow-sm ring-1 ring-black/5 focus:outline-none dark:bg-primary-400 dark:shadow-3xl">
              <div className="py-1 ">
                <Menu.Item>
                  <ReferenceLink
                    target={accountLink}
                    className={`block w-36 cursor-pointer py-2 px-4 ${
                      account ? 'text-left' : 'text-center'
                    }  text-sm hover:bg-gray-100 dark:bg-primary-400 dark:text-light-100`}
                  >
                    {account.firstName
                      ? formatAccountMessage({ id: 'hello', defaultMessage: 'Hi, ' }) + account.firstName
                      : account.lastName
                      ? formatAccountMessage({ id: 'hello', defaultMessage: 'Hi, ' }) + account.lastName
                      : formatAccountMessage({ id: 'hello', defaultMessage: 'Hi, ' }) +
                        formatAccountMessage({ id: 'user', defaultMessage: 'User ' })}
                  </ReferenceLink>
                </Menu.Item>
                {account && (
                  <Menu.Item>
                    <button
                      onClick={handleLogout}
                      className="block w-36 cursor-pointer py-2 px-4 text-left text-sm hover:bg-gray-100 dark:bg-primary-400 dark:text-light-100"
                    >
                      {formatAccountMessage({ id: 'signout', defaultMessage: 'Logout' })}
                    </button>
                  </Menu.Item>
                )}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      ) : (
        <div className="flex space-x-8">
          <div className="flex">
            <ReferenceLink
              target={accountLink}
              className="-m-2 p-2 text-primary-400 hover:text-primary-500 dark:text-light-100"
            >
              <span className="sr-only">Account</span>
              <UserIcon className="h-6 w-6" aria-hidden="true" />
            </ReferenceLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default AccountButton;
