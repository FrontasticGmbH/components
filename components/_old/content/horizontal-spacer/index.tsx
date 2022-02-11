import React from 'react';

const SIZE_MAP = {
  xxs: '4',
  xs: '8',
  sm: '12',
  md: '16',
  lg: '20',
  xl: '24',
};

type Props = {
  data: any;
};

export const HorizontalSpacer: React.FC<Props> = ({ data }: Props) => {
  const size = data.size || 'xl';
  const spaceInPx = data.spaceInPx || SIZE_MAP[size];

  return (
    <div
      className="w-full"
      style={{
        height: `${spaceInPx}px`,
      }}
    />
  );
};
