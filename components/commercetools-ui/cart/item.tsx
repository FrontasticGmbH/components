import React from 'react';
import { MinusIcon, PlusIcon, TrashIcon } from '@heroicons/react/outline';
import { LineItem } from '@Types/cart/LineItem';
import { useFormat } from 'helpers/hooks/useFormat';
import Image from 'frontastic/lib/image';
import Price from '../price';
import Dropdown, { DropdownProps } from 'components/commercetools-ui/dropdown';

interface Props {
  lineItem: LineItem;
  goToProductPage: (_url: string) => void;
  editItemQuantity: (lineItemId: string, newQuantity: number) => void;
  removeItem: (lineItemId: string) => void;
}

const Item = ({ lineItem, goToProductPage, editItemQuantity, removeItem }: Props) => {
  const { formatMessage } = useFormat({ name: 'common' });
  const { formatMessage: formatProductMessage } = useFormat({ name: 'product' });

  const amountLimit = 10;

  const amountArray: DropdownProps['items'] = Array.from({ length: amountLimit }, (_, i) => i + 1).map((num) => {
    const val = num.toString();
    return { label: val, value: val };
  });

  return (
    <div className="flex gap-4 border-neutral-300 py-5 md:border md:py-0">
      <div className="relative h-56 w-44 cursor-pointer border border-neutral-300 md:border-0 md:border-r">
        <Image
          src={lineItem.variant.images[0]}
          alt={lineItem.name}
          className="h-full w-full object-cover"
          onClick={() => goToProductPage(lineItem._url)}
        />
      </div>

      <div className="w-full">
        <div className="relative flex h-full w-full flex-col justify-between md:pt-5 md:pr-5 md:pb-8">
          <p
            className="mb-5 flex cursor-pointer justify-between pr-5 text-base font-bold text-gray-700 hover:text-gray-800 md:pr-0"
            onClick={() => goToProductPage(lineItem._url)}
          >
            {lineItem.name}
          </p>
          <div className="flex gap-5 md:block">
            {lineItem.variant.attributes?.color && (
              <p className="mb-2.5 text-xs text-gray-700 ">
                <span>{formatProductMessage({ id: 'color', defaultMessage: 'Color' })}: </span>
                <span className="capitalize">{lineItem.variant.attributes.color.label}</span>
              </p>
            )}
            {lineItem.variant.attributes?.size && (
              <p className="mb-3 text-xs text-gray-700 ">
                <span>{formatProductMessage({ id: 'size', defaultMessage: 'Size' })}: </span>
                <span className={typeof lineItem.variant.attributes.size == 'string' && 'capitalize'}>
                  {lineItem.variant.attributes.size}
                </span>
              </p>
            )}
          </div>

          <div className="flex md:hidden">
            <Price
              price={lineItem.price}
              className={`${lineItem.discountedPrice && 'line-through'} mt-1 text-base font-medium text-gray-900`}
            />
            {lineItem.discountedPrice && (
              <Price price={lineItem.discountedPrice} className="mt-1 ml-2 text-base font-medium text-accent-400" />
            )}
          </div>

          <Dropdown
            value={lineItem.count.toString()}
            className="border-neutral-300 md:hidden"
            items={amountArray}
            onChange={(value) => {
              editItemQuantity(lineItem.lineItemId, Number(value));
            }}
          />

          <div className="mt-auto hidden md:flex md:items-end md:justify-between">
            <div className="flex w-20 flex-row items-center border bg-transparent p-1 md:relative">
              <button
                aria-label="Reduce"
                type="button"
                onClick={() => {
                  editItemQuantity(lineItem.lineItemId, lineItem.count - 1);
                }}
                disabled={lineItem.count <= 1}
                className={`grid h-full w-20 cursor-pointer place-content-center ${
                  lineItem.count <= 1 ? 'cursor-not-allowed' : 'cursor-pointer'
                } rounded-l  text-neutral-600 outline-none disabled:opacity-50`}
              >
                <MinusIcon width={17} />
              </button>
              <span className="flex w-full items-center justify-center text-center text-base font-semibold text-neutral-600 outline-none ">
                {lineItem.count}
              </span>
              <button
                type="button"
                aria-label="Increment"
                onClick={() => {
                  editItemQuantity(lineItem.lineItemId, lineItem.count + 1);
                }}
                disabled={!lineItem.variant.isOnStock || lineItem.count == amountLimit}
                className={`grid h-full w-20 cursor-pointer place-content-center ${
                  !lineItem.variant.isOnStock || lineItem.count == amountLimit ? 'cursor-not-allowed' : 'cursor-pointer'
                } rounded-l  text-neutral-600 outline-none disabled:opacity-50`}
              >
                <PlusIcon width={17} />
              </button>
            </div>

            <div className="hidden md:flex">
              <Price
                price={lineItem.price}
                className={`${lineItem.discountedPrice && 'line-through'} mt-1 text-sm font-medium text-gray-900`}
              />
              {lineItem.discountedPrice && (
                <Price price={lineItem.discountedPrice} className="mt-1 ml-2 text-sm font-medium text-accent-400" />
              )}
            </div>
          </div>

          <div className="absolute top-0 right-0">
            <button
              type="button"
              onClick={() => removeItem(lineItem.lineItemId)}
              className="inline-flex text-gray-400 hover:text-gray-500 md:p-5"
            >
              <span className="sr-only">{formatMessage({ id: 'remove', defaultMessage: 'Remove' })}</span>
              <TrashIcon className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
