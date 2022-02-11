import React from 'react';
import classnames from 'classnames';
import Scrollbars from 'react-custom-scrollbars';

import TopCategories from './TopCategories';
import Navigation from './Navigation';

const Modal = ({
  isOpen,
  level,
  topCategories,
  currentTopCategory,
  handleSelectTopCategory,
  handleSelectNavItem,
  handleGoBack,
  navPath,
  onClose,
}) => {
  const currentTree = topCategories[currentTopCategory].tree;

  return (
    <div
      className={classnames({
        'fixed inset-0 bg-background-primary overflow-hidden z-20': true,
        'lg:hidden ease-out-expo duration-20': true,
        'translate-right': isOpen,
        'translate-left': !isOpen,
      })}
    >
      <div>
        <TopCategories
          isOpen={isOpen}
          level={level}
          topCategories={topCategories}
          currentTopCategory={currentTopCategory}
          handleSelectTopCategory={handleSelectTopCategory}
          handleGoBack={handleGoBack}
          navPath={navPath}
          onClose={onClose}
        />

        <Scrollbars
          style={{ height: 'calc(100vh - 18.5rem)' }}
          autoHide
          // hiding horizontal scrollbar
          hideTracksWhenNotNeeded
          renderView={(p) => {
            return <div {...p} style={{ ...p.style, overflowX: 'hidden' }} />;
          }}
        >
          <div className="w-full ease-out-expo duration-20" style={{ transform: `translateX(${level * -100}%)` }}>
            {currentTree && (
              <Navigation
                items={currentTree.children}
                navPath={navPath}
                onSelectItem={handleSelectNavItem}
                isActive={isOpen}
              />
            )}
          </div>
        </Scrollbars>
      </div>
    </div>
  );
};

export default Modal;
