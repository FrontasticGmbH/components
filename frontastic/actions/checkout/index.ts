import { fetchApiHub } from 'frontastic/lib/fetch-api-hub';
import { mutate } from 'swr';
import { Amount } from '../../../../extension-commercetools/adyen/types/Amount';

export const createSession = async (amount: Amount, returnUrl) => {
  const payload = {
    amount,
    returnUrl,
  };

  const res = await fetchApiHub('/action/payment/createSession', { method: 'POST' }, payload);
  await mutate('/action/payment/createSession', res);
  return res;
};
