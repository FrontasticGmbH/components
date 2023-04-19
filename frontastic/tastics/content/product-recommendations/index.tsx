import ProductList from "../../../../components/commercetools-ui/content/product-recommendations";
import { Product } from '@Types/content/dynamicyield/Product';

const ProductRecommendationsTastic = ({ data }) => {

  if (!data?.data?.dataSource) return <></>
  const productRecommendationsResult = data?.data?.dataSource
  const productRecommendationObj = JSON.parse(productRecommendationsResult)

  const variation = productRecommendationObj?.choices[0]?.variations[0]
  console.log( ' @@@@@@@@@@ ProductRecommendationsTastic @@@@@@@@@@@')
  console.log(variation?.payload?.data)
  const slots = variation?.payload?.data?.slots

  const items: Product[] = mapSlotsToProducts(slots)
  const totalItems : number = items.length
  // const { items,  totalItems } = productRecommendationsResult;

  return (<ProductList
    products={items}
    totalProducts={totalItems}
  />)
}

function mapSlotsToProducts(slots : any[]): Product[] {
  const products = []
  slots.forEach(item => {
    console.log(item?.productData)
    const product : Product = {
      sku : item?.sku,
    name: item?.productData?.name,
      description: item?.productData?.description,
      imageUrl: item?.productData?.image_url,
      categories: item?.productData?.categories,
      productType: item?.productData?.group_id
  }

    products.push(product)

  })

  return products

}
export default ProductRecommendationsTastic
