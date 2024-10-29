import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Account from '@views/Account/Account';

const AccountStack = createNativeStackNavigator();

const AccountStackScreen = () => {
  return (
    <AccountStack.Navigator screenOptions={{headerShown: false}}>
      <AccountStack.Screen name="Account" component={Account} />
    </AccountStack.Navigator>
  );
};

export default AccountStackScreen;
