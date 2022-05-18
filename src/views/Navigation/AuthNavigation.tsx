import React from 'react';
import NotStartedMatch from '../Pages/NotStartedMatch/NotStartedMatch';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const AuthNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="NotStartedMatch"
      >
        <Stack.Screen name="NotStartedMatch" component={NotStartedMatch} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;
