import { useState } from 'react';
// import { Product } from '../../../../../types/product/Product';
import { Variant } from '../../../../../types/product/Variant';
// import { CurrencyHelpers } from 'helpers/CurrencyHelpers';
import { useCart } from 'frontastic';
import ProductDetails, { UIProduct, UIColor, UISize } from 'components/products/product-details';

function ProductDetailsTastic({ data }) {
  const [currentVariantIdx, setCurrentVariantIdx] = useState(0);
  const { addItem } = useCart();

  const { product } = data;
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
      product.variants.map((v: Variant) => [
        v.attributes.color.label,
        {
          name: v.attributes.color.label,
          key: v.attributes.color.key,
          bgColor: `bg-${grayFix(v.attributes.color.key)}-500`,
          selectedColor: `ring-${grayFix(v.attributes.color.key)}-500`,
        },
      ]),
    ).values(),
  ] as UIColor[];

  const sizes = [
    ...new Map(product.variants.map((v: Variant) => [v.attributes.commonSize.label, v.attributes.commonSize])).values(),
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
    images: variant.images.map((img: string, id: number) => ({
      id: `${variant.sku}-${id}`,
      src: img,
      alt: variant.sku,
    })),
    colors,
    sizes,

    description: `
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean in purus iaculis, bibendum felis quis, gravida ipsum. Nulla faucibus nisl sed libero tempor sodales. Aenean ut iaculis nulla. Curabitur turpis leo, pretium sit amet condimentum id, dignissim a turpis. Praesent pharetra tortor id ipsum molestie egestas. Integer accumsan nibh nibh, quis fringilla libero fringilla et. Ut vestibulum, ex at lacinia vestibulum, erat ligula pharetra lectus, quis porttitor libero tortor ac leo.</p>
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

  const handleAddToCart = () => {
    addItem(variant, 1);
  };

  return (
    <ProductDetails
      product={prod}
      onAddToCart={handleAddToCart}
      variant={variant}
      onChangeVariantIdx={setCurrentVariantIdx}
    />
  );
}

export default ProductDetailsTastic;
