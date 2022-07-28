import React from 'react';

const Laddercrumb: React.FC = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-items-start">
      {React.Children.map(children, (Child, index) => {
        if (index == React.Children.count(children) - 1) return <b className="text-3xl">{Child}</b>;
        return <span className="text-gray-400">{Child}</span>;
      })}
    </div>
  );
};

export default Laddercrumb;
