import React from 'react';
import NextLink from 'next/link';

interface LinkReference {
  type: 'link';
  link: string;
  target?: string;
  openInNewWindow: boolean;
}

interface PageFolderReference {
  type: 'page-folder';
  pageFolder: {
    pageFolderId: string;
    name: string;
    live: boolean;
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
      return target.link || target.target;
    case 'page-folder':
      return target.pageFolder._url;
    default:
      //Log.warn('Reference ', target, ' is not valid reference')
      return '/';
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
      <NextLink href="#">
        <a className={className}>{children}</a>
      </NextLink>
    );

  return (
    <NextLink href={getReferenceTarget(target)}>
      <a className={className} {...getTargetProps(target)}>
        {children}
      </a>
    </NextLink>
  );
};
