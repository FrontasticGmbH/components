import { Disclosure } from '@headlessui/react';
import { MinusSmIcon, PlusSmIcon } from '@heroicons/react/solid';
import { useFormat } from 'helpers/hooks/useFormat';
import { URLParam } from 'helpers/utils/updateURLParams';
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

type SortingDisclosureProps = {
  updateSortingParams: (param: URLParam) => void;
};

type sortingParamID = 'asc' | 'desc';

const SortingDisclosure: FC<SortingDisclosureProps> = ({ updateSortingParams }) => {
  const router = useRouter();
  const [currentSortingParam, setCurrentSortingParam] = useState<sortingParamID>(undefined);
  const { formatMessage } = useFormat({ name: 'product' });

  const handleChange = (e: ChangeEvent) => {
    setCurrentSortingParam(e.target.id as sortingParamID);

    updateSortingParams({
      key: 'sortAttributes[0][price]',
      value: e.target.id,
    });
  };

  const options: { label: string; value: string }[] = [
    {
      label: formatMessage({ id: 'priceAsc', defaultMessage: 'Price (ascending)' }),

      value: 'asc',
    },
    { label: formatMessage({ id: 'priceDesc', defaultMessage: 'Price (descending)' }), value: 'desc' },
  ];

  useEffect(() => {
    const defaultSortingParamID = router.query['sortAttributes[0][price]'] as sortingParamID;
    setCurrentSortingParam(defaultSortingParamID);
  }, [router]);

  return (
    <div className="border-y border-gray-200 py-6">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-gray-400 hover:text-gray-500">
              <span className="font-medium text-neutral-600">
                {formatMessage({ id: 'sortBy', defaultMessage: 'Sort by' })}
              </span>
              <span className="ml-6 flex items-center">
                {open ? (
                  <MinusSmIcon className="h-5 w-5" aria-hidden="true" />
                ) : (
                  <PlusSmIcon className="h-5 w-5" aria-hidden="true" />
                )}
              </span>
            </Disclosure.Button>
            <Disclosure.Panel className="grid gap-2 pt-6">
              {options.map(({ label, value }, index) => (
                <label className="text-gray-500" key={index}>
                  <input
                    id={value}
                    name="price"
                    type="radio"
                    className="mr-2 border-2 text-pink-500 accent-pink-500 checked:ring-pink-500 hover:border-pink-500"
                    onChange={handleChange}
                    checked={value === currentSortingParam}
                  />
                  {label}
                </label>
              ))}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default SortingDisclosure;
