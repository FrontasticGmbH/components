import * as React from 'react';
import { SWRConfig } from 'swr';
import { addItem } from '../actions/add-cart-item';
import { removeItem } from '../actions/remove-cart-item';
import { updateCart, setShippingMethod, CartDetails } from '../actions/update-cart';
import { orderCart } from '../actions/order-cart';
import { cartItems } from '../actions/cart-items';
import { shippingMethods } from '../actions/shipping-methods';
import frontasticFetcher from './fetcher';
import { fetchApiHub } from './fetch-api-hub';
import { updateItem } from 'frontastic/actions/update-cart-item';
import { ShippingMethod } from '../../../types/cart/ShippingMethod';
import { Cart } from '../../../types/cart/Cart';
import { Variant } from '../../../types/product/Variant';


interface FrontasticState {
  useCart: UseCart
}
interface UseCart {
  data?: Cart,
  addItem: (variant: Variant, quantity: number) => Promise<void>,
  updateCart: (payload: CartDetails) => Promise<void>,
  setShippingMethod: (shippingMethodId: string) => Promise<void>,
  removeItem: (lineItemId: string) => Promise<void>,
  updateItem: (lineItemId: string, newQuantity: number) => Promise<void>,
  shippingMethods: { data?: ShippingMethod[] },
  orderCart: () => Promise<void>
}

const initialState: FrontasticState = {
  useCart: {
    data: undefined,
    addItem: undefined,
    updateCart: undefined,
    setShippingMethod: undefined,
    removeItem: undefined,
    updateItem: undefined,
    shippingMethods: undefined,
    orderCart: undefined
  },
};

const FrontasticContext = React.createContext<FrontasticState>(initialState);

export const fetcher = (url: string) => frontasticFetcher({ url, method: 'GET' });

export const FrontasticProvider: React.FC = ({ children }) => {
  const state: FrontasticState = {
    useCart: {
      ...cartItems(),
      addItem,
      updateCart,
      setShippingMethod,
      removeItem,
      updateItem,
      shippingMethods: shippingMethods(),
      orderCart
    },
  }

  return (
    <SWRConfig value={{ fetcher: fetchApiHub }}>
      <FrontasticContext.Provider
        value={state}
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
