import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {uiColors} from '@utils/colors';
import OrderDetail from '@views/Orders/OrdersStack/OrderDetail';
import Orders from '@views/Orders/Orders';

const OrdersStack = createNativeStackNavigator();

const OrdersStackScreen = () => {
  return (
    <OrdersStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: uiColors.black.dark},
      }}>
      <OrdersStack.Screen name="Orders" component={Orders} />
      <OrdersStack.Screen name="OrderDetail" component={OrderDetail} />
    </OrdersStack.Navigator>
  );
};

export default OrdersStackScreen;
