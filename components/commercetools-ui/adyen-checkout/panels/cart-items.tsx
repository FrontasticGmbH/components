import React, { FC } from 'react';
import { Cart } from '@Types/cart/Cart';
import { StringHelpers } from 'helpers/stringHelpers';
import Image from 'frontastic/lib/image';

export interface Props {
  readonly cart: Cart;
}

const CartItems: FC<Props> = ({ cart }) => {
  return (
    <ul role="list" className="flex-auto divide-y divide-gray-200 overflow-y-auto px-6">
      {cart.lineItems.map((lineItem, i) => (
        <li key={i} className="flex space-x-6 py-6">
          <Image
            src={lineItem.variant.images[0]}
            alt={lineItem.name}
            className="h-20 w-20 flex-none cursor-pointer rounded-md bg-gray-200 object-cover object-center"
          />
          <div className="flex flex-col justify-between space-y-4">
            <div className="space-y-1 text-sm font-medium">
              <h3 className="cursor-pointer text-gray-900 dark:text-light-100">
                <span className="pr-2">{`${lineItem.count}x`}</span> {lineItem.name}
              </h3>
              {lineItem.variant.attributes?.color && (
                <p className="text-gray-500 dark:text-light-100">
                  {StringHelpers.capitaliseFirstLetter(lineItem.variant.attributes.color.label)}
                </p>
              )}
              {lineItem.variant.attributes?.size && (
                <p className="capitalize text-gray-500 dark:text-light-100">{lineItem.variant.attributes.size}</p>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default CartItems;
