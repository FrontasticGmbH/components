import React from 'react';
import Blog, { Props } from 'components/commercetools-ui/content/blog';

const BlogTastic = ({ data }) => {
  const blog = data?.data?.dataSource as Props;

  if (!blog) return <></>;

  return <Blog {...blog} />;
};

export default BlogTastic;
