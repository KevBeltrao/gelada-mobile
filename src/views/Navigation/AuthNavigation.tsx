import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import NotStartedMatch from '../Pages/NotStartedMatch/NotStartedMatch';
import MatchDetail from '../Pages/MatchDetail';
import MatchList from '../Pages/MatchList';

const AuthNavigation = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="MatchList"
      >
        <Stack.Screen name="MatchList" component={MatchList} />
        <Stack.Screen name="NotStartedMatch" component={NotStartedMatch} />
        <Stack.Screen name="MatchDetail" component={MatchDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigation;
