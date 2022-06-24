import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Toast from 'react-hot-toast';
import { useFormat } from 'helpers/hooks/useFormat';
import { useAccount } from 'frontastic';

const Verify: NextPage = () => {
  //i18n messages
  const { formatMessage: formatAccountMessage } = useFormat({ name: 'account' });

  //next/router
  const router = useRouter();

  //verification token
  const { token } = router.query;

  //account actions
  const { confirm } = useAccount();

  //verify user's email

  useEffect(() => {
    const verifyUser = async () => {
      //successful redirection after verification
      const successRedirect = () => {
        router
          .push('/')
          .then(() =>
            Toast.success(formatAccountMessage({ id: 'verification.done', defaultMessage: 'Email verified' })),
          );
      };

      //error redirection becaues of invalid token
      const errorRedirect = () => {
        router
          .push('/')
          .then(() =>
            Toast.error(formatAccountMessage({ id: 'verification.failed', defaultMessage: 'Invalid token' })),
          );
      };

      if (!token) return;
      try {
        const response = await confirm(token as string);
        if (response.accountId) successRedirect();
        else errorRedirect();
      } catch (err) {
        errorRedirect();
      }
    };

    verifyUser();
  }, [token, confirm, formatAccountMessage, router]);

  return <></>;
};

export default Verify;
