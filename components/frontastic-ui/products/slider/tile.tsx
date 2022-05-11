import React from 'react';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import Image from 'frontastic/lib/image';
import { Product } from '../../../../../types/product/Product';

const Tile: React.FC<Product> = ({ variants, name, _url }) => {
  return (
    <a className="relative w-full" href={_url}>
      <Image src={variants[0].images[0]} alt={name} className="object-cover w-full h-80 group-hover:opacity-75" />
      <div>
        <h3 className="overflow-hidden mt-4 text-sm font-bold text-gray-700 truncate">{name}</h3>
        <p className="text-sm text-gray-900">{CurrencyHelpers.formatForCurrency(variants[0].price)}</p>
      </div>
    </a>
  );
};

export default Tile;
