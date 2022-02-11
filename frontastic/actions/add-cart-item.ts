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
  console.log('item added, ', variant, quantity, res);
  mutate('/action/cart/getCart', res);
};

// const { data } = useSWR(`${url}/action/cart/getCart`);

// const addToCart = async e => {
//   e.preventDefault();

//   mutate(`${url}/action/cart/getCart`);
// };
