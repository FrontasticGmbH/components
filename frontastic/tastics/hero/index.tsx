import React from 'react';

import Hero from 'components/commercetools-ui/hero';

// export interface Props {
//   tastic: Tastic;
//   data: TileTasticData;
// }

export default function HeroTastic({ data }) {
  return <Hero {...data} />;
}
