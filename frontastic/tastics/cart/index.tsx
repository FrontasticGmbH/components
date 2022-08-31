import React from 'react';
import Cart from 'components/commercetools-ui/cart';
import { useCart } from 'frontastic/provider';
import Head from 'next/head';
import { useFormat } from 'helpers/hooks/useFormat';

const CartTastic = ({ data }) => {
  const { formatMessage } = useFormat({ name: 'cart' });
  const { data: cartList, removeItem, updateItem } = useCart();
  const editItemQuantity = (lineItemId: string, newQuantity: number) => updateItem(lineItemId, newQuantity);

  return (
    <>
      <Head>
        <title>{formatMessage({ id: 'checkout', defaultMessage: 'checkout' })}</title>
        <meta name="description" content={formatMessage({ id: 'checkout', defaultMessage: 'checkout' })} />
      </Head>
      <Cart
        cart={cartList}
        removeItem={removeItem}
        editItemQuantity={editItemQuantity}
        pageTitle={data.pageTitle}
        emptyStateImage={data.emptyStateImage}
        emptyStateTitle={data.emptyStateTitle}
        emptyStateSubtitle={data.emptyStateSubtitle}
        emptyStateCTALabel={data.emptyStateCTALabel}
        emptyStateCTALink={data.emptyStateCTALink}
      />
    </>
  );
};

export default CartTastic;
