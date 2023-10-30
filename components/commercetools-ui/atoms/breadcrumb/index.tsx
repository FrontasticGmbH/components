import React from 'react';

export type BreadcrumbProps = {
  Separator?: React.ReactNode;
  className?: string;
  listClassName?: string;
};

const Breadcrumb = ({
  children,
  Separator,
  className = '',
  listClassName,
}: React.PropsWithChildren<BreadcrumbProps>) => {
  return (
    <nav className={`max-w-[100%] overflow-x-auto scrollbar-hide ${className}`} aria-label="Breadcrumb">
      <ol
        role="list"
        className={`flex items-center justify-start gap-x-4 gap-y-22 whitespace-pre px-16 ${listClassName}`}
      >
        {React.Children.map(children, (Child, index) => (
          <>
            <li>
              <button>{Child}</button>
            </li>
            {Separator && <li>{index < React.Children.count(children) - 1 && <span>{Separator}</span>}</li>}
          </>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
