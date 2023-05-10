import ProductList from 'components/commercetools-ui/content/product-recommendations';

const ProductRecommendationsTastic = ({ data }) => {
  if (!data?.data?.dataSource) return <></>;
  const productRecommendationsResult = data?.data?.dataSource;
  const items = productRecommendationsResult.items;
  const totalItems = productRecommendationsResult.items.length;
  return <ProductList products={items} totalProducts={totalItems} />;
};

export default ProductRecommendationsTastic;
