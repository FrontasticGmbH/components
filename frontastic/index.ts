import { getRouteData, getPreview } from './lib/server/get-route-data';

function createClient(frontasticUrl: string, frontasticKey: string) {
  return {
    getRouteData: getRouteData(frontasticUrl, frontasticKey),
    getPreview: getPreview(frontasticUrl, frontasticKey),
  };
}

export { createClient };
export * from './lib/server/get-route-data';
export * from './actions/cart/update-cart';
export * from './lib/types';
export * from './lib/renderer';
export * from './lib/component';
export * from './lib/notifier';
export * from './lib/fetch-api-hub';
export * from './lib/provider/provider';
