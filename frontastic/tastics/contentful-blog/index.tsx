import React from 'react';

const ContentfulBlogTastic = ({ data }) => {
  const title = data.data?.dataSource?.fields?.title;

  return <div>Blog's title is "{title}"</div>;
};

export default ContentfulBlogTastic;
