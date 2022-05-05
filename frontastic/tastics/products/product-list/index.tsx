import ProductList from 'components/frontastic-ui/products/product-list';

function ProductListTastic({ data }) {
  if (!data) return <></>;

  const { category, nextCursor, previousCursor } = data;

  const products = data.data.dataSource.items || data.items || data.products;

  if (!products || products.length == 0) return <p>No products found.</p>;

  return (
    <ProductList products={products} category={category} previousCursor={previousCursor} nextCursor={nextCursor} />
  );
}

export default ProductListTastic;
