import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid';
import { Product } from '@Types/product/Product';
import { Facet } from '@Types/result/Facet';
import { TermFacet } from '@Types/result/TermFacet';
import { useFormat } from 'helpers/hooks/useFormat';
import { URLParam } from 'helpers/utils/updateURLParams';
import TermFilter, { TermFilterParams } from '../term-filter';

type SizeFilterDisclosureProps = {
  facets: Facet[];
  products: Product[];
  updateSizeFilteringParams: (params: URLParam[]) => void;
};

const SizeFilterDisclosure: FC<SizeFilterDisclosureProps> = ({ facets, updateSizeFilteringParams }) => {
  const { formatMessage } = useFormat({ name: 'product' });

  const sizeFacet = useMemo(
    () => facets.find((facet) => facet.identifier === 'variants.attributes.size') as TermFacet,
    [facets],
  );

  const handleChange = useCallback(
    (values: Array<TermFilterParams>) =>
      updateSizeFilteringParams(
        values.map(({ index, value }) => ({
          key: `facets[variants.attributes.size][terms][${index.toString()}]`,
          value,
        })),
      ),
    [updateSizeFilteringParams],
  );

  if (!sizeFacet?.terms?.length) return <></>;

  return (
    <div className="border-b border-gray-200 py-6">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between py-3 text-gray-400 hover:text-gray-500">
              <span className="font-medium text-neutral-600 dark:text-light-100">
                {formatMessage({ id: 'size', defaultMessage: 'Size' })}
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
              <TermFilter facet={sizeFacet} onChange={handleChange} />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default SizeFilterDisclosure;
