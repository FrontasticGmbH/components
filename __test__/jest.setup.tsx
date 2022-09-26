import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import React, { FC, ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';

// Here we can set all providers for themes, stores and other stuff
const AllTheProviders: FC = ({ children }) => {
  return <div>{children}</div>;
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
