import { getCookie, setCookies } from 'cookies-next';

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

export type fetchFunction = (endpointPath: string, init?: RequestInit, payload?: object) => Promise<any>;

export const rawFetchApiHub: fetchFunction = async (endpointPath, init = {}, payload = null) => {
  const frontasticSessionHeaders = {};

  const frontasticSessionCookie = getCookie('frontastic-session');
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

  return await fetch(endpoint, actualInit).then((response): Response => {
    if (response.ok && response.headers.has('Frontastic-Session')) {
      setCookies('frontastic-session', response.headers.get('Frontastic-Session'));
    }
    return response;
  });
};

export const handleApiHubResponse = (fetchApiHubPromise: Promise<any>): Promise<object> => {
  // TODO: Handle errors
  return fetchApiHubPromise.then((response: Response) => {
    if (response.ok) {
      return response.json();
    }
  });
};

export const fetchApiHub: fetchFunction = async (endpointPath, init = {}, payload = null) => {
  return handleApiHubResponse(rawFetchApiHub(endpointPath, init, payload));
};
