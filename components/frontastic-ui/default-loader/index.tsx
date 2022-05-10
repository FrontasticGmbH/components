import React from 'react';

const DefaultLoader: React.FC = () => {
  return (
    <div className="grid absolute inset-0 bg-transparent-50">
      <div className="flex justify-center self-center loading-full-screen" />
    </div>
  );
};

export default DefaultLoader;
