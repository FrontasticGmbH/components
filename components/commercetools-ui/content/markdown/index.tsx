import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Log } from 'helpers/errorLogger';

interface Props {
  text: string;
  className?: string;
}

const Markdown: React.FC<Props> = ({ text, className }) => {
  if (typeof text !== 'string') {
    Log.error(`Markdown: Invalid text property. Expected string but received ${typeof text}`);
    return <></>;
  }

  return (
    <div className={`prose ${className} markdown dark:text-light-100`}>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
};

export default Markdown;
