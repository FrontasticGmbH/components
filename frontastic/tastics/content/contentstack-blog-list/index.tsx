import React from 'react';
import Blog from 'components/commercetools-ui/content/blog';
import { Contentstack } from '../contentstack-blog'

const ContentstackBlogListTastic = ({ data }) => {
  const blogs = (data?.data?.dataSource ?? []) as Contentstack[];

  return (
    <div className="flex flex-wrap items-center gap-4">
      {blogs.map((blog) => (
        <Blog key={blog.uid} title={blog.title} summary={blog.single_line} banner={''} {...blog} />
      ))}
    </div>
  );
};

export default ContentstackBlogListTastic;
