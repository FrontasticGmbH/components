import { useState, useEffect, useMemo } from 'react';
import { useRouter } from 'next/router';
import { Product } from '@Types/product/Product';
import { Variant } from '@Types/product/Variant';
import ProductDetails, { UIProduct, UIColor, UISize } from 'components/commercetools-ui/products/product-details';
import { useCart, useWishlist } from 'frontastic';
import { addToWishlist } from 'frontastic/actions/wishlist';
import Head from 'next/head';

function ProductDetailsTastic({ data }) {
  const router = useRouter();
  const { product }: { product: Product } = data.data.dataSource;

  const [currentVariantIdx, setCurrentVariantIdx] = useState<number>(0);
  const [variant, setVariant] = useState<Variant>(product.variants[0]);
  const { addItem } = useCart();
  const { data: wishlist } = useWishlist();
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
      product?.variants?.map((v: Variant) => [
        v.attributes?.color?.label,
        {
          name: v.attributes?.color?.label,
          key: v.attributes?.color?.key,
          bgColor: `bg-${grayFix(v.attributes?.color?.key)}-500`,
          selectedColor: `ring-${grayFix(v.attributes?.color?.key)}-500`,
        },
      ]),
    ).values(),
  ] as UIColor[];

  const sizes = [
    ...new Map(
      product?.variants?.map((v: Variant) => [v.attributes?.commonSize?.label, v.attributes?.commonSize]),
    ).values(),
  ] as UISize[];

  // this maps the entire payload to a component
  // friendly datastructure, so data and presentation
  // stay decoupled.
  // TODO: properly type

  useEffect(() => {
    if (!currentVariantIdx && currentVariantIdx !== 0) {
      const currentVariantSKU = router.asPath.split('/')[3].split('?')[0];
      const currentVariantIndex = product?.variants.findIndex(({ sku }) => sku == currentVariantSKU);

      setVariant(product?.variants[currentVariantIndex]);
    } else setVariant(product?.variants[currentVariantIdx]);
  }, [product, currentVariantIdx]);

  const prod = useMemo<UIProduct>(
    () => ({
      productId: product?.productId,
      name: product?.name,
      _url: product?._url,
      // add variants as well, so we can select and filter
      variants: product?.variants,
      price: variant.price,
      // rating: 4,
      images: variant.images?.map((img: string, id: number) => ({
        id: `${variant.sku}-${id}`,
        src: img,
        alt: variant.sku,
      })),
      colors,
      sizes,
      isOnWishlist: !!wishlist?.lineItems?.find((lineItem) =>
        product?.variants.find((variant) => variant.sku === lineItem.variant.sku),
      ),
      description: `
      <p>${product?.description || ''}</p>
    `,

      details: [
        {
          name: 'Features',
          items: [
            variant?.attributes?.designer && `Designer: ${variant.attributes.designer.label}`,
            variant?.attributes?.gender && `Collection: ${variant.attributes.gender.label}`,
            variant?.attributes?.madeInItaly && `Made in Italy`,
          ],
        },
      ],
    }),
    [product, variant, colors, sizes],
  );

  const handleAddToCart = (variant: Variant): Promise<void> => {
    return addItem(variant, 1);
  };

  const handleAddToWishList = () => {
    addToWishlist(variant.sku, 1);
  };

  if (!product || !variant || !prod) return <></>;

  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>
      <ProductDetails
        product={prod}
        onAddToCart={handleAddToCart}
        variant={variant}
        onChangeVariantIdx={setCurrentVariantIdx}
        onAddToWishlist={handleAddToWishList}
        quickBuyEnabled={data.quickBuyEnabled}
      />
    </>
  );
}

export default ProductDetailsTastic;
