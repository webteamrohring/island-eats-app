import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Earnings from '@views/Earnings/Earnings';

const EarningsStack = createNativeStackNavigator();

const EarningsStackScreen = () => {
  return (
    <EarningsStack.Navigator screenOptions={{headerShown: false}}>
      <EarningsStack.Screen name="Earnings" component={Earnings} />
    </EarningsStack.Navigator>
  );
};

export default EarningsStackScreen;
