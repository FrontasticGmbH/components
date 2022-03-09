import { getRouteData, getPreview } from './lib/server/get-route-data';

function createClient(frontasticUrl: string, frontasticKey: string) {
  return {
    getRouteData: getRouteData(frontasticUrl, frontasticKey),
    getPreview: getPreview(frontasticUrl, frontasticKey),
  };
}

export { createClient };
export * from './lib/server/get-route-data';
export * from './actions/add-cart-item';
export * from './actions/update-cart';
export * from './actions/cart-items';
export * from './lib/types';
export * from './lib/renderer';
export * from './lib/component';
export * from './lib/provider';
export * from './lib/notifier';
export * from './lib/fetch-api-hub';
