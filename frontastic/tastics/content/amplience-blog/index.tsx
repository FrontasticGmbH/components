import React from 'react';
import Blog, { Props } from 'components/commercetools-ui/content/blog';
import { AmplienceLoader } from 'frontastic/lib/image';

const BlogTastic = ({ data }) => {
  const blog = data?.data?.dataSource as Props;

  if (!blog) return <></>;

  return <Blog {...blog} imageLoader={AmplienceLoader} />;
};

export default BlogTastic;
