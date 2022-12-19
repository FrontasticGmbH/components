import React from 'react';

const Blog = ({ data }) => {
  const title = data.data?.dataSource?.name;

  return <div>Blog's title is "{title}"</div>;
};

export default Blog;
