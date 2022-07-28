import React from 'react';
import Showcase, { Props as ShowcaseProps } from 'components/commercetools-ui/showcase';

interface Props {
  data: ShowcaseProps;
}

const ShowcaseTastic: React.FC<Props> = ({ data }) => {
  return <Showcase {...data} />;
};

export default ShowcaseTastic;
