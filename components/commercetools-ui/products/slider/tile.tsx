import React from 'react';
import NextLink from 'next/link';
import { Product } from '@Types/product/Product';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import Image from 'frontastic/lib/image';

const Tile: React.FC<Product> = ({ variants, name, _url }) => {
  return (
    <NextLink href={_url}>
      <a className="relative w-full">
        <Image src={variants[0].images[0]} alt={name} className="h-80 w-full object-cover group-hover:opacity-75" />
        <div>
          <h3 className="mt-4 overflow-hidden truncate text-sm font-bold text-gray-700 dark:text-light-100">{name}</h3>
          <p className="text-sm text-gray-900 dark:text-light-100">
            {CurrencyHelpers.formatForCurrency(variants[0].price)}
          </p>
        </div>
      </a>
    </NextLink>
  );
};

export default Tile;
