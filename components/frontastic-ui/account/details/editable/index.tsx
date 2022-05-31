import React, { useCallback, useMemo, useState } from 'react';
import { useFormat } from 'helpers/hooks/useFormat';

interface EditableInput extends React.ComponentProps<'input'> {
  options?: Array<{
    name: string;
    value: string;
  }>;
}

export interface EditableProps {
  label?: string;
  text?: string;
  input?: EditableInput;
  onChange?: (val: string) => void;
  validateSubmission?: (val: string) => boolean;
  onSubmit?: (val: string) => void;
  editable?: boolean;
}

const Editable: React.FC<EditableProps> = ({
  label,
  text,
  onChange,
  validateSubmission,
  onSubmit,
  editable = true,
  input = {},
}) => {
  //i18n messages
  const { formatMessage } = useFormat({ name: 'common' });

  //edit mode
  const [isEdit, setIsEdit] = useState(false);

  //edit mode methods
  const startEdit = () => setIsEdit(true);
  const stopEdit = () => setIsEdit(false);

  //input value
  const [value, setValue] = useState((input.defaultValue as string) || text);

  //displayed text
  const [displayed, setDisplayed] = useState(text);

  //input change handler
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const newValue = e.target.value;
      setValue(newValue);
      onChange?.(newValue);
    },
    [onChange],
  );

  //save submit handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateSubmission && !validateSubmission(value)) return;
    setDisplayed(input.type === 'select' ? input.options.find((option) => option.value === value).name : value);
    stopEdit();
    onSubmit?.(value);
  };

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
            className="mt-1 block w-full rounded-md border-gray-300 py-2 pr-10 pl-3 text-base focus:border-accent-400 focus:outline-none focus:ring-accent-400 sm:text-sm"
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
            value={value}
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-400 focus:ring-accent-400 sm:text-sm"
            onChange={handleChange}
          />
        );
    }
  }, [input, handleChange, value]);

  return (
    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
      {label && <dt className="text-sm font-medium text-gray-500 dark:text-light-100">{label}</dt>}
      <dd className="mt-1 flex items-center text-sm text-gray-900 sm:col-span-2 sm:mt-0">
        {isEdit ? (
          <form id="editable-form" className="grow" onSubmit={handleSubmit}>
            {InputComponent}
          </form>
        ) : (
          <span className="grow dark:text-light-100">{displayed}</span>
        )}
        {isEdit ? (
          <div className="flex md:ml-20">
            <span className="ml-4 shrink-0">
              <button
                type="submit"
                className="rounded-md font-medium text-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2"
                form="editable-form"
              >
                {formatMessage({ id: 'save', defaultMessage: 'Save' })}
              </button>
            </span>
            <span className="ml-4 shrink-0">
              <button
                type="button"
                className="rounded-md font-medium text-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2"
                onClick={stopEdit}
              >
                {formatMessage({ id: 'cancel', defaultMessage: 'Cancel' })}
              </button>
            </span>
          </div>
        ) : (
          editable && (
            <span className="ml-4 shrink-0">
              <button
                type="button"
                className="rounded-md font-medium text-accent-400 focus:outline-none focus:ring-2 focus:ring-accent-400 focus:ring-offset-2"
                onClick={startEdit}
              >
                {formatMessage({ id: 'update', defaultMessage: 'Update' })}
              </button>
            </span>
          )
        )}
      </dd>
    </div>
  );
};

export default Editable;
