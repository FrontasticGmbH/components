import React from 'react';

interface LinkReference {
  type: 'link';
  link: string;
  openInNewWindow: boolean;
}

interface PageFolderReference {
  type: 'page-folder';
  pageFolder: {
    pageFolderId: string;
    name: string;
    _urls: {
      [locale: string]: string;
    };
    _url: string;
  };
  openInNewWindow: boolean;
}

export type Reference = LinkReference | PageFolderReference;

const getReferenceTarget = (target: Reference): string => {
  switch (target.type) {
    case 'link':
      return target.link;
    case 'page-folder':
      return target.pageFolder._url;
  }
};

function getTargetProps(target: LinkReference | PageFolderReference) {
  if (target.openInNewWindow) {
    return {
      target: '_blank',
      rel: 'noopener',
    };
  }

  return {};
}

interface Props {
  className?: string;
  target: Reference;
}

export const ReferenceLink: React.FC<Props> = ({ target, className, children }) => {
  return (
    <a href={getReferenceTarget(target)} className={className} {...getTargetProps(target)}>
      {children}
    </a>
  );
};
