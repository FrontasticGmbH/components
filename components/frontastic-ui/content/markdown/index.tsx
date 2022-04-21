import React from 'react';
import { markdown } from 'markdown';

interface Props {
  text: string;
  className?: string;
}

const Markdown: React.FC<Props> = ({ text, className }) => {
  if (typeof text !== 'string') {
    console.error(`Markdown: Invalid text property. Expected string but received ${typeof text}`);
    return <></>;
  }
  return <span className={className} dangerouslySetInnerHTML={{ __html: markdown.toHTML(text) }} />;
};

export default Markdown;