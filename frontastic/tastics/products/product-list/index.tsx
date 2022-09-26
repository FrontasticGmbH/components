import ProductList from 'components/commercetools-ui/products/product-list';

function ProductListTastic({ data }) {
  if (!data?.data?.dataSource) return <></>;

  const { items, facets, category, previousCursor, nextCursor, total, totalItems } = data.data.dataSource;

  return (
    <ProductList
      products={items}
      totalProducts={total}
      facets={facets}
      category={category}
      previousCursor={previousCursor}
      nextCursor={nextCursor}
    />
  );
}

export default ProductListTastic;
