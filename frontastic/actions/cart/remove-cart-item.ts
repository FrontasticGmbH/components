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

  console.log('item removed, ID:', lineItemId, res);
  mutate('/action/cart/getCart', res);
};
