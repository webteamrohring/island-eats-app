import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from '../views/SplashScreen';

const Stack = createNativeStackNavigator();

const InitialStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
    </Stack.Navigator>
  );
};

export default InitialStackNavigator;
