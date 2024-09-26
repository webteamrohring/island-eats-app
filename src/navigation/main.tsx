import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {
  DashboardPage,
  OrderPage,
  OrdersPage,
  ChatMessagesPage,
  DeliveryDirectionsPage,
  OrderSubstitutionCreation,
} from '@pages';

import {MainStackParamList} from '@navigation/Interfaces';
import {OrderStatus} from '@interfaces';

export default () => {
  const Stack = createNativeStackNavigator<MainStackParamList>();

  return (
    <Stack.Navigator
      // initialRouteName="ChatMessages"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Dashboard" component={DashboardPage} />
    </Stack.Navigator>
  );
};
