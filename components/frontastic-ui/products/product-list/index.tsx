import React from 'react';
import { useRouter } from 'next/router';
import List from './List';
import Breadcrumb from 'components/frontastic-ui/breadcrumb';
import Laddercrumb from 'components/frontastic-ui/laddercrumb';
import useMediaQuery from 'helpers/hooks/useMediaQuery';
import { Product } from '../../../../../types/product/Product';
interface Props {
  products: Product[];
}

export default function ProductList({ products }: Props) {
  const [isLargerThan1024] = useMediaQuery(1024);

  const router = useRouter();

  const categories = router.asPath
    .split('/')
    .filter(Boolean)
    .map((category) => (
      <span key={category} className="capitalize">
        {category}
      </span>
    ));

  return products.length > 0 ? (
    <div className="mt-10 bg-white px-4 sm:px-6 lg:px-8">
      {/* <div className="cursor-default">
        {isLargerThan1024 ? (
          <Breadcrumb Separator="/">{categories}</Breadcrumb>
        ) : (
          <Laddercrumb>{categories}</Laddercrumb>
        )}
      </div> */}
      {products && <List products={products} />}
    </div>
  ) : (
    <></>
  );
}
