import React from 'react';
import classnames from 'classnames';
import { useTranslation } from 'next-i18next';

import Product from './product';

type Props = {
  products: any;
};

const Products: React.FC<Props> = ({ products }: Props) => {
  const { t } = useTranslation('checkout');

  return (
    <>
      <div className="mb-4 text-xs text-neutral-600 font-bold leading-tight uppercase">{t('yourOrder')}</div>

      {products?.map((item, i: number) => {
        return (
          <div key={i} className={classnames({ 'mt-8': i > 0 })}>
            <Product
              name={item.name}
              designer={item.variant.attributes.designer?.label}
              image={item.variant.images[0]}
              count={item.count}
              price={item.price}
              discountedPrice={item.discountedPrice}
              color={item.variant.attributes.color?.label || item.variant.attributes.color}
              size={item.variant.attributes.size?.label || item.variant.attributes.size}
            />
          </div>
        );
      })}
    </>
  );
};

export default Products;
