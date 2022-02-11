import React, { useState } from 'react';
import Image from 'next/image';

import { useCart } from 'frontastic';

import ProductData from './product-data';

type Props = {
  data: any;
  stream: any;
};

export const ProductDetails: React.FC<Props> = ({ data, stream }: Props) => {
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const selectedVariant = stream.variants[selectedVariantIndex];

  const { addItem } = useCart();

  if (!data) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 p-5 lg:px-8">
      <div className="relative mt-0 md:mt-6 h-96 md:h-auto">
        <Image src={selectedVariant.images[0]} layout="fill" objectFit="contain" />
      </div>

      <div className="my-4 sm:mt-6 md:h-96 mb-6">
        <ProductData
          name={stream.name}
          variants={stream.variants}
          selectedVariant={selectedVariant}
          onVariantChange={setSelectedVariantIndex}
          handleAddToCart={() => addItem(selectedVariant, 1)}
          handleAddToWishlist={() => console.log('add to wishlist')}
          handleRemoveFromWishlist={() => console.log('remove from wishlist')}
          wishlisted={false}
        />
      </div>
    </div>
  );
};
