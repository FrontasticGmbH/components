import { Reference, ReferenceLink } from 'helpers/reference';
import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import classNames from 'classnames';
import { useFormat } from 'helpers/hooks/useFormat';

interface CartButtonProps {
  cartItemCount?: number;
  cartLink?: Reference;
}

const CartButton: React.FC<CartButtonProps> = ({ cartItemCount, cartLink }) => {
  //i18n messages
  const { formatMessage: formatCartMessge } = useFormat({ name: 'cart' });

  const cartButtonClassNames = {
    'cart-btn': 'flow-root',
    'cart-btn__wrap': 'group relative -m-2 flex items-center p-2',
    'cart-btn__icon': 'h-6 w-6 flex-shrink-0 text-primary-400 group-hover:text-primary-500',
    'cart-btn__badge': 'absolute -top-[-1px] -right-[2px] h-4 w-4 rounded-full bg-accent-400 hover:bg-accent-500',
    'cart-btn__badge-text':
      'font-small flex h-full w-full items-center justify-center text-[12px] text-white group-hover:text-white',
  };
  return (
    <div className={classNames(cartButtonClassNames['cart-btn'])}>
      <ReferenceLink target={cartLink} className={classNames(cartButtonClassNames['cart-btn__wrap'])}>
        <ShoppingCartIcon className={classNames(cartButtonClassNames['cart-btn__icon'])} aria-hidden="true" />
        {cartItemCount > 0 && (
          <>
            <span className={classNames(cartButtonClassNames['cart-btn__badge'])}>
              <span className={classNames(cartButtonClassNames['cart-btn__badge-text'])}>{cartItemCount}</span>
            </span>
            <span className="sr-only">
              {formatCartMessge({
                id: 'cart.items.in.view',
                defaultMessage: 'items in cart, view cart',
              })}
            </span>
          </>
        )}
      </ReferenceLink>
    </div>
  );
};

export default CartButton;
