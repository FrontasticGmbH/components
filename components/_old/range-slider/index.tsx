import React from 'react';
import { Range } from 'rc-slider';

import 'rc-slider/assets/index.css';

type Props = {
  value?: number[];
  min?: number;
  max?: number;
  onChange?: (value: number[]) => void;
  railStyle?: React.CSSProperties;
  handleStyle?: React.CSSProperties[];
  trackStyle?: React.CSSProperties[];
};

export const RangeSlider: React.FC<Props> = ({
  value,
  min,
  max,
  onChange,
  railStyle,
  handleStyle,
  trackStyle,
}: Props) => {
  return (
    <Range
      value={value}
      min={min}
      max={max}
      onChange={onChange}
      railStyle={railStyle}
      handleStyle={handleStyle}
      trackStyle={trackStyle}
    />
  );
};
