import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {uiColors} from '@utils/colors';
import Earnings from '@views/Earnings/Earnings';

const EarningsStack = createNativeStackNavigator();

const EarningsStackScreen = () => {
  return (
    <EarningsStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: uiColors.black.dark},
      }}>
      <EarningsStack.Screen name="Earnings" component={Earnings} />
    </EarningsStack.Navigator>
  );
};

export default EarningsStackScreen;
