const ProductRecommendationsTastic = ({ data }) => {
  console.log( ' @@@@@@@@@@ ProductRecommendationsTastic @@@@@@@@@@@')
  console.log(data?.data?.dataSource)
  if (!data?.data?.dataSource) return <></>
  const productRecommendationsResult = data?.data?.dataSource
  return <div>Blog's title is campaign {productRecommendationsResult}</div>;
}
export default ProductRecommendationsTastic
