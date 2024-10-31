import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '@views/Home/Home';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="Home" component={Home} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
