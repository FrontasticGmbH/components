import { FC } from 'react';
import { Disclosure } from '@headlessui/react';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid';
import PriceRange, { PriceRangeProps } from 'components/default-ui/price-range';
import { useFormat } from 'helpers/hooks/useFormat';

type PriceFilterDisclosureProps = PriceRangeProps;

const PriceFilterDisclosure: FC<PriceFilterDisclosureProps> = ({ products, facets, updatePriceFilteringParams }) => {
  const { formatMessage } = useFormat({ name: 'product' });

  return (
    <div className="border-b border-gray-200 py-6">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between py-3 text-gray-400 hover:text-gray-500">
              <span className="font-medium text-neutral-600 dark:text-light-100">
                {formatMessage({ id: 'price', defaultMessage: 'Price' })}
              </span>
              <span className="ml-6 flex items-center">
                {open ? (
                  <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                )}
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="pt-6">
              <PriceRange products={products} facets={facets} updatePriceFilteringParams={updatePriceFilteringParams} />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default PriceFilterDisclosure;
