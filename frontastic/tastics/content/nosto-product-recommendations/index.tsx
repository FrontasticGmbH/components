import ProductList from 'components/commercetools-ui/content/product-recommendations';

const NostoProductRecommendationsTastic = ({ data }) => {
  const pageTitle = data.pageTitle;
  const recommendedProducts: [] = data?.data?.dataSource?.recommendedProducts;
  return (
    <ProductList pageTitle={pageTitle} products={recommendedProducts} totalProducts={recommendedProducts.length} />
  );
};

export default NostoProductRecommendationsTastic;
