import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import SplashScreen from '../views/SplashScreen';
import Login from '@views/Login/Login';
import ForgotPassword from '@views/ForgotPassword/ForgotPassword';
import LinkSent from '@views/ForgotPassword/LinkSent';
import ResetPassword from '@views/ForgotPassword/ResetPassword';

const Stack = createNativeStackNavigator();

const InitialStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="LinkSent" component={LinkSent} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
};

export default InitialStackNavigator;
