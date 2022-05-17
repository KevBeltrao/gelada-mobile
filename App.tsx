import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
  useFonts,
} from '@expo-google-fonts/montserrat';

import Home from './src/views/Pages/Home';
import Login from './src/views/Pages/Login';

import AuthProvider from './src/application/loginProvider/Provider';
import AppThemeProvider from './src/views/theme/themeProvider';

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar barStyle={'light-content'} />
        {fontsLoaded ? (
          <AppThemeProvider>
            <Login />
          </AppThemeProvider>
        ) : (
          <Home />
        )}
      </AuthProvider>
    </NavigationContainer>
  );
}
