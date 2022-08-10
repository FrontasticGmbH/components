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
    hasLivePage: boolean;
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

export function isLiveReference(reference: LinkReference | PageFolderReference) {
  return reference.type !== 'page-folder' || (reference.type === 'page-folder' && reference.pageFolder?.hasLivePage);
}

interface Props {
  className?: string;
  target: Reference;
  ariaLabel?: string;
}

export const ReferenceLink: React.FC<Props> = ({ target, className, ariaLabel, children }) => {
  //no valid target for next/link
  if (!target)
    return (
      <NextLink href="#">
        <a aria-label={ariaLabel} className={className}>
          {children}
        </a>
      </NextLink>
    );

  return (
    <NextLink href={getReferenceTarget(target)}>
      <a aria-label={ariaLabel} className={className} {...getTargetProps(target)}>
        {children}
      </a>
    </NextLink>
  );
};
