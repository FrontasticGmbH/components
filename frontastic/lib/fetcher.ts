import { handleFetchResponse } from './utils';

import { getCookie, setCookies } from 'cookies-next';

export type Fetcher<T = any, B = any> = (options: FetcherOptions<B>) => T | Promise<T>;

export type FetcherOptions<Body = any> = {
  url?: string;
  query?: string;
  method?: string;
  token?: string;
  variables?: any;
  body?: Body;
  init?: RequestInit;
};

const fetcher: Fetcher = async ({ url = '', method = 'POST', body, variables, query, init = {} }) => {
  console.warn('Deprecated, use fetchApiHub() instead!');

  const frontasticSessionHeaders = {};

  const frontasticSessionCookie = getCookie('frontastic-session');
  if (frontasticSessionCookie) {
    frontasticSessionHeaders['Frontastic-Session'] = frontasticSessionCookie;
  }

  return handleFetchResponse(
    await fetch(url, {
      ...init,
      method,
      body: method !== 'GET' ? JSON.stringify(body !== undefined ? body : { query, variables }) : undefined,
      headers: {
        ...(init.headers || {}),
        'X-Frontastic-Access-Token': 'APIKEY',
        'Content-Type': 'application/json',
        Accept: 'application/json',
        ...frontasticSessionHeaders,
      },
    }).then((response): Response => {
      if (response.ok && response.headers.has('Frontastic-Session')) {
        setCookies('frontastic-session', response.headers.get('Frontastic-Session'));
      }
      return response;
    }),
  );
};

export default fetcher;
