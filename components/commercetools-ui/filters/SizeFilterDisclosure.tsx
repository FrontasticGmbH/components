import { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Disclosure } from '@headlessui/react';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid';
import { Product } from '@Types/product/Product';
import { Facet } from '@Types/result/Facet';
import { TermFacet } from '@Types/result/TermFacet';
import { useFormat } from 'helpers/hooks/useFormat';
import { URLParam } from 'helpers/utils/updateURLParams';

type SizeFilterDisclosureProps = {
  facets: Facet[];
  products: Product[];
  updateSizeFilteringParams: (params: URLParam[]) => void;
};

const SizeFilterDisclosure: FC<SizeFilterDisclosureProps> = ({ facets, updateSizeFilteringParams }) => {
  const { formatMessage } = useFormat({ name: 'product' });

  const sizeFacet = useMemo<TermFacet>(
    () => facets.find((facet) => facet.identifier === 'variants.attributes.size') as TermFacet,
    [facets],
  );

  const [params, setParams] = useState<URLParam[]>([]);
  const [selected, setSelected] = useState<ReturnType<typeof Object.fromEntries>>({});

  useEffect(() => {
    setSelected(Object.fromEntries(sizeFacet?.terms?.map((term) => [term.key, term.selected])));
    setParams(
      sizeFacet?.terms
        ?.map((term, index) => ({
          key: `facets[variants.attributes.size][terms][${index}]`,
          value: term.key,
          selected: term.selected,
        }))
        .filter((term) => term.selected) || [],
    );
  }, [sizeFacet]);

  const handleChange = useCallback(
    (index: number, checked: boolean) => {
      if (!sizeFacet?.terms) return;

      let newParams = [...params];

      const key = `facets[variants.attributes.size][terms][${index}]`;

      if (!checked) newParams = newParams.filter((param) => param.key !== key);
      else newParams = [...newParams, { key, value: sizeFacet.terms[index].key }];

      setSelected({ ...selected, [sizeFacet.terms[index].key]: checked });

      setParams(newParams);
      updateSizeFilteringParams(newParams);
    },
    [updateSizeFilteringParams, sizeFacet, params, selected],
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
              <div className="flex flex-col gap-6">
                {sizeFacet.terms.map((term, index) => (
                  <div className="relative flex items-start" key={term.identifier}>
                    <div className="flex h-5 items-center">
                      <input
                        type="checkbox"
                        className="h-6 w-6 rounded border-gray-300 text-white focus:ring-accent-400"
                        onChange={(e) => handleChange(index, e.target.checked)}
                        checked={selected[term.key]}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="comments" className="font-medium text-gray-700 dark:text-light-100">
                        {term.label}
                      </label>
                    </div>
                  </div>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default SizeFilterDisclosure;
