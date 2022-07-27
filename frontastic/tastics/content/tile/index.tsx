import React from 'react';
import Tile from 'components/default-ui/content/tile';

const TileTastic = ({ data }) => {
  return (
    <Tile
      image={data.image}
      title={data.title}
      titleColor={data.titleColor}
      subtitle={data.subtitle}
      subtitleColor={data.subtitleColor}
      ctaLabel={data.ctaLabel}
      ctaReference={data.ctaReference}
      titleFont={data.titleFont}
      subtitleFont={data.subtitleFont}
    />
  );
};

export default TileTastic;
