import { useCallback, useMemo } from 'react';
import { Discount } from 'shared/types/cart/Discount';
import useSWR, { mutate } from 'swr';
import useI18n from 'helpers/hooks/useI18n';
import mapCosts from 'helpers/utils/mapCosts';
import { sdk } from 'sdk';
import { Cart } from 'shared/types/cart';
import { Order } from 'shared/types/cart/Order';
import { Variant } from 'shared/types/product';
import { revalidateOptions } from 'frontastic';
import { CartDetails, UseCartReturn } from './types';

const useCart = (): UseCartReturn => {
  const extensions = sdk.composableCommerce;

  const { currency } = useI18n();

  const result = useSWR('/action/cart/getCart', extensions.cart.getCart, revalidateOptions);

  const shippingMethodsResults = useSWR(
    '/action/cart/getShippingMethods',
    extensions.cart.getShippingMethods,
    revalidateOptions,
  );

  const data = result.data?.isError ? {} : { data: result.data?.data as unknown as Cart };

  const shippingMethods = shippingMethodsResults.data?.isError ? {} : { data: shippingMethodsResults.data?.data };

  const totalItems = (data.data as Cart)?.lineItems?.reduce((acc, curr) => acc + (curr.count as number), 0) ?? 0;

  const isEmpty = !data?.data?.lineItems?.length;

  const isShippingAccurate = !!data?.data?.shippingInfo;

  const hasOutOfStockItems = !!data?.data?.lineItems?.some((lineItem) => !lineItem.variant?.isOnStock);

  const transaction = useMemo(() => mapCosts({ reference: 'cart', cart: data.data, currency }), [data.data, currency]);

  const addItem = useCallback(async (variant: Variant, quantity: number) => {
    const extensions = sdk.composableCommerce;

    const payload = {
      variant: {
        sku: variant.sku,
        count: quantity,
      },
    };

    const res = await extensions.cart.addItem(payload);
    mutate('/action/cart/getCart', res);
  }, []);

  const orderCart = useCallback(async () => {
    const res = await sdk.callAction({ actionName: 'cart/checkout' });
    mutate('/action/cart/getCart');

    return (res.isError ? {} : res.data) as Order;
  }, []);

  const getOrder = useCallback(async (orderId: Order['orderId']) => {
    const res = await sdk.callAction({ actionName: 'cart/getOrder', payload: { orderId: orderId } });
    mutate('/action/cart/getCart');

    return (res.isError ? {} : res.data) as Order;
  }, []);

  const orderHistory = useCallback(async () => {
    const extensions = sdk.composableCommerce;

    const res = await extensions.cart.getOrderHistory();

    return res.isError ? ([] as Order[]) : (res.data as Order[]);
  }, []);

  const getProjectSettings = useCallback(async () => {
    const extensions = sdk.composableCommerce;

    const res = await extensions.project.getSettings();

    return res.isError ? {} : res.data;
  }, []);

  const removeItem = useCallback(async (lineItemId: string) => {
    const extensions = sdk.composableCommerce;

    const payload = {
      lineItem: { id: lineItemId },
    };

    const res = await extensions.cart.removeItem(payload);
    mutate('/action/cart/getCart', res);
  }, []);

  const updateItem = useCallback(async (lineItemId: string, newQuantity: number) => {
    const extensions = sdk.composableCommerce;

    const payload = {
      lineItem: {
        id: lineItemId,
        count: newQuantity,
      },
    };
    const res = await extensions.cart.updateItem(payload);
    mutate('/action/cart/getCart', res);
  }, []);

  const updateCart = useCallback(async (payload: CartDetails): Promise<Cart> => {
    const extensions = sdk.composableCommerce;

    const res = await extensions.cart.updateCart(payload);

    mutate('/action/cart/getCart', res);

    return (res.isError ? {} : res.data) as Cart;
  }, []);

  const setShippingMethod = useCallback(async (shippingMethodId: string) => {
    const extensions = sdk.composableCommerce;

    const payload = {
      shippingMethod: {
        id: shippingMethodId,
      },
    };

    const res = await extensions.cart.setShippingMethod(payload);

    mutate('/action/cart/getCart', res);
  }, []);

  const redeemDiscountCode = useCallback(async (code: string) => {
    const extensions = sdk.composableCommerce;

    const payload = {
      code: code,
    };
    const res = await extensions.cart.redeemDiscountCode(payload);

    if (!res.isError && (res.data as Cart).cartId) {
      mutate('/action/cart/getCart', res);
    } else {
      throw new Error('code not valid');
    }
  }, []);

  const removeDiscountCode = useCallback(async (discount: Discount) => {
    const extensions = sdk.composableCommerce;

    const res = await extensions.cart.removeDiscountCode({ discountId: discount.discountId as string });

    mutate('/action/cart/getCart', res);
  }, []);

  return {
    ...data,
    totalItems,
    isEmpty,
    isShippingAccurate,
    hasOutOfStockItems,
    transaction,
    addItem,
    updateCart,
    setShippingMethod,
    removeItem,
    updateItem,
    shippingMethods,
    orderCart,
    getOrder,
    orderHistory,
    getProjectSettings,
    redeemDiscountCode,
    removeDiscountCode,
  };
};

export default useCart;
