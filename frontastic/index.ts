import { getRouteData, getPreview, getStructure } from './lib/server/get-route-data';

export function createClient() {
  return {
    getRouteData: getRouteData(),
    getPreview: getPreview(),
    getStructure: getStructure(),
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
export * from './lib/image';
export * from './provider';
