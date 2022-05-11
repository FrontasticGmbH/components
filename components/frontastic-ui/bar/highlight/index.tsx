import React from 'react';

const HighlightBar: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col py-0 mt-5 border-solid divide-y divide-gray-200 divide-solid shadow-[0_-1px_10px_#f7f7f7] lg:flex-row lg:py-5 lg:mt-0 lg:divide-y-0 lg:divide-x lg:shadow-none">
      {children}
    </div>
  );
};

export default HighlightBar;
