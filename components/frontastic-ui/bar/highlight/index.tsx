import React from 'react';

const HighlightBar: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col divide-y divide-solid divide-gray-200 border-solid py-0 mt-5 lg:mt-0 lg:py-5 shadow-[0_-1px_10px_#f7f7f7] lg:flex-row lg:divide-x lg:divide-y-0 lg:shadow-none">
      {children}
    </div>
  );
};

export default HighlightBar;
