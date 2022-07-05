import NewsCard from 'components/commercetools-ui/news-card';
import React from 'react';

const NewsCardTastic = ({ data }) => {
  if (!data?.data?.dataSource?.fields) return <></>;

  return <NewsCard {...data.data.dataSource.fields} image={data.data.dataSource.fields.image.fields.file} />;
};

export default NewsCardTastic;
