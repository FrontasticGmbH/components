import React from 'react';
import classnames from 'classnames';
import NavigationItem from './NavigationItem';

const Navigation = ({ items, onSelectItem, navPath, level = 0, isActive = false }) => {
  return (
    <div
      className={classnames({
        'absolute top-0 w-full bg-background-primary': true,
        'left-full': level !== 0,
        'left-0': level === 0,
        'opacity-0 invisible': !isActive,
        'opacity-100 visible': isActive,
      })}
    >
      <ul className="flex-0-0-05 mx-4">
        {items &&
          items.map((item, i) => {
            return (
              <NavigationItem key={item.nodeId} item={item} navPath={navPath} level={level} onClick={onSelectItem} />
            );
          })}
      </ul>
    </div>
  );
};

export default Navigation;
