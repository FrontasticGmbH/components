import { getRouteData, getPreview } from './lib/server/get-route-data';

export function createClient(url: string, key: string) {
  return {
    getRouteData: getRouteData(url, key),
    getPreview: getPreview(url, key),
  };
}

export const revalidateOptions = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: true,
};

export * from './lib/server/get-route-data';
export * from './lib/types';
export * from './lib/renderer';
export * from './lib/component';
export * from './lib/notifier';
export * from './lib/fetch-api-hub';
export * from './provider';
