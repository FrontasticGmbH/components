export default [
  {
    name: 'filters.sortFilter.lowPrice',
    value: {
      attributeId: 'variants.scopedPrice.value.centAmount',
      order: 'ascending',
    },
  },
  {
    name: 'filters.sortFilter.highPrice',
    value: {
      attributeId: 'variants.scopedPrice.value.centAmount',
      order: 'descending',
    },
  },
];
