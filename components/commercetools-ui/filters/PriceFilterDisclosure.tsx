import { FC, useCallback, useMemo } from 'react';
import { Disclosure } from '@headlessui/react';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid';
import PriceRange from 'components/commercetools-ui/range-filter';
import { useFormat } from 'helpers/hooks/useFormat';
import { Facet } from '@Types/result/Facet';
import { Product } from '@Types/product/Product';
import { URLParam } from 'helpers/utils/updateURLParams';
import { RangeFacet } from '@Types/result/RangeFacet';

type PriceFilterDisclosureProps = {
  facets: Facet[];
  products: Product[];
  updatePriceFilteringParams: (params: URLParam[]) => void;
};

const PriceFilterDisclosure: FC<PriceFilterDisclosureProps> = ({ products, facets, updatePriceFilteringParams }) => {
  const { formatMessage } = useFormat({ name: 'product' });

  const facet = useMemo(() => facets?.find((facet) => facet.identifier === 'variants.price') as RangeFacet, [facets]);

  const handleChange = useCallback((values: [number, number]) => {
    const params = [
      { key: 'facets[variants.price][min]', value: values[0].toString() },
      { key: 'facets[variants.price][max]', value: values[1].toString() },
    ];
    updatePriceFilteringParams(params);
  }, []);

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
              <PriceRange
                facet={facet}
                currency={products?.[0]?.variants?.[0]?.price?.currencyCode}
                onChange={handleChange}
              />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default PriceFilterDisclosure;
