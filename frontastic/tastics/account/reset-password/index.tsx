import React from 'react';
import { useRouter } from 'next/router';
import ResetPassword, { ResetPasswordProps } from 'components/commercetools-ui/account/reset-password';
import Head from 'next/head';
import { useFormat } from 'helpers/hooks/useFormat';

export interface Props {
  data: ResetPasswordProps;
}

const ResetPasswordTastic: React.FC<Props> = ({ data }) => {
  //I18n messages
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });

  //next/router
  const router = useRouter();

  //reset password token
  const { token } = router.query;

  return (
    <>
      <Head>
        <title>{formatAccountMessage({ id: 'password.reset', defaultMessage: 'Reset password' })}</title>
      </Head>
      <ResetPassword token={token} {...data} />
    </>
  );
};

export default ResetPasswordTastic;
