import { mutate } from 'swr';
import { fetchApiHub } from 'frontastic';

export const orderCart = async () => {
    const res = await fetchApiHub(
        '/action/cart/checkout',
        {
            method: 'POST',
        },
    );
    console.log('cart ordered, ', res);
    mutate('/action/cart/getCart', res);
};
