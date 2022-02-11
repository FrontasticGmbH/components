import fetcher from '../fetcher';
import { FrontasticRoute, PageDataResponse, PagePreviewDataResponse, RedirectResponse } from '../types';

type UrlParams = {
  slug?: Array<string>;
};

type QueryParams = {
  [key: string]: string | string[] | undefined;
};

const encodeSingleQueryParam = (key: string, value: string | string[] | undefined): string[] => {
  if (value === undefined) {
    return [encodeURIComponent(key)];
  }

  if (typeof value === 'string') {
    return [`${encodeURIComponent(key)}=${encodeURIComponent(value)}`];
  }

  return value.map((element) => `${encodeURIComponent(key)}=${encodeURIComponent(element)}`);
};

const encodeQueryParams = (query: QueryParams): string[] => {
  return Object.entries(query).flatMap(([key, value]) => encodeSingleQueryParam(key, value));
};

export const getRouteDataOld: any = (url: string, key: string) => async (urlParams: UrlParams, locale: string) => {
  const slug = urlParams.slug?.join('/') || '';
  const endpoint = `${url}/${slug !== 'index' ? slug : ''}`;

  const data: FrontasticRoute = await fetcher({ url: endpoint, method: 'GET', token: key });
  return { data };
};

export const getRouteData = (url: string, key: string) => async (
  urlParams: UrlParams,
  locale: string,
  query: QueryParams,
): Promise<RedirectResponse|PageDataResponse> => {
  // Remove slug from query since it's not needed as part of the query.
  delete query.slug;

  const slug = urlParams.slug?.join('/') || '';
  const endpointQuery = [`path=/${slug !== 'index' ? slug : ''}`, `locale=${locale}`, ...encodeQueryParams(query)];
  const endpoint = `${url}/page?${endpointQuery.join('&')}`;

  const data: RedirectResponse|PageDataResponse = await fetcher({ url: endpoint, method: 'GET', token: key });

  return data;
};

export const getPreview = (url: string, key: string) => async (previewId: string, locale: string): Promise<PagePreviewDataResponse> => {
  const endpoint = `${url}/preview?previewId=${previewId}&locale=${locale}`;

  const data: PagePreviewDataResponse = await fetcher({ url: endpoint, method: 'GET', token: key });
  return data;
};
