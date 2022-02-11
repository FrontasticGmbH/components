import ProductList from 'components/boostwind/products/product-list';

function ProductListTastic({ data }) {
  const { items } = data.data.dataSource;

  if (!items) return <p>No products found.</p>;

  return <ProductList products={items} />;
}

export default ProductListTastic;
