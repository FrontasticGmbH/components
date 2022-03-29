import useSWR from 'swr';
import { fetchApiHub, ResponseError } from '../lib/fetch-api-hub';
import { Account } from '../../../types/account/Account';

interface LoggedInResult {
  loggedIn: true;
  account: Account;
}

interface NotLoggedInResult {
  loggedIn: false;
  account: undefined;
}

interface ErrorResult {
  loggedIn: false;
  account: undefined;
  error: ResponseError;
}

export type GetAccountResult = LoggedInResult | NotLoggedInResult | ErrorResult;

export const getAccount = (): GetAccountResult => {
  const result = useSWR<LoggedInResult | NotLoggedInResult, ResponseError>('/action/account/getAccount', fetchApiHub);

  const account = result.data?.account;

  if (account?.confirmed) return { ...result.data, loggedIn: true };

  return {
    loggedIn: false,
    account: undefined,
    error: result.error,
  };
};
