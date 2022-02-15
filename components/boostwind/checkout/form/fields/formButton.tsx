interface Props {
    readonly buttonText: string,
    readonly onClick: () => void,
    readonly isDisabled?: boolean
}

const FormButton = ({ buttonText, onClick, isDisabled }: Props) => {
    let className = "w-full mt-6 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    if (isDisabled) {
        className += " cursor-not-allowed"
    }
    return <button
        className={className}
        onClick={(e) => {
            e.preventDefault();
            onClick();
        }}
        disabled={isDisabled}
    >
        {buttonText}
    </button>
}

export default FormButton;
