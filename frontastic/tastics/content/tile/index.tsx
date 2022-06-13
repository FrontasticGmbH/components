import React from 'react';
import Tile from 'components/commercetools-ui/content/tile';

const TileTastic = ({ data }) => {
  return (
    <Tile
      image={data.image}
      title={data.title}
      subtitle={data.subtitle}
      ctaLabel={data.ctaLabel}
      ctaReference={data.ctaReference}
    />
  );
};

export default TileTastic;
