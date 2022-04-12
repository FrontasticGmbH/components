import { useFormat } from 'helpers/hooks/useFormat';
import { useRouter } from 'next/router';
import { Cart } from '../../../../types/cart/Cart';
import { ShippingMethod } from '../../../../types/cart/ShippingMethod';
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
  //i18n messages
  const { formatMessage: formatCartMessage } = useFormat({ name: 'cart' });

  const router = useRouter();

  const onCheckout = () => router.push('/checkout');

  const goToProductPage = (_url: string) => router.push(_url);

  if (!cart?.lineItems || cart.lineItems.length < 1) {
    return <EmptyCart />;
  }

  return (
    <main className="mx-auto max-w-2xl px-4 pt-16 pb-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h1 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-xl">
        {formatCartMessage({ id: 'cart.shopping', defaultMessage: 'Shopping Cart' })}
      </h1>

      <form className="lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
        <ItemList
          cart={cart}
          editItemQuantity={editItemQuantity}
          goToProductPage={goToProductPage}
          removeItem={(lineItemId: string) => removeItem(lineItemId)}
        />
        <OrderSummary cart={cart} shippingMethod={shippingMethods?.[0]} onCheckout={onCheckout} />
      </form>

      <RelatedProducts />
    </main>
  );
};

export default CartPage;
