import { Cart } from '@Types/cart/Cart';
import { useFormat } from 'helpers/hooks/useFormat';
import LineItem from './item';

interface Props {
  readonly cart: Cart;
  readonly editItemQuantity: (lineItemId: string, newQuantity: number) => void;
  readonly goToProductPage: (_url: string) => void;
  readonly removeItem: (lineItemId: string) => void;
}

const ItemList = ({ cart, editItemQuantity, goToProductPage, removeItem }: Props) => {
  //i18n messages
  const { formatMessage: formatCartMessage } = useFormat({ name: 'cart' });

  return (
    <section aria-labelledby="cart-heading" className="lg:col-span-7">
      <h2 id="cart-heading" className="sr-only">
        {formatCartMessage({ id: 'cart.shopping.items', defaultMessage: 'Items in your shopping cart' })}
      </h2>

      <ul role="list" className="divide-y divide-gray-200 border-b border-gray-200">
        {cart.lineItems.map((lineItem, i) => (
          <LineItem
            key={i}
            lineItem={lineItem}
            editItemQuantity={editItemQuantity}
            goToProductPage={goToProductPage}
            removeItem={removeItem}
          />
        ))}
      </ul>
    </section>
  );
};

export default ItemList;
