
interface Props {
    readonly name: string,
    readonly label: string,
    readonly options: { display: string, data: string }[],
    readonly selectedOptionValue: string,
    readonly onChange: (propName: string, newValue: string) => void,
    readonly containerClassName?: string
}

const FormSelect = ({ name, label, options, selectedOptionValue, onChange, containerClassName }: Props) => {
    return (
        <div className={containerClassName} >
            <label htmlFor={name} className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            <select
                id={name}
                name={name}
                className={"mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"}
                value={selectedOptionValue}
                onChange={(e) => onChange("country", e.target.value)}
            >
                {!selectedOptionValue && <option>Please select</option>}
                {options.map((option, n) => <option key={n} value={option.data} >
                    {option.display}
                </option>)}
            </select>
        </div >
    )
}

export default FormSelect
