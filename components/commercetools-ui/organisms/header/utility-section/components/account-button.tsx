import React, { useContext, useMemo } from 'react';
import { Popover } from '@headlessui/react';
import { UserIcon } from '@heroicons/react/24/outline';
import Link from 'components/commercetools-ui/atoms/link';
import Typography from 'components/commercetools-ui/atoms/typography';
import AccountDropdown from 'components/commercetools-ui/organisms/account/account-atoms/account-dropdown';
import { AccountContext } from 'context/account';
import { useFormat } from 'helpers/hooks/useFormat';

const AccountButton = () => {
  const { account, loggedIn } = useContext(AccountContext);
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });
  const userName = useMemo(() => {
    return `${account?.salutation ?? formatAccountMessage({ id: 'hello', defaultMessage: 'Hi, ' })} ${
      account?.firstName ?? formatAccountMessage({ id: 'user', defaultMessage: 'User' })
    }`;
  }, [account?.firstName, account?.salutation, formatAccountMessage]);

  const title = account
    ? formatAccountMessage({ id: 'account', defaultMessage: 'Account' })
    : formatAccountMessage({ id: 'sign.in', defaultMessage: 'Login' });

  return (
    <div className="h-40">
      <Link link={account ? '/account' : '/login'} title={title} className="hidden md:flex lg:hidden">
        <UserIcon className="hidden h-fit w-28 text-gray-600 md:flex lg:hidden" />
      </Link>
      <Popover as="div" className="relative hidden h-fit lg:block">
        {() => (
          <>
            <Popover.Button title={title}>
              <div className="flex w-fit whitespace-nowrap">
                <div className="mr-8 hidden w-104 py-4 lg:inline-block">
                  {loggedIn && <Typography className="hidden truncate text-gray-600 lg:block">{userName}</Typography>}
                </div>

                <div className="border-primary pb-8 hover:border-b-2">
                  <UserIcon className="w-28 text-gray-600" />
                </div>
              </div>
            </Popover.Button>
            <Popover.Overlay className="fixed inset-0 z-[310] bg-gray-600 opacity-30" />
            <Popover.Panel className="absolute left-15 top-50 z-[351] animate-[appearDropdown_0.15s_ease-in-out] rounded-sm bg-white shadow-400">
              <div className="absolute -top-20 left-1/2 z-10 w-31 -translate-x-1/2 overflow-hidden">
                <div className="size-21 origin-bottom-left rotate-45 bg-white" />
              </div>
              <AccountDropdown loggedIn={loggedIn} />
            </Popover.Panel>
          </>
        )}
      </Popover>
    </div>
  );
};

export default AccountButton;
