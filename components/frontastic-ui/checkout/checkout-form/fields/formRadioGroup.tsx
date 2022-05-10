import React from 'react';

interface Option {
  id?: string;
  label?: string;
  value?: string;
  default?: boolean;
}

export interface FormRadioGroupProps {
  headline?: string;
  subline?: string;
  options: Option[];
  className?: string;
  onChange?: (val: string) => void;
}

export default function FormRadioGroup({ headline, subline, options, onChange, className = '' }: FormRadioGroupProps) {
  return (
    <div className={className}>
      <label className="text-base font-medium text-gray-900">{headline}</label>
      <p className="text-sm leading-5 text-gray-500">{subline}</p>
      <fieldset className="mt-4">
        <legend className="sr-only">{headline}</legend>
        <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
          {options.map((option, index) => (
            <div key={index} className="flex items-center">
              <input
                id={option.id}
                name="notification-method"
                type="radio"
                defaultChecked={option.default}
                value={option.value}
                className="w-4 h-4 text-accent-400 border-gray-300 focus:ring-accent-400"
                onChange={(e) => onChange(e.target.value)}
              />
              <label htmlFor={option.id} className="block ml-3 text-sm font-medium text-gray-700">
                {option.label}
              </label>
            </div>
          ))}
        </div>
      </fieldset>
    </div>
  );
}
