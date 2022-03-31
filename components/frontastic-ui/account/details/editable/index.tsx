import React, { useCallback, useMemo, useState } from 'react';

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
            className="focus:border-pink-400 focus:ring-pink-400 mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:outline-none sm:text-sm"
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
            className="focus:border-pink-400 focus:ring-pink-400 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
            onChange={handleChange}
          />
        );
    }
  }, [input, handleChange, value]);

  return (
    <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
      {label && <dt className="text-sm font-medium text-gray-500">{label}</dt>}
      <dd className="mt-1 flex items-center text-sm text-gray-900 sm:col-span-2 sm:mt-0">
        {isEdit ? (
          <form id="editable-form" className="flex-grow" onSubmit={handleSubmit}>
            {InputComponent}
          </form>
        ) : (
          <span className="flex-grow">{displayed}</span>
        )}
        {isEdit ? (
          <div className="flex md:ml-20">
            <span className="ml-4 flex-shrink-0">
              <button
                type="submit"
                className="text-pink-400 focus:ring-pink-400 rounded-md bg-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
                form="editable-form"
              >
                Save
              </button>
            </span>
            <span className="ml-4 flex-shrink-0">
              <button
                type="button"
                className="text-pink-400 focus:ring-pink-400 rounded-md bg-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
                onClick={stopEdit}
              >
                Cancel
              </button>
            </span>
          </div>
        ) : (
          editable && (
            <span className="ml-4 flex-shrink-0">
              <button
                type="button"
                className="text-pink-400 focus:ring-pink-400 rounded-md bg-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
                onClick={startEdit}
              >
                Update
              </button>
            </span>
          )
        )}
      </dd>
    </div>
  );
};

export default Editable;
