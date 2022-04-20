interface Props {
  readonly name: string;
  readonly label: string;
  readonly options: { display: string; data: string }[];
  readonly selectedOptionValue: string;
  readonly onChange: (propName: string, newValue: string) => void;
  readonly containerClassName?: string;
}

const FormSelect = ({ name, label, options, selectedOptionValue, onChange, containerClassName }: Props) => {
  return (
    <div className={containerClassName}>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className={
          'mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-pink-400 focus:outline-none focus:ring-pink-400 sm:text-sm'
        }
        value={selectedOptionValue}
        onChange={(e) => onChange(e.target.name, e.target.value)}
      >
        {/* {!selectedOptionValue && <option value="">Please select</option>} */}
        {options.map((option, n) => (
          <option key={n} value={option.data}>
            {option.display}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;