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
    <div className="markdown">
      <style>
        {`
        .markdown h1 {
          font-size: 2em;
        }
        .markdown h2 {
          font-size: 1.5em;
        }
        .markdown h3 {
          font-size: 1.17em;
        }
        .markdown h4 {
          font-size: 1em;
        }
        .markdown h5 {
          font-size: 0.83em;
        }
        .markdown h6 {
          font-size: 0.75em;
        }
      `}
      </style>
      <ReactMarkdown>{text}</ReactMarkdown>
    </div>
  );
};

export default Markdown;
