import React from 'react';
import NextLink from 'next/link';
import { Product } from '@Types/content/dynamicyield/Product';
import { useFormat } from 'helpers/hooks/useFormat';
import Image from 'frontastic/lib/image';
import Price from '../../price';

interface Props {
  products: Product[];
  filtering?: boolean;
}

const List: React.FC<Props> = ({ products, filtering }) => {
  //i18n messages
  const { formatMessage: formatProductMessage } = useFormat({ name: 'product' });

  return (
    <div className="mx-auto max-w-2xl pt-8 pb-16 lg:max-w-7xl">
      <h2 className="sr-only">{formatProductMessage({ id: 'products', defaultMessage: 'Products' })}</h2>
      <ul
        className={`grid grid-cols-1 align-bottom sm:grid-cols-2 md:grid-cols-3 md:gap-x-12 md:gap-y-16 lg:grid-cols-${
          filtering ? '3' : '4'
        }`}
      >
        {products?.map((product) => (
          <li key={product.sku} className="mb-8 flex justify-center self-end md:mb-0">
            <NextLink href="https://commercetools.com">
              <a className="group">
                <div className="relative w-52 rounded-lg transition-shadow hover:shadow-xl">
                  <Image src={product.imageUrl || ''} alt={product.name} layout="fill" className="rounded-lg" />
                </div>
                <h3 className="mt-4 w-52 overflow-hidden truncate text-lg font-bold text-gray-700 dark:text-light-100">
                  {product.name}
                </h3>
                <div className="flex">
                  <Price price={product.price} className={`text-sm text-gray-900 dark:text-light-100`} />
                </div>
              </a>
            </NextLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
