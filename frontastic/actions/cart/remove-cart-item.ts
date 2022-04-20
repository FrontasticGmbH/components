import { mutate } from 'swr';
import { fetchApiHub } from 'frontastic';

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
