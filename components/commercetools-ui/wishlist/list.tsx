import React, { useState, useEffect } from 'react';
import { LineItem } from '@Types/wishlist/LineItem';
import { Variant } from '@Types/wishlist/Variant';
import useMediaQuery from 'helpers/hooks/useMediaQuery';
import { mobile } from 'helpers/utils/screensizes';
import Spinner from '../spinner';
import WishlistCard from './wishlist-card';
import WishlistCardMobile from './wishlist-card-mobile';

export interface Props {
  items?: LineItem[];
  removeLineItems: (lineItem: LineItem) => void;
  addToCart: (variant: Variant) => Promise<void>;
}

const List: React.FC<Props> = ({ items, removeLineItems, addToCart }) => {
  const [isMobileSize] = useMediaQuery(mobile);

  return (
    <div className="flex justify-center">
      {isMobileSize ? (
        <div className={`grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4`}>
          {items.map((item) => (
            <WishlistCard key={item.lineItemId} item={item} removeLineItems={removeLineItems} addToCart={addToCart} />
          ))}
        </div>
      ) : (
        <div className="border-t-2">
          {items.map((item) => (
            <WishlistCardMobile
              key={item.lineItemId}
              item={item}
              removeLineItems={removeLineItems}
              addToCart={addToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default List;
