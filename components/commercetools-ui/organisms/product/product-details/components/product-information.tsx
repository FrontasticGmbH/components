import { FC, useMemo } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { LineItem } from 'shared/types/wishlist/LineItem';
import Typography from 'components/commercetools-ui/atoms/typography';
import WishlistButton from 'components/commercetools-ui/organisms/wishlist/components/wishlist-button';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import useClassNames from 'helpers/hooks/useClassNames';
import usePath from 'helpers/hooks/usePath';
import ProductVariant from './product-variant';
import { ProductDetailsProps } from '..';

type ProductInformationProps = Omit<ProductDetailsProps, 'onAddToCart'>;

const ProductInformation: FC<ProductInformationProps> = ({ product, variant, onChangeVariant, inModalVersion }) => {
  const router = useRouter();

  const { locale } = useParams();

  const { path } = usePath();

  const attributesToDisplay = ['color', 'finish', 'size'];

  const discountPercentage =
    variant.discountedPrice &&
    (((variant.price?.centAmount as number) - (variant.discountedPrice.centAmount as number)) /
      (variant.price?.centAmount as number)) *
      100;

  const updateVariantSKU = (sku: string) => {
    router.replace(`/${path.split('/').filter(Boolean).slice(0, -1).join('/')}/${sku}`);
  };

  const productToWishlistLineItem = useMemo<LineItem>(() => {
    return {
      lineItemId: product?.productId ?? '',
      productId: product?.productId,
      name: product?.name,
      count: 1,
      variant: variant,
      addedAt: new Date(),
      _url: product?._url,
    };
  }, [product, variant]);

  const titleClassName = useClassNames(['break-normal mb-12', { '2xl:text-18': !inModalVersion }]);
  const priceClassName = useClassNames([
    'block leading-loose',
    { 'line-through text-gray-500': !!discountPercentage },
    { '2xl:text-20': !inModalVersion },
    { 'text-14': !!inModalVersion && !discountPercentage },
    { 'text-12': !!inModalVersion && !!discountPercentage },
  ]);
  const discountedPriceClassName = useClassNames([
    'block font-regular leading-loose text-accent-red',
    { '2xl:text-18': !inModalVersion },
  ]);

  return (
    <div>
      <div className="relative flex pr-40">
        <Typography as="h3" className={`${titleClassName} font-medium leading-loose`}>
          {product?.name}
        </Typography>

        <WishlistButton lineItem={productToWishlistLineItem} />
      </div>
      {discountPercentage ? (
        <div className="flex flex-row justify-between">
          <div className="flex items-center gap-8">
            <Typography className={discountedPriceClassName}>
              {CurrencyHelpers.formatForCurrency(variant.discountedPrice as number, locale)}
            </Typography>
            <Typography className={priceClassName}>
              {CurrencyHelpers.formatForCurrency(variant.price ?? 0, locale)}
            </Typography>
          </div>

          {
            <span className="mb-8 ml-8 mt-10 flex h-[25px] w-[45px] items-center justify-center bg-accent-red text-11 text-neutral-100">
              {Math.round(discountPercentage)}%
            </span>
          }
        </div>
      ) : (
        <Typography className={priceClassName}>
          {CurrencyHelpers.formatForCurrency(variant.price as number, locale)}
        </Typography>
      )}
      {attributesToDisplay.map((attribute) => {
        if (variant?.attributes?.[attribute]) {
          return (
            <ProductVariant
              key={attribute}
              className="mt-20 border-b border-b-neutral-400 pb-20 md:mt-24"
              variants={product?.variants}
              currentVariant={variant}
              attribute={attribute}
              inModalVersion={inModalVersion}
              onClick={inModalVersion ? onChangeVariant : updateVariantSKU}
            />
          );
        }
      })}
    </div>
  );
};

export default ProductInformation;
