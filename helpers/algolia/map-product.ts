import { BaseHit, Hit } from 'instantsearch.js';
import { mapCategotry } from 'helpers/entity-mappers/map-category';
import { getLocalizationInfo } from 'project.config';
import { Product } from 'types/entity/product';

interface ProductHitVariant {
  id: string;
  sku: string;
  images: string[];
  prices: Record<string, { centAmount: number; fractionDigits: number }>;
  isOnStock: boolean;
}

interface ProductHit extends BaseHit {
  productId: string;
  categories: Array<{ id: string }>;
  name: string;
  variants: Array<ProductHitVariant>;
}

export const mapProduct = (hit: Hit<BaseHit>, locale: string): Product => {
  const productHit = hit as Hit<ProductHit>;

  const slug = (productHit.name ?? '').toLowerCase().replace(/\s/g, '-');

  const { currency } = getLocalizationInfo(locale);

  return {
    productId: productHit.productId,
    name: productHit.name,
    categories: productHit.categories
      .map((category) => ({ categoryId: category.id, descendants: [] }))
      .map((c) => mapCategotry(c, { locale })),
    variants: productHit.variants.map((variant) => ({
      ...variant,
      price: { ...variant.prices[currency], currencyCode: currency },
    })),
    _url: `/${slug}/p/${productHit.variants[0].sku}`,
  };
};
