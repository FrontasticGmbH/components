interface Props {
  readonly buttonText: string;
  readonly onClick: () => void;
  readonly isDisabled?: boolean;
}

const FormButton = ({ buttonText, onClick, isDisabled }: Props) => {
  let className =
    'w-full mt-6 bg-accent-400 border border-transparent rounded-md shadow-sm py-2 px-4 text-sm font-medium text-white hover:bg-accent-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-accent-500 disabled:cursor-not-allowed disabled:bg-gray-400';

  return (
    <button
      className={className}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      disabled={isDisabled}
    >
      {buttonText}
    </button>
  );
};

export default FormButton;
