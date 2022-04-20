import { mutate } from 'swr';
import { fetchApiHub } from 'frontastic';

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
