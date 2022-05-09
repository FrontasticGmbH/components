import { CartDetails } from 'frontastic/actions/cart/update-cart';
import { Cart } from '../../../types/cart/Cart';
import { ShippingMethod } from '../../../types/cart/ShippingMethod';
import { Variant } from '../../../types/product/Variant';
import { Order } from '../../../types/cart/Order';
export interface UseCart {
  data?: Cart;
  addItem: (variant: Variant, quantity: number) => Promise<void>;
  updateCart: (payload: CartDetails) => Promise<void>;
  setShippingMethod: (shippingMethodId: string) => Promise<void>;
  removeItem: (lineItemId: string) => Promise<void>;
  updateItem: (lineItemId: string, newQuantity: number) => Promise<void>;
  shippingMethods: { data?: ShippingMethod[] };
  orderCart: () => Promise<void>;
  orderHistory?: () => Promise<Order[]>;
}
