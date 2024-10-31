import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {uiColors} from '@utils/colors';
import Message from '@views/Message/Message';

const MessageStack = createNativeStackNavigator();

const MessageStackScreen = () => {
  return (
    <MessageStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: {backgroundColor: uiColors.black.dark},
      }}>
      <MessageStack.Screen name="Message" component={Message} />
    </MessageStack.Navigator>
  );
};

export default MessageStackScreen;
