import useSWR, { mutate } from 'swr';
import { Account } from '@Types/account/Account';
import { Address } from '@Types/account/Address';
import { REMEMBER_ME } from 'helpers/constants/localStorage';
import { revalidateOptions } from 'frontastic';
import { fetchApiHub, ResponseError } from 'frontastic/lib/fetch-api-hub';

export interface GetAccountResult {
  loggedIn: boolean;
  account?: Account;
  error?: ResponseError;
}

export interface UpdateAccount {
  firstName?: string;
  lastName?: string;
  salutation?: string;
  birthdayYear?: number;
  birthdayMonth?: number;
  birthdayDay?: number;
}

export const getAccount = (): GetAccountResult => {
  const result = useSWR<Account | GetAccountResult>('/action/account/getAccount', fetchApiHub, revalidateOptions);

  const account = (result.data as GetAccountResult)?.account || (result.data as Account);

  if (account?.accountId && account?.confirmed) return { account, loggedIn: true };

  return {
    loggedIn: false,
    account: undefined,
    error: result.error,
  };
};

export interface RegisterAccount extends UpdateAccount {
  email: string;
  password: string;
  billingAddress?: Address;
  shippingAddress?: Address;
}

export const login = async (email: string, password: string, remember?: boolean): Promise<Account> => {
  const payload = {
    email,
    password,
  };
  if (remember) window.localStorage.setItem(REMEMBER_ME, '1');
  const res = await fetchApiHub('/action/account/login', { method: 'POST' }, payload);
  await mutate('/action/account/getAccount', res);
  return res;
};

export const logout = async () => {
  window.localStorage.removeItem(REMEMBER_ME);
  const res = await fetchApiHub('/action/account/logout', { method: 'POST' });
  await mutate('/action/account/getAccount', res);
};

export const register = async (account: RegisterAccount): Promise<Account> => {
  const host = typeof window !== 'undefined' ? window.location.origin : '';
  const acc = { ...account, host };
  return await fetchApiHub('/action/account/register', { method: 'POST' }, acc);
};

export const confirm = async (token: string): Promise<Account> => {
  const res = await fetchApiHub('/action/account/confirm', { method: 'POST' }, { token });
  await mutate('/action/account/getAccount', res);
  return res;
};

export const resendVerificationEmail = async (email: string, password: string): Promise<void> => {
  const host = typeof window !== 'undefined' ? window.location.origin : '';

  const payload = {
    email,
    password,
    host,
  };
  const res = await fetchApiHub('/action/account/resendVerificationEmail', { method: 'POST' }, payload);
  return res;
};

export const changePassword = async (oldPassword: string, newPassword: string): Promise<Account> => {
  return await fetchApiHub('/action/account/password', { method: 'POST' }, { oldPassword, newPassword });
};

export const requestPasswordReset = async (email: string): Promise<void> => {
  return await fetchApiHub('/action/account/requestReset', { method: 'POST' }, { email });
};

export const resetPassword = async (token: string, newPassword: string): Promise<Account> => {
  const res = await fetchApiHub('/action/account/reset', { method: 'POST' }, { token, newPassword });
  await mutate('/action/account/getAccount', res);
  return res;
};

export const update = async (account: UpdateAccount): Promise<Account> => {
  const res = await fetchApiHub('/action/account/update', { method: 'POST' }, account);
  await mutate('/action/account/getAccount', res);
  return res;
};

export const addAddress = async (address: Omit<Address, 'addressId'>): Promise<Account> => {
  const res = await fetchApiHub('/action/account/addAddress', { method: 'POST' }, address);
  await mutate('/action/account/getAccount', res);
  return res;
};

export const updateAddress = async (address: Address): Promise<Account> => {
  const res = await fetchApiHub('/action/account/updateAddress', { method: 'POST' }, address);
  await mutate('/action/account/getAccount', res);
  return res;
};

export const removeAddress = async (addressId: string): Promise<Account> => {
  const res = await fetchApiHub('/action/account/removeAddress', { method: 'POST' }, { addressId });
  await mutate('/action/account/getAccount', res);
  return res;
};

export const setDefaultBillingAddress = async (addressId: string): Promise<Account> => {
  const res = await fetchApiHub('/action/account/setDefaultBillingAddress', { method: 'POST' }, { addressId });
  await mutate('/action/account/getAccount', res);
  return res;
};

export const setDefaultShippingAddress = async (addressId: string): Promise<Account> => {
  const res = await fetchApiHub('/action/account/setDefaultShippingAddress', { method: 'POST' }, { addressId });
  await mutate('/action/account/getAccount', res);
  return res;
};
