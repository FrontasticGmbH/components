import { Address } from '@Types/account/Address';
import { Cart } from '@Types/cart/Cart';
import { Discount } from '@Types/cart/Discount';
import { Variant } from '@Types/product/Variant';
import useSWR, { mutate } from 'swr';
import { fetchApiHub, revalidateOptions } from 'frontastic';

export type CartDetails = {
  account?: { email: string };
  shipping?: Address;
  billing?: Address;
};

export const cartItems = () => {
  return useSWR('/action/cart/getCart', fetchApiHub, revalidateOptions);
};

export const checkout = async () => {
  const res = await fetchApiHub('/action/cart/checkout', {
    method: 'POST',
  });
  mutate('/action/cart/getCart', res);
};

export const orderHistory = async () => {
  return await fetchApiHub('/action/cart/getOrders');
};

export const getProjectSettings = async () => {
  return await fetchApiHub('/action/project/getProjectSettings');
};

export const getShippingMethods = async () => {
  return await fetchApiHub('/action/cart/getShippingMethods');
};

export const addItem = async (variant: Variant, quantity: number) => {
  const payload = {
    variant: {
      sku: variant.sku,
      count: quantity,
    },
  };
  const res = await fetchApiHub(
    '/action/cart/addToCart',
    {
      method: 'POST',
    },
    payload,
  );
  mutate('/action/cart/getCart', res, { revalidate: false });
};

export const removeItem = async (lineItemId: string) => {
  const payload = {
    lineItem: { id: lineItemId },
  };

  const res = await fetchApiHub(
    '/action/cart/removeLineItem',
    {
      method: 'POST',
    },
    payload,
  );
  mutate('/action/cart/getCart', res, { revalidate: false });
};

export const updateItem = async (lineItemId: string, newQuantity: number) => {
  const payload = {
    lineItem: {
      id: lineItemId,
      count: newQuantity,
    },
  };
  const res = await fetchApiHub(
    '/action/cart/updateLineItem',
    {
      method: 'POST',
    },
    payload,
  );
  mutate('/action/cart/getCart', res, { revalidate: false });
};

export const updateCart = async (payload: CartDetails): Promise<Cart> => {
  const res = await fetchApiHub(
    '/action/cart/updateCart',
    {
      headers: {
        accept: 'application/json',
      },
      credentials: 'include',
      method: 'POST',
    },
    payload,
  );
  mutate('/action/cart/getCart', res, { revalidate: false });
  return res;
};

export const setShippingMethod = async (shippingMethodId: string) => {
  const payload = {
    shippingMethod: {
      id: shippingMethodId,
    },
  };

  const res = await fetchApiHub(
    `/action/cart/setShippingMethod?shippingMethodId=${shippingMethodId}`,
    {
      headers: {
        accept: 'application/json',
      },
      credentials: 'include',
      method: 'POST',
    },
    payload,
  );
  mutate('/action/cart/getCart', res, { revalidate: false });
};

export const redeemDiscountCode = async (code: string) => {
  const payload = {
    code: code,
  };
  const res = await fetchApiHub(
    `/action/cart/redeemDiscount`,
    {
      headers: {
        accept: 'application/json',
      },
      credentials: 'include',
      method: 'POST',
    },
    payload,
  );
  mutate('/action/cart/getCart', res, { revalidate: false });
};

export const redeemPromoCouponCode = async (code: string) => {
  const res = await fetchApiHub(
    '/action/cart/redeemPromoCouponCode',
    {
      headers: {
        accept: 'application/json',
      },
      credentials: 'include',
      method: 'POST',
    },
    { code },
  );

  mutate('/action/cart/redeemPromoCouponCode', res, { revalidate: false });
};

export const removeDiscountCode = async (discount: Discount) => {
  const payload = {
    discountId: discount.discountId,
  };
  const res = await fetchApiHub(
    '/action/cart/removeDiscount',
    {
      headers: {
        accept: 'application/json',
      },
      credentials: 'include',
      method: 'POST',
    },
    payload,
  );
  mutate('/action/cart/getCart', res, { revalidate: false });
};
