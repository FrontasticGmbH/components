import { fetchApiHub } from 'frontastic';

export const orderHistory = async () => {
  const res = await fetchApiHub('/action/cart/getOrders');
  return res;
};
