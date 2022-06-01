import React from 'react';
import CartPage from 'components/commercetools-ui/cart';
import { useCart } from 'frontastic/provider';

const CartTastic = ({ data }) => {
  const { data: cartList, removeItem, updateItem, shippingMethods } = useCart();
  const editItemQuantity = (lineItemId: string, newQuantity: number) => updateItem(lineItemId, newQuantity);

  return (
    <CartPage
      cart={cartList}
      removeItem={removeItem}
      editItemQuantity={editItemQuantity}
      shippingMethods={shippingMethods?.data}
      pageTitle={data.pageTitle}
      emptyStateImage={data.emptyStateImage}
      emptyStateTitle={data.emptyStateTitle}
      emptyStateSubtitle={data.emptyStateSubtitle}
      emptyStateCTALabel={data.emptyStateCTALabel}
      emptyStateCTALink={data.emptyStateCTALink}
    />
  );
};

export default CartTastic;
