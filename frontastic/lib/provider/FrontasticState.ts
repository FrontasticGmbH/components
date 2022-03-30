import { UseAccount } from "./UseAccount";
import { UseCart } from "./UseCart";
import { UseWishlist } from "./UseWishlist";
import { updateItem } from 'frontastic/actions/cart/update-cart-item';
import { getAccount } from '../../actions/account/get-account';
import {
    changePassword,
    confirm,
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
} from '../../actions/account/account-actions';
import { addToWishlist, removeLineItem, updateLineItem, getWishlist } from '../../actions/wishlist/wishlist-actions';
import { addItem } from '../../actions/cart/add-cart-item';
import { removeItem } from '../../actions/cart/remove-cart-item';
import { setShippingMethod, updateCart } from '../../actions/cart/update-cart';
import { orderCart } from '../../actions/cart/order-cart';
import { cartItems } from '../../actions/cart/cart-items';
import { shippingMethods } from '../../actions/cart/shipping-methods';

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
            updateLineItem
        }
    }
}