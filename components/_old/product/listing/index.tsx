import React from 'react';
import classnames from 'classnames';

import ProductList from './product-list';
import { CategoryNavigationTree } from '../category-navigation-tree';

type Props = {
  data?: any;
  node?: any;
  sortState?: any;
  handleFacetsChanged?: (f: any) => void;
  handleSortChange?: (s: any) => void;
  handleLoadNextPage?: () => void;
  handleAddToWishlist?: (p: any, v: any) => void;
};

export const ProductListing: React.FC<Props> = ({
  data,
  node,
  sortState,
  handleFacetsChanged,
  handleSortChange,
  handleLoadNextPage,
  handleAddToWishlist,
}: Props) => {
  return (
    <div className="flex flex-row">
      {data.showSidebar && (
        <div className="hidden md:block md:w-1/4 pt-4 pl-4">
          <CategoryNavigationTree title={data.sidebarHeader} navTree={data.tree} currentPage={node} />
        </div>
      )}

      <div className={classnames('w-full flex flex-col', { 'md:w-3/4': data.showSidebar })}>
        <ProductList
          data={data}
          sortState={sortState}
          onLoadNextPage={handleLoadNextPage}
          onSortChange={handleSortChange}
          onFacetsChanged={handleFacetsChanged}
          onAddToWishlist={handleAddToWishlist}
          isFullWidth={!data.showSidebar}
          showFacets={data.showFacets}
          showNextPage={data.showNextPage}
          showProductsCount={data.showProductsCount}
          showStrikePrice={data.showStrikePrice}
        />
      </div>
    </div>
  );
};
