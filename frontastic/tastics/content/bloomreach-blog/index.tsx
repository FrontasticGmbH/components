import React from 'react';
import Blog from "../../../../components/commercetools-ui/content/blog";
import { BloomreachLoader } from "../../../lib/image";

export interface Bloomreach {
  uid: string;
  summary: string;
  title: string;
  banner: string;
}

const BloomreachBlogTastic = ({ data }) => {

  console.log(data)
  const blog = data?.data?.dataSource as Bloomreach;
  console.log('bloomreach');
  if (!blog) return <></>;

  return <Blog {...blog} imageLoader={BloomreachLoader} />;
};

export default BloomreachBlogTastic;
