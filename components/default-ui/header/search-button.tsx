import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Transition } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/outline';
import SearchInput from './search-input';

const SearchButton: React.FC = () => {
  //next/router
  const router = useRouter();

  //show search input
  const [searching, setSearching] = useState(false);

  const startSearch = () => setSearching(true);

  const endSearch = () => setSearching(false);

  //input value
  const [searchValue, setSearchValue] = useState('');

  //handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  //handle submission
  const handleSubmit = () => {
    setSearching(false);
    router.push({ pathname: '/search', query: { query: searchValue } });
  };

  return (
    <div className="relative flex">
      <Transition
        show={!searching}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <div className="cursor-pointer dark:text-light-100" onClick={startSearch}>
          <span className="sr-only">Search</span>
          <SearchIcon
            className="h-6 w-6 text-primary-400 hover:text-primary-500 dark:text-light-100"
            aria-hidden="true"
          />
        </div>
      </Transition>
      <Transition
        show={searching}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <SearchInput onBlur={endSearch} value={searchValue} onChange={handleChange} onSubmit={handleSubmit} />
      </Transition>
    </div>
  );
};

export default SearchButton;
