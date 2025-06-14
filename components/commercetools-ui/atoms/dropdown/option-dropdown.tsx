import React, { useCallback, useEffect } from 'react';
import { Listbox, Transition, ListboxButton, ListboxOptions, ListboxOption } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { useTranslations } from 'next-intl';
import useControllableState from 'helpers/hooks/useControllable';
import { Option } from './index';

export interface Props {
  error?: boolean;
  label?: string;
  required?: boolean;
  labelClassName?: string;
  options?: Option[];
  value?: Option;
  defaultValue?: Option;
  onChange?: (option: Option) => void;
  selectButtonClassName?: string;
}

const Select: React.FC<Props> = ({
  error,
  onChange,
  value,
  defaultValue,
  label,
  required,
  labelClassName = '',
  selectButtonClassName,
  options = [],
}) => {
  const [selected, setSelected] = useControllableState(value, defaultValue ?? options?.[0]);
  const translate = useTranslations();

  useEffect(() => {
    setSelected(defaultValue ?? options?.[0]);
  }, [defaultValue, options, setSelected]);

  const handleChange = useCallback(
    (option: Option) => {
      setSelected(option);
      onChange?.(option);
    },
    [onChange, setSelected],
  );

  const buttonClassNames = useCallback(
    (open?: boolean) => {
      return `${error ? 'border-red-500' : 'border-neutral-500'}
        cursor-pointer relative flex h-[40px] cursor-default items-center rounded-sm border pl-8 pr-32 text-left
        ${
          open
            ? 'rounded-t-sm rounded-b-none border-x-neutral-500 border-b-neutral-400 border-t-neutral-500'
            : 'rounded-sm'
        }
        w-full bg-white py-12 focus:border-gray-500 focus:shadow-md active:border-gray-500
        ${selectButtonClassName}`;
    },
    [selectButtonClassName, error],
  );

  return (
    <>
      {label && (
        <div className="mb-8">
          <label className={`${labelClassName} text-14 font-medium text-gray-600`}>
            {required ? `${label} *` : label}
          </label>
        </div>
      )}
      <Listbox value={selected} onChange={handleChange}>
        {({ open }) => (
          <div className="relative w-full">
            <ListboxButton className={buttonClassNames(open)} data-test-error={error ? '1' : '0'}>
              <span className="text-14">{selected?.name}</span>
              <span
                className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-8"
                aria-label={translate('common.caret-down')}
              >
                <ChevronDownIcon data-testid="chevron-down-icon" className="size-20 text-gray-600" aria-hidden="true" />
              </span>
            </ListboxButton>
            <Transition
              enter="transition ease-out duration-100"
              enterFrom="transform origin-top scale-y-0"
              enterTo="transform origin-top scale-y-100"
              leave="transition ease-in duration-100"
              leaveFrom="transform origin-top scale-y-150"
              leaveTo="transform origin-top scale-y-0"
            >
              <ListboxOptions
                className={(active) =>
                  `absolute top-39 z-50 max-h-200 w-full overflow-scroll rounded-b-sm border py-8 ${
                    active ? 'border-x-neutral-500 border-b-neutral-500' : 'border-neutral-400'
                  } bg-white`
                }
              >
                {options.map((option) => (
                  <ListboxOption
                    key={option.value}
                    className={({ focus }) =>
                      `relative cursor-pointer select-none py-4 pl-8 pr-4 text-14 hover:bg-neutral-200 ${
                        focus ? 'bg-neutral-200' : ''
                      }`
                    }
                    value={option}
                  >
                    {({ selected }) => (
                      <>
                        <span className={`block truncate text-14 ${selected ? 'font-medium' : 'font-normal'}`}>
                          {option.name}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                            <CheckIcon className="size-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </Transition>
          </div>
        )}
      </Listbox>
    </>
  );
};

export default Select;
