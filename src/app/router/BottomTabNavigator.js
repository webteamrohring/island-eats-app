import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EarningsStackScreen from './EarningStackNavigator';
import OrdersStackScreen from './OrderStackNavigator';
import MessageStackScreen from './MessageStackNavigator';
import AccountStackScreen from './AccountStackNavigator';
import HomeStackScreen from './HomeStackNavigator';
import uiColors from '@utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: uiColors.black.light,
        },
        tabBarActiveTintColor: uiColors.green.normal,
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'HomeStackGroup') {
            iconName = 'home';
          } else if (route.name === 'OrdersStackGroup') {
            iconName = 'shopping-cart';
          } else if (route.name === 'EarningsStackGroup') {
            iconName = 'dollar';
          } else if (route.name === 'MessageStackGroup') {
            iconName = 'envelope';
          } else if (route.name === 'AccountStackGroup') {
            iconName = 'user';
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}>
      <Tab.Screen
        name="HomeStackGroup"
        component={HomeStackScreen}
        options={{tabBarLabel: 'Home'}}
      />
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
      <Tab.Screen
        name="MessageStackGroup"
        component={MessageStackScreen}
        options={{tabBarLabel: 'Message'}}
      />
      <Tab.Screen
        name="AccountStackGroup"
        component={AccountStackScreen}
        options={{tabBarLabel: 'Account'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
