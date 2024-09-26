import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {LoginPage} from '@pages';

import {AuthStackParamList} from '@navigation/Interfaces';

export default () => {
  const Stack = createNativeStackNavigator<AuthStackParamList>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginPage} />
    </Stack.Navigator>
  );
};
