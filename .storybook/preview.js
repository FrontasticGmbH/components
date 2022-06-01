import { RouterContext } from "next/dist/shared/lib/router-context";
import '../styles/app.css';
import DarkModeProvider from '../frontastic/provider/DarkMode';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
    locales: ['en_GB', 'de_GB']
  },
};

export const decorators = [
  (Story) => (
    <DarkModeProvider>
      <Story />
    </DarkModeProvider>
  ),
];
