import React from 'react';
import { StatusBar, Text } from 'react-native';

import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
  useFonts,
} from '@expo-google-fonts/montserrat';

import History from './src/views/Pages/History';

// ============= THIS FILE IS A GITHUB INTEGRATION TO BE USED AS AN EXAMPLE ===========
import GithubUserProvider from './src/application/githubUserProvider';
import AppThemeProvider from './src/views/theme/themeProvider';

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  return fontsLoaded ? (
    <GithubUserProvider>
      <StatusBar barStyle={'light-content'} />
      <AppThemeProvider>
        <History />
      </AppThemeProvider>
    </GithubUserProvider>
  ) : (
    <Text>Carregaando...</Text>
  );
}
