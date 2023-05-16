import ProductList from 'components/commercetools-ui/content/product-recommendations';

const ProductRecommendationsTastic = ({ data }) => {
  const pageTitle = data.pageTitle;
  const items = data?.data?.dataSource?.items;
  return <ProductList pageTitle={pageTitle} products={items} totalProducts={items.length} />;
};

export default ProductRecommendationsTastic;
