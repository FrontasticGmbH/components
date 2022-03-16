import { fetchApiHub } from '../lib/fetch-api-hub';
import { mutate } from 'swr';
import { Account } from '../../../types/account/Account';

export const login = async (email: string, password: string) => {
  const payload = {
    email,
    password,
  };
  const res = await fetchApiHub('/action/account/login', { method: 'POST' }, payload);
  console.log('logged in, ', email, res);
  await mutate('/action/account/getAccount', res);
};

export const logout = async () => {
  const res = await fetchApiHub('/action/account/logout', { method: 'POST' });
  console.log('logged out', res);
  await mutate('/action/account/getAccount', res);
};

export const register = async (account: Account): Promise<Account> => {
  const res = await fetchApiHub('/action/account/register', { method: 'POST' }, account);
  console.log('created account, ', account.email, res);
  await mutate('/action/account/getAccount', res);
  return res;
};
