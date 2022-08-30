import { Cart } from '@Types/cart/Cart';
import { Discount } from '@Types/cart/Discount';
import { Order } from '@Types/cart/Order';
import { ShippingMethod } from '@Types/cart/ShippingMethod';
import { Variant } from '@Types/product/Variant';
import { CartDetails } from 'frontastic/actions/cart';
import { ProjectSettings } from '@Types/ProjectSettings';

export interface UseCart {
  data?: Order;
  addItem: (variant: Variant, quantity: number) => Promise<void>;
  updateCart: (payload: CartDetails) => Promise<Cart>;  
  removeItem: (lineItemId: string) => Promise<void>;
  updateItem: (lineItemId: string, newQuantity: number) => Promise<void>;
  removeDiscountCode?: (discount: Discount) => Promise<void>;
  redeemDiscountCode?: (code: string) => Promise<void>;
  setShippingMethod: (shippingMethodId: string) => Promise<void>;
  getShippingMethods: () => Promise<ShippingMethod[]>;
  checkout: () => Promise<void>;
  orderHistory?: () => Promise<Order[]>;
  getProjectSettings?: () => Promise<ProjectSettings>;
}
