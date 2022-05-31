import React from 'react';
import Tile from 'components/frontastic-ui/content/tile';

const TileTastic = ({ data }) => {
  return (
    <Tile
      image={data.image}
      imageAlt={data.imageAlt}
      title={data.title}
      subtitle={data.subtitle}
      ctaLabel={data.ctaLabel}
      ctaReference={data.ctaReference}
    />
  );
};

export default TileTastic;
