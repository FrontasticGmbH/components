import React, { useEffect, useState } from 'react';
import { Product } from '@Types/content/dynamicyield/Product';
import  List  from './list';
import { useFormat } from 'helpers/hooks/useFormat';
import NextLink from "next/link";
import {updateURLParams} from "../../../../helpers/utils/updateURLParams";


export interface Props {
  products: Product[];
  totalProducts: number;
}

export default function ProductList({ products, totalProducts }: Props) {

  const { formatMessage: formatProductMessage } = useFormat({ name: 'product' });
  const [previousPageURL, setPreviousPageURL] = useState<string>('/');
  const [nextPageURL, setNextPageURL] = useState<string>('/');

  const { formatMessage } = useFormat({ name: 'common' });


  const activeButtonClassName =
    'relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50';

  const disabledButtonClassName = 'pointer-events-none rounded bg-gray-500 py-2 px-4 font-bold text-white opacity-50';

  useEffect(() => {
    if (previousCursor) {
      setPreviousPageURL(updateURLParams([{ key: 'cursor', value: previousCursor }]));
    }

    if (nextCursor) {
      setNextPageURL(updateURLParams([{ key: 'cursor', value: nextCursor }]));
    }
  }, [previousCursor, nextCursor]);

  return (
    <div className="mt-10 px-1 sm:px-3 lg:px-6">
      <div className="mt-8 gap-16 lg:grid lg:grid-cols-3">

        <h6 className="col-span-2 hidden text-right dark:text-light-100 lg:block">
          {`${products.length} ${formatProductMessage({ id: 'items', defaultMessage: 'Items' })} ${totalProducts}`}
        </h6>
      </div>
      <div className="mt-10 px-1 sm:px-3 lg:px-6">

        <List products={products} />


      </div>
      <nav
        className="flex items-center justify-between border-t border-gray-200 py-3 px-4 sm:px-6"
        aria-label="Pagination"
      >
        <div className="flex flex-1 justify-between gap-x-1.5 sm:justify-end">
          <NextLink href={previousPageURL}>
            <a className={1==1 ? activeButtonClassName : disabledButtonClassName}>
              {formatMessage({ id: 'prev', defaultMessage: 'Previous' })}
            </a>
          </NextLink>
          <NextLink href={nextPageURL}>
            <a className={1==1 ? activeButtonClassName : disabledButtonClassName}>
              {formatMessage({ id: 'next', defaultMessage: 'Next' })}
            </a>
          </NextLink>
        </div>
      </nav>
    </div>
  );
}
