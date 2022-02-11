import React from 'react';
import classnames from 'classnames';

const IconButton = ({ icon, name, onClick, children, variant = 'text-2xl' }) => {
  return (
    <button
      aria-label={name}
      onClick={onClick}
      className={classnames({
        [variant]: true,
      })}
    >
      {icon && icon}
      {children && <p>{children}</p>}
    </button>
  );
};

export default IconButton;
