import { RegisterAccount, UpdateAccount } from "frontastic/actions/account/account-actions";
import { GetAccountResult } from "frontastic/actions/account/get-account";
import { Account } from "../../../types/account/Account";
import { Address } from "../../../types/account/Address";

export interface UseAccount extends GetAccountResult {
    login: (email: string, password: string) => Promise<Account>;
    logout: () => Promise<void>;
    register: (account: RegisterAccount) => Promise<Account>;
    confirm: (token: string) => Promise<Account>;
    changePassword: (oldPassword: string, newPassword: string) => Promise<Account>;
    requestPasswordReset: (email: string) => Promise<void>;
    resetPassword: (token: string, newPassword: string) => Promise<Account>;
    update: (account: UpdateAccount) => Promise<Account>;
    addAddress: (address: Omit<Address, 'addressId'>) => Promise<Account>;
    updateAddress: (address: Address) => Promise<Account>;
    removeAddress: (addressId: string) => Promise<Account>;
    setDefaultBillingAddress: (addressId: string) => Promise<Account>;
    setDefaultShippingAddress: (addressId: string) => Promise<Account>;
};
