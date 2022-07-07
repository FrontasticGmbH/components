import NewsCard from 'components/commercetools-ui/news-card';
import React from 'react';

const NewsCardTastic = ({ data }) => {
  if (!data?.data?.dataSource) return <></>;

  return <NewsCard {...data.data.dataSource.attributes} />;
};

export default NewsCardTastic;
