import useSWR from 'swr';
import { fetchApiHub, ResponseError } from 'frontastic/lib/fetch-api-hub';
import { Account } from '../../../../types/account/Account';

export interface GetAccountResult {
  loggedIn: boolean;
  account?: Account;
  error?: ResponseError;
}

export const getAccount = (): GetAccountResult => {
  const result = useSWR<GetAccountResult>('/action/account/getAccount', fetchApiHub);

  const account = result.data?.account;

  if (account?.confirmed) {
    return result.data;
  }

  return {
    loggedIn: false,
    account: undefined,
    error: result.error,
  };
};
