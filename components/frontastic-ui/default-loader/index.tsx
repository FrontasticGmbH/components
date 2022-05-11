import React from 'react';

const DefaultLoader: React.FC = () => {
  return (
    <div className="bg-transparent-50 absolute inset-0 grid">
      <div className="loading-full-screen flex justify-center self-center" />
    </div>
  );
};

export default DefaultLoader;
