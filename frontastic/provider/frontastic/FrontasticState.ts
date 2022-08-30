import {
  getAccount,
  changePassword,
  confirm,
  requestConfirmationEmail,
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
  checkout,
  orderHistory,
  removeItem,
  getShippingMethods,
  setShippingMethod,
  updateCart,
  updateItem,
  redeemDiscountCode,
  removeDiscountCode,
  getProjectSettings,
} from '../../actions/cart';
import { getWishlist, addToWishlist, removeLineItem, updateLineItem } from '../../actions/wishlist';
import { createSession } from '../../actions/adyen';
import { UseAccount } from './UseAccount';
import { UseCart } from './UseCart';
import { UseWishlist } from './UseWishlist';
import { UseAdyen } from './UseAdyen';

export interface FrontasticState {
  useCart: UseCart;
  useAccount: UseAccount;
  useWishlist: UseWishlist;
  useAdyen: UseAdyen;
}

export const getFrontasticState = (): FrontasticState => {
  return {
    useCart: {
      ...cartItems(),
      addItem,
      updateCart,
      removeItem,
      updateItem,
      getShippingMethods,
      setShippingMethod,
      checkout,
      orderHistory,
      getProjectSettings,
      redeemDiscountCode,
      removeDiscountCode,
    },
    useAccount: {
      ...getAccount(),
      login,
      logout,
      register,
      confirm,
      requestConfirmationEmail,
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
    useAdyen: {
      createSession,
    },
  };
};
