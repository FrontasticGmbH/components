import useSWR from 'swr';
import { fetchApiHub, ResponseError } from 'frontastic/lib/fetch-api-hub';
import { Account } from '@Types/account/Account';

export interface GetAccountResult {
  loggedIn: boolean;
  account?: Account;
  error?: ResponseError;
}

export const getAccount = (): GetAccountResult => {
  const result = useSWR<Account | GetAccountResult>('/action/account/getAccount', fetchApiHub);

  const account = (result.data as GetAccountResult)?.account || (result.data as Account);

  if (account?.accountId && account?.confirmed) return { account, loggedIn: true };

  return {
    loggedIn: false,
    account: undefined,
    error: result.error,
  };
};
