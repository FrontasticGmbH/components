import React from 'react';

export interface Props {
  content?: string;
}

const Showcase: React.FC<Props> = ({ content }) => {
  return <div className="p-4 w-full text-slate-600 border border-slate-300 border-solid md:p-8">{content}</div>;
};

export default Showcase;
