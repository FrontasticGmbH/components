import React, { useEffect } from 'react';
import classnames from 'classnames';
import { useTranslation } from 'next-i18next';
import { useInView } from 'react-intersection-observer';

import { ProductTeaser } from 'components';

import FacetPopup from './popups/facet-popup';
import SortMobilePopup from './popups/sort-mobile-popup';
import SortDesktopPopup from './popups/sort-desktop-popup';

import FiltersWizard from './modals/filters-wizard';

type Props = {
  data: any;
  sortState: any;
  onFacetsChanged: (f: any) => void;
  onSortChange: (s: any) => void;
  onLoadNextPage: () => void;
  onAddToWishlist: (p: any, v: any) => void;
  isFullWidth: boolean;
  showFacets: boolean;
  showProductsCount: boolean;
  showNextPage: string;
  showStrikePrice: boolean;
};

const ProductList: React.FC<Props> = ({
  data,
  sortState,
  onFacetsChanged,
  onSortChange,
  onLoadNextPage,
  onAddToWishlist,
  isFullWidth,
  showFacets,
  showProductsCount,
  showNextPage,
  showStrikePrice,
}: Props) => {
  const { t } = useTranslation('filters');
  console.log('prodlist data', data);

  const { ref, inView } = useInView({
    threshold: [0.25, 0.5, 0.75],
  });

  // useEffect(() => {
  //   if (inView) {
  //     onLoadNextPage();
  //   }
  // }, [inView]);

  // const onFacetChange = (newFacet, i: number) => {
  //   data.stream.facets[i] = { ...newFacet };

  //   onFacetsChanged(data.stream.facets);
  // };

  /*
  In FacetPopup add this
  onClear={(newFacet) => {
    onFacetChange(newFacet, i);
  }}
  */
  return (
    <>
      {showFacets && (
        <>
          <div className="md:hidden mt-4 w-full h-10 flex items-center border-t border-b border-neutral-300">
            <SortMobilePopup sortState={sortState} onChange={onSortChange} />

            <FiltersWizard data={data} onChange={onFacetsChanged} />
          </div>

          <div className="hidden md:block mt-4 border-b pb-6">
            <div className="flex flex-wrap">
              <div className="mt-4">
                <SortDesktopPopup sortState={sortState} onChange={onSortChange} />
              </div>

              {data.stream.facets.map((facet, i: number) => {
                if (!(facet.type === 'term' && facet.terms.length === 0)) {
                  return (
                    <div key={i} className="mt-4">
                      <FacetPopup
                        initialFacet={facet}
                        onChange={(newFacet) => {
                          onFacetChange(newFacet, i);
                        }}
                      />
                    </div>
                  );
                } else {
                  return false;
                }
              })}
            </div>
          </div>
        </>
      )}

      {showProductsCount && (
        <p className="mt-4 text-xs text-neutral-500 text-center">
          {data.stream.total || 0} {t('productsFound')}
        </p>
      )}

      {data?.data?.dataSource?.count > 0 && (
        <div
          className={classnames('grid gap-4 grid-cols-1 xsm:grid-cols-2 md:grid-cols-3', {
            'lg:grid-cols-4': isFullWidth,
          })}
        >
          {data.data.dataSource.items.map((product) => {
            return <ProductTeaser key={product.productId} product={product} showStrikePrice={showStrikePrice} />;
          })}
        </div>
      )}

      {showNextPage === 'InfinityScroll' && data.data.dataSource.count < data.data.dataSource.count && (
        <div ref={ref} className="w-full h-1" />
      )}

      {showNextPage === 'LoadMore' && data.data.dataSource.count < data.data.dataSource.count && (
        <div className="flex justify-center">
          <div onClick={onLoadNextPage} className="btn btn-outline btn-outline-black select-none cursor-pointer">
            {t('loadMore')}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductList;
