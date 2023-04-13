import React from 'react';
import Blog, { Props } from 'components/commercetools-ui/content/blog';
import { AmplienceScheme } from 'types/Amplience'
import { AmplienceLoader } from 'frontastic/lib/image';

const BlogListTastic = ({ data }) => {
  const blogs = (data?.data?.dataSource ?? []) as AmplienceScheme<Props>[];

  return (
    <div className="flex flex-wrap items-center gap-4">
      {blogs.map((blog) => (
        <Blog key={blog._meta.deliveryId} {...blog} imageLoader={AmplienceLoader} />
      ))}
    </div>
  );
};

export default BlogListTastic;
