import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EarningsStackScreen from './EarningStackNavigator';
import OrdersStackScreen from './OrderStackNavigator';
import Account from '@views/Account/Account';
import Message from '@views/Message/Message';
import Home from '@views/Home/Home';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#141414',
        },
        tabBarActiveTintColor: 'rgba(6, 193, 103, 1)',
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'OrdersStackGroup') {
            iconName = 'shopping-cart';
          } else if (route.name === 'EarningsStackGroup') {
            iconName = 'dollar';
          } else if (route.name === 'Message') {
            iconName = 'envelope';
          } else if (route.name === 'Account') {
            iconName = 'user';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen
        name="OrdersStackGroup"
        component={OrdersStackScreen}
        options={{tabBarLabel: 'Orders'}}
      />
      <Tab.Screen
        name="EarningsStackGroup"
        component={EarningsStackScreen}
        options={{tabBarLabel: 'Earnings'}}
      />
      <Tab.Screen name="Message" component={Message} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
