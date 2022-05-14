import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components/native';

import colors from './colors';
import icons from './icons';

interface ProviderProps {
  children: ReactNode;
}

const theme = {
  icons: icons,
  colors: colors,
};

function AppThemeProvider({ children }: ProviderProps) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default AppThemeProvider;
