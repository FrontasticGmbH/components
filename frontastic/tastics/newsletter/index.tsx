import React from 'react';
import Newsletter, { Props as NewsletterProps } from 'components/frontastic-ui/newsletter';

interface Props {
  data: NewsletterProps;
}

const NewsletterTastic: React.FC<Props> = ({ data }) => {
  return <Newsletter {...data} />;
};

export default NewsletterTastic;
