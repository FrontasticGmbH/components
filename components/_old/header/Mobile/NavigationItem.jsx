import React from 'react';
import Link from 'next/link';
import classnames from 'classnames';

import Navigation from './Navigation';

import { ReactComponent as ArrowRight } from 'public/icons/tailwind-icons/icon-chevron-right.svg';

const NavigationItem = ({ item, level, navPath, onClick }) => {
  const isItemInPath = (item) => {
    return navPath.find((e) => {
      return e.nodeId === item.nodeId;
    });
  };
  const hasSubLevel = (item) => {
    return item.children && item.children.length > 0;
  };

  const handleOpenPage = (e) => {
    if (onClick && item.children && item.children.length > 0) {
      e.preventDefault();
      return onClick(item, level);
    }
  };

  return (
    <li className="flex justify-between border-t border-neutral-300">
      <Link
        node={item}
        onClick={handleOpenPage}
        className={classnames({
          'text-neutral-900 hover:text-neutral-600 pl-px py-5': true,
          'font-bold': level === 0,
          'text-primary-500': item.name === 'SALE',
        })}
      >
        <a>{item.name}</a>
      </Link>

      {hasSubLevel(item) && (
        <>
          <ArrowRight
            className="self-center cursor-pointer text-l"
            onClick={() => {
              return onClick(item, level);
            }}
          />
          <Navigation
            items={item.children}
            navPath={navPath}
            level={level + 1}
            onSelectItem={onClick}
            isActive={!!isItemInPath(item)}
          />
        </>
      )}
    </li>
  );
};

export default NavigationItem;
