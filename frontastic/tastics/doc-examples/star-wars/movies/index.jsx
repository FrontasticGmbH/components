import React from 'react';

const StarWarsOpeningCrawl = ({ data }) => {
  let openingCrawl = data.data?.film?.openingCrawl
    ? data.data?.film?.openingCrawl
    : data.movieData?.dataSource?.data?.film?.openingCrawl;
  return (
    <div>
      <marquee direction="up" style={{ whiteSpace: 'pre-wrap' }}>
        {openingCrawl}
      </marquee>
    </div>
  );
};

export default StarWarsOpeningCrawl;
