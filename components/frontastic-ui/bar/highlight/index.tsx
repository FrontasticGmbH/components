import React from 'react';

const HighlightBar: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col lg:flex-row divide-solid divide-gray-200 divide-y lg:divide-x lg:divide-y-0 border-solid py-5 shadow-[0_-1px_10px_#f7f7f7] lg:shadow-none">
      {children}
    </div>
  );
};

export default HighlightBar;
