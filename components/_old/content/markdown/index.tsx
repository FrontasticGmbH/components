import React from 'react';
import ReactMarkdown from 'react-markdown';

import styles from './markdown.module.css';

type Props = {
  data: any;
};

export const Markdown: React.FC<Props> = ({ data }: Props) => {
  const content: string = Object.values(data.text)[0] as string;

  const paddingClass = {
    small: 'p-2',
    middle: 'p-8',
    large: 'p-12',
    undefined: 'p-4',
  };

  return (
    <div className={`${styles.markdownText} text-${data.align || 'left'} ${paddingClass[data.padding]}`}>
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};
