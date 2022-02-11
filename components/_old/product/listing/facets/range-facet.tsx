import React, { useState, useEffect } from 'react';

import { RangeSlider } from 'components';

type Props = {
  facet: any;
  onChange?: (f: any) => void;
};

const RangeFacet: React.FC<Props> = ({ facet, onChange }: Props) => {
  const min: number = Math.round(facet.min / 100);
  const max: number = Math.round(facet.max / 100);

  const [tmpMin, setTmpMin] = useState(facet.value.min ? Math.round(parseFloat(facet.value.min) / 100) : min);
  const [tmpMax, setTmpMax] = useState(facet.value.max ? Math.round(parseFloat(facet.value.max) / 100) : max);
  const [value, setValue] = useState([tmpMin, tmpMax]);

  useEffect(() => {
    setTmpMin(facet.value.min ? Math.round(parseFloat(facet.value.min) / 100) : min);
    setTmpMax(facet.value.max ? Math.round(parseFloat(facet.value.max) / 100) : max);
    setValue([tmpMin, tmpMax]);
  }, [facet, max, min, tmpMax, tmpMin]);

  const onRangeChange = (v) => {
    setValue(v);

    setTmpMin(v[0]);
    setTmpMax(v[1]);

    if (v[0] === facet.min && v[1] === facet.max) {
      facet.selected = false;
    } else {
      facet.selected = true;
    }

    facet.value.min = v[0] * 100;
    facet.value.max = v[1] * 100;

    if (onChange) {
      onChange(facet);
    }
  };

  const railStyle = {
    backgroundColor: '#CBD5E0',
    height: '5px',
  };

  const handleStyle = [
    {
      backgroundColor: '#2D3748',
      borderColor: '#2D3748',
      width: '24px',
      height: '24px',
      marginTop: '-10px',
    },
    {
      backgroundColor: '#2D3748',
      borderColor: '#2D3748',
      width: '24px',
      height: '24px',
      marginTop: '-10px',
    },
  ];

  const trackStyle = [
    {
      backgroundColor: '#718096',
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="mt-8 w-full px-4">
        <RangeSlider
          value={value}
          min={min}
          max={max}
          onChange={onRangeChange}
          railStyle={railStyle}
          handleStyle={handleStyle}
          trackStyle={trackStyle}
        />
      </div>

      <div className="my-8 w-full flex justify-between">
        <span className="text-gray-600 absolute left-0 ml-6 mt-2 select-none">€</span>

        <input
          name="min"
          type="number"
          value={tmpMin}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setTmpMin(parseInt(e.currentTarget.value));
          }}
          onBlur={() => {
            if (Number.isNaN(tmpMin) || tmpMin < min) {
              onRangeChange([min, value[1]]);
            } else {
              onRangeChange([tmpMin, value[1]]);
            }
          }}
          style={{ height: '36px' }}
          className="w-20 px-3 py-2 border border-gray-400 rounded-md box-border text-sm text-right leading-normal"
        />

        <span className="text-gray-600 absolute right-0 mr-20 mt-2 select-none">€</span>
        <input
          name="max"
          type="number"
          value={tmpMax}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setTmpMax(parseInt(e.currentTarget.value));
          }}
          onBlur={() => {
            if (Number.isNaN(tmpMax) || tmpMax > max) {
              onRangeChange([value[0], max]);
            } else {
              onRangeChange([value[0], tmpMax]);
            }
          }}
          style={{ height: '36px' }}
          className="w-20 px-3 py-2 border border-gray-400 rounded-md box-border text-sm text-right leading-normal"
        />
      </div>
    </div>
  );
};

export default RangeFacet;
