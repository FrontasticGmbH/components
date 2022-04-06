import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import List from './List';
import Breadcrumb from 'components/frontastic-ui/breadcrumb';
import Laddercrumb from 'components/frontastic-ui/laddercrumb';
import useMediaQuery from '../../../../helpers/hooks/useMediaQuery';
import { Product } from '../../../../../types/product/Product';
import { useFormat } from 'helpers/hooks/useFormat';
import { updateURLParams } from 'helpers/utils/updateURLParams';

export interface ProductListProps {
  products: Product[];
  previousCursor: string;
  nextCursor: string;
  category: string;
}

export default function ProductList({ products, previousCursor, nextCursor, category }: ProductListProps) {
  const [previousPageURL, setPreviousPageURL] = useState<string>('');
  const [nextPageURL, setNextPageURL] = useState<string>('');

  //i18n messages
  const { formatMessage } = useFormat({ name: 'common' });

  const [isLargerThan1024] = useMediaQuery(1024);

  // const router = useRouter();

  // const categories = router.asPath
  //   .split('/')
  //   .filter(Boolean)
  //   .map((category) => (
  //     <span key={category} className="capitalize">
  //       {category}
  //     </span>
  //   ));

  const activeButtonClassName =
    'relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50';

  const disabledButtonClassName = 'pointer-events-none rounded bg-gray-500 py-2 px-4 font-bold text-white opacity-50';

  useEffect(() => {
    setPreviousPageURL(updateURLParams('cursor', previousCursor));
    setNextPageURL(updateURLParams('cursor', nextCursor));
  }, []);

  return (
    <div className="mt-10 bg-white px-4 sm:px-6 lg:px-8">
      {/* <div className="cursor-default">
        {isLargerThan1024 ? (
          <Breadcrumb Separator="/">{categories}</Breadcrumb>
        ) : (
          <Laddercrumb>{categories}</Laddercrumb>
        )}
      </div> */}
      <List products={products} />

      <nav
        className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6"
        aria-label="Pagination"
      >
        <div className="flex flex-1 justify-between gap-x-1.5 sm:justify-end">
          <a href={previousPageURL} className={previousCursor ? activeButtonClassName : disabledButtonClassName}>
            {formatMessage({ id: 'prev', defaultMessage: 'Previous' })}
          </a>
          <a href={nextPageURL} className={nextCursor ? activeButtonClassName : disabledButtonClassName}>
            {formatMessage({ id: 'next', defaultMessage: 'Next' })}
          </a>
        </div>
      </nav>
    </div>
  );
}
