import React from 'react';

type Props = {
  className?: string;
  onClick?: () => void;
};

const Icon: React.FC<Props> = ({ className, onClick }: Props) => (
  <svg
    width="100%"
    height="100%"
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    onClick={onClick}
  >
    <path d="M16.24 14.83a1 1 0 0 1-1.41 1.41L12 13.41l-2.83 2.83a1 1 0 0 1-1.41-1.41L10.59 12 7.76 9.17a1 1 0 0 1 1.41-1.41L12 10.59l2.83-2.83a1 1 0 0 1 1.41 1.41L13.41 12l2.83 2.83z" />
  </svg>
);

export default Icon;
