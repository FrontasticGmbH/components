import React from 'react';
import Login, { LoginProps } from 'components/commercetools-ui/account/login';
import Head from 'next/head';
import { useFormat } from 'helpers/hooks/useFormat';

export interface Props {
  data: LoginProps;
}

const AccountLoginTastic: React.FC<Props> = ({ data }) => {
  //I18n messages
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });

  return (
    <>
      <Head>
        <title>{formatAccountMessage({ id: 'sign.in', defaultMessage: 'Sign in' })}</title>
      </Head>
      <Login {...data} />
    </>
  );
};

export default AccountLoginTastic;
