import { Account } from '@Types/account/Account';
import { Address } from '@Types/account/Address';
import { GetAccountResult, RegisterAccount, UpdateAccount } from 'frontastic/actions/account';

export interface UseAccount extends GetAccountResult {
  login: (email: string, password: string, remember?: boolean) => Promise<Account>;
  logout: () => Promise<void>;
  register: (account: RegisterAccount) => Promise<Account>;
  confirm: (token: string) => Promise<Account>;
  resendVerificationEmail: (email: string, password: string) => Promise<void>;
  changePassword: (oldPassword: string, newPassword: string) => Promise<Account>;
  requestPasswordReset: (email: string) => Promise<void>;
  resetPassword: (token: string, newPassword: string) => Promise<Account>;
  update: (account: UpdateAccount) => Promise<Account>;
  addAddress: (address: Omit<Address, 'addressId'>) => Promise<Account>;
  updateAddress: (address: Address) => Promise<Account>;
  removeAddress: (addressId: string) => Promise<Account>;
  setDefaultBillingAddress: (addressId: string) => Promise<Account>;
  setDefaultShippingAddress: (addressId: string) => Promise<Account>;
}
