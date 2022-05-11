import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useFormat } from 'helpers/hooks/useFormat';
import { Cart } from '../../../../types/cart/Cart';
import { ShippingMethod } from '../../../../types/cart/ShippingMethod';
import Spinner from '../spinner';
import EmptyCart from './emptyCart';
import ItemList from './itemList';
import OrderSummary from './orderSummary';
import RelatedProducts from './relatedProducts';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export interface Props {
  cart: Cart;
  editItemQuantity: (lineItemId: string, newQuantity: number) => Promise<void>;
  removeItem: (lineItemId: string) => void;
  shippingMethods: ShippingMethod[];
}

const CartPage = ({ cart, editItemQuantity, removeItem, shippingMethods }: Props) => {
  const [loading, setLoading] = useState<boolean>(true);

  //i18n messages
  const { formatMessage: formatCartMessage } = useFormat({ name: 'cart' });

  const router = useRouter();

  const onCheckout = () => router.push('/checkout');

  const goToProductPage = (_url: string) => router.push(_url);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  if (!cart?.lineItems || cart.lineItems.length < 1) return <EmptyCart />;

  return (
    <main className="px-2 pt-16 pb-24 mx-auto max-w-2xl sm:px-4 lg:px-8 lg:max-w-7xl">
      <h1 className="pb-12 text-3xl font-extrabold tracking-tight text-center text-gray-900 sm:text-4xl">
        {formatCartMessage({ id: 'cart.shopping', defaultMessage: 'Shopping Cart' })}
      </h1>
      {loading ? (
        <div className="flex justify-center items-stretch py-10 px-12">
          <Spinner />
        </div>
      ) : (
        <form className="lg:grid lg:grid-cols-12 lg:gap-x-12 lg:items-start xl:gap-x-16">
          <ItemList
            cart={cart}
            editItemQuantity={editItemQuantity}
            goToProductPage={goToProductPage}
            removeItem={(lineItemId: string) => removeItem(lineItemId)}
          />
          <OrderSummary cart={cart} shippingMethod={shippingMethods?.[0]} onCheckout={onCheckout} />
        </form>
      )}

      <RelatedProducts />
    </main>
  );
};

export default CartPage;
