import { useFormat } from 'helpers/hooks/useFormat';
import React, { useEffect, useRef } from 'react';

export interface Props extends React.ComponentProps<'input'> {
  onSubmit?: () => void;
}

const SearchInput: React.FC<Props> = ({ onSubmit, ...props }) => {
  //formatted messages
  const { formatMessage } = useFormat({ name: 'common' });

  //input ref
  const ref = useRef<HTMLInputElement>(null);

  //form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit?.();
  };

  useEffect(() => {
    //upon mounting we initially focus the input
    ref.current.focus();
  }, []);

  return (
    <form
      className="fixed top-[65px] left-0 z-40 w-full bg-white p-5 shadow-md md:absolute md:top-1/2 md:right-0 md:left-[unset] md:w-[300px] md:-translate-y-1/2 md:p-0 md:shadow-none"
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="sr-only">
        Search
      </label>
      <input
        type="text"
        name="search"
        id="search"
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-accent-400 focus:ring-accent-400 sm:text-sm"
        placeholder={`${formatMessage({ id: 'search', defaultMessage: 'Search' })}...`}
        {...props}
        ref={ref}
      />
    </form>
  );
};

export default SearchInput;
