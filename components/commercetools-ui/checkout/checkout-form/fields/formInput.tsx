export interface Props {
  /*
   * function called when input is changed
   */
  readonly onChange: (propName: string, newValue: string) => void;
  /*
   * the value of the input
   */
  readonly value: string;
  /*
   * input name, must be unique on page
   */
  readonly name: string;
  /*
   * type for input, "text" by default
   */
  readonly inputType?: string;
  /*
   * the optional autoComplete attribute for the input
   */
  readonly inputAutoComplete?: string;
  /*
   * the label text displayed to the user
   */
  readonly label: string;
  /*
   * replaces the component wrapper's className field if provided
   */
  readonly containerClassNames?: string;
  /*
   * replaces the label's className field if provided
   */
  readonly labelClassNames?: string;
  /*
   * replaces the input wrapper's className field if provided
   */
  readonly inputContainerClassNames?: string;
  /*
   * replaces the input's className field if provided
   */
  readonly inputClassNames?: string;
  /*
   * if true replaces the order of the input and label
   */
  readonly inverseLabel?: boolean;
}

const FormInput = ({
  onChange,
  value,
  name,
  inputType,
  inputAutoComplete,
  label,
  containerClassNames,
  labelClassNames,
  inputContainerClassNames,
  inputClassNames,
  inverseLabel,
}: Props) => {
  let labelElement = (
    <label
      htmlFor={name}
      className={labelClassNames ? labelClassNames : 'block text-sm font-medium text-gray-700 dark:text-light-100'}
    >
      {label}
    </label>
  );

  let inputElement = (
    <div className={inputContainerClassNames ? inputContainerClassNames : 'mt-1'}>
      <input
        type={inputType ? inputType : 'text'}
        id={name}
        name={name}
        autoComplete={inputAutoComplete}
        className={
          inputClassNames
            ? inputClassNames
            : 'block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-400 focus:ring-accent-400 sm:text-sm'
        }
        onChange={(e: React.FormEvent) =>
          onChange((e.target as HTMLInputElement).name, (e.target as HTMLInputElement).value)
        }
        value={value}
        checked={inputType === 'checkbox' ? value === 'true' : undefined}
      />
    </div>
  );

  return (
    <div className={containerClassNames ? containerClassNames : 'col-span-full'}>
      {inverseLabel && inputElement}
      {labelElement}
      {!inverseLabel && inputElement}
    </div>
  );
};

export default FormInput;
