import cookieCutter from 'cookie-cutter';
import ServerCookies from 'cookies';

import { IncomingMessage, ServerResponse } from 'http';

function resolveApiHubUrl(): string {
  // TODO: Error checks!
  let apiHubUrl = process.env.NEXT_PUBLIC_FRONTASTIC_HOST!;
  /*
  if (process.env.NEXT_PUBLIC_VERCEL_ENV! === 'preview') {
    // FIXME: Get project & customer ID from configuration
    apiHubUrl =
      'https://<project>-' +
      process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF!.replace(/[^a-zA-Z0-9-]/g, '-') +
      '-<customer>.frontastic.dev/frontastic';
  }
  */
  return apiHubUrl;
}

type ExpressMessages = {
  req: IncomingMessage;
  res: ServerResponse;
};

type CookieManager = {
  getCookie: (cookieIdentifier: string) => string | undefined;
  setCookie: (cookieIdentifier: string, cookieValue: string) => void;
};

export class ResponseError extends Error {
  private readonly response: Response;

  constructor(response: Response) {
    super(`Got HTTP status code ${response.status} (${response.statusText})`);
    this.response = response;
  }

  getResponse() {
    return this.response;
  }

  getStatus() {
    return this.response.status;
  }
}

export type fetchFunction = (endpointPath: string, init?: RequestInit, payload?: object) => Promise<any>;

const performFetchApiHub = async (
  endpointPath: string,
  init: RequestInit,
  payload: object = null,
  cookieManager: CookieManager,
): Promise<any> => {
  const frontasticSessionHeaders = {};

  const frontasticSessionCookie = cookieManager.getCookie('frontastic-session');
  console.log('Session cookie:', frontasticSessionCookie);
  if (frontasticSessionCookie) {
    frontasticSessionHeaders['Frontastic-Session'] = frontasticSessionCookie;
  }

  const bodyOverride = payload ? { body: JSON.stringify(payload) } : {};

  const actualInit = {
    ...bodyOverride,
    ...init,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      ...(init.headers || {}),
      'X-Frontastic-Access-Token': 'APIKEY',
      ...frontasticSessionHeaders,
    },
  };

  const endpoint = resolveApiHubUrl() + endpointPath;

  return await fetch(endpoint, actualInit).then(
    (response): Response => {
      if (response.ok && response.headers.has('Frontastic-Session')) {
        cookieManager.setCookie('frontastic-session', response.headers.get('Frontastic-Session'));
      }
      return response;
    },
  );
};

export const rawFetchApiHub: fetchFunction = async (endpointPath, init = {}, payload = null) => {
  return await performFetchApiHub(endpointPath, init, payload, {
    getCookie: (cookieIdenfier) => {
      return cookieCutter.get(cookieIdenfier);
    },
    setCookie: (cookieIdenfier, cookieValue) => {
      cookieCutter.set(cookieIdenfier, cookieValue);
    },
  });
};

export const handleApiHubResponse = (fetchApiHubPromise: Promise<any>): Promise<object> => {
  // TODO: Handle errors
  return fetchApiHubPromise.then((response: Response) => {
    if (response.ok) {
      return response.json();
    }
    throw new ResponseError(response);
  });
};

export const fetchApiHub: fetchFunction = async (endpointPath, init = {}, payload = null) => {
  return handleApiHubResponse(rawFetchApiHub(endpointPath, init, payload));
};

export const rawFetchApiHubServerSide = async (endpointPath: string, expressMessages: ExpressMessages) => {
  const cookies = new ServerCookies(expressMessages.req, expressMessages.res);
  return await performFetchApiHub(endpointPath, {}, null, {
    getCookie: (cookieIdentifier) => {
      return cookies.get(cookieIdentifier);
    },
    setCookie: (cookieIdentifier, cookieValue) => {
      // Do nothing. Only actions are eligible to set the session.
    },
  });
};

export const fetchApiHubServerSide = async (endpointPath: string, expressMessages: ExpressMessages) => {
  return handleApiHubResponse(rawFetchApiHubServerSide(endpointPath, expressMessages));
};
