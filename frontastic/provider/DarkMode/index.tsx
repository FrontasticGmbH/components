import React, { useCallback, useState, createContext, useContext, useEffect } from 'react';
import { PREF_DARK_MODE } from 'helpers/constants/localStorage';

const initialState = {
  theme: 'default',
  enabled: false,
  toggle: () => {},
  applyTheme: (newTheme: string) => {},
  mode: 'light',
};

export const DarkModeContext = createContext(initialState);

const DarkModeProvider: React.FC = ({ children }) => {
  //Is dark mode active?
  const [enabled, setEnabled] = useState(false);

  //current active mode
  const mode = enabled ? 'dark' : 'light';

  //Toggle dark mode
  const toggle = useCallback(() => {
    setEnabled(!enabled);
    window.localStorage.setItem(PREF_DARK_MODE, !enabled ? '1' : '0');
  }, [enabled]);

  //Active theme
  const [theme, setTheme] = useState('default');

  //Utility for apply themes
  const applyTheme = useCallback((newTheme: string) => {
    if (newTheme) {
      setTheme(newTheme);
    }
  }, []);

  //Initial value for darkmode
  useEffect(() => {
    setEnabled(window.localStorage.getItem(PREF_DARK_MODE) === '1');
  }, []);

  //Wrapper classname
  const className = `${enabled ? 'dark bg-primary-400' : 'light bg-white'} transition duration-300 ease-out`;

  const value = {
    theme,
    enabled,
    toggle,
    applyTheme,
    mode,
  };

  return (
    <DarkModeContext.Provider value={value}>
      <div className={theme}>
        <div className={className}>{children}</div>
      </div>
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
