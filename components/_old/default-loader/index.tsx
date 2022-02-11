import React from 'react';

export const DefaultLoader: React.FC = () => {
  return (
    <div className="grid absolute inset-0 bg-transparent-50">
      <div className="loading-full-screen flex self-center justify-center" />
    </div>
  );
};
