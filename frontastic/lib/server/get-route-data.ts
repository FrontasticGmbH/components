import { IncomingMessage, ServerResponse } from 'http';
import { fetchApiHubServerSide } from '../fetch-api-hub';
import { PageDataResponse, PageFolderStructureResponse, PagePreviewDataResponse, RedirectResponse } from '../types';
import { mapLanguage } from '../../../project.config';

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
  () =>
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
    query.path = `/${slug !== 'index' ? slug : ''}`;
    query.locale = mapLanguage(locale);

    const headers = {
      'Frontastic-Path': query.path,
      'Frontastic-Locale': mapLanguage(locale),
    };
    const endpoint = `/page?${encodeQueryParams(query).join('&')}`;

    const data: RedirectResponse | PageDataResponse = (await fetchApiHubServerSide(
      endpoint,
      {
        req: nextJsReq,
        res: nextJsRes,
      },
      headers,
    )) as RedirectResponse | PageDataResponse;

    return data;
  };

export const getPreview =
  () =>
  async (
    previewId: string,
    locale: string,
    nextJsReq: IncomingMessage,
    nextJsRes: ServerResponse,
  ): Promise<PagePreviewDataResponse> => {
    const endpoint = `/preview?previewId=${previewId}&locale=${locale}`;

    const headers = {
      'Frontastic-Locale': mapLanguage(locale),
    };

    const data: PagePreviewDataResponse = (await fetchApiHubServerSide(
      endpoint,
      {
        req: nextJsReq,
        res: nextJsRes,
      },
      headers,
    )) as PagePreviewDataResponse;
    return data;
  };

export const getStructure =
  () =>
  async (
    path: string,
    depth: string,
    locale: string,
    nextJsReq: IncomingMessage,
    nextJsRes: ServerResponse,
  ): Promise<PageFolderStructureResponse> => {
    const endpoint = `/structure?locale=${locale}`;

    if (path) {
      endpoint.concat(`&path=${path}`);
    }

    if (depth) {
      endpoint.concat(`&depth=${depth}`);
    }

    const data: PageFolderStructureResponse = (await fetchApiHubServerSide(endpoint, {
      req: nextJsReq,
      res: nextJsRes,
    })) as PageFolderStructureResponse;
    return data;
  };
