import React from 'react';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { Product } from '../../../../../types/product/Product';

const Tile: React.FC<Product> = ({ variants, name, _url }) => {
  return (
    <a className="relative w-full" href={_url}>
      <img src={variants[0].images[0]} alt={name} className="h-80 w-full object-cover group-hover:opacity-75" />
      <div>
        <h3 className="mt-4 overflow-hidden truncate text-sm font-bold text-gray-700">{name}</h3>
        <p className="text-sm text-gray-900">{CurrencyHelpers.formatForCurrency(variants[0].price)}</p>
      </div>
    </a>
  );
};

export default Tile;
