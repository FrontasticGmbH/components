import React from 'react';

type Props = {
  className?: string;
};

const Icon: React.FC<Props> = ({ className }: Props) => (
  <svg
    width="100%"
    height="100%"
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
  </svg>
);

export default Icon;
