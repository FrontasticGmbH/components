import React from 'react';
import PropTypes from 'prop-types';

export default function Badge({ count = 0, children, displayZeroCount = false, onClick }) {
  return (
    <div className="badge-wrapper" onClick={onClick}>
      {children}
      {(displayZeroCount || count !== 0) && <span className="badge-count text-xs mt-2">{count}</span>}
    </div>
  );
}
