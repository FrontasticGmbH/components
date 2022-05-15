import React from 'react';
import Spacer, { SpacerProps } from 'components/frontastic-ui/content/spacer';

export type Props = {
  data: SpacerProps;
};

const SpacerTastic: React.FC<Props> = ({ data }) => {
  return <Spacer {...data} />;
};

export default SpacerTastic;
