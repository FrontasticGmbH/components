import React from 'react';
import Blog from 'components/commercetools-ui/content/blog';
import { Contentstack } from '../contentstack-blog';
import { ContentstackLoader } from 'frontastic/lib/image';

const ContentstackBlogListTastic = ({ data }) => {
  const blogs = (data?.data?.dataSource ?? []) as Contentstack[];

  return (
    <div className="flex flex-wrap items-center gap-4">
      {blogs.map((blog) => (
        <Blog key={blog.uid} {...blog} imageLoader={ContentstackLoader} />
      ))}
    </div>
  );
};

export default ContentstackBlogListTastic;
