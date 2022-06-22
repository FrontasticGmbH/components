import { mutate } from 'swr';
import { fetchApiHub } from 'frontastic';
import { Amount } from '@Types/adyen/Amount';

export const createSession = async (amount: Amount, returnUrl: string) => {
  const payload = {
    amount,
    returnUrl,
  };

  const res = await fetchApiHub('/action/adyen/createSession', { method: 'POST' }, payload);
  await mutate('/action/adyen/createSession', res);
  return res;
};

export const adyenCheckout = async (sessionId: string, redirectResult: string): Promise<void> => {
  const payload = {
    sessionId: sessionId,
    redirectResult: redirectResult,
  };

  return await fetchApiHub(
    '/action/adyen/checkout',
    {
      headers: {
        accept: 'application/json',
      },
      credentials: 'include',
      method: 'POST',
    },
    payload,
  );
};
