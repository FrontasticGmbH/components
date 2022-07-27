export interface Props {
  /*
   * function called when input is changed
   */
  readonly onChange: (newValue: boolean) => void;
  /*
   * whether the checkbox is checked
   */
  readonly checked: boolean;
  /*
   * input name, must be unique on page
   */
  readonly name: string;
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

const FormCheckbox = ({
  checked,
  onChange,
  name,
  inputAutoComplete,
  label,
  containerClassNames,
  labelClassNames,
  inputContainerClassNames,
  inputClassNames,
  inverseLabel,
}: Props) => {
  const labelElement = (
    <label htmlFor={name} className={labelClassNames || 'text-sm font-medium text-gray-900 dark:text-light-100'}>
      {label}
    </label>
  );

  const inputElement = (
    <div className={inputContainerClassNames || 'flex h-5 items-center'}>
      <input
        type="checkbox"
        id={name}
        name={name}
        autoComplete={inputAutoComplete}
        className={inputClassNames || 'h-4 w-4 rounded border-gray-300 text-accent-400 focus:ring-accent-400'}
        onChange={(e: React.FormEvent) => onChange((e.target as HTMLInputElement).checked)}
        checked={checked}
      />
    </div>
  );

  return (
    <div className={containerClassNames ? containerClassNames : 'mt-6 flex space-x-2'}>
      {inverseLabel && inputElement}
      {labelElement}
      {!inverseLabel && inputElement}
    </div>
  );
};

export default FormCheckbox;
