import { CurrencyHelpers } from 'helpers/CurrencyHelpers';
import React from 'react';
import { Product } from '../../../../../types/product/Product';

interface Props {
  products: Product[];
}

const List: React.FC<Props> = ({ products }) => {
  return (
    <div className="max-w-2xl mx-auto pb-16 pt-8 lg:pt-4 lg:max-w-7xl">
      <h2 className="sr-only">Products</h2>
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <a key={product.productId} href={product._url} className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg xl:aspect-w-7 xl:aspect-h-8 transition-shadow hover:shadow-xl">
              <img
                src={product.variants[0].images[0]}
                alt={product.name}
                className="w-full h-full object-center object-cover rounded-lg"
              />
            </div>
            <h3 className="mt-4 text-lg font-bold text-gray-700 overflow-hidden truncate ">{product.name}</h3>
            <p className="text-sm text-gray-900">{CurrencyHelpers.formatForCurrency(product.variants[0].price)}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default List;
