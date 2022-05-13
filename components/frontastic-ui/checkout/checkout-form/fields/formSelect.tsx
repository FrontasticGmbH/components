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
          'mt-1 block w-full rounded-md border-gray-300 py-2 pr-10 pl-3 text-base focus:border-accent-400 focus:outline-none focus:ring-accent-400 sm:text-sm'
        }
        value={selectedOptionValue}
        onChange={(e) => onChange(e.target.name, e.target.value)}
      >
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
