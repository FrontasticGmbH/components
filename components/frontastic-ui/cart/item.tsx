import React, { useState } from 'react';
import { XIcon as XIconSolid } from '@heroicons/react/solid';
import { LineItem } from '@Types/cart/LineItem';
import { CurrencyHelpers } from 'helpers/currencyHelpers';
import { useFormat } from 'helpers/hooks/useFormat';
import { StringHelpers } from 'helpers/stringHelpers';
import Image from 'frontastic/lib/image';

interface Props {
  lineItem: LineItem;
  goToProductPage: (_url: string) => void;
  editItemQuantity: (lineItemId: string, newQuantity: number) => void;
  removeItem: (lineItemId: string) => void;
}

const LineItem = ({ lineItem, goToProductPage, editItemQuantity, removeItem }: Props) => {
  const { formatMessage } = useFormat({ name: 'common' });

  return (
    <li className="flex py-6 sm:py-10">
      <div className="shrink-0">
        <Image
          src={lineItem.variant.images[0]}
          alt={lineItem.name}
          className="h-24 w-24 cursor-pointer rounded-md object-cover object-center sm:h-48 sm:w-48"
          onClick={() => goToProductPage(lineItem._url)}
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
        <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
          <div>
            <div className="flex justify-between">
              <h3 className="text-sm">
                <p
                  className="cursor-pointer font-medium text-gray-700 hover:text-gray-800"
                  onClick={() => goToProductPage(lineItem._url)}
                >
                  {lineItem.name}
                </p>
              </h3>
            </div>
            <div className="mt-1 flex text-sm">
              {lineItem.variant.attributes?.color && (
                <p className="text-gray-500">
                  {StringHelpers.capitaliseFirstLetter(lineItem.variant.attributes.color.label)}
                </p>
              )}
              {lineItem.variant.attributes?.size && (
                <p className="ml-4 border-l border-gray-200 pl-4 text-gray-500">
                  {StringHelpers.isNumeric(lineItem.variant.attributes.size)
                    ? lineItem.variant.attributes.size
                    : StringHelpers.capitaliseFirstLetter(lineItem.variant.attributes.size)}
                </p>
              )}
            </div>
            <p className="mt-1 text-sm font-medium text-gray-900">
              {CurrencyHelpers.formatForCurrency(lineItem.price)}
            </p>
          </div>

          <div className="mt-4 sm:mt-0 sm:pr-9">
            <div className="grid grid-cols-3 gap-3">
              <label className="sr-only">
                {formatMessage({ id: 'quantity', defaultMessage: 'Quantity' })}, {lineItem.name}
              </label>
              <button
                onClick={() => {
                  editItemQuantity(lineItem.lineItemId, lineItem.count - 1);
                }}
                className="rounded bg-gray-100 py-2 px-4 font-bold text-gray-700 hover:bg-gray-300"
              >
                -
              </button>
              <p className=" rounded-md border border-gray-300 py-1.5 text-center text-base font-medium text-gray-700 shadow-sm">
                {lineItem.count}
              </p>
              <button
                onClick={() => {
                  editItemQuantity(lineItem.lineItemId, lineItem.count + 1);
                }}
                className="rounded bg-gray-100 py-2 px-4 font-bold text-gray-700 hover:bg-gray-300"
              >
                +
              </button>
            </div>

            <div className="absolute top-0 right-0">
              <button
                type="button"
                onClick={() => removeItem(lineItem.lineItemId)}
                className="-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">{formatMessage({ id: 'remove', defaultMessage: 'Remove' })}</span>
                <XIconSolid className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default LineItem;
