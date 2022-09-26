import React, { FC, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { Product } from '@Types/product/Product';
import { Facet } from '@Types/result/Facet';
import { RangeFacet } from '@Types/result/RangeFacet';
import { TwoThumbInputRange } from 'react-two-thumb-input-range';
import { URLParam } from 'helpers/utils/updateURLParams';
import Price from '../price';

type RangeInputValues = [number, number];

export type PriceRangeProps = {
  facet: RangeFacet;
  currency: string;
  onChange: (values: [number, number]) => void;
};

const RangeFilter: FC<PriceRangeProps> = ({ facet, onChange, currency }) => {
  const router = useRouter();
  const widthRef = useRef(null);
  const [inputWidth, setInputWidth] = useState(0);
  const [minPrice, setMinPrice] = useState<number>(null);
  const [maxPrice, setMaxPrice] = useState<number>(null);
  const [values, setValues] = useState<RangeInputValues>([minPrice, maxPrice]);

  const updateValues = (updatedValues: RangeInputValues) => {
    if (updatedValues[1] <= updatedValues[0]) return;
    setValues(updatedValues);
  };

  const convertCents = (amountInCents: number) => Math.trunc(amountInCents / 100);

  useEffect(() => {
    if (facet) {
      const { min, max, minSelected, maxSelected } = facet as RangeFacet;
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
    }

    setInputWidth(widthRef.current.clientWidth);
  }, [router, facet]);

  useEffect(() => {
    onChange([values[0] * 100, values[1] * 100]);
  }, [values]);

  return (
    <div className="grid w-full gap-4">
      <div className="flex justify-between" ref={widthRef}>
        <>
          <Price
            className="text-gray-500"
            price={{ fractionDigits: 0, centAmount: values[0], currencyCode: currency }}
          />
          <Price
            className="text-gray-500"
            price={{ fractionDigits: 0, centAmount: values[1], currencyCode: currency }}
          />
        </>
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

export default RangeFilter;
