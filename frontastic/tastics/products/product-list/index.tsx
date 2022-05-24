import ProductList from 'components/frontastic-ui/products/product-list';
import { useFormat } from 'helpers/hooks/useFormat';

function ProductListTastic({ data }) {
  if (!data) return <></>;

  const { formatMessage } = useFormat({ name: 'product' });

  const { products, category, previousCursor, nextCursor } = data;

  if (!products || products.length == 0) {
    return <p>{formatMessage({ id: 'noProductsFound', defaultMessage: 'No products found.' })}</p>;
  }

  return (
    <ProductList
      products={products}
      category={category}
      previousCursor={previousCursor}
      nextCursor={nextCursor}
      facets={data.data.dataSource.facets}
    />
  );
}

export default ProductListTastic;
