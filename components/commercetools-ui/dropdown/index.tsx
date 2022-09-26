import React, { FC, useState } from 'react';

export type DropdownProps = {
  className?: string;
  items: Array<{ label: string; value: string }>;
  label?: string;
  onChange?: (selectedValue: string) => void;
  value?: string;
  defaultValue?: string;
};

const Dropdown: FC<DropdownProps> = ({ className, label, items, onChange, value, defaultValue }) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleChange = (value: string) => {
    setSelectedValue(value);
    onChange(value);
  };

  return (
    <label className={className}>
      {label}
      <select
        className="w-28 border-gray-300"
        value={value || selectedValue}
        onChange={(event) => {
          handleChange(event.target.value);
        }}
      >
        {items.map(({ label, value }, index) => (
          <option key={index} value={value}>
            {label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Dropdown;
