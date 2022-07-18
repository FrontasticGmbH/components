import ProductList from 'components/commercetools-ui/products/product-list';

function ProductListTastic({ data }) {
  if (!data) return <></>;

  const { items, facets, category, previousCursor, nextCursor, totalItems } = data.data.dataSource;

  return (
    <ProductList
      products={items}
      totalProducts={totalItems}
      facets={facets}
      category={category}
      previousCursor={previousCursor}
      nextCursor={nextCursor}
    />
  );
}

export default ProductListTastic;
