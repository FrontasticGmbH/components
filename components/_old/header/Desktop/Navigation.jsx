import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import classnames from 'classnames';

const DesktopMenu = ({ currentTree, handleClick, onHoverItem }) => {
  const { locale } = useRouter();
  return (
    <div className="py-4">
      {currentTree &&
        currentTree.children &&
        currentTree.children.map((item) => {
          return (
            <Link key={item.pageFolderId} href={item._urls[locale]}>
              <a
                className={classnames({
                  'mr-8 border-b-2px border-transparent font-bold text-neutral-900 text-sm': true,
                  'hover:border-b-2px hover:border-neutral-900': true,
                  'text-primary-500': item.name === 'SALE',
                })}
                onClick={(e) => {
                  return handleClick(e, item);
                }}
                onMouseEnter={() => {
                  return onHoverItem(item);
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

export default DesktopMenu;
