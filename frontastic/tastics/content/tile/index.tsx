import React from 'react';
import Tile from 'components/frontastic-ui/content/tile';

const TileTastic = ({ data }) => {
  return (
    <Tile
      image={data.image}
      subtitle={data.subtitle}
      header={data.header}
      text={data.text}
      ctaLabel={data.ctaLabel}
      ctaReference={data.ctaReference}
      headerColor={data.headerColor}
      textColor={data.textColor}
    />
  );
};

export default TileTastic;
