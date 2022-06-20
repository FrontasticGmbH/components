import {
  getAccount,
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
} from '../../actions/account';
import {
  cartItems,
  addItem,
  orderCart,
  orderHistory,
  removeItem,
  shippingMethods,
  setShippingMethod,
  updateCart,
  updateOrder,
  updateItem,
  redeemDiscountCode,
  removeDiscountCode,
} from '../../actions/cart';
import { getWishlist, addToWishlist, removeLineItem, updateLineItem } from '../../actions/wishlist';
import { createSession } from '../../actions/checkout';
import { UseAccount } from './UseAccount';
import { UseCart } from './UseCart';
import { UseWishlist } from './UseWishlist';
import { UseCheckout } from './UseCheckout';

export interface FrontasticState {
  useCart: UseCart;
  useAccount: UseAccount;
  useWishlist: UseWishlist;
  useCheckout: UseCheckout;
}

export const getFrontasticState = (): FrontasticState => {
  return {
    useCart: {
      ...cartItems(),
      addItem,
      updateCart,
      updateOrder,
      setShippingMethod,
      removeItem,
      updateItem,
      shippingMethods: shippingMethods(),
      orderCart,
      orderHistory,
      redeemDiscountCode,
      removeDiscountCode,
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
    useCheckout: {
      createSession,
    },
  };
};
