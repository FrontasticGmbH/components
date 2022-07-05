import React from 'react';
import { markdown } from 'markdown';
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
    <>
      <style>
        {`
        .markdown > * {
          margin: revert;
          padding: revert;
          font-size: revert;
          font-weight: revert;
        }
      `}
      </style>

      <div className="markdown" dangerouslySetInnerHTML={{ __html: markdown.toHTML(text) }}></div>
    </>
  );
};

export default Markdown;
