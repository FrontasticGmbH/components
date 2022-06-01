import { useState } from 'react';
// import { Product } from '@Types/product/Product';
import { Product } from '@Types/product/Product';
import { Variant } from '@Types/product/Variant';
// import { CurrencyHelpers } from 'helpers/currencyHelpers';
import ProductDetails, { UIProduct, UIColor, UISize } from 'components/commercetools-ui/products/product-details';
import { useCart } from 'frontastic';
import { addToWishlist } from 'frontastic/actions/wishlist';

function ProductDetailsTastic({ data }) {
  const [currentVariantIdx, setCurrentVariantIdx] = useState(0);
  const { addItem } = useCart();

  const { product }: { product: Product } = data;
  const variant = product.variants[currentVariantIdx];

  if (!product || !variant) return null;

  // 🙈
  // feel free to add a map if there are later
  // more colors missing (or add to tailwind conf)
  const grayFix = (word: string) => (word === 'grey' ? 'gray' : word);

  // just two main features for now, colors and sizes.
  // we pick a unique list from the payload to build the
  // selector
  // Upon selecting a feature, color or size, we find the
  // selected variant from the list based on the selected
  // features..
  const colors = [
    ...new Map(
      product.variants?.map((v: Variant) => [
        v.attributes.color?.label,
        {
          name: v.attributes.color?.label,
          key: v.attributes.color?.key,
          bgColor: `bg-${grayFix(v.attributes.color?.key)}-500`,
          selectedColor: `ring-${grayFix(v.attributes.color?.key)}-500`,
        },
      ]),
    ).values(),
  ] as UIColor[];

  const sizes = [
    ...new Map(
      product.variants?.map((v: Variant) => [v.attributes.commonSize?.label, v.attributes.commonSize]),
    ).values(),
  ] as UISize[];

  // this maps the entire payload to a component
  // friendly datastructure, so data and presentation
  // stay decoupled.
  // TODO: properly type
  const prod: UIProduct = {
    name: product.name,
    // add variants as well, so we can select and filter
    variants: product.variants,
    price: variant.price,
    // rating: 4,
    images: variant.images?.map((img: string, id: number) => ({
      id: `${variant.sku}-${id}`,
      src: img,
      alt: variant.sku,
    })),
    colors,
    sizes,
    description: `
      <p>${product.description || ''}</p>
    `,

    details: [
      {
        name: 'Features',
        items: [
          variant.attributes.designer && `Designer: ${variant.attributes.designer.label}`,
          variant.attributes.gender && `Collection: ${variant.attributes.gender.label}`,
          variant.attributes.madeInItaly && `Made in Italy`,
        ],
      },
    ],
  };

  const handleAddToCart = (variant: Variant, quantity: number): Promise<void> => {
    return addItem(variant, 1);
  };

  const handleAddToWishList = () => {
    addToWishlist(variant.sku, 1);
  };

  return (
    <ProductDetails
      product={prod}
      onAddToCart={handleAddToCart}
      variant={variant}
      onChangeVariantIdx={setCurrentVariantIdx}
      onAddToWishlist={handleAddToWishList}
    />
  );
}

export default ProductDetailsTastic;
