import ProductList from 'components/frontastic-ui/products/product-list';
import { useFormat } from 'helpers/hooks/useFormat';

function ProductListTastic({ data }) {
  if (!data) return <></>;

  const { products, category, previousCursor, nextCursor } = data;

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
