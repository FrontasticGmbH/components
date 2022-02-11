import React from 'react';

import ChevronDown from 'components/icons/chevron-down';

type Props = {
  options: Array<any>;
  value?: string;
  className?: string;
  onChange?: (i: number) => void;
  formatOptionLabel: (s: string) => string;
};

export const Dropdown: React.FC<Props> = ({ options, value, className, onChange, formatOptionLabel }: Props) => {
  const alreadyListed = [];

  return (
    <div className="relative">
      <select
        value={value}
        className={`${className} appearance-none w-full bg-white border border-neutral-300 text-base text-neutral-900 font-bold py-2 pl-4 pr-8 rounded leading-tight focus:outline-none focus:border-neutral-600`}
        onChange={(e) => onChange(e.target.options.selectedIndex)}
      >
        {options.map((v: string, i: number) => {
          const label = formatOptionLabel ? formatOptionLabel(v) : v;

          if (alreadyListed.includes(label)) {
            return null;
          }

          alreadyListed.push(label);
          return <option key={i}>{label}</option>;
        })}
      </select>
      <div className="pointer-events-none absolute top-3 right-0 flex items-center px-2 text-neutral-700">
        <ChevronDown className="fill-current h-4 w-4" />
      </div>
    </div>
  );
};
