import * as React from 'react';
import * as CSS from 'csstype';

// function isNumber(value: string | number): boolean {
//   return value != null && value !== "" && !isNaN(Number(value.toString()));
// }

export function Grid({
  children,
  wrapperClassName,
  gridClassName,
}: {
  children: React.ReactNode;
  gridClassName?: string;
  wrapperClassName?: string;
}) {
  const wrapperCss: CSS.Properties = {};
  const gridCss: CSS.Properties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
    columnGap: '20px',
    margin: '0 10px',
  };
  return (
    <div className={`lg:px-auto px-4 sm:px-8 ${wrapperClassName}`} style={wrapperCss}>
      <div className={gridClassName} style={gridCss}>
        {children}
      </div>
    </div>
  );
}
