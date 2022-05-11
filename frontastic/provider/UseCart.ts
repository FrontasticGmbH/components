import { CartDetails } from 'frontastic/actions/cart/update-cart';
import { Cart } from '@Types/cart/Cart';
import { ShippingMethod } from '@Types/cart/ShippingMethod';
import { Variant } from '@Types/product/Variant';
import { Order } from '@Types/cart/Order';
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
