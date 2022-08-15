import { Cart } from '@Types/cart/Cart';
import { useFormat } from 'helpers/hooks/useFormat';
import { Fragment } from 'react';
import Item from './item';

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
    <section aria-labelledby="cart-heading" className="mb-5 md:mb-0 lg:col-span-7">
      <h2 id="cart-heading" className="sr-only">
        {formatCartMessage({ id: 'cart.shopping.items', defaultMessage: 'Items in your shopping cart' })}
      </h2>

      <ul className="grid md:gap-5" role="list">
        {cart.lineItems.map((lineItem, i) => (
          <li key={i}>
            {i < cart.lineItems.length && <hr className="md:hidden" />}
            <Item
              lineItem={lineItem}
              editItemQuantity={editItemQuantity}
              goToProductPage={goToProductPage}
              removeItem={removeItem}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ItemList;
