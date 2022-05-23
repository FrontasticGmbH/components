import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Cart } from '@Types/cart/Cart';
import { ShippingMethod } from '@Types/cart/ShippingMethod';
import { useFormat } from 'helpers/hooks/useFormat';
import { Reference } from 'helpers/reference';
import Spinner from '../spinner';
import EmptyCart from './emptyCart';
import ItemList from './itemList';
import OrderSummary from './orderSummary';

export interface Props {
  pageTitle?: string;
  emptyStateImage?: { media: any } | any;
  emptyStateTitle?: string;
  emptyStateSubtitle?: string;
  emptyStateCTALabel?: string;
  emptyStateCTALink?: Reference;
  cart: Cart;
  editItemQuantity: (lineItemId: string, newQuantity: number) => Promise<void>;
  removeItem: (lineItemId: string) => void;
  shippingMethods: ShippingMethod[];
}

const CartPage = ({
  cart,
  editItemQuantity,
  removeItem,
  shippingMethods,
  pageTitle,
  emptyStateImage,
  emptyStateTitle,
  emptyStateSubtitle,
  emptyStateCTALabel,
  emptyStateCTALink,
}: Props) => {
  const [loading, setLoading] = useState<boolean>(true);

  //i18n messages
  const { formatMessage: formatCartMessage } = useFormat({ name: 'cart' });

  const router = useRouter();

  const onCheckout = () => router.push('/checkout');

  const goToProductPage = (_url: string) => router.push(_url);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  if (!cart?.lineItems || cart.lineItems.length < 1)
    return (
      <EmptyCart
        pageTitle={pageTitle}
        image={emptyStateImage}
        title={emptyStateTitle}
        subtitle={emptyStateSubtitle}
        ctaLabel={emptyStateCTALabel}
        ctaLink={emptyStateCTALink}
      />
    );

  return (
    <main className="mx-auto max-w-2xl px-2 pt-16 pb-24 sm:px-4 lg:max-w-7xl lg:px-8">
      <h1 className="pb-12 text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {formatCartMessage({ id: 'cart.shopping', defaultMessage: 'Shopping Cart' })}
      </h1>
      {loading ? (
        <div className="flex items-stretch justify-center py-10 px-12">
          <Spinner />
        </div>
      ) : (
        <form className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
          <ItemList
            cart={cart}
            editItemQuantity={editItemQuantity}
            goToProductPage={goToProductPage}
            removeItem={(lineItemId: string) => removeItem(lineItemId)}
          />
          <OrderSummary cart={cart} shippingMethod={shippingMethods?.[0]} onCheckout={onCheckout} />
        </form>
      )}
    </main>
  );
};

export default CartPage;
