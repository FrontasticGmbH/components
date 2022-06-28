import { fetchApiHub } from 'frontastic/lib/fetch-api-hub';
import { mutate } from 'swr';
import { Amount } from '../../../../extensions/payment-adyen/Session';

export const createSession = async (amount: Amount, returnUrl: string) => {
  const payload = {
    amount,
    returnUrl,
  };

  const res = await fetchApiHub('/action/payment/createSession', { method: 'POST' }, payload);
  await mutate('/action/payment/createSession', res);
  return res;
};
