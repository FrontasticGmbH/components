import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { LineItem } from '@Types/wishlist/LineItem';
import { DateHelpers } from 'helpers/dateHelpers';
import { useFormat } from 'helpers/hooks/useFormat';
import useMediaQuery from 'helpers/hooks/useMediaQuery';
import { mobile } from 'helpers/utils/screensizes';
import Image from 'frontastic/lib/image';
import Spinner from '../spinner';

export interface Props {
  items?: LineItem[];
  removeLineItems: (lineItem: LineItem) => void;
}

const List: React.FC<Props> = ({ items, removeLineItems }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isLargerThanMobile] = useMediaQuery(mobile);

  //i18n messages
  const { formatMessage } = useFormat({ name: 'common' });

  const router = useRouter();

  const goToProductPage = (itemUrl: string) => router.push(itemUrl);

  useEffect(() => {
    if (items) {
      setLoading(false);
    }
  }, [items]);

  return (
    <div className="mx-auto max-w-2xl pt-8 pb-16 lg:max-w-3xl lg:pt-4">
      {loading ? (
        <div className="flex items-stretch justify-center py-10 px-12">
          <Spinner />
        </div>
      ) : (
        <ul role="list" className="divide-y divide-gray-200 border-y border-gray-200">
          {items.map((item) => (
            <li key={item.lineItemId} className="flex py-6">
              <div className="shrink-1 sm:min-w-24 relative w-24 cursor-pointer">
                <Image
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                  src={item.variant.images[0]}
                  onClick={() => goToProductPage(item._url)}
                />
              </div>
              <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                <div>
                  <div className="flex justify-between">
                    <h4 className="text-sm">
                      <p
                        onClick={() => goToProductPage(item._url)}
                        className="cursor-pointer font-medium text-gray-700 hover:text-gray-800 dark:text-light-100"
                      >
                        {item.name}
                      </p>
                    </h4>
                    {isLargerThanMobile ? (
                      <p className="ml-4 text-sm font-medium text-gray-900 dark:text-light-100">{item.variant.sku}</p>
                    ) : null}
                  </div>
                  {isLargerThanMobile ? (
                    <p className="mt-1 text-sm text-gray-500 dark:text-light-100">{item.lineItemId}</p>
                  ) : null}
                </div>

                <div className="mt-4 flex flex-1 items-end justify-between">
                  <p className="flex items-center space-x-2 text-sm text-gray-700 dark:text-light-100">
                    {isLargerThanMobile ? (
                      <svg
                        className="h-5 w-5 shrink-0 text-gray-300"
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
