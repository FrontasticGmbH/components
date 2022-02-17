import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const StarWarsCharacterSearchTastic = ({ data }) => {
  const { totalCount, pageInfo, people } = data.data.dataSource;
  const router = useRouter();

  const { slug, ...queryWithoutSlug } = router.query;

  return (
    <div>
      <h1 className="text-2xl mt-8 font-sans">Star Wars Characters</h1>
      <p className="mt-2">{totalCount} total characters found</p>
      {people.map((character) => (
        <div key={character.id}>
          <h2 className="text-lg mt-6 font-sans">{character.name}</h2>
          {character.species !== null && <p className="mt-2">Species: {character.species.name}</p>}
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

export default StarWarsCharacterSearchTastic;
