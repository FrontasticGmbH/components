import { mutate } from 'swr';
import { fetchApiHub } from 'frontastic';

export const createSession = async (value: number, currency: string, returnUrl: string) => {
  const payload = {
    amount: {
      value: value,
      currency: currency,
    },
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
