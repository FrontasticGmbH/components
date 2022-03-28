import React from 'react';
import NextLink from 'next/link';

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

export const getReferenceTarget = (target: Reference): string => {
  switch (target.type) {
    case 'link':
      return target.link;
    case 'page-folder':
      return target.pageFolder._url;
  }
};

export function getTargetProps(target: LinkReference | PageFolderReference) {
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
  //no valid target for next/link
  if (!target)
    return (
      <a href="#" className={className}>
        {children}
      </a>
    );

  return (
    <NextLink href={getReferenceTarget(target)}>
      <a className={className} {...getTargetProps(target)}>
        {children}
      </a>
    </NextLink>
  );
};
