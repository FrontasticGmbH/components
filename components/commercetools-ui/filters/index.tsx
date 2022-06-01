import { FC, useState } from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { Product } from '@Types/product/Product';
import { Facet } from '@Types/result/Facet';
import { useFormat } from 'helpers/hooks/useFormat';
import { updateURLParams, URLParam } from 'helpers/utils/updateURLParams';
import PriceFilterDisclosure from './PriceFilterDisclosure';
import SortingDisclosure from './SortingDisclosure';

type FiltersProps = {
  facets: Facet[];
  products: Product[];
};

const Filters: FC<FiltersProps> = ({ facets, products }) => {
  const router = useRouter();
  const { formatMessage } = useFormat({ name: 'product' });
  const [priceFilteringParams, setPriceFilteringParams] = useState<URLParam[]>([]);
  const [sortingParam, setSortingParam] = useState<URLParam>();

  const updatePriceFilteringParams = (params: URLParam[]) => {
    setPriceFilteringParams(params);
  };

  const updateSortingParams = (param: URLParam) => {
    setSortingParam(param);
  };

  const handleFiltersSubmit = (e) => {
    e.preventDefault();
    let params = [];

    if (priceFilteringParams) {
      params.push(...priceFilteringParams);
    }

    if (sortingParam) {
      params.push(sortingParam);
    }

    let currentURL = updateURLParams(params);

    router.push(currentURL);
  };

  return (
    <form onSubmit={handleFiltersSubmit}>
      <SortingDisclosure updateSortingParams={updateSortingParams} />
      <PriceFilterDisclosure
        products={products}
        facets={facets}
        updatePriceFilteringParams={updatePriceFilteringParams}
      />
      <div className="mt-8 flex justify-between gap-3">
        <NextLink href={router?.asPath.split('?')[0] || ''}>
          <a className="w-full rounded border border-pink-600 py-2.5 text-center text-pink-600">
            {formatMessage({ id: 'clear', defaultMessage: 'Clear' })}
          </a>
        </NextLink>

        <button type="submit" className="w-full rounded bg-pink-600 py-2.5 text-white">
          {formatMessage({ id: 'applyFilters', defaultMessage: 'Apply filters' })}
        </button>
      </div>
    </form>
  );
};

export default Filters;
