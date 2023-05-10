import ProductList from 'components/commercetools-ui/content/product-recommendations';

const ProductRecommendationsTastic = ({ data }) => {
  const items = data?.data?.dataSource?.items;
  return <ProductList products={items} totalProducts={items.length} />;
};

export default ProductRecommendationsTastic;
