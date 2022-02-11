import React from 'react';

type Props = {
  className?: string;
};

const Icon: React.FC<Props> = ({ className }: Props) => (
  <svg className={className} width="22" height="20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11.76 1.76a6 6 0 018.48 8.48l-8.53 8.54a1 1 0 01-1.42 0l-8.53-8.54a6 6 0 018.48-8.48l.76.75.76-.75zm7.07 7.07a4.002 4.002 0 10-5.66-5.66l-1.46 1.47a.999.999 0 01-1.42 0L8.83 3.17a4.002 4.002 0 00-5.66 5.66L11 16.66l7.83-7.83z"
      fill="#2D3748"
    />
  </svg>
);

export default Icon;
