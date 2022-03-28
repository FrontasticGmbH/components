import { useAccount } from 'frontastic';
import Redirect from 'helpers/Redirect';
import { Reference } from 'helpers/Reference';
import React from 'react';

export interface AccountDetailsProps {
  loginLink?: Reference;
}

const AccountDetails: React.FC<AccountDetailsProps> = ({ loginLink }) => {
  //account data
  const { loggedIn, account } = useAccount();

  if (!loggedIn) return <Redirect target={loginLink} />;

  return <h1>Hello, {account?.firstName}!</h1>;
};

export default AccountDetails;
