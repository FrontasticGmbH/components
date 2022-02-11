import * as React from 'react';
import { SWRConfig } from 'swr';

import { addItem } from '../actions/add-cart-item';
import { removeItem } from '../actions/remove-cart-item';
import { updateCart } from '../actions/update-cart';
import { orderCart } from '../actions/order-cart';
import { cartItems } from '../actions/cart-items';
import { shippingMethods } from '../actions/shipping-methods';
import frontasticFetcher from './fetcher';
import { fetchApiHub } from './fetch-api-hub';
import { updateItem } from 'frontastic/actions/update-cart-item';

const initialState: any = {
  frontasticUrl: null,
  frontasticKey: null,
  useCart: {},
};
const FrontasticContext = React.createContext(initialState);

export const fetcher = (url: string) => frontasticFetcher({ url, method: 'GET' });

export const FrontasticProvider: React.FC<{
  children?: React.ReactNode;
  frontasticUrl: string;
  frontasticKey: string;
}> = ({ children, frontasticUrl, frontasticKey }) => {
  return (
    <SWRConfig value={{ fetcher: fetchApiHub }}>
      <FrontasticContext.Provider
        value={{
          useCart: {
            ...cartItems(),
            addItem,
            updateCart,
            removeItem,
            updateItem,
            shippingMethods: shippingMethods(),
            orderCart
          },
        }}
      >
        {children}
      </FrontasticContext.Provider>
    </SWRConfig>
  );
};

export const useCart = () => {
  const context = React.useContext(FrontasticContext);

  if (!context) throw new Error('Expected to be wrapped in FrontasticProvider');

  return context.useCart;
};
