import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Price } from 'components';

type Props = {
  data: any;
};

const Product: React.FC<Props> = ({ data }: Props) => {
  const variant = data.variants[0];
  const { price, images } = variant;

  return (
    <div className="mx-3 w-36 sm:w-48 md:w-60 xl:w-72 xl:mx-5">
      <Link href={data._url}>
        <a>
          <div className="relative flex flex-1 w-36 h-48 justify-center items-center object-contain mb-2 sm:h-72 sm:w-48 md:h-96 md:w-60 xl:w-72 xl:h-96">
            <Image src={images[0]} alt={data.name} objectFit="cover" layout="fill" />
          </div>
        </a>
      </Link>
      <div className="">
        <p className="text-sm font-bold leading-5 pr-1.5 text-gray-900 truncate ...">{data.name}</p>
        <p className="text-sm leading-5 text-gray-700">
          <Price value={price} />
        </p>
        {/* <AddToCartButton */}
        {/*   product={data} */}
        {/*   variant={variant} */}
        {/*   className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded" */}
        {/* > */}
        {/*   Add to cart */}
        {/* </AddToCartButton> */}
      </div>
    </div>
  );
};

export default Product;
