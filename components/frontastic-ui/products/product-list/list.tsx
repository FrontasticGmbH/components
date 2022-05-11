import React from 'react';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { useFormat } from 'helpers/hooks/useFormat';
import Image from 'frontastic/lib/image';
import { Product } from '../../../../../types/product/Product';

interface Props {
  products: Product[];
}

const List: React.FC<Props> = ({ products }) => {
  //i18n messages
  const { formatMessage: formatProductMessage } = useFormat({ name: 'product' });

  return (
    <div className="pt-8 pb-16 mx-auto max-w-2xl lg:pt-4 lg:max-w-7xl">
      <h2 className="sr-only">{formatProductMessage({ id: 'products', defaultMessage: 'Products' })}</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products?.map((product) => (
          <a key={product.productId} href={product._url} className="group">
            <div className="w-full bg-gray-200 rounded-lg hover:shadow-xl transition-shadow aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8">
              <Image
                src={product.variants[0].images[0]}
                alt={product.name}
                className="object-cover object-center w-full h-full rounded-lg"
              />
            </div>
            <h3 className="overflow-hidden mt-4 text-lg font-bold text-gray-700 truncate ">{product.name}</h3>
            <p className="text-sm text-gray-900">{CurrencyHelpers.formatForCurrency(product.variants[0].price)}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default List;
