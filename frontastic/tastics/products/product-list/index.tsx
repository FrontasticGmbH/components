import ProductList from 'components/frontastic-ui/products/product-list';

function ProductListTastic({ data }) {
  const { items } = data.data.dataSource;

  if (!items || items.length == 0) return <p>No products found.</p>;

  return <ProductList products={items} />;
}

export default ProductListTastic;
