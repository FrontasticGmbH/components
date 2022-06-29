import React from 'react';
import NextLink from 'next/link';
import { Product } from '@Types/product/Product';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { useFormat } from 'helpers/hooks/useFormat';
import Image from 'frontastic/lib/image';

interface Props {
  products: Product[];
  filtering?: boolean;
}

const List: React.FC<Props> = ({ products, filtering }) => {
  //i18n messages
  const { formatMessage: formatProductMessage } = useFormat({ name: 'product' });

  return (
    <div className="mx-auto max-w-2xl pt-8 pb-16 lg:max-w-7xl lg:pt-4">
      <h2 className="sr-only">{formatProductMessage({ id: 'products', defaultMessage: 'Products' })}</h2>
      <div
        className={`grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${
          filtering ? '3' : '4'
        } xl:gap-x-8`}
      >
        {products?.map((product) => (
          <NextLink href={product._url} key={product.productId}>
            <a className="group">
              <div className="aspect-w-1 aspect-h-1 w-full rounded-lg bg-gray-200 transition-shadow hover:shadow-xl xl:aspect-w-7 xl:aspect-h-8">
                <Image
                  src={product.variants[0].images[0]}
                  alt={product.name}
                  className="h-full w-full rounded-lg object-cover object-center"
                />
              </div>
              <h3 className="mt-4 overflow-hidden truncate text-lg font-bold text-gray-700 dark:text-light-100">
                {product.name}
              </h3>
              <p className="text-sm text-gray-900 dark:text-light-100">
                {CurrencyHelpers.formatForCurrency(product.variants[0].price)}
              </p>
            </a>
          </NextLink>
        ))}
      </div>
    </div>
  );
};

export default List;
