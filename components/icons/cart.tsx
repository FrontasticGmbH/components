import React from 'react';

type Props = {
  className?: string;
};

const Icon: React.FC<Props> = ({ className }: Props) => (
  <svg className={className} width="22" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 14a3 3 0 11-2.83 2H8.83a3 3 0 11-5.62-.1A3 3 0 014 10V2H2a1 1 0 010-2h3a1 1 0 011 1v1h14a1 1 0 01.9 1.45l-4 8a1 1 0 01-.9.55H4a1 1 0 000 2h12zM6 10h9.38l3-6H6v6zm0 8a1 1 0 100-2 1 1 0 000 2zm10 0a1 1 0 100-2 1 1 0 000 2z"
      fill="#2D3748"
    />
  </svg>
);

export default Icon;
