import React from 'react';
import Newsletter, { NewsletterProps } from 'components/default-ui/newsletter';

interface Props {
  data: NewsletterProps;
}

const NewsletterTastic: React.FC<Props> = ({ data }) => {
  return <Newsletter {...data} />;
};

export default NewsletterTastic;
