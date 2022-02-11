import * as React from 'react';
import * as CSS from 'csstype';

export function Cell({ size, children }: { size: number | 'viewport'; children: React.ReactNode }) {
  let styles: CSS.Properties;
  if (size === 'viewport') {
    styles = {
      width: '100vw',
      gridColumn: 'span 12 / span 12',
      marginLeft: '50%',
      transform: 'translateX(-50%)',
    };
  } else {
    styles = {
      gridColumn: `span ${size} / span ${size}`,
      //overflow: "hidden"
    };
  }
  return <div style={styles}>{children}</div>;
}
