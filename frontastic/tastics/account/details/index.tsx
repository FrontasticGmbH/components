import React from 'react';
import AccountDetails, { AccountDetailsProps } from 'components/commercetools-ui/account/details';
import { useAccount } from 'frontastic';
import Redirect from 'helpers/redirect';
import Head from 'next/head';
import { useFormat } from 'helpers/hooks/useFormat';

export interface Props {
  data: AccountDetailsProps;
}

const AccountDetailsTastic: React.FC<Props> = ({ data }) => {
  //I18n messages
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });

  //account data
  const { loggedIn, account } = useAccount();

  //user not logged in
  if (!loggedIn) return <Redirect target={data.loginLink} />;

  return (
    <>
      <Head>
        <title>
          {account.firstName}'s{' '}
          {formatAccountMessage({ id: 'account.area', defaultMessage: 'Account area' }).toLowerCase()}
        </title>
      </Head>
      <AccountDetails {...data} />
    </>
  );
};

export default AccountDetailsTastic;
