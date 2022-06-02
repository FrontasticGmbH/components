import ProductList from 'components/commercetools-ui/products/product-list';
import { useFormat } from 'helpers/hooks/useFormat';

function ProductListTastic({ data }) {
  if (!data) return <></>;

  const { products, category, previousCursor, nextCursor } = data.data.dataSource;

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
