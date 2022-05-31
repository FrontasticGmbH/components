import React, { useState, useEffect } from 'react';
import classnames from 'classnames';
import { fetchApiHub } from 'frontastic/lib/fetch-api-hub';

type Character = {
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  eyeColor: string;
  birthYear: string;
  skinColor?: string;
  gender: string;
  homeworld: string;
  films?: any;
  species?: any;
  vehicles?: any;
  starships?: any;
  created: string;
  edited: string;
  url: string;
};

type Props = {
  data: Character[];
};

const StarWarsCharacterSearch: React.FC<Props> = ({ data }) => {
  const [inputText, setInputText] = useState('');
  const [results, setResults] = useState(data);
  const resultLabels = ['Name', 'Mass', 'Height', 'Gender', 'Eye color', 'Hair color'];

  const handleSearchCharacter = () => {
    fetchApiHub(`/action/star-wars/character?search=${inputText}`).then((data) => {
      setResults(data.data.allPeople.people);
    });
  };

  return (
    <>
      <div className="w-full max-w-xs">
        <div className="mb-6 md:flex md:items-center">
          <div className="md:w-2/3">
            <input
              id="character"
              type="text"
              placeholder="Character"
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
              }}
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
            ></input>
          </div>
          <div className="md:w-1/3">
            <button
              onClick={handleSearchCharacter}
              className="focus:shadow-outline ml-4 rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 focus:outline-none"
              type="button"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {results.length > 0 && (
        <div className="overflow-hidden bg-white shadow sm:rounded-lg">
          <div className="grid grid-cols-7 bg-gray-50 px-4 py-5 sm:gap-4 sm:px-6">
            {resultLabels.map((label, index) => (
              <div key={index} className="text-sm font-medium text-gray-500">
                {label}
              </div>
            ))}
          </div>

          {results.map((character, i) => (
            <div key={i} className="border-t border-gray-200">
              <div
                className={classnames('grid grid-cols-7 px-4 py-5 sm:gap-4 sm:px-6', {
                  'bg-gray-50': i % 2 === 1,
                })}
              >
                <div className="mt-1 text-sm text-gray-900 sm:mt-0">{character.name}</div>

                <div className="mt-1 text-sm text-gray-900 sm:mt-0">{character.mass}</div>

                <div className="mt-1 text-sm text-gray-900 sm:mt-0">{character.height}</div>

                <div className="mt-1 text-sm text-gray-900 sm:mt-0">{character.gender}</div>

                <div className="mt-1 text-sm text-gray-900 sm:mt-0">{character.eyeColor}</div>

                <div className="mt-1 text-sm text-gray-900 sm:mt-0">{character.hairColor}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {results.length === 0 && <div>Empty list</div>}
    </>
  );
};

export default StarWarsCharacterSearch;
