import React, { FC, useEffect, useRef, useState } from 'react';
import { URLParam } from 'helpers/utils/updateURLParams';
import { TwoThumbInputRange } from 'react-two-thumb-input-range';
import { Product } from '@Types/product/Product';
import { Facet } from '@Types/result/Facet';
import { RangeFacet } from '@Types/result/RangeFacet';

type RangeInputValues = [number, number];

export type PriceRangeProps = {
  products: Product[];
  facets: Facet[];
  updatePriceFilteringParams?: (params: URLParam[]) => void;
};

const PriceRange: FC<PriceRangeProps> = ({ products, facets, updatePriceFilteringParams }) => {
  const widthRef = useRef(null);
  const [inputWidth, setInputWidth] = useState(0);
  const [minPrice, setMinPrice] = useState<number>(null);
  const [maxPrice, setMaxPrice] = useState<number>(null);
  const [values, setValues] = useState<RangeInputValues>([minPrice, maxPrice]);
  const [currency, setCurrency] = useState('');

  const updateValues = (updatedValues) => {
    if (updatedValues[1] <= updatedValues[0]) return;
    setValues(updatedValues);
  };

  const setDefaults = () => {
    // Setting defaults for min and max price
    const priceFacet = facets?.find(({ identifier }) => identifier == 'variants.price');
    if (priceFacet) {
      let { min, max } = priceFacet as RangeFacet;
      min = Math.trunc(min / 100);
      max = Math.trunc(max / 100);

      setMinPrice(min);
      setMaxPrice(max);

      // Setting default values
      updateValues([min, max]);

      // Setting currency
      setCurrency(products?.[0].variants[0].price.currencyCode);
    }
  };

  useEffect(() => {
    setInputWidth(widthRef.current.clientWidth);
    setDefaults();
  }, []);

  useEffect(() => {
    const params = [
      { key: 'minPrice', value: `${values[0] * 100}` },
      { key: 'maxPrice', value: `${values[1] * 100}` },
    ];

    updatePriceFilteringParams?.(params);
  }, [values]);

  return (
    <div className="grid w-full gap-4">
      <div className="flex justify-between" ref={widthRef}>
        <h6 className="text-gray-500">
          {values[0]} {currency}
        </h6>
        <h6 className="text-gray-500">
          {values[1]} {currency}
        </h6>
      </div>
      {minPrice && (
        <TwoThumbInputRange
          thumbStyle={{ borderRadius: '0', transform: 'rotate(45deg)' }}
          inputStyle={{ width: inputWidth }}
          trackColor="#E91E63"
          railColor="#C4C4C4"
          thumbColor="#E91E63"
          showLabels={false}
          onChange={updateValues}
          values={values}
          min={minPrice}
          max={maxPrice}
        />
      )}
    </div>
  );
};

export default PriceRange;
