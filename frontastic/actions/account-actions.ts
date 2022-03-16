import { fetchApiHub } from '../lib/fetch-api-hub';
import { mutate } from 'swr';
import { Account } from '../../../types/account/Account';
import { PasswordResetToken } from '../../../types/account/PasswordResetToken';

export const login = async (email: string, password: string): Promise<Account> => {
  const payload = {
    email,
    password,
  };
  const res = await fetchApiHub('/action/account/login', { method: 'POST' }, payload);
  console.log('logged in, ', email, res);
  await mutate('/action/account/getAccount', res);
  return res;
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

export const confirm = async (token: string): Promise<Account> => {
  const res = await fetchApiHub('/action/account/confirm', { method: 'POST' }, { token });
  console.log('confirmed account, ', res.email, res);
  await mutate('/action/account/getAccount', res);
  return res;
};

export const changePassword = async (oldPassword: string, newPassword: string): Promise<Account> => {
  const res = await fetchApiHub('/action/account/password', { method: 'POST' }, { oldPassword, newPassword });
  console.log('changed password, ', res.email, res);
  return res;
};

export const requestPasswordReset = async (email: string): Promise<PasswordResetToken> => {
  const res = await fetchApiHub('/action/account/requestReset', { method: 'POST' }, { email });
  console.log('requested password reset, ', res.email, res);
  return res;
};

export const resetPassword = async (token: string, newPassword: string): Promise<Account> => {
  const res = await fetchApiHub('/action/account/reset', { method: 'POST' }, { token, newPassword });
  console.log('password reset, ', res.email, res);
  await mutate('/action/account/getAccount', res);
  return res;
};
