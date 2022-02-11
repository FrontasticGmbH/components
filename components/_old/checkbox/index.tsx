import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

type Props = {
  value?: boolean;
  className?: string;
  label?: string;
  onClick?: () => void;
};

export const Checkbox: React.FC<Props> = ({ value = false, className = '', label = '', onClick }: Props) => {
  const [id] = useState(() => {
    return 'checkbox-' + uuidv4();
  });

  return (
    <>
      <input id={id} type="checkbox" className={`mr-2 ${className}`} defaultChecked={value} onClick={onClick} />
      <label htmlFor={id}>{label}</label>
    </>
  );
};
