import React from 'react';
import { markdown } from 'markdown';

interface Props {
  text: string;
  className?: string;
}

const Markdown: React.FC<Props> = ({ text, className }) => {
  return <span className={className} dangerouslySetInnerHTML={{ __html: markdown.toHTML(text) }} />;
};

export default Markdown;
