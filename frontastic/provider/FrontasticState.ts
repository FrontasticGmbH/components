import {
  changePassword,
  confirm,
  resendVerificationEmail,
  login,
  logout,
  register,
  requestPasswordReset,
  resetPassword,
  update,
  addAddress,
  updateAddress,
  removeAddress,
  setDefaultBillingAddress,
  setDefaultShippingAddress,
} from '../actions/account/account-actions';
import { getAccount } from '../actions/account/get-account';
import {
  addItem,
  orderCart,
  orderHistory,
  removeItem,
  shippingMethods,
  setShippingMethod,
  updateCart,
  updateItem,
} from '../actions/cart/cart-actions';
import { cartItems } from '../actions/cart/cart-items';
import { addToWishlist, removeLineItem, updateLineItem } from '../actions/wishlist/wishlist-actions';
import { getWishlist } from '../actions/wishlist/wishlist-items';
import { UseAccount } from './UseAccount';
import { UseCart } from './UseCart';
import { UseWishlist } from './UseWishlist';

export interface FrontasticState {
  useCart: UseCart;
  useAccount: UseAccount;
  useWishlist: UseWishlist;
}

export const getFrontasticState = (): FrontasticState => {
  return {
    useCart: {
      ...cartItems(),
      addItem,
      updateCart,
      setShippingMethod,
      removeItem,
      updateItem,
      shippingMethods: shippingMethods(),
      orderCart,
      orderHistory,
    },
    useAccount: {
      ...getAccount(),
      login,
      logout,
      register,
      confirm,
      resendVerificationEmail,
      changePassword,
      requestPasswordReset,
      resetPassword,
      update,
      addAddress,
      updateAddress,
      removeAddress,
      setDefaultBillingAddress,
      setDefaultShippingAddress,
    },
    useWishlist: {
      ...getWishlist(),
      addToWishlist,
      removeLineItem,
      updateLineItem,
    },
  };
};
