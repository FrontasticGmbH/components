import React from 'react';
import Register, { RegisterProps } from 'components/commercetools-ui/account/register';
import { useFormat } from 'helpers/hooks/useFormat';
import Head from 'next/head';

export interface Props {
  data: RegisterProps;
}

const AccountRegisterTastic: React.FC<Props> = ({ data }) => {
  //I18n messages
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });

  return (
    <>
      <Head>
        <title>{formatAccountMessage({ id: 'sign.in', defaultMessage: 'Sign in' })}</title>
      </Head>
      <Register {...data} />
    </>
  );
};

export default AccountRegisterTastic;
