import React from 'react';

type Props = {
  className?: string;
  children?: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
};

export const Button: React.FC<Props> = ({
  className,
  children = null,
  icon = null,
  disabled = undefined,
  onClick,
}: Props) => {
  return (
    <button
      className={`${className} bg-indigo-500 hover:bg-indigo-800 rounded h-10 font-bold px-5 flex justify-center items-center`}
      onClick={onClick}
      disabled={disabled}
    >
      <span>{icon && icon}</span>
      {children && children}
    </button>
  );
};
