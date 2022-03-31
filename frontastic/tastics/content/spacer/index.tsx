import Spacer, { SpacerProps } from 'components/frontastic-ui/content/spacer';
import React from 'react';

export type Props = {
  data: SpacerProps;
};

const SpacerTastic: React.FC<Props> = ({ data }) => {
  return <Spacer {...data} />;
};

export default SpacerTastic;
