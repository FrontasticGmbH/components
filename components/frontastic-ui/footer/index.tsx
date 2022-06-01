import React from 'react';
import LanguageSwitcher from 'components/frontastic-ui/language-switcher';
import Typography from 'components/frontastic-ui/typography';
import Column, { Link, Column as FooterColumn } from './column';
import { renderIcon } from './renderIcon';
export interface Props {
  columns: FooterColumn[];
  copyright?: string;
  copyrightLinks?: Link[];
}

const Footer: React.FC<Props> = ({ columns, copyright, copyrightLinks }) => {
  return (
    <footer aria-labelledby="footer-heading">
      <div className="mx-auto w-full bg-gray-100 px-6 dark:bg-primary-400 lg:px-8">
        <div className="mx-auto max-w-5xl py-10 px-2 xl:grid xl:grid-cols-2 xl:gap-8">
          <div
            className={`grid grid-cols-1 gap-10 md:gap-4 md:grid-cols-${(columns.length + 1).toString()} xl:col-span-2`}
          >
            {columns?.map((column, index) => (
              <div key={index} className="md:flex md:justify-center">
                <Column column={column} />
              </div>
            ))}
            <div className="justify-start md:justify-center">
              <div className="flex space-x-2 md:justify-start">
                {renderIcon('speaker')}
                <h3 className="text-sm font-medium text-gray-800 dark:text-light-100">
                  <Typography>Language</Typography>
                </h3>
              </div>
              <LanguageSwitcher className="p-4 md:px-8" />
            </div>
          </div>
        </div>
      </div>
      {copyright && (
        <div className="flex place-content-between border-t border-gray-200 bg-primary-400 p-4 sm:px-10">
          <p className="text-xs text-white sm:text-sm">© {copyright}</p>
          <ul className="flex">
            {copyrightLinks?.map((item, i) => (
              <li key={i} className="text-xs">
                <p className="px-2 text-gray-300 hover:text-white sm:text-sm">
                  <Typography>{item.name}</Typography>
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </footer>
  );
};

export default Footer;
