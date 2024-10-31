import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from '../views/SplashScreen';
import Login from '@views/Login/Login';
import ForgotPassword from '@views/ForgotPassword/ForgotPassword';

const Stack = createNativeStackNavigator();

const InitialStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
    </Stack.Navigator>
  );
};

export default InitialStackNavigator;
