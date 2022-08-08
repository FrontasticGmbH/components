import Typography from 'components/commercetools-ui/typography';
import { useRef } from 'react';

interface Props {
  title: string;
  content: string | Promise<string>;
  fallbackContent: string;
  emailInputLabel?: string;
  emailInputPlaceholder?: string;
  onSubmit: () => Promise<void> | void;
  emailInputValue: string;
  onInputChange: (propKey: string, newValue: string) => void;
  disclaimer?: string;
}

const ExampleComponent = ({
  title,
  content,
  fallbackContent,
  emailInputLabel = 'Email:',
  emailInputPlaceholder = 'Enter email...',
  onSubmit,
  emailInputValue,
  onInputChange,
  disclaimer,
}: Props) => {
  const emailId = useRef('id' + Math.random().toString().replace('.', ''));
  return (
    <div className="relative py-3 px-6 text-neutral-700 md:py-6 md:px-12 lg:py-9 lg:px-16 xl:flex xl:items-center">
      <div className="xl:w-0 xl:flex-1">
        <h2 className="mt-2 text-center text-2xl font-bold tracking-[0.010em] dark:text-light-100 md:text-left">
          {title}
        </h2>
        <p className="mt-3 max-w-2xl text-center text-sm dark:text-light-100 md:text-left">
          {content || fallbackContent}
        </p>
      </div>
      <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
        <label htmlFor={emailId.current} className="sr-only">
          <Typography>{emailInputLabel}</Typography>
        </label>
        <input
          id={emailId.current}
          name="email"
          type="email"
          className="block w-full rounded-md border border-transparent py-3 px-5 text-sm leading-5 text-gray-600 shadow-sm placeholder:text-gray-500 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-accent-400"
          placeholder={emailInputPlaceholder}
          value={emailInputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onInputChange(e.target.name, e.target.value)}
        />
        <button name="submit" onClick={onSubmit}>
          Submit
        </button>
        {disclaimer && (
          <p className="mt-2 max-w-md text-left text-xs text-neutral-600 dark:text-light-100 xl:px-5">
            <Typography>{disclaimer}</Typography>
          </p>
        )}
      </div>
    </div>
  );
};

export default ExampleComponent;
