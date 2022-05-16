import { updateItem } from 'frontastic/actions/cart/update-cart-item';
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
import { addItem } from '../actions/cart/add-cart-item';
import { cartItems } from '../actions/cart/cart-items';
import { orderCart } from '../actions/cart/order-cart';
import { orderHistory } from '../actions/cart/order-history';
import { removeItem } from '../actions/cart/remove-cart-item';
import { shippingMethods } from '../actions/cart/shipping-methods';
import { setShippingMethod, updateCart } from '../actions/cart/update-cart';
import { addToWishlist, removeLineItem, updateLineItem, getWishlist } from '../actions/wishlist/wishlist-actions';
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
