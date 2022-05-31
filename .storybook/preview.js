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
};

export const decorators = [
  (Story) => (
    <DarkModeProvider>
      <Story />
    </DarkModeProvider>
  ),
];
