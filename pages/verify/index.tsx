import React, { useCallback, useEffect } from 'react';
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

  //successful redirection after verification
  const successRedirect = useCallback(() => {
    router
      .push('/')
      .then(() => Toast.success(formatAccountMessage({ id: 'verification.done', defaultMessage: 'Email verified' })));
  }, []);

  //error redirection becaues of invalid token
  const errorRedirect = useCallback(() => {
    router
      .push('/')
      .then(() => Toast.error(formatAccountMessage({ id: 'verification.failed', defaultMessage: 'Invalid token' })));
  }, []);

  //verify user's email
  const verifyUser = useCallback(async () => {
    if (!token) return;
    try {
      const response = await confirm(token as string);
      if (response.accountId) successRedirect();
      else errorRedirect();
    } catch (err) {
      errorRedirect();
    }
  }, [token, confirm, successRedirect, errorRedirect]);

  useEffect(() => {
    verifyUser();
  }, [verifyUser]);

  return <></>;
};

export default Verify;
