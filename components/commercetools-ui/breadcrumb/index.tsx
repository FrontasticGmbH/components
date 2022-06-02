import React from 'react';
import NextLink from 'next/link';
import { HomeIcon } from '@heroicons/react/solid';

export type BreadcrumbProps = {
  Separator?: React.ReactNode;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ children, Separator }) => {
  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div>
            <NextLink href="/">
              <a className="text-gray-400 hover:text-gray-500">
                <HomeIcon className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span className="sr-only">Home</span>
              </a>
            </NextLink>
          </div>
        </li>
        {React.Children.map(children, (Child, index) => {
          if (index < React.Children.count(children) - 1) {
            return (
              <li>
                <b className="font-medium dark:text-light-100">{Child}</b>
                <span className="dark:text-light-100">{Separator}</span>
              </li>
            );
          }
          return (
            <li>
              <span className="font-medium text-gray-400 dark:text-accent-400">{Child}</span>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
