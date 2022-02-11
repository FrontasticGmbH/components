import React from 'react';

type Props = {
  className?: string;
};

const Icon: React.FC<Props> = ({ className }: Props) => (
  <svg width="18" height="14" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1 0h16a1 1 0 110 2H1a1 1 0 010-2zm0 6h16a1 1 0 110 2H1a1 1 0 010-2zm0 6h16a1 1 0 010 2H1a1 1 0 010-2z"
      fill="#2D3748"
    />
  </svg>
);

export default Icon;
