import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { XIcon as XIconSolid } from '@heroicons/react/solid';
import { DateHelpers } from 'helpers/dateHelpers';
import { useFormat } from 'helpers/hooks/useFormat';
import useMediaQuery from 'helpers/hooks/useMediaQuery';
import { mobile } from 'helpers/utils/screensizes';
import Image from 'frontastic/lib/image';
import { LineItem } from '../../../../types/wishlist/LineItem';
import Spinner from '../spinner';

export interface Props {
  items?: LineItem[];
  removeLineItems: (lineItem: LineItem) => void;
}

const List: React.FC<Props> = ({ items, removeLineItems }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isLargerThanMobile] = useMediaQuery(mobile);

  //i18n messages
  const { formatMessage: formatWishlistMessage } = useFormat({ name: 'wishlist' });
  const { formatMessage } = useFormat({ name: 'common' });

  const router = useRouter();

  const goToProductPage = (variantSku: string) => router.push(`/slug/p/${variantSku}`);

  useEffect(() => {
    setTimeout(() => setLoading(false), 500);
  }, []);

  return (
    <div className="pt-8 pb-16 mx-auto max-w-2xl lg:pt-4 lg:max-w-3xl">
      <h1 className="pb-12 text-3xl font-extrabold tracking-tight text-center text-gray-900 sm:text-4xl">
        {formatWishlistMessage({ id: 'wishlist.items', defaultMessage: 'Wishlist Items' })}
      </h1>
      {loading ? (
        <div className="flex justify-center items-stretch py-10 px-12">
          <Spinner />
        </div>
      ) : (
        <ul role="list" className="border-y border-gray-200 divide-y divide-gray-200">
          {items
            .reduce((previousValue, currentValue) => {
              if (!Boolean(previousValue.find((val) => val.name === currentValue.name))) {
                previousValue.push(currentValue);
              }
              return previousValue;
            }, [] as LineItem[])
            .map((item) => (
              <li key={item.lineItemId} className="flex py-6">
                <div className="shrink-0  cursor-pointer">
                  <Image
                    alt="Front side of charcoal cotton t-shirt."
                    width={100}
                    height={13}
                    className="object-cover object-center w-24 h-24 rounded-md sm:w-32 sm:h-32"
                    src={item.variant.images[0]}
                    onClick={() => goToProductPage(item.variant.sku)}
                  />
                </div>
                <div className="flex flex-col flex-1 ml-4 sm:ml-6">
                  <div>
                    <div className="flex justify-between">
                      <h4 className="text-sm">
                        <p
                          onClick={() => goToProductPage(item.variant.sku)}
                          className="font-medium text-gray-700 hover:text-gray-800 cursor-pointer"
                        >
                          {item.name}
                        </p>
                      </h4>
                      {isLargerThanMobile ? (
                        <p className="ml-4 text-sm font-medium text-gray-900">{item.variant.sku}</p>
                      ) : null}
                    </div>
                    {isLargerThanMobile ? <p className="mt-1 text-sm text-gray-500">{item.lineItemId}</p> : null}
                  </div>

                  <div className="flex flex-1 justify-between items-end mt-4">
                    <p className="flex items-center space-x-2 text-sm text-gray-700">
                      {isLargerThanMobile ? (
                        <svg
                          className="shrink-0 w-5 h-5 text-gray-300"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : null}
                      <span className="text-xs md:text-sm">
                        {formatMessage({ id: 'item.added.on', defaultMessage: 'Item Added on' })}{' '}
                        {DateHelpers.formatDate(item.addedAt)}
                      </span>
                    </p>
                    <div className="ml-4">
                      <button
                        type="button"
                        onClick={() => removeLineItems(item)}
                        className="text-sm font-medium text-accent-400 hover:text-accent-500"
                      >
                        <span>{formatMessage({ id: 'remove', defaultMessage: 'Remove' })}</span>
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
        </ul>
      )}
    </div>
  );
};

export default List;
