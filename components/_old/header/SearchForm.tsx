import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useRouter } from 'next/router';

import Input from 'components/input/index.jsx';

interface Props {
  onCancelSearch(e?: React.MouseEvent<HTMLButtonElement>): void;
  inputClassName: string;
}

export default function SearchForm({ onCancelSearch, inputClassName = '' }: Props) {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleKeyEvent = useCallback((ev: KeyboardEvent) => {
    // ESC Key when focus cancels search (= hides on desktop)
    if (ev.keyCode === 27) {
      onCancelSearch();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyEvent, false);
    return () => {
      document.removeEventListener('keydown', handleKeyEvent, false);
    };
  }, [handleKeyEvent]);

  const handleSearchChange = (ev: React.ChangeEvent<HTMLInputElement>) => setQuery(ev.target.value);

  const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
    const phrase = query.trim();
    ev.preventDefault();
    ev.stopPropagation();

    if (phrase === '') {
      // The search page does currently not support empty phrase, so we redirect to the homepage
      router.push('/');
    } else {
      console.log('FIXME: Search');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        placeholder="Search"
        className={`form-input ${inputClassName}`}
        value={query}
        onChange={handleSearchChange}
        autoFocus
      />
    </form>
  );
}
