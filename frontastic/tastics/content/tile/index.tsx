import React from 'react';
import Tile from 'components/content/tile';

const TileTastic = ({ data }) => {
  return (
    <Tile
      image={data.image}
      header={data.header}
      text={data.text}
      ctaLabel={data.ctaLabel}
      ctaReference={data.ctaReference}
    />
  );
};

export default TileTastic;
