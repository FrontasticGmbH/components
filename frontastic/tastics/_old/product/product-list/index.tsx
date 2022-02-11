import React from 'react';

import { ProductListing } from 'components';

const ProductListingTastic = ({ data, node, route, tastic, wishlist, urlHandler }) => {
  console.log('product list ', data, node, route, tastic, wishlist, urlHandler);

  // if (wishlist.isComplete()) {
  //   data.stream.items.map((product) => {
  //     const wishlisted = wishlist.data.lineItems.find((item) => {
  //       return item.variant.sku === product.variants[0].sku;
  //     });

  //     product.wishlisted = !!wishlisted;
  //     product.wishlistItemId = wishlisted ? wishlisted.lineItemId : null;

  //     return product;
  //   });
  // }

  // const parameters = urlHandler.parameterReader(tastic.configuration.stream).getParameters();

  //var sortState = {};

  //if (parameters) {
  //  sortState = {
  //    attributeId: parameters.sortAttributeId,
  //    order: parameters.sortOrder,
  //  };
  //}

  //const onChangeStreamParameters = (parameters) => {
  //  const newParams = {
  //    ...route.parameters,
  //    ...parameters,
  //  };

  //  //app.getRouter().push(route.route, newParams);
  //};

  const handleAddToWishlist = (product: any, variant: any) => {
    console.log('add to wishlist');
    //app.getLoader('wishlist').add(product, variant, 1, null);
  };

  // const handleLoadNextPage = () => {
  //   const parameters = urlHandler.deriveParameters((urlState) => {
  //     var stream = urlState.getStream(tastic.configuration.stream);

  //     stream.setOffset(0);

  //     if (data.stream.count + 24 > data.stream.total) {
  //       stream.setLimit(data.stream.total);
  //     } else {
  //       stream.setLimit(data.stream.count + 24);
  //     }
  //   });

  //   onChangeStreamParameters(parameters);
  // };

  // const handleSortChange = (sort: any) => {
  //   const parameters = urlHandler.deriveParameters((urlState) => {
  //     var stream = urlState.getStream(tastic.configuration.stream);

  //     stream.setOffset(0);
  //     stream.setLimit(24);

  //     stream.setSortOrder(sort.attributeId, sort.order);
  //   });

  //   onChangeStreamParameters(parameters);
  // };

  // const handleFacetsChanged = (facets: any) => {
  //   const parameters = urlHandler.deriveParameters((urlState) => {
  //     var stream = urlState.getStream(tastic.configuration.stream);

  //     stream.setOffset(0);
  //     stream.setLimit(24);

  //     facets.forEach((facet) => {
  //       if (facet.selected) {
  //         if (facet.type === 'range') {
  //           stream.setFilter(facet.handle, {
  //             min: facet.value.min,
  //             max: facet.value.max,
  //           });
  //         }

  //         if (facet.type === 'term') {
  //           var newTerms = facet.terms
  //             .filter((facet) => {
  //               return facet.selected === true;
  //             })
  //             .map((facet) => {
  //               return facet.value;
  //             });

  //           if (newTerms) {
  //             stream.setFilter(facet.handle, {
  //               terms: newTerms,
  //             });
  //           }
  //         }
  //       } else {
  //         stream.removeFilter(facet.handle);
  //       }
  //     });
  //   });

  //   onChangeStreamParameters(parameters);
  // };
  //
  const handleFacetsChanged = () => console.log('handleFacetsChanged');
  const handleSortChange = () => console.log('handleSortChange');
  const handleLoadNextPage = () => console.log('handleLoadNextPage');

  return (
    <ProductListing
      data={data}
      node={node}
      sortState={{}}
      handleFacetsChanged={handleFacetsChanged}
      handleSortChange={handleSortChange}
      handleLoadNextPage={handleLoadNextPage}
      handleAddToWishlist={handleAddToWishlist}
    />
  );
};

export default ProductListingTastic;
