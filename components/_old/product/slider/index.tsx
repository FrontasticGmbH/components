import React from 'react';

import Product from './product';

type Props = {
  data?: any;
  stream: any;
};

export const ProductSlider: React.FC<Props> = ({ stream }: Props) => {
  return (
    <div className="flex px-4 w-full overflow-x-scroll xl:px-10">
      {stream.items.map((item) => (
        <Product data={item} key={item.productId} />
      ))}
    </div>
  );
};
