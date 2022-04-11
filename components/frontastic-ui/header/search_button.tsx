import React from 'react';
import { Reference, ReferenceLink } from '../../../helpers/Reference';
import { SearchIcon } from '@heroicons/react/outline';

interface SearchButtonProps {
  searchLink: Reference;
}

const SearchButton: React.FC<SearchButtonProps> = ({ searchLink }) => {
  return (
    <div className="flex space-x-8">
      <div className="flex">
        <ReferenceLink target={searchLink} className="-m-2 p-2 text-[#25304D] hover:text-[#192038]">
          <span className="sr-only">Search</span>
          <SearchIcon className="h-6 w-6" aria-hidden="true" />
        </ReferenceLink>
      </div>
    </div>
  );
};

export default SearchButton;
