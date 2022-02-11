interface Props {
    readonly buttonText: string,
    readonly onClick: () => void
}

const FormButton = ({ buttonText, onClick }: Props) => {
    return <button
        className="w-full mt-6 bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        onClick={(e) => {
            e.preventDefault();
            onClick();
        }}
    >
        {buttonText}
    </button>
}

export default FormButton;
