import React from 'react';
import Blog from 'components/commercetools-ui/content/blog';
import { ContentstackLoader } from 'frontastic/lib/image';

export interface Contentstack {
  uid: string;
  summary: string;
  title: string;
  banner: string;
}

const ContentstackBlogTastic = ({ data }) => {
  const blog = data?.data?.dataSource as Contentstack;

  if (!blog) return <></>;

  return <Blog {...blog} imageLoader={ContentstackLoader} />;
};

export default ContentstackBlogTastic;
