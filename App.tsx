import React, { useEffect, useState } from 'react';
import { StatusBar } from 'react-native';

import {
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_700Bold,
  useFonts,
} from '@expo-google-fonts/montserrat';

import Home from './src/views/Pages/Home';

import AuthProvider from './src/application/loginProvider/Provider';
import AppThemeProvider from './src/views/theme/themeProvider';

import AuthNavigation from './src/views/Navigation/AuthNavigation';
import UnauthNavigation from './src/views/Navigation/UnauthNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext } from 'react';

export const CheckAuthorizationContext = createContext(() => {});

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_700Bold,
  });

  const [isAuthorized, setIsAuthorized] = useState(false);

  const checkAuthorization = async () => {
    const accessToken = await AsyncStorage.getItem('accessToken');

    if (!isAuthorized && accessToken) {
      setIsAuthorized(true);
    } else {
      setIsAuthorized(false);
    }
  };

  useEffect(() => {
    checkAuthorization();
  }, []);

  return (
    <AuthProvider>
      <StatusBar barStyle={'light-content'} />
      <CheckAuthorizationContext.Provider value={checkAuthorization}>
        <AppThemeProvider>
          {fontsLoaded ? (
            isAuthorized ? (
              <AuthNavigation />
            ) : (
              <UnauthNavigation />
            )
          ) : (
            <Home />
          )}
        </AppThemeProvider>
      </CheckAuthorizationContext.Provider>
    </AuthProvider>
  );
}
