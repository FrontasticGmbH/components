import useSWR from 'swr';
import { ResponseError } from 'frontastic/lib/fetch-api-hub';
import { Account } from '../../../../types/account/Account';

export interface GetAccountResult {
  loggedIn: boolean;
  account?: Account;
  error?: ResponseError;
}

export const getAccount = (): GetAccountResult => {
  const result = useSWR<GetAccountResult>('/action/account/getAccount');

  const account = result.data?.account;

  if (account?.confirmed) return { ...result.data, loggedIn: true };

  return {
    loggedIn: false,
    account: undefined,
    error: result.error,
  };
};
