import React from 'react';
import Blog from 'components/commercetools-ui/content/blog';
import { BloomreachLoader } from 'frontastic/lib/image';
import { Bloomreach } from '../bloomreach-blog';

const BloomreachBlogListTastic = ({ data }) => {
  const blogs = (data?.data?.dataSource ?? []) as Bloomreach[];

  return (
    <div className="flex flex-wrap items-center gap-4">
      {blogs.map((blog) => (
        <Blog key={blog.uid} {...blog} imageLoader={BloomreachLoader} />
      ))}
    </div>
  );
};

export default BloomreachBlogListTastic;
