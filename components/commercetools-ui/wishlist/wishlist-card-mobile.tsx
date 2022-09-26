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

const WishlistCardMobile: React.FC<Props> = ({ item, removeLineItems, addToCart }) => {
  const { formatMessage: formatWishlistMessage } = useFormat({ name: 'wishlist' });

  const router = useRouter();

  const goToProductPage = (itemUrl: string) => router.push(itemUrl);

  return (
    <div className="flex w-full justify-between border-b-2 py-5">
      <div className="relative h-40 w-40 cursor-pointer">
        <Image
          alt={item.lineItemId}
          layout="fill"
          loader={({ src }) => src}
          objectFit="cover"
          objectPosition="bottom"
          src={item.variant.images[0]}
          onClick={() => goToProductPage(item._url)}
        />
      </div>

      <div className="ml-4 flex w-1/2 flex-col justify-between">
        <h4 className="text-sm">
          <p
            onClick={() => goToProductPage(item._url)}
            className="cursor-pointer text-base font-semibold text-gray-700 hover:text-gray-800"
          >
            {item.name}
          </p>
        </h4>

        <Price price={item.variant.price} className="py-3 text-base font-normal text-gray-700 hover:text-gray-800" />

        <button
          onClick={() => {
            addToCart(item.variant);
          }}
          className="rounded-sm bg-accent-400 px-4 py-2 text-base font-semibold text-white"
        >
          {formatWishlistMessage({ id: 'wishlist.add.to.bag', defaultMessage: 'Add to bag' })}
        </button>
      </div>
      <div className="ml-4 flex w-1/6 flex-col">
        <div className="flex flex-1 items-start justify-end">
          <div className="ml-4">
            <button type="button" onClick={() => removeLineItems(item)}>
              <TrashIcon className="h-6 w-6 text-primary-100" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistCardMobile;
