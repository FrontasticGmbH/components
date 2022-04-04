import { PageDataResponse, PagePreviewDataResponse, RedirectResponse } from '../types';
import { fetchApiHubServerSide } from '../fetch-api-hub';
import { IncomingMessage, ServerResponse } from 'http';

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

export const getRouteData =
  (url: string, key: string) =>
  async (
    urlParams: UrlParams,
    locale: string,
    query: QueryParams,
    nextJsReq: IncomingMessage,
    nextJsRes: ServerResponse,
  ): Promise<RedirectResponse | PageDataResponse> => {
    // Remove slug from query since it's not needed as part of the query.
    delete query.slug;

    const slug = urlParams.slug?.join('/') || '';
    const headers = {
      'Frontastic-Path': `/${slug !== 'index' ? slug : ''}`,
      'Frontastic-Locale': locale
    };
    const endpoint = `/page?${encodeQueryParams(query).join('&')}`;

    const data: RedirectResponse | PageDataResponse = (await fetchApiHubServerSide(endpoint, {
      req: nextJsReq,
      res: nextJsRes,
    }, headers)) as RedirectResponse | PageDataResponse;

    return data;
  };

export const getPreview =
  (url: string, key: string) =>
  async (
    previewId: string,
    locale: string,
    nextJsReq: IncomingMessage,
    nextJsRes: ServerResponse,
  ): Promise<PagePreviewDataResponse> => {
    const endpoint = `/preview?previewId=${previewId}&locale=${locale}`;

    const data: PagePreviewDataResponse = (await fetchApiHubServerSide(endpoint, {
      req: nextJsReq,
      res: nextJsRes,
    })) as PagePreviewDataResponse;
    return data;
  };
