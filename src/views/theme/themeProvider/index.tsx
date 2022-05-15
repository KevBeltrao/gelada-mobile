import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components/native';

import colors from '../assets/colors';
import fonts from '../assets/fonts';
import { SafeScreen } from './styles';

interface ProviderProps {
  children: ReactNode;
}

const theme = {
  colors: colors,
  fonts: fonts,
};

function AppThemeProvider({ children }: ProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <SafeScreen>{children}</SafeScreen>
    </ThemeProvider>
  );
}

export default AppThemeProvider;
