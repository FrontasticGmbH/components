import { Reference, ReferenceLink } from '../../../helpers/Reference';
import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import classNames from 'classnames';

interface CartButtonProps {
  cartItemCount?: number;
  cartLink?: Reference;
}

const CartButton: React.FC<CartButtonProps> = ({ cartItemCount, cartLink }) => {
  const cartButtonClassNames = {
    'cart-btn': 'flow-root',
    'cart-btn__wrap': 'group relative -m-2 flex items-center p-2',
    'cart-btn__icon': 'h-6 w-6 flex-shrink-0 text-[#25304D] group-hover:text-[#192038]',
    'cart-btn__badge': 'absolute -top-[-1px] -right-[2px] h-4 w-4 rounded-full bg-[#CE3E72] hover:bg-[#B22C5D]',
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
            <span className="sr-only">items in wishlist, view wishlist</span>
          </>
        )}
      </ReferenceLink>
    </div>
  );
};

export default CartButton;
