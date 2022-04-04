import { CurrencyHelpers } from 'helpers/CurrencyHelpers';
import React from 'react';
import { Product } from '../../../../../types/product/Product';

interface Props {
  products: Product[];
}

const List: React.FC<Props> = ({ products }) => {
  return (
    <div className="mx-auto max-w-2xl pb-16 pt-8 lg:max-w-7xl lg:pt-4">
      <h2 className="sr-only">Products</h2>
      <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products?.map((product) => (
          <a key={product.productId} href={product._url} className="group">
            <div className="aspect-w-1 aspect-h-1 w-full rounded-lg bg-gray-200 transition-shadow hover:shadow-xl xl:aspect-w-7 xl:aspect-h-8">
              <img
                src={product.variants[0].images[0]}
                alt={product.name}
                className="h-full w-full rounded-lg object-cover object-center"
              />
            </div>
            <h3 className="mt-4 overflow-hidden truncate text-lg font-bold text-gray-700 ">{product.name}</h3>
            <p className="text-sm text-gray-900">{CurrencyHelpers.formatForCurrency(product.variants[0].price)}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default List;
