import React from 'react';
import CartPage from 'components/frontastic-ui/cart';
import { useCart } from 'frontastic/provider';

const CartTastic = () => {
  const { data, removeItem, updateItem, shippingMethods } = useCart();
  const editItemQuantity = (lineItemId: string, newQuantity: number) => updateItem(lineItemId, newQuantity);

  console.log('CART SHIP', data);

  return (
    <CartPage
      cart={data}
      removeItem={removeItem}
      editItemQuantity={editItemQuantity}
      shippingMethods={shippingMethods?.data}
    />
  );
};

export default CartTastic;
