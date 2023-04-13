import React from 'react';
import Blog from 'components/commercetools-ui/content/blog';

export interface Contentstack {
    uid: string;
    single_line: string;
    title: string;
}

const ContentstackBlogTastic = ({ data }) => {
  const blog = data?.data?.dataSource as Contentstack;

  if (!blog) return <></>;

  return <Blog title={blog.title} summary={blog.single_line} banner={'test'} imageLoader={({src}) => src} />;
};

export default ContentstackBlogTastic;
