import React from 'react';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const Sticker: React.FC<Props> = ({ className, children }: Props) => {
  return <span className={`bg-background-primary text-xs text-red-600 rounded p-1 ${className}`}>{children}</span>;
};
