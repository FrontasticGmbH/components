import React, { useEffect } from 'react';
import { LineItem } from '../../../../types/wishlist/LineItem';
import { useWishlist } from 'frontastic';
import { DateHelpers } from 'helpers/DateHelpers';
import { useRouter } from 'next/router';
import { useFormat } from 'helpers/hooks/useFormat';

interface Props {
  items?: LineItem[];
}

const List: React.FC<Props> = ({ items }) => {
  //i18n messages
  const { formatMessage: formatWishlistMessage } = useFormat({ name: 'wishlist' });
  const { formatMessage } = useFormat({ name: 'common' });

  const { removeLineItem } = useWishlist();
  const router = useRouter();

  const goToProductPage = (variantSku: string) => router.push(`/slug/p/${variantSku}`);

  const removeLineItems = async (item: LineItem) => {
    let itemsToRemove = items.filter((lineItem) => lineItem.name === item.name);
    for await (const lineItem of itemsToRemove) {
      await removeLineItem(lineItem.lineItemId);
    }
  };

  return (
    <div className="mx-auto max-w-2xl pb-16 pt-8 lg:max-w-3xl lg:pt-4">
      <h1 className="pb-12 text-center text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        {formatWishlistMessage({ id: 'wishlist.items', defaultMessage: 'Wishlist Items' })}
      </h1>
      <ul role="list" className="divide-y divide-gray-200 border-t border-b border-gray-200">
        {items
          .reduce((previousValue, currentValue) => {
            if (!Boolean(previousValue.find((val) => val.name === currentValue.name))) {
              previousValue.push(currentValue);
            }
            return previousValue;
          }, [] as LineItem[])
          .map((item) => (
            <li key={item.lineItemId} className="flex py-6">
              <div className="flex-shrink-0  cursor-pointer">
                <img
                  alt="Front side of charcoal cotton t-shirt."
                  width={100}
                  height={13}
                  className="h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"
                  src={item.variant.images[0]}
                  onClick={() => goToProductPage(item.variant.sku)}
                />
              </div>

              <div className="ml-4 flex flex-1 flex-col sm:ml-6">
                <div>
                  <div className="flex justify-between">
                    <h4 className="text-sm">
                      <p
                        onClick={() => goToProductPage(item.variant.sku)}
                        className="cursor-pointer font-medium text-gray-700 hover:text-gray-800"
                      >
                        {' '}
                        {item.name}{' '}
                      </p>
                    </h4>
                    <p className="ml-4 text-sm font-medium text-gray-900">{item.variant.sku}</p>
                  </div>
                  <p className="mt-1 text-sm text-gray-500">{item.lineItemId}</p>
                </div>

                <div className="mt-4 flex flex-1 items-end justify-between">
                  <p className="flex items-center space-x-2 text-sm text-gray-700">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-gray-300"
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
                    <span>
                      {formatMessage({ id: 'item.added.on', defaultMessage: 'Item Added on' })}{' '}
                      {DateHelpers.formatDate(item.addedAt)}
                    </span>
                  </p>
                  <div className="ml-4">
                    <button
                      type="button"
                      onClick={() => removeLineItems(item)}
                      className="text-sm font-medium text-[#CE3E72] hover:text-[#B22C5D]"
                    >
                      <span>{formatMessage({ id: 'remove', defaultMessage: 'Remove' })}</span>
                    </button>
                  </div>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default List;
