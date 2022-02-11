import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const TopCategories = ({ topCategories, currentTopCategory, handleClick, ...rest }) => {
  const { locale } = useRouter();
  console.log('render topCategories', topCategories, rest);
  return (
    <div className="flex items-center">
      {topCategories.map((item, i) => {
        if (!item.tree) {
          return null;
        }

        if (item.tree.children.length === 0) {
          return (
            <Link key={item.reference.target} href={item.reference.pageFolder._urls[locale]}>
              <a
                className={classnames({
                  'mr-4 font-bold text-neutral-600 text-sm py-2': true,
                  'text-neutral-900 border-b-2 border-neutral-900': i === currentTopCategory,
                })}
                onClick={(e) => {
                  handleClick(e, i);
                }}
              >
                {item.name}
              </a>
            </Link>
          );
        }

        return (
          <Link key={i} href={item.reference.pageFolder._urls[locale]}>
            <a
              className={classnames({
                'mr-4 font-bold text-neutral-600 text-sm py-2': true,
                'text-neutral-900 border-b-2 border-neutral-900': i === currentTopCategory,
              })}
              onClick={(e) => {
                handleClick(e, i);
              }}
            >
              {item.name}
            </a>
          </Link>
        );
      })}
    </div>
  );
};

export default TopCategories;
