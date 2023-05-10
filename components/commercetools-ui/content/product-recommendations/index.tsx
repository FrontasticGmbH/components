import { Product } from '@Types/content/dynamicyield/Product';
import { useFormat } from 'helpers/hooks/useFormat';
import List from './list';

export interface Props {
  products: Product[];
  totalProducts: number;
}

export default function ProductList({ products, totalProducts }: Props) {
  const { formatMessage: formatProductMessage } = useFormat({ name: 'product' });

  return (
    <div className="mt-10 px-1 sm:px-3 lg:px-6">
      <div className="mt-8 gap-16 lg:grid lg:grid-cols-3">
        <p>Product Recommendations</p>
        <h6 className="col-span-2 hidden text-right dark:text-light-100 lg:block">
          {`${products.length} ${formatProductMessage({ id: 'items', defaultMessage: 'Items' })} ${totalProducts}`}
        </h6>
      </div>
      <div className="mt-10 px-1 sm:px-3 lg:px-6">
        <List products={products} />
      </div>
    </div>
  );
}
