import React from 'react';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';

import { Price } from 'components';

type Props = {
  image: string;
  name: string;
  designer: string;
  count: string;
  price: number;
  discountedPrice: number;
  color: string;
  size: string;
};

const Product: React.FC<Props> = ({ image, name, designer, count, price, discountedPrice, color, size }: Props) => {
  const { t } = useTranslation('product');

  return (
    <div className="grid gap-x-4" style={{ gridTemplateColumns: '120px 1fr 1fr' }}>
      <div>
        <Image src={image} alt="" />
      </div>

      <div>
        <div className="text-md font-bold leading-tight">{name}</div>

        {designer && <div className="text-sm text-neutral-600 leading-tight">{designer}</div>}

        {color && (
          <div className="mt-3 text-sm text-neutral-600 leading-tight">
            {t('color')} {color}
          </div>
        )}

        {size && (
          <div className="text-sm text-neutral-600 leading-tight">
            {t('color')} {size}
          </div>
        )}

        <div className="text-sm text-neutral-600 leading-tight">
          {t('quantity')} {count}
        </div>

        <div className="mt-3">
          <Price className="text-sm text-neutral-700 font-bold leading-tight" value={discountedPrice || price} />
        </div>
      </div>
    </div>
  );
};

export default Product;
