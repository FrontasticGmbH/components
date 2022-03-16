import React from 'react';

export type BreadcrumbProps = {
  Separator?: React.ReactNode;
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ children, Separator }) => {
  return (
    <div className="flex flex-wrap items-center justify-items-start gap-2">
      {React.Children.map(children, (Child, index) => {
        if (index < React.Children.count(children) - 1) {
          return (
            <>
              <b>{Child}</b>
              <span>{Separator}</span>
            </>
          );
        }
        return <span className="text-gray-400">{Child}</span>;
      })}
    </div>
  );
};

export default Breadcrumb;
