import React, { createContext, useContext, useState, useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createAppTheme } from './theme';

const ColorModeContext = createContext({ toggleColorMode: () => {}, mode: 'dark' });

export const useColorMode = () => useContext(ColorModeContext);

export function AppThemeProvider({ children }) {
  const [mode, setMode] = useState(
    () => localStorage.getItem('pgPortfolio-colorMode') || 'dark'
  );

  const toggleColorMode = () => {
    setMode((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      localStorage.setItem('pgPortfolio-colorMode', next);
      return next;
    });
  };

  const theme = useMemo(() => createAppTheme(mode), [mode]);

  return (
    <ColorModeContext.Provider value={{ toggleColorMode, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
