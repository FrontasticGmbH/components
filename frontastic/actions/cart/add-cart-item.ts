import { mutate } from 'swr';
import { fetchApiHub } from 'frontastic';
import { Variant } from '../../../../types/product/Variant';

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
