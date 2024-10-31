import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import InitialStackNavigator from './InitialStackNavigator';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="InitialNavigator" component={InitialStackNavigator} />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
    </Stack.Navigator>
  );
};

export default MainStackNavigator;
