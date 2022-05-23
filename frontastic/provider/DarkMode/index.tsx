import React, { useCallback, useState, createContext, useContext } from 'react';

const initialState = {
  enabled: false,
  toggle: () => {},
};

export const DarkModeContext = createContext(initialState);

const DarkModeProvider: React.FC = ({ children }) => {
  //Is dark mode active?
  const [enabled, setEnabled] = useState(false);

  //Toggle dark mode
  const toggle = useCallback(() => {
    setEnabled(!enabled);
  }, [enabled]);

  //Wrapper classname
  const className = `${enabled ? 'dark bg-primary-400' : 'light bg-white'} transition duration-300 ease-out`;

  const value = {
    enabled,
    toggle,
  };

  return (
    <DarkModeContext.Provider value={value}>
      <div className={className}>{children}</div>
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};
