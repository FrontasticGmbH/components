import React, { useRef } from 'react';
import Link from 'next/link';
import classnames from 'classnames';

import { ReactComponent as MenuClosed } from 'public/icons/tailwind-icons/icon-menu.svg';
import { ReactComponent as MenuBack } from 'public/icons/tailwind-icons/icon-menu.svg';

const TopCategories = ({
  topCategories,
  level,
  currentTopCategory,
  handleSelectTopCategory,
  handleGoBack,
  navPath,
  onClose,
}) => {
  const ref = useRef(null);
  // const backgroundImageUrl = useBackgroundImageUrl(ref, topCategories[currentTopCategory].mobileNavBackgroundImage)
  const backgroundImageUrl = 'TOFIX';

  return (
    <div
      className="h-fix-120px grid grid-rows-2 grid-cols-2"
      ref={ref}
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImageUrl})`,
      }}
    >
      <MenuBack
        className={classnames({
          'cursor-pointer m-5': true,
          'opacity-0': level === 0,
        })}
        onClick={() => {
          level > 0 && handleGoBack();
        }}
      />
      <MenuClosed className="cursor-pointer justify-self-end text-2xl m-3" onClick={onClose} />

      <div className="col-start-1 col-end-3 grid grid-cols-3 self-end h-10 justify-between text-lg text-center text-white">
        {level === 0 ? (
          <>
            {topCategories &&
              topCategories.map((item, i) => {
                if (!item.tree || !item.tree.depth) {
                  return (
                    <Link
                      onClick={() => {
                        onClose();
                      }}
                      key={item.reference.target}
                      href="#"
                      className={classnames({
                        'font-bold hover:text-neutral-400 cursor-pointer': true,
                        'border-b-4 border-neutral-900': i === currentTopCategory,
                      })}
                    >
                      <a>{item.name}</a>
                    </Link>
                  );
                }

                return (
                  <div
                    key={item.tree.nodeId}
                    onClick={() => {
                      return handleSelectTopCategory(i);
                    }}
                    className={classnames({
                      'font-bold hover:text-neutral-400 cursor-pointer': true,
                      'border-b-4 border-neutral-900': i === currentTopCategory,
                    })}
                  >
                    {item.name}
                  </div>
                );
              })}
          </>
        ) : (
          <span className="grid col-start-1 col-end-4 text-center font-bold text-white">
            {navPath[navPath.length - 1] && navPath[navPath.length - 1].name}
          </span>
        )}
      </div>
    </div>
  );
};

export default TopCategories;
