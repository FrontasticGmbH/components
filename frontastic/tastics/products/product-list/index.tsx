import ProductList from 'components/commercetools-ui/products/product-list';

function ProductListTastic({ data }) {
  if (!data) return <></>;

  const { items, category, previousCursor, nextCursor } = data.data.dataSource;

  return (
    <ProductList
      products={items}
      category={category}
      previousCursor={previousCursor}
      nextCursor={nextCursor}
      facets={data.data.dataSource.facets}
    />
  );
}

export default ProductListTastic;
