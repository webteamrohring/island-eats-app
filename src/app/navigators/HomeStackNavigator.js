import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {uiColors} from '@utils/colors';
import Home from '@views/Home/Home';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: uiColors.black.dark},
      }}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
