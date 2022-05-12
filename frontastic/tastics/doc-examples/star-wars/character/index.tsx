import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

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
}

type Props = {
  data: Character[];
};

const StarWarsCharacters: React.FC<Props> = ({ data }) => {
  const [inputText, setIputText] = useState('')
  const [results, setResults] = useState(data)

  const OnSearchCharacter = () => {
    /* fetch(`https://<project_name>-<customer_name>.vercel.app/frontastic/action/star-wars/character?query=${inputText}`)
    .then(response => response.json())
    .then(data => {
      console.log('response data:', data)

      setResults(data.data.allPeople.people)
    }) */
  }

  return (
    <>
      <div className="w-full max-w-xs">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-2/3">
            <input
              id="character"
              type="text"
              placeholder="Character"
              value={inputText}
              onChange={(e) => { setIputText(e.target.value) }}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            </input>
          </div>
          <div className="md:w-1/3">
            <button
              onClick={OnSearchCharacter}
              className="ml-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
              Search
            </button>
          </div>
        </div>
      </div>

      {results.length > 0 && (
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="bg-gray-50 px-4 py-5 grid grid-cols-7 sm:gap-4 sm:px-6">
            <div className="text-sm font-medium text-gray-500">
              Name
            </div>
            <div className="text-sm font-medium text-gray-500">
              Mass
            </div>
            <div className="text-sm font-medium text-gray-500">
              Height
            </div>
            <div className="text-sm font-medium text-gray-500">
              Gender
            </div>
            <div className="text-sm font-medium text-gray-500">
              Eye color
            </div>
            <div className="text-sm font-medium text-gray-500">
              Hair color
            </div>
          </div>

          {results.map((character, i) => (
            <div key={i} className="border-t border-gray-200">
              <div className={classnames('px-4 py-5 grid grid-cols-7 sm:gap-4 sm:px-6', {
                'bg-gray-50': i % 2 === 1
              })}>
                <div className="mt-1 text-sm text-gray-900 sm:mt-0">
                  {character.name}
                </div>

                <div className="mt-1 text-sm text-gray-900 sm:mt-0">
                  {character.mass}
                </div>

                <div className="mt-1 text-sm text-gray-900 sm:mt-0">
                  {character.height}
                </div>

                <div className="mt-1 text-sm text-gray-900 sm:mt-0">
                  {character.gender}
                </div>

                <div className="mt-1 text-sm text-gray-900 sm:mt-0">
                  {character.eyeColor}
                </div>

                <div className="mt-1 text-sm text-gray-900 sm:mt-0">
                  {character.hairColor}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {results.length === 0 && (
        <div>Empty list</div>
      )}
    </>
  )
}

export default StarWarsCharacters;