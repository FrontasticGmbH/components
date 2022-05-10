import React from 'react';
import { UserIcon } from '@heroicons/react/outline';
import { Reference, ReferenceLink } from 'helpers/reference';

interface AccountButtonProps {
  accountLink: Reference;
}

const AccountButton: React.FC<AccountButtonProps> = ({ accountLink }) => {
  return (
    <div className="flex items-center ml-4">
      <div className="flex space-x-8">
        <div className="flex">
          <ReferenceLink target={accountLink} className="p-2 -m-2 text-primary-400 hover:text-primary-500">
            <span className="sr-only">Account</span>
            <UserIcon className="w-6 h-6" aria-hidden="true" />
          </ReferenceLink>
        </div>
      </div>
    </div>
  );
};

export default AccountButton;
