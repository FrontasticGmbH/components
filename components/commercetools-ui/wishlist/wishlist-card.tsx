import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { TrashIcon } from '@heroicons/react/outline';
import { LineItem } from '@Types/wishlist/LineItem';
import { Variant } from '@Types/wishlist/Variant';
import { useFormat } from 'helpers/hooks/useFormat';
import Price from '../price';

export interface Props {
  item: LineItem;
  removeLineItems: (lineItem: LineItem) => void;
  addToCart: (variant: Variant) => Promise<void>;
}

const WishlistCard: React.FC<Props> = ({ item, removeLineItems, addToCart }) => {
  const { formatMessage: formatWishlistMessage } = useFormat({ name: 'wishlist' });
  const router = useRouter();
  const goToProductPage = (itemUrl: string) => router.push(itemUrl);

  return (
    <div className="relative flex flex-col">
      <div className="relative h-72">
        {/* temp fix using next/image because there's a bug
          in frontastic image component */}
        <Image
          alt={item.lineItemId}
          layout="fill"
          loader={({ src }) => src}
          objectFit="cover"
          objectPosition="bottom"
          className=" rounded-sm"
          src={item.variant.images[0]}
          onClick={() => goToProductPage(item._url)}
        />
      </div>

      <div className="flex flex-col justify-center">
        <h4
          onClick={() => goToProductPage(item._url)}
          className="cursor-pointer truncate pt-3 text-center font-bold text-primary-700 hover:text-primary-600"
        >
          {item.name}
        </h4>

        <Price
          price={item.variant.price}
          className="cursor-pointer truncate pb-4 text-center text-sm font-normal text-primary-700 hover:text-primary-600"
        />

        <div className="flex justify-center">
          <button
            onClick={() => {
              addToCart(item.variant);
            }}
            className="w-full rounded-sm bg-accent-400 px-5 py-3 text-base font-bold text-white"
          >
            {formatWishlistMessage({ id: 'wishlist.add.to.bag', defaultMessage: 'Add to bag' })}
          </button>
        </div>
      </div>
      <div className="flex justify-center pt-3">
        <button
          type="button"
          onClick={() => removeLineItems(item)}
          className="flex text-primary-100 hover:text-primary-400"
        >
          <TrashIcon className="h-5 w-5" aria-hidden="true" />
          <span className="py-0.5 pl-2 text-xs font-normal">
            {formatWishlistMessage({ id: 'wishlist.remove', defaultMessage: 'Remove' })}
          </span>
        </button>
      </div>
    </div>
  );
};

export default WishlistCard;
