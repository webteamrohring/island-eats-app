import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Orders from '@views/Orders/Orders';
import OrderDetail from '@views/Orders/OrdersStack/OrderDetail';

const OrdersStack = createNativeStackNavigator();

const OrdersStackScreen = () => {
  return (
    <OrdersStack.Navigator screenOptions={{headerShown: false}}>
      <OrdersStack.Screen name="Orders" component={Orders} />
      <OrdersStack.Screen name="OrderDetail" component={OrderDetail} />
    </OrdersStack.Navigator>
  );
};

export default OrdersStackScreen;
