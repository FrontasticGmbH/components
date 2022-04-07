import { fetchApiHub } from '../../lib/fetch-api-hub';
import { mutate } from 'swr';
import { Account } from '../../../../types/account/Account';
import { Address } from '../../../../types/account/Address';

export interface UpdateAccount {
  firstName?: string;
  lastName?: string;
  salutation?: string;
  birthdayYear?: number;
  birthdayMonth?: number;
  birthdayDay?: number;
}

export interface RegisterAccount extends UpdateAccount {
  email: string;
  password: string;
  billingAddress?: Address;
  shippingAddress?: Address;
}

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

export const register = async (account: RegisterAccount): Promise<Account> => {
  const res = await fetchApiHub('/action/account/register', { method: 'POST' }, account);
  console.log('created account, ', account.email, res);
  // await mutate('/action/account/getAccount', res);
  return res;
};

export const confirm = async (token: string): Promise<Account> => {
  const res = await fetchApiHub('/action/account/confirm', { method: 'POST' }, { token });
  console.log('confirmed account, ', res.email, res);
  await mutate('/action/account/getAccount', res);
  return res;
};

export const resendVerificationEmail = async (email: string, password: string): Promise<void> => {
  const payload = {
    email,
    password,
  };
  const res = await fetchApiHub('/action/account/resendVerificationEmail', { method: 'POST' }, payload);
  return res;
};

export const changePassword = async (oldPassword: string, newPassword: string): Promise<Account> => {
  const res = await fetchApiHub('/action/account/password', { method: 'POST' }, { oldPassword, newPassword });
  console.log('changed password, ', res.email, res);
  return res;
};

export const requestPasswordReset = async (email: string): Promise<void> => {
  const res = await fetchApiHub('/action/account/requestReset', { method: 'POST' }, { email });
  console.log('requested password reset, ', res.email, res);
};

export const resetPassword = async (token: string, newPassword: string): Promise<Account> => {
  const res = await fetchApiHub('/action/account/reset', { method: 'POST' }, { token, newPassword });
  console.log('password reset, ', res.email, res);
  await mutate('/action/account/getAccount', res);
  return res;
};

export const update = async (account: UpdateAccount): Promise<Account> => {
  const res = await fetchApiHub('/action/account/update', { method: 'POST' }, account);
  console.log('updated account, ', res.email, res);
  await mutate('/action/account/getAccount', res);
  return res;
};

export const addAddress = async (address: Omit<Address, 'addressId'>): Promise<Account> => {
  const res = await fetchApiHub('/action/account/addAddress', { method: 'POST' }, address);
  console.log('added address to account, ', res.email, res);
  await mutate('/action/account/getAccount', res);
  return res;
};

export const updateAddress = async (address: Address): Promise<Account> => {
  const res = await fetchApiHub('/action/account/updateAddress', { method: 'POST' }, address);
  console.log('updated address of account, ', res.email, res);
  await mutate('/action/account/getAccount', res);
  return res;
};

export const removeAddress = async (addressId: string): Promise<Account> => {
  const res = await fetchApiHub('/action/account/removeAddress', { method: 'POST' }, { addressId });
  console.log('removed address from account, ', res.email, res);
  await mutate('/action/account/getAccount', res);
  return res;
};

export const setDefaultBillingAddress = async (addressId: string): Promise<Account> => {
  const res = await fetchApiHub('/action/account/setDefaultBillingAddress', { method: 'POST' }, { addressId });
  console.log('set default billing address for account, ', res.email, res);
  await mutate('/action/account/getAccount', res);
  return res;
};

export const setDefaultShippingAddress = async (addressId: string): Promise<Account> => {
  const res = await fetchApiHub('/action/account/setDefaultShippingAddress', { method: 'POST' }, { addressId });
  console.log('set default shipping address for account, ', res.email, res);
  await mutate('/action/account/getAccount', res);
  return res;
};
