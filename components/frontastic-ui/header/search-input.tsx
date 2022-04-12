import React, { useEffect, useRef } from 'react';

export interface Props extends React.ComponentProps<'input'> {
  onSubmit?: () => void;
}

const SearchInput: React.FC<Props> = ({ onSubmit, ...props }) => {
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
      className="fixed top-[65px] left-0 z-40 w-full bg-white p-5 shadow-md md:absolute md:left-[unset] md:top-1/2 md:right-0 md:w-[300px] md:-translate-y-1/2 md:p-0 md:shadow-none"
      onSubmit={handleSubmit}
    >
      <label htmlFor="email" className="sr-only">
        Search
      </label>
      <input
        type="text"
        name="search"
        id="search"
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-pink-400 focus:ring-pink-400 sm:text-sm"
        placeholder="you@example.com"
        {...props}
        ref={ref}
      />
    </form>
  );
};

export default SearchInput;
