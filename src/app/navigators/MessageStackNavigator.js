import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Message from '@views/Message/Message';

const MessageStack = createNativeStackNavigator();

const MessageStackScreen = () => {
  return (
    <MessageStack.Navigator screenOptions={{headerShown: false}}>
      <MessageStack.Screen name="Message" component={Message} />
    </MessageStack.Navigator>
  );
};

export default MessageStackScreen;
