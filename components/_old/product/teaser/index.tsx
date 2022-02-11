import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Price, Sticker } from 'components';

type Props = {
  product?: any;
  showStrikePrice?: boolean;
  onAddToWishlist?: (p: any, v: any) => void;
};

export const ProductTeaser: React.FC<Props> = ({ product, showStrikePrice, onAddToWishlist }: Props) => {
  /*const wishlist = useSelector((state) => {
        return state.wishlist.wishlist;
  })*/

  const variant = product.variants[0];

  // Alternatively could the wishlist button directly be connected to the store.
  // You'd give it a product and it does the rest, as a smart drop in component.
  /*const isWishlisted = () => {
    if (wishlist.loaded) {
      return wishlist.data.lineItems.find((item) => {
        return item.variant.sku === variant.sku;
      });
    }

    return false;
  };*/

  /*
  const toggleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onAddToWishlist(product, variant);
  };
  */

  /*
  Image/RemoteImage add these settings:
    cropRatio="1:1"
    itemProp="image"
    options={{ crop: 'pad', background: 'transparent' }}
  */
  return (
    <article className={'text-neutral-900'} itemScope itemType="http://schema.org/Product">
      <Link href={product._url || ''}>
        <a className="z-10 hover:no-underline hover:text-neutral-900">
          <div className="relative pb-3/2 mb-2 bg-white rounded">
            <figure className="absolute flex items-center h-full w-full object-cover">
              <img src={variant.images[0]} alt={product.name} />
            </figure>

            {variant.discountedPrice && showStrikePrice && (
              <Sticker className="absolute left-0 top-0 mt-2 ml-2">
                {100 - Math.ceil((variant.discountedPrice / variant.price) * 100)}%
              </Sticker>
            )}
            {/*
            <WishlistButton
                className='absolute right-0 top-0 mt-3 mr-3 text-lg'
                onClick={toggleWishlist}
                active={!!isWishlisted()}
            />
            */}
            {/* enforce boolean on isWishlisted() because Array.find() returns undefined in non-truthy case */}
          </div>
          <h3 className="text-sm font-bold whitespace-no-wrap truncate ... ">{product.name}</h3>
          <div itemScope itemType="http://schema.org/Offer">
            {variant.discountedPrice && showStrikePrice ? (
              <p className="text-sm">
                <s>
                  <Price className="mr-1" value={variant.price} />
                </s>
                <Price className="text-red-600" value={variant.discountedPrice} />
              </p>
            ) : (
              <Price className="text-sm" value={variant.price} />
            )}
          </div>
        </a>
      </Link>
    </article>
  );
};
