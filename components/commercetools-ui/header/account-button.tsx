import React from 'react';
import { UserIcon } from '@heroicons/react/outline';
import { Reference, ReferenceLink } from 'helpers/reference';

interface AccountButtonProps {
  accountLink: Reference;
}

const AccountButton: React.FC<AccountButtonProps> = ({ accountLink }) => {
  return (
    <div className="ml-4 flex items-center">
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
    </div>
  );
};

export default AccountButton;