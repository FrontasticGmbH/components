import React from 'react';
import NextLink from 'next/link';
import { Product } from '@Types/product/Product';
import Image from 'frontastic/lib/image';
import Price from '../../price';

const Tile: React.FC<Product> = ({ variants, name, _url }) => {
  return (
    <NextLink href={_url || ''}>
      <a className="relative w-full">
        <Image src={variants[0].images?.[0]} alt={name} className="h-80 w-full object-cover group-hover:opacity-75" />
        <div>
          <h3 className="mt-4 overflow-hidden truncate text-sm font-bold text-neutral-700">{name}</h3>
          <div className="flex">
            {variants[0].price && (
              <Price
                price={variants[0].price}
                className={`${variants[0].discountedPrice ? 'line-through' : ''} text-sm text-gray-900`}
              />
            )}
            {variants[0].discountedPrice && (
              <Price price={variants[0].discountedPrice} className="ml-4 text-sm text-accent-400" />
            )}
          </div>
        </div>
      </a>
    </NextLink>
  );
};

export default Tile;
