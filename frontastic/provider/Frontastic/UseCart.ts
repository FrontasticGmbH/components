import { Cart } from '@Types/cart/Cart';
import { Order } from '@Types/cart/Order';
import { ShippingMethod } from '@Types/cart/ShippingMethod';
import { Variant } from '@Types/product/Variant';
import { CartDetails } from 'frontastic/actions/cart';
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
