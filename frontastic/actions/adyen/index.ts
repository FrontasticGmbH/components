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

  const res = await fetchApiHub('/action/payment/createSession', { method: 'POST' }, payload);
  await mutate('/action/payment/createSession', res);
  return res;
};
