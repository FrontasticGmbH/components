import React, { FC, useEffect, useRef, useState } from 'react';
import { URLParam } from 'helpers/utils/updateURLParams';
import { TwoThumbInputRange } from 'react-two-thumb-input-range';
import { Product } from '@Types/product/Product';
import { Facet } from '@Types/result/Facet';
import { RangeFacet } from '@Types/result/RangeFacet';
import { useRouter } from 'next/router';

type RangeInputValues = [number, number];

export type PriceRangeProps = {
  products: Product[];
  facets: Facet[];
  updatePriceFilteringParams?: (params: URLParam[]) => void;
};

const PriceRange: FC<PriceRangeProps> = ({ products, facets, updatePriceFilteringParams }) => {
  const router = useRouter();
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

  const convertCents = (amountInCents: number) => Math.trunc(amountInCents / 100);

  const setDefaults = () => {
    // Setting defaults for min and max price
    const priceFacet = facets?.find(({ identifier }) => identifier == 'variants.price');

    if (priceFacet) {
      let { min, max, minSelected, maxSelected } = priceFacet as RangeFacet;
      const minConverted = convertCents(min);
      const maxConverted = convertCents(max);

      setMinPrice(minConverted);
      setMaxPrice(maxConverted);

      // Setting default values
      if (minSelected && maxSelected) {
        const minSelectedConverted = convertCents(minSelected);
        const maxSelectedConverted = convertCents(maxSelected);
        updateValues([minSelectedConverted, maxSelectedConverted]);
      } else updateValues([minConverted, maxConverted]);

      // Setting currency
      setCurrency(products?.[0].variants[0].price.currencyCode);
    }
  };

  useEffect(() => {
    setInputWidth(widthRef.current.clientWidth);
    setDefaults();
  }, [router.asPath]);

  useEffect(() => {
    const params = [
      { key: 'facets[variants.price][min]', value: `${values[0] * 100}` },
      { key: 'facets[variants.price][max]', value: `${values[1] * 100}` },
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
