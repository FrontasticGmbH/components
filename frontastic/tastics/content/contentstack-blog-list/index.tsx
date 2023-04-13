import React from 'react';
import Blog, { Props } from 'components/commercetools-ui/content/contentstack-blog-list';

const ContentstackBlogListTastic = ({ data }) => {
  const blogs = (data?.data?.dataSource ?? []) as Props[];

  return (
    <div className="flex flex-wrap items-center gap-4">
      {blogs.map((blog) => (
        <Blog key={blog.uid} {...blog} />
      ))}
    </div>
  );
};

export default ContentstackBlogListTastic;
