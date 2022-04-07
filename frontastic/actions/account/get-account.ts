import useSWR from 'swr';
import { ResponseError } from 'frontastic/lib/fetch-api-hub';
import { Account } from '../../../../types/account/Account';

export interface GetAccountResult {
  loggedIn: boolean;
  account?: Account;
  error?: ResponseError;
}

export const getAccount = (): GetAccountResult => {
  const result = useSWR<Account | GetAccountResult>('/action/account/getAccount');

  const account = (result.data as Account) || (result.data as GetAccountResult)?.account;

  if (account?.accountId && account?.confirmed) return { account, loggedIn: true };

  return {
    loggedIn: false,
    account: undefined,
    error: result.error,
  };
};
