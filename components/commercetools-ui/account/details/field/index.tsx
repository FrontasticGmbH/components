import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useFormat } from 'helpers/hooks/useFormat';

type InputAndSelect = Omit<React.ComponentProps<'input'>, 'onChange'> &
  Omit<React.ComponentProps<'select'>, 'onChange'>;

interface FieldInput extends InputAndSelect {
  options?: Array<{
    name: string;
    value: string;
  }>;
}

export interface FieldProps extends FieldInput {
  label?: string;
  onChange?: (val: string) => void;
}

const Field: React.FC<FieldProps> = ({ id, label, value: text, onChange, ...input }) => {
  //input value
  const [value, setValue] = useState((input.defaultValue as string) || text);

  //input change handler
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      onChange?.(newValue);
    },
    [onChange],
  );

  //returns an appropriate input element
  const InputComponent = useMemo(() => {
    //given input type or fallback to default if not supplied
    const type = input.type || 'text';
    //return the proper input based on that type
    switch (type) {
      case 'select':
        const options = input.options ?? [];
        return (
          <select
            {...input}
            id={id}
            className="mt-1 block w-full rounded-sm border-neutral-400 py-3 pr-10 pl-3 text-base text-neutral-600 transition duration-150 ease-out focus:border-accent-400 focus:outline-none focus:ring-accent-400 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400 sm:text-sm"
            defaultValue={value}
            onChange={handleChange}
          >
            {options.map((option) => (
              <option key={option.name} value={option.value}>
                {option.name}
              </option>
            ))}
          </select>
        );
      default:
        return (
          <input
            {...input}
            id={id}
            aria-label={label}
            value={value}
            className="block w-full rounded-sm border-neutral-400 p-3 text-neutral-600 shadow-sm transition duration-150 ease-out focus:border-accent-400 focus:ring-accent-400 disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-400 sm:text-sm"
            onChange={handleChange}
          />
        );
    }
  }, [input, handleChange, value]);

  return (
    <div>
      <label htmlFor={id} className="mb-3 block text-sm font-medium capitalize text-gray-600">
        {label}
      </label>
      {InputComponent}
    </div>
  );
};

export default Field;
