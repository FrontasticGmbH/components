import { Address } from '@Types/account/Address';
import { Variant } from '@Types/product/Variant';
import useSWR, { mutate } from 'swr';
import { fetchApiHub } from 'frontastic';

export const cartItems = () => {
  return useSWR('/action/cart/getCart', fetchApiHub);
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
  mutate('/action/cart/getCart', res);
};

export const orderCart = async () => {
  const res = await fetchApiHub('/action/cart/checkout', {
    method: 'POST',
  });
  mutate('/action/cart/getCart', res);
};

export const orderHistory = async () => {
  const res = await fetchApiHub('/action/cart/getOrders');
  return res;
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
  mutate('/action/cart/getCart', res);
};

export const shippingMethods = () => {
  return useSWR('/action/cart/getShippingMethods', fetchApiHub);
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
  mutate('/action/cart/getCart', res);
};

export type CartDetails = {
  account?: { email: string };
  shipping?: Address;
  billing?: Address;
};

export const updateCart = async (payload: CartDetails) => {
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
  mutate('/action/cart/getCart', res);
};

export const setShippingMethod = async (shippingMethodId: string) => {
  const payload = {
    shippingMethod: {
      id: shippingMethodId,
    },
  };
  const res = await fetchApiHub(
    '/action/cart/setShippingMethod',
    {
      headers: {
        accept: 'application/json',
      },
      credentials: 'include',
      method: 'POST',
    },
    payload,
  );
  mutate('/action/cart/getCart', res);
};
