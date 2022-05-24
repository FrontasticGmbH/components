import React from 'react';

const DefaultLoader: React.FC = () => {
  return (
    <div className="absolute inset-0 grid bg-transparent">
      <div className="loading-full-screen flex justify-center self-center" />
    </div>
  );
};

export default DefaultLoader;
