import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/outline';
import { useFormat } from 'helpers/hooks/useFormat';
import { Reference, ReferenceLink } from 'helpers/reference';

interface CartButtonProps {
  cartItemCount?: number;
  cartLink?: Reference;
}

const CartButton: React.FC<CartButtonProps> = ({ cartItemCount, cartLink }) => {
  //i18n messages
  const { formatMessage: formatCartMessage } = useFormat({ name: 'cart' });

  return (
    <div className="flow-root">
      <ReferenceLink target={cartLink} className="group relative -m-2 flex items-center p-2">
        <ShoppingCartIcon
          className="h-6 w-6 shrink-0 text-primary-400 group-hover:text-primary-500"
          aria-hidden="true"
        />
        {cartItemCount > 0 && (
          <>
            <span className="absolute -top-[-1px] -right-[2px] h-4 w-4 rounded-full bg-accent-400 hover:bg-accent-500">
              <span className="font-small flex h-full w-full items-center justify-center text-[12px] text-white group-hover:text-white">
                {cartItemCount}
              </span>
            </span>
            <span className="sr-only">
              {formatCartMessage({
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
