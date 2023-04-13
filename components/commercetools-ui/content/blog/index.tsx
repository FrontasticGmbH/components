import React from 'react';
import { AmplienceScheme } from 'types/Amplience';
import Image from './Image';

export interface Props {
  title: string;
  summary: string;
  banner: string;
}

const Blog: React.FC<Props> = ({ title, summary, banner }) => {
  return (
    <div className="w-[280px]">
      <h4 className="py-4 pr-8 text-lg font-bold dark:text-white">{title}</h4>
      <div className="relative h-[160px] w-[280px]">
        <Image src={banner} objectFit="cover" layout="fill" className="rounded-sm" />
      </div>
      <p className="box-border pt-4 pr-4 dark:text-white">{summary}</p>
    </div>
  );
};

export default Blog;
