import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const StarWarsCharacterFilter = ({ data }) => {
  const { totalCount, pageInfo, people } = data.data.dataSource;
  const router = useRouter();

  const { slug, ...queryWithoutSlug } = router.query;

  return (
    <div>
      <h1 className="mt-8 font-sans text-2xl">Star Wars Characters</h1>
      <p className="mt-2">{totalCount} total characters found</p>
      {people.map((character) => (
        <div key={character.id}>
          <h2 className="mt-6 font-sans text-lg">{character.name}</h2>
          {character.species !== null && <p className="mt-2">Species: {character.species.name}</p>}
          {character.hairColor !== null && <p className="mt-2">Hair Color: {character.hairColor}</p>}
          {character.eyeColor !== null && <p className="mt-2">Eye Color: {character.eyeColor}</p>}
          {character.gender !== null && <p className="mt-2">Gender: {character.gender}</p>}
        </div>
      ))}
      {pageInfo.hasNextPage && (
        <div className="mt-6">
          <Link
            href={{
              pathname: router.asPath.split('?')[0],
              query: {
                ...queryWithoutSlug,
                cursor: pageInfo.endCursor,
              },
            }}
          >
            <a className="bg-primary-500 px-4 py-2 text-white">Next Page</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default StarWarsCharacterFilter;
