import * as React from 'react';
import { SWRConfig } from 'swr';
import { addItem } from '../actions/add-cart-item';
import { removeItem } from '../actions/remove-cart-item';
import { CartDetails, setShippingMethod, updateCart } from '../actions/update-cart';
import { orderCart } from '../actions/order-cart';
import { cartItems } from '../actions/cart-items';
import { shippingMethods } from '../actions/shipping-methods';
import { fetchApiHub } from './fetch-api-hub';
import { updateItem } from 'frontastic/actions/update-cart-item';
import { ShippingMethod } from '../../../types/cart/ShippingMethod';
import { Cart } from '../../../types/cart/Cart';
import { Variant } from '../../../types/product/Variant';
import { getAccount, GetAccountResult } from '../actions/get-account';
import {
  changePassword,
  confirm,
  login,
  logout,
  register,
  requestPasswordReset,
  resetPassword,
} from '../actions/account-actions';
import { Account } from '../../../types/account/Account';

interface UseCart {
  data?: Cart;
  addItem: (variant: Variant, quantity: number) => Promise<void>;
  updateCart: (payload: CartDetails) => Promise<void>;
  setShippingMethod: (shippingMethodId: string) => Promise<void>;
  removeItem: (lineItemId: string) => Promise<void>;
  updateItem: (lineItemId: string, newQuantity: number) => Promise<void>;
  shippingMethods: { data?: ShippingMethod[] };
  orderCart: () => Promise<void>;
}

type UseAccount = GetAccountResult & {
  login: (email: string, password: string) => Promise<Account>;
  logout: () => Promise<void>;
  register: (account: Account) => Promise<Account>;
  confirm: (token: string) => Promise<Account>;
  changePassword: (oldPassword: string, newPassword: string) => Promise<Account>;
  requestPasswordReset: (email: string) => Promise<void>;
  resetPassword: (token: string, newPassword: string) => Promise<Account>;
};

interface FrontasticState {
  useCart: UseCart;
  useAccount: UseAccount;
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
    orderCart: undefined,
  },
  useAccount: {
    loggedIn: false,
    account: undefined,
    login: undefined,
    logout: undefined,
    register: undefined,
    confirm: undefined,
    changePassword: undefined,
    requestPasswordReset: undefined,
    resetPassword: undefined,
  },
};

const FrontasticContext = React.createContext<FrontasticState>(initialState);

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
      orderCart,
    },
    useAccount: {
      ...getAccount(),
      login,
      logout,
      register,
      confirm,
      changePassword,
      requestPasswordReset,
      resetPassword,
    },
  };
  return (
    <SWRConfig value={{ fetcher: fetchApiHub }}>
      <FrontasticContext.Provider value={state}>{children}</FrontasticContext.Provider>
    </SWRConfig>
  );
};

export const useCart = () => {
  const context = React.useContext(FrontasticContext);

  if (!context) throw new Error('Expected to be wrapped in FrontasticProvider');

  return context.useCart;
};

export const useAccount = () => {
  const context = React.useContext(FrontasticContext);

  if (!context) {
    throw new Error('Expected to be wrapped in FrontasticProvider');
  }

  return context.useAccount;
};
